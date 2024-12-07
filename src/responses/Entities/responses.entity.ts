import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../user/Entities/user.entity';
import { Question } from '../../questions/Entities/questions.entity';

@Entity()
export class Response {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  content: string;

  @ManyToOne(() => User, (user) => user.responses, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Question, (question) => question.responses, { onDelete: 'CASCADE' })
  questions: Question;
}
