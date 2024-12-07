import { Question } from '../..//questions/Entities/questions.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Response } from '../../responses/Entities/responses.entity';
@Entity('users') 
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Question, (question) => question.user)
  question: Question[];

  @OneToMany(() => Response, (response) => response.user)
  response: Response[];
  
  @CreateDateColumn() 
  createdAt: Date;

  @UpdateDateColumn() 
  updatedAt: Date;

  @Column({ default: true })
  isActive: boolean;
}


