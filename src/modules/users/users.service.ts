import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersCreateDto } from './dto/user-create.dto';
import { User } from './entities/user.entity';
import { IUser } from './user.inteface';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}
    
    async create(body: UsersCreateDto): Promise<IUser> {
        try {
          const entity = Object.assign(new User(), body);
          const user = await this.userRepository.save(entity);
          return user;
        } catch (error) {
          return error;
        }
    }

    async findAll():Promise<IUser[]>{
        try {
            const user = await this.userRepository.find();
            return user;
        } catch (error) {
            return error;
        }
    }

    async findOne(id:number):Promise<IUser>{
        try {
            const user = await this.userRepository.findOneOrFail(id);
            return user;
        } catch (error) {
            return error;
        }
    }

    async updateUser(id:number, body: UsersCreateDto):Promise<{message : string}>{
        try {
            await this.userRepository.findOneOrFail(id);
            const entity = Object.assign(new User(), body);
            const user = await this.userRepository.update(id, entity);
            return {message : 'Atualizado com Sucesso'};
        } catch (error) {
            return error;
        }
    }

    async deleteUser(id:number):Promise<{message : string}>{
        try {
            await this.userRepository.softDelete(id);
            return { message : 'Usuário Deletado'};
        } catch (error) {
            return error;
        }
    }
}
