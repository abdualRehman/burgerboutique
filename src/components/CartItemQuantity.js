import React from "react";
import { useDispatch } from "react-redux";
import { minus, plus } from "../../slices/cartReducer";

const CartItemQuantity = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="-mt-5">
      <div className="flex gap-2 items-center justify-end">
        <button className="rounded-full flex items-center mt justify-center font-bold border-2 h-6 w-6 border-black p-1 cursor-pointer"
          onClick={() => dispatch(minus({ id: item.id }))} >
          <span className="-mt-[2px]">-</span>
        </button>
        <div className="border border-gray-300">
          <span className="p-3">{item?.quantity || 0}</span>
        </div>
        <button className="rounded-full flex items-center justify-center font-bold border-2 h-5 w-5 border-black p-1 cursor-pointer"
          onClick={() => dispatch(plus({ id: item.id }))} >
          <span className="-mt-[2px]">+</span>
        </button>
      </div>
    </div>
  );
};

export default CartItemQuantity;
