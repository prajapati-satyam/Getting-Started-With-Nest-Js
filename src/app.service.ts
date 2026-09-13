import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const a = {
      message: "Hello this is nestjs"
    }
    // return "<h1>Hello From the NEST</h1>";
    return JSON.stringify(a)
  }
}
