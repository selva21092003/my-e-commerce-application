import { useState } from "react";
import FilterBar from "../../components/filter-bar/filter-bar";
import ListProducts from "../../components/list-products/list-products";
import { LuFilter } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const Products = () => {
  const [isFilterbarOpen, setIsFilterbarOpen] = useState<boolean>(false);
  return (
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
      <FilterBar isFilterbarOpen={isFilterbarOpen} />
      <ListProducts isFilterbarOpen={isFilterbarOpen} />
    </div>
  );
};

export default Products;
