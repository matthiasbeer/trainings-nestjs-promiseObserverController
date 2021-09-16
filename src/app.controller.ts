import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs/internal/Observable';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('observable')
  getObs(): Observable<string> {
    return this.appService.getObservable();
  }

  @Get('promise')
  getPro(): Promise<string> {
    return this.appService.getPromise();
  }

  @Get('promiseDelay')
  getProDel(): Promise<string> {
    return this.appService.getPromiseDelay();
  }

  @Get('promiseDelayAwait')
  async getProDelAwait(): Promise<string> {
    return await this.appService.getPromiseDelay();
  }

  @Get('delayAwait')
  // async getDelAwait(): string { an async function must return a promise, not the object itself
  async getDelAwait(): Promise<string> {
    return await this.appService.getPromiseDelay()
  }

  @Get('delayAwaitNonAsyncA')
  getDelAwaitNonA(): Promise<string> {
    return this.appService.getDelayedStringA()
  }

  @Get('delayAwaitNonAsyncB')
  getDelAwaitNonB(): Promise<string> {
    return this.appService.getDelayedStringB()
  }

  @Get('awaitNonAwait')
  getAwaitNonAwait(): Promise<any> {
    return this.appService.getAwaitNonAwait()
  }


}
