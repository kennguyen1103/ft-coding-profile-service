import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { Profile } from './profile.entity';
import { ProfileModule } from './profile.module';
import { ProfileService } from './profile.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'queenie.db.elephantsql.com',
      port: 5432,
      username: 'ihhqhyhx',
      password: 'rO4JrTnkGYUNAxDnrHlsCu_kdBHKUNRN',
      database: 'ihhqhyhx',
      entities: [Profile],
      synchronize: true,
    }),
    ProfileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
