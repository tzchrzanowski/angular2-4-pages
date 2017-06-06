import { Component, OnInit } from '@angular/core';
import { IProduct} from './product';
import { Batman } from './customCode';
import { ProductService } from './product.service';

@Component({
   // selector: 'pm-products',  // not needed, there is route to this component
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls:['product-list.component.css'] 
})


export class ProductListComponent implements OnInit {
  
     pageTitle:string = 'Product List';
     imageWidth: number = 50;
     imageMargin:number = 2;
     showImage: boolean = true;
     listFilter: string;
     errorMessage: string;
     products: IProduct [];

    constructor(private _productService: ProductService){
        
    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(	products => this.products = products,
    		error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}
