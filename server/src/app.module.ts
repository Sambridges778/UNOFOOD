import { Module } from '@nestjs/common'
import { AppController } from './app.controller.js'

@Module({
  controllers: [AppController],
  providers: [],
})
export class AppModule {}