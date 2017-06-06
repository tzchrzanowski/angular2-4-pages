import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from  './product';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

    transform( value: IProduct[], filterBy: string): IProduct[]{
        filterBy = filterBy ? filterBy.toLocaleLowerCase(): null;
        // ^ possibility that no filter by string is defined.
        return filterBy ? value.filter((product: IProduct) =>
            // ^ if exists      ^ then filter list
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1): value;
                                                                 //              ^
                                                                 // if no filter
                                                                 // return default list
        // ^ filtered list of products
    }
}