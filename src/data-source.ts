// src/data-source.ts
import { DataSource } from 'typeorm';
import { Users } from './Entities/user.entity';  // Import your entities here
import { Response } from './Entities/responses.entity';
import { Question } from './Entities/questions.entity';

export const AppDataSource = new DataSource({
  type: 'postgres', // Database type
  host: 'localhost',
  port: 5432, // The port you're using
  username: 'postgres', // Database username
  password: 'samr1493', // Database password
  database: 'TalkHub', // Database name
  entities: [Users,Question,Response], // List your entities here
  synchronize: true, // Don't auto-sync in production
  migrations: ['dist/migrations/*.js'], // Path to migrations
});
