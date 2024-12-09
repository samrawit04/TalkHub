import { Controller,Post, Body } from '@nestjs/common';
import { ResponsesService } from './responses.service';
import { CreateResponseDto } from '../DTOs/create-response.dto';
import { Response } from '../Entities/responses.entity';
@Controller('responses')
export class ResponsesController {
constructor(private readonly responseService:ResponsesService){}
@Post()
async create(@Body() createresponse: CreateResponseDto):Promise<Response>{
    return this.responseService.create(createresponse);
}




}
