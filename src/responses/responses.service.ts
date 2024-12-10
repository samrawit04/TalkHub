import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Response } from '../Entities/responses.entity';
import { CreateResponseDto } from '../DTOs/create-response.dto';
import { sendToSlack } from '../utils/slack.utils'; // Slack notification utility

@Injectable()
export class ResponsesService {
  constructor(
    @InjectRepository(Response)
    private readonly responseRepository: Repository<Response>,
  ) {}

  async create(createResponse: CreateResponseDto) {
    try {
      // Create and save the response
      const response = this.responseRepository.create(createResponse);
      const savedResponse = await this.responseRepository.save(response);

      // Slack channel where the message will be sent
      const slackChannel = '#talkhub'; // Replace with your actual Slack channel name

 // Slack message content
 const slackMessage = `
${savedResponse.response}`;

      // Send notification to Slack
      await sendToSlack(slackChannel, slackMessage);

      return savedResponse;
    } catch (error) {
      console.error('Error saving response:', error);
      throw new InternalServerErrorException('Failed to save response');
    }
  }
}
