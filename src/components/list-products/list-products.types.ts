export type ListProductProps = {
  isFilterbarOpen: boolean;
  // setIsFilterbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  products: Product[];
};

export type Product = {
  category: ProductCategory;
  creationAt: string;
  description: string;
  id: number;
  images: string[];
  price: number;
  title: string;
  updatedAt: string;
};

export type ProductCategory = {
  creationAt: string;
  id: number;
  image: string;
  name: string;
  slug: string;
  updatedAt: string;
};
