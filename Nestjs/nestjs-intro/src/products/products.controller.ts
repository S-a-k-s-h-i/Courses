import { Body, Controller, Post,Get, Param, Delete, Put, Patch } from '@nestjs/common';
import { CreateProductDTO } from './create-product.dto';
import { Product } from './product.model';
import { ProductsService } from './products.service'
import { UpdateProductDTO } from './update-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private productService:ProductsService){}

    @Post()
    createProduct(@Body() createProductDto:CreateProductDTO):Product{
        return this.productService.createProduct(createProductDto)
    }

    @Get()
    getAllProducts():Product[]{
        return this.productService.getAllProduct()
    }

    @Get('/:id')
    getProductById(@Param('id') id:string){
        return this.productService.getProductById(id)
    }

    @Delete('/:id')
    deleteProductById(@Param('id') id:string){
        return this.productService.deleteProductById(id)
    }

    @Patch('/:id')
    updateProductById(@Param('id') id:string , @Body() updateProductDto: UpdateProductDTO){
        return this.productService.updateProductById(id,updateProductDto)
    }
}
