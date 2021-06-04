import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './modules/users/entities/user.entity';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [UsersModule,TypeOrmModule.forRoot({
    entities:[User]
  })], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
