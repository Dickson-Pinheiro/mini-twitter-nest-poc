import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { AuthLoginDto } from './dto/auth-login.dto';
import { User } from './decorators/user.decorator';
import { AuthGuard } from './authGard/auth.gard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.signup(createAuthDto);
  }

  @Post('login')
  login(@Body() AuthLoginDto: AuthLoginDto) {
    return this.authService.login(AuthLoginDto);
  }
  @UseGuards(AuthGuard)
  @Get('me')
  me(@User() user){
    return {
      me: user
    }
  }
}
