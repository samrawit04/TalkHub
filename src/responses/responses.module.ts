import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Response } from '../Entities/responses.entity';
import { ResponsesController } from './responses.controller';
import { ResponsesService } from './responses.service';
import { UserModule } from '../user/user.module'; // Import UserModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Response]),
    forwardRef(() => UserModule), // Forward reference to UserModule
  ],
  controllers: [ResponsesController],
  providers: [ResponsesService],
  exports: [TypeOrmModule],
})

export class ResponsesModule {}
