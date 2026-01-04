import type { FilterbarProps } from "./filter-bar.types";

const FilterBar = ({ isFilterbarOpen }: FilterbarProps) => {
  return (
    <div
      className={`md:w-82 ${
        isFilterbarOpen ? "block" : "hidden"
      } w-full md:block px-10 fixed top-38 md:top-28 left-0 bottom-0 overflow-y-auto pb-4`}
    >
      <div className="flex justify-between items-center text-lg">
        <h3 className="font-semibold tracking-wide">Filter</h3>
        <p className="text-green-600 underline hover:text-green-500 cursor-pointer">
          Clear
        </p>
      </div>
      <div className="mt-5 mr-5">
        <h4 className="text-lg font-semibold tracking-wide">Price</h4>
        <div className="flex justify-between text-sm mt-3">
          <span>1k</span>
          <span>2k</span>
          <span>3k</span>
          <span>4k</span>
        </div>
        <div className="range-slider">
          <span className="rangeValues"></span>
          <input
            className="w-full"
            value="100"
            min="0"
            max="300"
            step="10"
            type="range"
          />
        </div>
      </div>
      <div className="mt-5">
        <h4 className="text-lg font-semibold tracking-wide">Category</h4>
        <div className="flex gap-2 flex-col">
          <div className="flex gap-2 items-center mt-3">
            <input className="w-4 h-4" type="radio" name="" id="" />
            <span>All</span>
          </div>
          <div className="flex gap-2 items-center">
            <input className="w-4 h-4" type="radio" name="" id="" />
            <span>Men</span>
          </div>
          <div className="flex gap-2 items-center">
            <input className="w-4 h-4" type="radio" name="" id="" />
            <span>Women</span>
          </div>
          <div className="flex gap-2 items-center">
            <input className="w-4 h-4" type="radio" name="" id="" />
            <span>Boys</span>
          </div>
          <div className="flex gap-2 items-center">
            <input className="w-4 h-4" type="radio" name="" id="" />
            <span>Girls</span>
          </div>
        </div>
      </div>
      <div>
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
      </div>
    </div>
  );
};

export default FilterBar;
