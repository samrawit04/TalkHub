import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service'; // Import the UsersService
import { JwtService } from '@nestjs/jwt';
import { comparePasswords } from 'src/utils/password.utils'; // Your password comparison utility
import { BadRequestException, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  // Method to validate the user credentials during login
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email); // Fetch user by email
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await comparePasswords(password, user.password); // Validate password
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Exclude the password field from the response
    const { password: userPassword, ...result } = user; // Rename the destructured variable
    return result;  // Return user without password
  }

  // Method to log in and generate a JWT token
  async login(user: any) {
    const payload = { sub: user.id, email: user.email }; // JWT payload contains the user ID and email
    return {
      access_token: this.jwtService.sign(payload), // Generate JWT token
    };
  }
}
