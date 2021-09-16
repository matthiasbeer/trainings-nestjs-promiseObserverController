import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

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

  private getPromiseNumber = (): Promise<number> => new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.random())
    }, 500);
    return null;
  })

  getAwaitNonAwait = async (): Promise<any> => {
    const returnObj: any = {};
    setTimeout(() => {
      returnObj.timeout = 'timeout';
    }, 400);


    returnObj.randomPromNeg =   this.getPromiseNumber();
    returnObj.randomPromPos =   await this.getPromiseNumber();

    returnObj.randomStat =  new Promise(()=> {huhu: 'huhu'}); //Math.random() ;
    // returnObj.randomAwait =  await new Promise(()=> {huhu: 'huhu'}); //Math.random() ;
    returnObj.randomTestNeg =  new Promise((resolve)=> resolve({huhu: 'huhu'})); //Math.random() ;
    returnObj.randomTestPos =  await new Promise((resolve)=> resolve({haha: 'haha'})); //Math.random() ;



    return returnObj;
  }

}
