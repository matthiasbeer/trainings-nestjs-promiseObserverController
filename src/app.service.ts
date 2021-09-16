import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getObservable(): Observable<string> {
    return of('Hello Obs!');
  }

  getPromise(): Promise<string> {
    return new Promise((resolve) => {
      resolve('hallo promise');
    });
  }

  getPromiseDelay(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('hallo promise after 3s');
      }, 3000)
      
    });
  }

  getDelayedStringB = (): Promise<string> => {
    return this.getPromiseDelay();
  }

  getDelayedStringA = async (): Promise<string> => {
    return await this.getPromiseDelay();
  }

}
