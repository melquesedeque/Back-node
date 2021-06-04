import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { get } from 'http';
import { UsersCreateDto } from './dto/user-create.dto';
import { IUser } from './user.inteface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService){ }

    @Post('')
    createUser(@Body() body: UsersCreateDto){
        return this.service.create(body);
    }

    @Get('')
    async findAll(): Promise<IUser[]>{
        return this.service.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id:number): Promise<IUser>{
        return this.service.findOne(id);
    }

    @Put(':id')
    async updateUser(@Param('id') id:number, @Body() body: UsersCreateDto): Promise<{message : string}>{
        return this.service.updateUser(id, body);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id:number): Promise<{message : string}>{
        return this.service.deleteUser(id);
    }
}
