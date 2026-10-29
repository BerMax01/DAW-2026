import {products} from '../dtos/product';

export const ProductServices = {
    listAll() {
        return products;
    }
}