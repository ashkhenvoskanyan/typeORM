import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User_Type } from './Job_Page_DB/user_type.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'job_page',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
          User_Type],
      synchronize: true,
    
    }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
