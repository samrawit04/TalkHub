// src/user/user.service.ts
import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../Entities/user.entity';
import { CreateUserDto } from '../DTOs/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  // Create a new user
  async create(createUserDto: CreateUserDto): Promise<Users> {
    // Hash password before saving to DB
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    const user = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword, // Save the hashed password
    });

    return this.userRepository.save(user); // Save the new user to the database
  }
}
