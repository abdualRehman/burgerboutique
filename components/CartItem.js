import Image from "next/image";
import React from "react";
import CartItemQuantity from "./CartItemQuantity";

const CartItem = () => {
  return (
    <div className="w-full p-3 bg-white ">
      <h6 className="font-semibold mb-1">edit</h6>
      <div className="flex items-start gap-3 ">
        <div className="bg-cover flex-col items-center">
          <Image
            width={50}
            height={50}
            className="rounded-lg "
            src={"/images/p1.jpg"}
            alt="cart-item-img"
          />
          <h6 className="text-red-600">remove</h6>
        </div>
        <div className="flex w-full justify-between">
          <span className="font-semibold">Corn Rib</span>
          <span className="font-semibold">KD 2.250</span>
        </div>
      </div>
      <CartItemQuantity />
      <hr className="mx-8 mt-4" />
    </div>
  );
};

export default CartItem;
