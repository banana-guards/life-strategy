import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Auth, AuthDocument } from '../../auth/entities/auth.entity';
import { Strategy, VerifyCallback } from 'passport-google-oauth2';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    @InjectModel(Auth.name)
    private authModel: Model<AuthDocument>,
    private config: ConfigService,
  ) {
    super({
      clientID: config.get<any>('clientID'),
      clientSecret: config.get<any>('clientSecret'),
      callbackURL: config.get<any>('callbackURL'),
      scope: ['profile', 'email'],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { id, name, emails, photos } = profile;

    const authData = {
      provider: 'google',
      providerId: id,
      email: emails[0].value,
      name: `${name.givenName} ${name.familyName}`,
      picture: photos[0].value,
    };

    let user = await this.authModel.findOne({ providerId: id });

    if (!user) {
      user = await this.authModel.create(authData);
    }

    done(null, user);
  }
}
