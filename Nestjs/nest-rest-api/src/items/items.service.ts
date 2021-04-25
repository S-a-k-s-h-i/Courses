import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateItemDTO } from './create-item.dto';
import { UpdateItemDTO } from './update-item.dto';
import { Item,ItemDocument } from './schemas/item.schema'

@Injectable()
export class ItemsService {
    constructor(@InjectModel(Item.name) private readonly itemModel :Model<ItemDocument>){}


    async getAllItems():Promise<Item[]>{
        return await this.itemModel.find()
    }

    async createAnItem(createItemDTO:CreateItemDTO):Promise<Item>{
        const {name, quantity , description} = createItemDTO
        const item = {
            name,
            quantity,
            description
        }
        
        return await new this.itemModel(item).save();
    }

    async getItemById(id:string):Promise<Item>{
        return await this.itemModel.findById(id)
    }

    async updateItemById(id:string,updateItemDTO :UpdateItemDTO):Promise<Item>{
    
        return await this.itemModel.findByIdAndUpdate(id,updateItemDTO,{new:true})
    }

    async deleteItemById(id:string):Promise<Item>{
        return await this.itemModel.findByIdAndDelete(id)
    }


}
