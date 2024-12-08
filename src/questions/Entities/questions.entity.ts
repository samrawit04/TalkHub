import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
// import { User } from '../../user/Entities/user.entity';
// import { Response } from '../../responses/Entities/responses.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  question: string;
}

//   @ManyToOne(() => User, (user) => user.question, { onDelete: 'CASCADE' })
//   user: User;

//   @OneToMany(() => Response, (response) => response.question)
//   response: Response[];
// }
