import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Response } from './Entities/responses.entity';
import { CreateResponseDto } from './DTOs/create-response.dto';

@Injectable()
export class ResponsesService {
  constructor(
    @InjectRepository(Response)
    private readonly responseRepository: Repository<Response>,
  ) {}

  async create(createResponse: CreateResponseDto)  {
    try {
      const response = this.responseRepository.create(createResponse);
      return await this.responseRepository.save(response);
    } catch (error) {
      console.error('Error saving response:', error);
      throw new InternalServerErrorException('Failed to save response');
    }
  }
}
