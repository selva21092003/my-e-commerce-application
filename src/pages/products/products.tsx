import { useEffect, useState } from "react";
import FilterBar from "../../components/filter-bar/filter-bar";
import ListProducts from "../../components/list-products/list-products";
import { LuFilter } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { getAllProducts, getProductByFilters } from "../../api/products";
import { useProduct } from "../../context/product-context/product-context";
import Loader from "../../components/loader/loader";
import { getCategories } from "../../api/category";
import type { Category } from "../../context/product-context/product-context.types";

const Products = () => {
  const [isFilterbarOpen, setIsFilterbarOpen] = useState<boolean>(false);
  const { productState, productDispatch } = useProduct();
  const [isloading, setIsLoading] = useState(true);
  const [radioCategory, setRadioCategory] = useState<Category>({
    createdAt: "",
    id: 0,
    image: "",
    name: "All",
    slug: "",
    updatedAt: "",
  });
  const [priceIndex, setPriceIndex] = useState(3);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      let data;
      if (
        radioCategory.name === "All" &&
        priceIndex === 3 &&
        productState.searchValue == ""
      ) {
        data = await getAllProducts();
      } else {
        data = await getProductByFilters(
          radioCategory.id,
          productState.searchValue,
          priceIndex
        );
      }
      productDispatch({ type: "SET_PRODUCTS", payload: data });
      setIsLoading(false);
    })();
  }, [radioCategory, priceIndex, productState.searchValue]);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = await getCategories();
      productDispatch({ type: "SET_CATEGORY", payload: data });
      setIsLoading(false);
    })();
  }, []);
  return (
    <div className={`${productState.isMenuOpen ? "mt-48" : "mt-20"}`}>
      {isloading ? (
        <div className="flex justify-center items-center min-h-96">
          <Loader />
        </div>
      ) : (
        <>
          <div
            className={`md:py-5 px-2 fixed ${
              isFilterbarOpen ? "right-0" : "left-0"
            }`}
          >
            <div>
              <button
                className={`md:hidden px-2 flex justify-center items-center rounded border-2 ${
                  isFilterbarOpen ? "border-red-500" : "border-blue-500"
                }`}
                onClick={() => setIsFilterbarOpen((prev) => !prev)}
              >
                {isFilterbarOpen ? (
                  <IoClose className="text-red-500" />
                ) : (
                  <span className="flex items-center justify-between gap-2 text-blue-500">
                    <LuFilter /> Apply Filters
                  </span>
                )}
              </button>
            </div>
            <FilterBar
              isFilterbarOpen={isFilterbarOpen}
              setIsFilterbarOpen={setIsFilterbarOpen}
              radioCategory={radioCategory}
              setRadioCategory={setRadioCategory}
              priceIndex={priceIndex}
              setPriceIndex={setPriceIndex}
            />
          </div>
          <div className="pt-10 md:pt-5 md:ml-82 px-2 mb-5">
            {productState.products.length > 0 ? (
              <ListProducts
                isFilterbarOpen={isFilterbarOpen}
                products={productState.products}
              />
            ) : (
              <div className={`flex justify-center ${isFilterbarOpen?'hidden':'block'}`}>No products available</div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
