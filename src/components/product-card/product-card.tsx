import { MdOutlineShoppingCart, MdOutlineShoppingCartCheckout } from "react-icons/md";
import { Button } from "../button/button";
import type { ProductCardProps } from "./product-card.types";
import { useProduct } from "../../context/product-context/product-context";
import { FaRegHeart } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";
import { isProductExist } from "../../utils/utils";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }: ProductCardProps) => {
  const { productState, productDispatch } = useProduct();
  const isExistInCard = isProductExist(product.id, productState.card);
  const naviagate=useNavigate();
  const handleAddCard = () => {
    if (isExistInCard) {
      naviagate("/cart");
    } else {
      productDispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
    }
  };
  return (
    <div className="w-72 rounded bg-white flex flex-col shadow-md">
      <div className="relative">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-54 object-cover rounded-t"
        />
        <div
          onClick={() =>
            productDispatch({
              type: "TOGGLE_WISHlIST",
              payload: product,
            })
          }
          className="absolute top-5 right-5 bg-white p-2 rounded-full cursor-pointer"
        >
          {productState.wishList.find((item) => item.id == product.id) ? (
            <GoHeartFill fill="red" className="w-5 h-5" />
          ) : (
            <FaRegHeart fill={"red"} className="w-5 h-5" />
          )}
        </div>
      </div>
      <div className="p-3 flex flex-col flex-1 gap-3 justify-between">
        <h4 className="text-xl font-semibold line-clamp-2 min-h-12">
          {product.title}
        </h4>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-sm">
            <p className="flex gap-1">
              <span>Rs</span>
              <span>{product.price}</span>
            </p>
            <p>{product.category.name}</p>
          </div>

          {/* Push button to bottom */}
          <Button
            varient="primary"
            onClick={() =>
              handleAddCard()
            }
          >
            <div className="flex gap-3">
              {isExistInCard ? (
                <>
                  <MdOutlineShoppingCartCheckout className="w-7 h-7 " />
                  <span>Go to cart</span>
                </>
              ) : (
                <>
                  <MdOutlineShoppingCart className="w-7 h-7 " />
                  <span>Add to cart</span>
                </>
              )}
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
