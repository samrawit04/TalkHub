// src/auth/jwt.strategy.ts

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UserService } from 'src/user/user.service'; // Import your UsersService

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your-jwt-secret', // Replace with your actual secret
    });
  }

  async validate(payload: { sub: number; email: string }) {
    // In the payload, 'sub' is the user ID, and 'email' is the user's email.
    const user = await this.userService.findOne(payload.sub);  // Find user by the ID (sub)
    return user;  // Return the user object after validation
  }
}
