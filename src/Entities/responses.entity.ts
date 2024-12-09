import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Users } from './user.entity';
import { Question } from './questions.entity';

@Entity('responses')
export class Response {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  response: string;

  @ManyToOne(() => Users, (user) => user.responses, { onDelete: 'CASCADE' })
  users: Users;

  @ManyToOne(() => Question, (question) => question.responses, { onDelete: 'CASCADE' })
  question: Question;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: true })
  isActive: boolean;
}
