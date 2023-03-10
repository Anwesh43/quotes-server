import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import QuotesService from './quotes.service';
import QuotesController from './quotes.controller';

@Module({
  imports: [],
  controllers: [AppController, QuotesController],
  providers: [AppService, QuotesService],
})
export class AppModule {}
