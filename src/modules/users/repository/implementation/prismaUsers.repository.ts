import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../../dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersRepository } from '../user.repository';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async addUser(data: CreateUserDTO) {
    await this.prisma.user.create({ data: data });
  }

  async findAllUsers() {
    await this.prisma.user.findMany({});
  }

  async findUserByEmail(email: string) {
    await this.prisma.user.findUnique({ where: { email } });
  }

  async findUserById(id: number) {
    await this.prisma.user.findFirst({ where: { id } });
  }
}
