import type { Product } from "../components/list-products/list-products.types";

export function isProductExist(id: number, arr: Product[]): boolean {
    return arr.some((product: Product) => product.id === id);
}

export function getPrice(arr: Product[]): number {
    return arr.reduce((acc, curr) => acc + curr.price, 0);
}