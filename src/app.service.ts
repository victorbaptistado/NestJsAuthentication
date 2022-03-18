import { Injectable } from '@nestjs/common';


//If authentication returns a message

@Injectable()
export class AppService {
  getHello(): string {
    return 'Login succeeded!';
  }
}
