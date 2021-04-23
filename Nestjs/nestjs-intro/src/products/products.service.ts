import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDTO } from './create-product.dto';
import { Product } from './product.model';
import { v4 as uuidv4 } from 'uuid';
import { UpdateProductDTO } from './update-product.dto';
@Injectable()
export class ProductsService {
    private products:Product[]=[]
    
    //create a product
    createProduct(createProductDto:CreateProductDTO):Product{ 
         const {title,description,price} =createProductDto
         const product = {
             id:uuidv4(),
             title,
             description,
             price
         }
         this.products.push(product)
         return product
    }
    
    //get all products
    getAllProduct():Product[]{
        return this.products
    }

    //get product by id
    getProductById(id:string):Product{
        const product = this.findProduct(id);
        return { ...product}
    }

    //delete product by id
    deleteProductById(id:string){
        this.products = this.products.filter(product => product.id !== id)
    }

    //update product by id
    updateProductById(id:string,updateProductDto: UpdateProductDTO):Product{
        const { description,price} = updateProductDto;
        const product = this.findProduct(id);
        if(description) product.description = description;
        if(price) product.price = price;

        return product;
    }
    
    //find product
    private findProduct(id:string):Product{
        const product = this.products.find(product => product.id === id)
        if(!product) throw new NotFoundException('Could not find product');
        return product
    }
}
