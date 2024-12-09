// src/user/user.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../DTOs/create-user.dto';
import { Users } from '../Entities/user.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'The user has been created' })
  async create(@Body() createUserDto: CreateUserDto): Promise<Users> {
    return this.userService.create(createUserDto);
  }
}
