import ListProducts from "../../components/list-products/list-products";
import { useProduct } from "../../context/product-context/product-context";

const WishList = () => {
  const { productState } = useProduct();
  return (
    <div className={` ${productState.isMenuOpen ? "mt-48" : "mt-20"}`}>
      {productState.wishList.length > 0 ? (
        <div>
          <ListProducts
            products={productState.wishList}
            isFilterbarOpen={false}
          />
        </div>
      ) : (
        <div className="text-center w-full">
          <p className="text-xl">No product in wishlist</p>
          <a className="underline" href="/products">
            Click here to add product to wishlist
          </a>
        </div>
      )}
    </div>
  );
};

export default WishList;
