import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { QuestionsModule } from './questions/questions.module';
import { ResponsesModule } from './responses/responses.module';
import { TypeOrmModule } from '@nestjs/typeorm';
 
console.log(__dirname + '/**/*.entity.{ts,js}');

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'samr1493',
      database: 'TalkHub',
      entities: [__dirname + '/**/*.entity.{ts,js}'], // Adjusted entity path
      synchronize: true, // Set to false in production
      logging: true, // Enables query and error logs
    }),
    
    UserModule, // Import UserModule
    QuestionsModule, 
    ResponsesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
