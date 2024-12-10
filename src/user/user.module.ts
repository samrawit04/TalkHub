import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../Entities/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ResponsesModule } from '../responses/responses.module'; // Import ResponsesModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    forwardRef(() => ResponsesModule), // Forward reference to ResponsesModule
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [TypeOrmModule,UserService], // Export TypeOrmModule if needed by other modules
})
export class UserModule {}


