import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { generateFromEmail } from 'unique-username-generator';
import { Auth, AuthDocument } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name) private authModel: Model<AuthDocument>,
    private jwtService: JwtService,
  ) {}

  generateJwt(payload) {
    return this.jwtService.sign(payload);
  }

  async signIn(user) {
    if (!user) {
      throw new BadRequestException('Unauthenticated');
    }

    const userExists = await this.findUserByEmail(user.email);

    if (!userExists) {
      return this.registerUser(user);
    }

    return this.generateJwt({
      sub: userExists._id,
      name: userExists.name,
    });
  }

  async registerUser(user) {
    try {
      const newUser = new this.authModel({
        provider: user.provider,
        providerId: user.providerId,
        email: user.email,
        name: user.name,
        picture: user.picture,
        username: generateFromEmail(user.email, 5),
      });

      await newUser.save();

      return this.generateJwt({
        sub: newUser._id,
        name: newUser.name,
      });
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException();
    }
  }

  async findUserByEmail(email: string) {
    return this.authModel.findOne({ email }).exec();
  }
}
