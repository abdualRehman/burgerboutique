import Image from "next/image";
import React from "react";
import CartItemQuantity from "./CartItemQuantity";
import { dummySodas } from "../constants/dummySoda";

const CartItem = () => {
  return (
    <div className="w-full p-1 px-4 bg-white ">
      <h6 className="font-semibold text-sm mb-1">edit</h6>
      <div className="flex w-full justify-between">
        <div className="flex items-start w-full gap-3 ">
          <div className="bg-cover flex-col items-center">
            <Image
              width={50}
              height={50}
              className="rounded-lg "
              src={"/images/p1.jpg"}
              alt="cart-item-img"
            />
            <h6 className="text-red-600 font-semibold text-sm -mt-2 ">
              remove
            </h6>
          </div>
          <div className="w-full">
            <h4 className="font-semibold">Caesars Salad</h4>
            <div className="mr-4 mt-6">
              {dummySodas.map((soda) => (
                <div className="flex w-full text-sm  font-extralight text-[#acabab] justify-between">
                  <span className="">{soda.name}</span>
                  <span>x {soda.quantity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-end  justify-between flex-col">
          <h3 className="text-sm font-bold ">KD 750</h3>
          <CartItemQuantity />
        </div>
      </div>

      <hr className="mx-8 mt-4" />
    </div>
  );
};

export default CartItem;
