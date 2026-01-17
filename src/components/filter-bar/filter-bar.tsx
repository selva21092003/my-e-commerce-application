import { useProduct } from "../../context/product-context/product-context";
import type { Category } from "../../context/product-context/product-context.types";
import type { FilterbarProps } from "./filter-bar.types";

const FilterBar = ({
  isFilterbarOpen,
  setIsFilterbarOpen,
  radioCategory,
  setRadioCategory,
  priceIndex,
  setPriceIndex,
}: FilterbarProps) => {
  const { productState } = useProduct();
  const categories = productState.categories;
  const priceSteps = [100, 200, 300, 400];
  const handleClearFilter = () => {
    setRadioCategory({
      createdAt: "",
      id: 0,
      image: "",
      name: "All",
      slug: "",
      updatedAt: "",
    });
    setPriceIndex(3);
    setIsFilterbarOpen(false);
  };
  return (
    <div
      className={`md:w-82 ${
        isFilterbarOpen ? "block" : "hidden"
      } w-full md:block px-10 fixed top-38 ${
        productState.isMenuOpen ? "mt-20" : "mt-0"
      } md:top-28 left-0 bottom-0 overflow-y-auto pb-4`}
    >
      <div className="flex justify-between items-center text-lg">
        <h3 className="font-semibold tracking-wide">Filter</h3>
        <p
          onClick={handleClearFilter}
          className="text-green-600 underline hover:text-green-500 cursor-pointer"
        >
          Clear
        </p>
      </div>
      <div className="mt-5 mr-5">
        <h4 className="text-lg font-semibold tracking-wide">Price</h4>
        <div className="flex justify-between text-sm mt-3">
          {priceSteps.map((price) => (
            <span key={price}>{price / 1000}k</span>
          ))}
        </div>
        <div className="range-slider">
          <span className="rangeValues"></span>
          <input
            className="w-full cursor-pointer"
            type="range"
            min={0}
            max={priceSteps.length - 1}
            step={1}
            value={priceIndex}
            onChange={(e) => {
              setPriceIndex(Number(e.target.value));
              setIsFilterbarOpen(false);
            }}
          />
        </div>
      </div>
      <div className="mt-5">
        <h4 className="text-lg font-semibold tracking-wide">Category</h4>
        <div className="flex gap-2 flex-col">
          <div className="flex gap-2 items-center mt-3">
            <input
              className="w-4 h-4 cursor-pointer"
              type="radio"
              onChange={() => {
                setRadioCategory({
                  createdAt: "",
                  id: 0,
                  image: "",
                  name: "All",
                  slug: "",
                  updatedAt: "",
                });
                setIsFilterbarOpen(false);
              }}
              checked={radioCategory.name === "All"}
              name="All"
              id="All"
            />
            <label htmlFor="All" className="cursor-pointer">
              All
            </label>
          </div>
          {categories.map((category: Category) => (
            <div key={category.id}>
              <div className="flex gap-2 items-center">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="radio"
                  onChange={() => {
                    setRadioCategory(category);
                    setIsFilterbarOpen(false);
                  }}
                  value={category.name}
                  checked={radioCategory.name === category.name}
                  id={category.name}
                />
                <label className="cursor-pointer" htmlFor={category.name}>
                  {category.name}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div>
        <h4 className="text-lg font-semibold mt-5 tracking-wide">Sort By</h4>
        <div className="flex gap-2 flex-col">
          <div className="flex gap-2 items-center mt-3">
            <input className="w-4 h-4" type="radio" name="" id="" />
            <span>Price - Low to High</span>
          </div>
          <div className="flex gap-2 items-center">
            <input className="w-4 h-4" type="radio" name="" id="" />
            <span>Price - High to Low</span>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold mt-5 tracking-wide">Rating</h4>
        <div className="flex gap-2 flex-col">
          <div className="flex gap-2 items-center mt-3">
            <input className="w-4 h-4" type="radio" name="" id="" />
            <span>4 stars and above</span>
          </div>
          <div className="flex gap-2 items-center">
            <input className="w-4 h-4" type="radio" name="" id="" />
            <span>3 stars and above</span>
          </div>
          <div className="flex gap-2 items-center">
            <input className="w-4 h-4" type="radio" name="" id="" />
            <span>2 stars and above</span>
          </div>
          <div className="flex gap-2 items-center">
            <input className="w-4 h-4" type="radio" name="" id="" />
            <span>1 stars and above</span>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold mt-5 tracking-wide">Discount</h4>
        <div className="flex gap-2 flex-col">
          <div className="flex gap-2 items-center mt-3">
            <input className="w-4 h-4" type="radio" name="" id="" />
            <span>50% and above</span>
          </div>
          <div className="flex gap-2 items-center">
            <input className="w-4 h-4" type="radio" name="" id="" />
            <span>30% and above</span>
          </div>
          <div className="flex gap-2 items-center">
            <input className="w-4 h-4" type="radio" name="" id="" />
            <span>20% and above</span>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mt-5 tracking-wide">
            Additional Filters
          </h4>
          <div className="flex gap-2 flex-col">
            <div className="flex gap-2 items-center mt-3">
              <input className="w-4 h-4" type="checkbox" name="" id="" />
              <span>Include Out of stock</span>
            </div>
            <div className="flex gap-2 items-center">
              <input className="w-4 h-4" type="checkbox" name="" id="" />
              <span>Fast Delivery</span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FilterBar;
