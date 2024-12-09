import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
export class CreateQuestionDto {
  @ApiProperty({ description: 'Type of the question' })
  @IsString()
  @IsNotEmpty({ message: 'Type is required' })
  Type: string;

  @ApiProperty({ description: 'The question' })
  @IsString()
  @IsNotEmpty({ message: 'Content is required' })
  question: string;
}
