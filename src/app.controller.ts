// src/app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get hello world message' }) // Describes the operation
  @ApiResponse({ status: 200, description: 'Returns a hello world message' }) // Describes the response
  getHello(): string {
    return this.appService.getHello();
  }
}
