import type { Dispatch } from "react";
import type { Product } from "../../components/list-products/list-products.types";

export interface ProductState {
  products: Product[];
  card: Product[],
  wishList: Product[],
  categories: Category[],
  searchValue: string,
  isMenuOpen: boolean;
}

export interface Category {
  createdAt: string,
  id: number,
  image: string,
  name: string,
  slug: string,
  updatedAt: string
}

export interface ProductContextType {
  productState: ProductState;
  productDispatch: Dispatch<ProductAction>;
}

export type ProductAction =
  | { type: "SET_PRODUCTS"; payload: Product[] }
  | { type: "ADD_PRODUCT"; payload: Product }
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "TOGGLE_WISHlIST"; payload: Product }
  | { type: "REMOVE_FROM_CART"; payload: Product }
  | { type: "SET_CATEGORY"; payload: Category[] }
  | { type: "SET_SEARCH_VALUE"; payload: string }
  | { type: "SET_MENU_OPEN"; payload: boolean };