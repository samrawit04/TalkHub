import { forwardRef, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { QuestionsModule } from './questions/questions.module';
import { ResponsesModule } from './responses/responses.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Question } from './Entities/questions.entity';
// import { Users } from './Entities/user.entity';
import { AppDataSource } from './data-source';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
 
console.log(__dirname + '/**/*.entity.{ts,js}');

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        return AppDataSource.options; // Use the options from AppDataSource
      },
    }),

    UserModule,
    QuestionsModule, 
    ResponsesModule, AuthModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
