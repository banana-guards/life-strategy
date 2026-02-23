import { Module } from '@nestjs/common';
import { ReportModule } from './report/report.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import JwtEnv from './config/jwt';
import MongoEnv from './config/mongo';

@Module({
  imports: [
    ReportModule,
    AuthModule,
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGO_URI,
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [JwtEnv, MongoEnv],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
