import ProductCard from "../product-card/product-card";
import type { ListProductProps } from "./list-products.types";

const ListProducts = ({ isFilterbarOpen, products }: ListProductProps) => {
  return (
    <div className={`${isFilterbarOpen ? "hidden" : "block"}`}>
      <div className="flex gap-20 justify-center flex-wrap">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ListProducts;
