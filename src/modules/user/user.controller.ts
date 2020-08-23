import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get(':id')
  async getUserById(@Param('id', ParseIntPipe) id: number): Promise<User> {
    const user = await this._userService.getUser(id);
    return user;
  }

  //@UseGuards(AuthGuard())
  @Get()
  async getUsers(): Promise<User[]> {
    const users = await this._userService.getAllUsers();
    return users;
  }

  @Post('create')
  async createUser(@Body() user: User): Promise<User> {
    const userCreated = await this._userService.createUser(user);
    return userCreated;
  }

  @Patch(':id')
  async updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: User) {
    const userUpdated = await this._userService.updateUser(id, user);
    return true;
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    await this._userService.deleteUser(id);
    return true;
  }
}
