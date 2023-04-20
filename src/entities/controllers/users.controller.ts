import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { UserService } from '../services/users.services';
import { User } from '../interfaces/user.interface';

@Controller('users')
export class UserController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly usersServices: UserService) {}

  @Post()
  async create(@Body() createUserDTO: CreateUserDTO) {
    console.log(createUserDTO)
    return this.usersServices.create(createUserDTO);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersServices.findAll();
  }
}