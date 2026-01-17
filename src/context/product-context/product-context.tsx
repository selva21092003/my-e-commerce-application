import { createContext, useContext, useReducer, type ReactNode } from "react";
import { productReducer } from "../../reducers/product-reducers";
import type { ProductContextType, ProductState } from "./product-context.types";

const ProductContext = createContext<ProductContextType | null>(null);

const ProductProvider = ({ children }: { children: ReactNode }) => {
  const initialState: ProductState = {
    products: [],
    wishList:[],
    card: [],
    categories: [],
    searchValue: "",
    isMenuOpen: false,
  };
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialState
  );

  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProductContext must be used inside ProductProvider");
  }

  return context;
};

export { ProductProvider, useProduct };
