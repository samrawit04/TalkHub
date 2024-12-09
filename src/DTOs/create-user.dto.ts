import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'The name of the user' })
  @IsString()
  @MinLength(3, { message: 'Username must be at least 3 characters long' })
  name: string;

  @ApiProperty({ description: 'Email Address' })
  @IsEmail({}, { message: 'Email must be a valid email address' })
  email: string;

  @ApiProperty({ description: 'Password of the user' })
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;
}
