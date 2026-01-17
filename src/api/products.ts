import axios from "axios";
import type { Product } from "../components/list-products/list-products.types";

const BaseUrl = "https://api.escuelajs.co/api/v1";

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const { data } = await axios.get(`${BaseUrl}/products`);
    return data;
  } catch (error: unknown) {
    throw error;
  }
};

export const getProductByFilters = async (categoryId: Number, title: string = "", price: number = 0): Promise<Product[]> => {
  try {
    const { data } = await axios.get(`${BaseUrl}/products/?title=${title}&price_min=0&price_max=${price}0&categoryId=${categoryId}`);
    return data;
  } catch (error: unknown) {
    throw error;
  }
}
