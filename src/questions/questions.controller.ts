import { Controller, Get ,Post,Body} from '@nestjs/common';
import { CreateQuestionDto } from '../DTOs/create-questions.dto';
import { QuestionsService } from './questions.service';
import { Question } from '../Entities/questions.entity';
@Controller('questions')
export class QuestionsController {
constructor(private readonly questionsService: QuestionsService){}
  @Post()
  async create(@Body() CreateQuestionDto:CreateQuestionDto):Promise<Question>{
    return this.questionsService.create(CreateQuestionDto);
  }
}
