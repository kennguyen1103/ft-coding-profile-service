import { Controller } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { MessagePattern } from '@nestjs/microservices';
import { SignUpDto } from './signup.dto';

@Controller()
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @MessagePattern('getProfile')
  getProfile(userId) {
    return this.profileService.getProfile(userId);
  }

  @MessagePattern('signup')
  signup(signupDto: SignUpDto) {
    return this.profileService.signup(signupDto);
  }

  @MessagePattern('makeupAdmin')
  makeupAdmin() {
    return this.profileService.makeupAdmin();
  }
}
