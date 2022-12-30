import { Injectable } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { RiderRepository } from '@application/repositories/rider-repository';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private riderRepository: RiderRepository,
    private readonly jwtService: JwtService,
  ) {}

  async login(rider) {
    const payload = { sub: rider.id, email: rider.email, role: rider.role };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  async validateRider(email: string, password: string) {
    const rider = await this.riderRepository.findByEmail(email);

    const isPasswordValid = compareSync(password, rider.password);
    if (!isPasswordValid) return null;

    return rider;
  }
}
