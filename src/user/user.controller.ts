// src/user/user.controller.ts
import { Controller, Post, Body,Get,Patch,Delete, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../DTOs/create-user.dto';
import { Users } from '../Entities/user.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'The user has been created' })
  async create(@Body() createUserDto: CreateUserDto): Promise<Users> {
    return this.userService.create(createUserDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({summary: 'find all user'})
  @ApiResponse({status:201, description:'List of all users!!'})
  async findalluser(){
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary:'Get user by id'})
  @ApiResponse({status:201, description:'The user is found'})
  async finduserbyid(@Param(':id') id:number){
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({summary:'update user'})
  @ApiResponse({status:201, description:'The user is updated'})
  async update(@Param('id') id: number, @Body() updateUserDto: CreateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({summary:'Delete the user'})
  @ApiResponse({status:201, description:'The user is removed'})
  async remove(@Param('id') id: number) {
    return this.userService.remove(id);
  }
}
