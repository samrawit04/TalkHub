import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { QuestionsModule } from './questions/questions.module';
import { QuestionsController } from './questions/questions.controller';
import { ResponsesModule } from './responses/responses.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'samr1493',
      database: 'TalkHub',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // Set to false in production!
    }),
    UserModule, QuestionsModule, ResponsesModule,
  ],
  controllers: [AppController, QuestionsController],
  providers: [AppService],
})
export class AppModule {}
