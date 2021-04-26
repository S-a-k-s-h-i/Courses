import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AppService {
  constructor(@InjectRepository(User) private userRepository:Repository<User>){}

  async create(data:any):Promise<User>{
      return this.userRepository.save(data)
  }

  async findOne(condition):Promise<User>{
      return this.userRepository.findOne(condition) 
  }

  
}