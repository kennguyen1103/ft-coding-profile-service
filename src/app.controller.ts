import { Controller, Get } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly profileService: ProfileService) {}

  @MessagePattern('getProfile')
  async getProfile() {
    return this.profileService.getProfile('');
  }

  @MessagePattern('makeupAdmin')
  async makeupAdmin() {
    return this.profileService.makeupAdmin();
  }
}
