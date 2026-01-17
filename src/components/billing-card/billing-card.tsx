import { useProduct } from "../../context/product-context/product-context";
import { Button } from "../button/button";
import type { Product } from "../list-products/list-products.types";

export default function BillingCard({ product }: { product: Product }) {
    const {productDispatch}=useProduct();
  return (
    <div className="bg-gray-50 flex flex-col md:flex-row md:gap-5 w-full rounded">
      <div>
        <img
          src={product.images[0]}
          alt="billing-cart-image"
          className="md:h-52 md:w-52 "
        />
      </div>
      <div className="pe-5 ps-3 md:ps-0 my-2 flex justify-between flex-col h-52 md:h-48">
        <div>
          <h4 className="text-2xl">{product.title}</h4>
          <p className="mt-2">{product.category.name}</p>
        </div>
        <div className="mt-1 md:mt-0">
          <p>Rs. {product.price}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-3 md:gap-5 mt-1 md:mt-0">
          <Button varient="primary" onClick={()=>productDispatch({
            type: "REMOVE_FROM_CART",
            payload: product
          })}>Remove From Cart</Button>
        </div>
      </div>
    </div>
  );
}
