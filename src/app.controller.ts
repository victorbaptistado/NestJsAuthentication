import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

  //End Points
  @Controller()
  export class AppController {
  constructor(private readonly authService: AuthService) {}


  //User's side input
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any{
    return this.authService.login(req.user);
  }

  //Server's side response
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): string {
    return req.user;  // Returns the object user itself
  }
}
