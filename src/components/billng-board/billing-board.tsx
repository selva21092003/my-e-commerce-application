import { useState } from "react";
import { useProduct } from "../../context/product-context/product-context";
import { Button } from "../button/button";
import { getPrice } from "../../utils/utils";

export default function BillingBoard() {
    const {productState}=useProduct();
    const [discount]=useState<number>(50);
    const price=getPrice(productState.card);
    const totalAmount=price+discount;
  return (
    <div className="bg-gray-50 md:fixed md:w-120 w-full mt-3 rounded md:p-5 p-4">
      <h4 className="text-2xl font-semibold">Price Details</h4>
      <hr />
      <div className="mt-4 flex flex-col gap-5">
        <div className="flex justify-between">
          <span>Price ({productState.card.length} items)</span>
          <span>Rs. {price}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Charges</span>
          <span>+ Rs. {discount}</span>
        </div>
        <hr />
        <div className="flex justify-between font-semibold">
          <span>TOTAL AMOUNT</span>
          <span>Rs. {totalAmount}</span>
        </div>
        <hr />
        <Button varient="primary">PLACE ORDER</Button>
      </div>
    </div>
  );
}
