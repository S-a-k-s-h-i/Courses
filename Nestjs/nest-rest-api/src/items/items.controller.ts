import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateItemDTO } from './create-item.dto';
import { ItemsService } from './items.service';
import { UpdateItemDTO } from './update-item.dto';

@Controller('items')
export class ItemsController {
    constructor(private itemsService: ItemsService){}

    @Get()
    async getAllItems(){
        return await this.itemsService.getAllItems();
    }

    @Post()
    async createAnItem(@Body() createItemDTO: CreateItemDTO){
        return await this.itemsService.createAnItem(createItemDTO);
    }

    @Get('/:id')
    async getItemById(@Param('id') id:string){
        return this.itemsService.getItemById(id)
    }

    @Patch('/:id')
    async updateItemById(@Param('id') id:string,@Body() updateItemDTO :UpdateItemDTO){
        return await this.itemsService.updateItemById(id,updateItemDTO)
    }

    @Delete('/:id')
    async deleteItemById(@Param('id') id:string){
        return await this.itemsService.deleteItemById(id);
    }
}