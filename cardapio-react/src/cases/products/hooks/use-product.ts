import { ProductServices } from "../services/product-services";

export function useProducts() {
    return ProductServices.listAll();
}