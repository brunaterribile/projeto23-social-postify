import { CreateUserDTO } from '../dto/create-user.dto';

export abstract class UsersRepository {
  abstract addUser(data: CreateUserDTO): Promise<void>;
  abstract findAllUsers(): Promise<void>;
  abstract findUserByEmail(email: string): Promise<void>;
  abstract findUserById(id: number): Promise<void>;
}
