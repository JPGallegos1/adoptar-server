import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get(':id')
  async getUserById(@Param() id: number): Promise<UserDto> {
    const user = await this._userService.getUser(id);
    return user;
  }

  @Get()
  async getUsers(): Promise<UserDto[]> {
    const users = await this._userService.getAllUsers();
    return users;
  }

  @Post('create')
  async createUser(@Body() user: User): Promise<UserDto> {
    const userCreated = await this._userService.createUser(user);
    return userCreated;
  }

  @Patch(':id')
  async updateUser(@Param() id: number, @Body() user: User) {
    const userUpdated = await this._userService.updateUser(id, user);
    return true;
  }

  @Delete(':id')
  async deleteUser(@Param() id: number) {
    await this._userService.deleteUser(id);
    return true;
  }
}
