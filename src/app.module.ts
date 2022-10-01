import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
