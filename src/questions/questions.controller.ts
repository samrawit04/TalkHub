import { Controller, Get } from '@nestjs/common';

@Controller('questions')
export class QuestionsController {
  @Get()
  getAllQuestions() {
    return { message: 'List of all questions' };
  }
}
