import { Question } from 'src/questions/Entities/questions.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
// import { User } from '../../user/Entities/user.entity';
// import { Question } from '../../questions/Entities/questions.entity';

@Entity('responses')
export class Response {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  response: string;

  // @ManyToOne(() => User, (user) => user.response, { onDelete: 'CASCADE' })
  // user: User;

  // @ManyToOne(() => Question, (question) => question.response, { onDelete: 'CASCADE' })
  // question: Question;
}
