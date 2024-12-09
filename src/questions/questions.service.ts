import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Question} from '../Entities/questions.entity'
import { CreateQuestionDto } from '../DTOs/create-questions.dto';
@Injectable()
export class QuestionsService {
constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
){}
// create a question
async create(CreateQuestionDto:CreateQuestionDto):Promise<Question>{
const Question=this.questionRepository.create({
    ...CreateQuestionDto,
});

return this.questionRepository.save(Question);
}
}
