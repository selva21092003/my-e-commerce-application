import ProductCard from "../product-card/product-card"
import type { ListProductProps } from "./list-products.types"


const ListProducts = ({isFilterbarOpen}:ListProductProps) => {
  return (
    <div className={`${isFilterbarOpen?'hidden':'block'} md:ml-82`}>
      <div className="flex flex-col items-center justify-center">
        <ProductCard/>
      </div>
    </div>
  )
}

export default ListProducts