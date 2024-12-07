import { IsString, IsNotEmpty } from 'class-validator';

export class CreateResponseDto {
  @IsString()
  @IsNotEmpty({ message: 'Content is required' })
  content: string;

  @IsNotEmpty({ message: 'User ID is required' })
  userId: number;

  @IsNotEmpty({ message: 'Question ID is required' })
  questionId: number;
}
