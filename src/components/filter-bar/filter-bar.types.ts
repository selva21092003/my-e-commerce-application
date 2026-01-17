import type { Category } from "../../context/product-context/product-context.types";

export type FilterbarProps={
    isFilterbarOpen: boolean;
    setIsFilterbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    radioCategory:Category;
    setRadioCategory:React.Dispatch<React.SetStateAction<Category>>;
    priceIndex:number;
    setPriceIndex:React.Dispatch<React.SetStateAction<number>>;
}