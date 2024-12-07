import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { QuestionsModule } from './questions/questions.module';
import { QuestionController } from './question/question.controller';
import { ResponsesModule } from './responses/responses.module';

@Module({
  imports: [UserModule, QuestionsModule, ResponsesModule],
  controllers: [AppController, QuestionController],
  providers: [AppService],
})
export class AppModule {}
