import BillingCard from "../../components/billing-card/billing-card";
import BillingBoard from "../../components/billng-board/billing-board";
import type { Product } from "../../components/list-products/list-products.types";
import { useProduct } from "../../context/product-context/product-context";

const Card = () => {
  const { productState } = useProduct();
  return (
    <div className={`md:px-16 px-2 mt-3 ${productState.isMenuOpen ? "mt-38" : "mt-20"}`}>
      {productState.card.length >0
        ?(
          <>
            <div className="flex justify-center text-2xl font-semibold">
              My Cart
            </div>
            <div className="flex flex-col-reverse md:flex-row gap-5">
              <div className="flex-1">
                {productState.card.length === 0 ? (
                  <div className="flex justify-center">No items in cart</div>
                ) : (
                  <div className="flex flex-col gap-3 py-3 ml-2">
                    {productState.card.map((product: Product) => {
                      return <BillingCard key={product.id} product={product} />;
                    })}
                  </div>
                )}
              </div>
              <div className="md:w-125 w-full">
                <BillingBoard />
              </div>
            </div>
          </>
        ):(
          <>
          <div className="text-center w-full">
            <p className="text-xl">Cart is Empty</p>
            <a className="underline" href="/products">Click here to add product to cart</a>
          </div>
          </>
        )}
    </div>
  );
};

export default Card;
