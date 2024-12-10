import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Users } from './user.entity';
import { Response } from './responses.entity';

@Entity('questions')
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Type: string;

  @Column()
  Date: string;

  @Column('text')
  Question: string;

  @ManyToOne(() => Users, (user) => user.questions, { onDelete: 'CASCADE' })
  user: Users;

  @OneToMany(() => Response, (response) => response.question)
  responses: Response[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: true })
  isActive: boolean;
}
