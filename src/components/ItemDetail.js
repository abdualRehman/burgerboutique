import Image from "next/image";
import React from "react";
import ItemQuantity from "./ItemQuantity";
import { Box } from "@mui/material";

const ItemDetail = ({ product, qty, setQty }) => {
  return (
    <div className="bg-white">
      <div className="w-full flex bg-cover relative  max-sm:h-[30vh] sm:h-[50vh] items-center justify-center">
        <Image
          src={product.img}
          className="absolute bg-cover"
          alt="men"
          layout="fill"
        />
      </div>
      <h3 className="p-3 font-semibold text-gray-600">
        {product.title}
      </h3>
      <ItemQuantity price={product.price} qty={qty} setQty={setQty} />
    </div>
  );
};

export default ItemDetail;
