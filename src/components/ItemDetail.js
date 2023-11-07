import Image from "next/image";
import React from "react";
import ItemQuantity from "./ItemQuantity";
import { Box } from "@mui/material";

const ItemDetail = () => {
  return (
    <div className="bg-white">
      <div className="w-full flex bg-cover relative  max-sm:h-[30vh] sm:h-[50vh] items-center justify-center">
        <Image
          src={"/images/p1.jpg"}
          className="absolute bg-cover"
          alt="men"
          layout="fill"
        />
      </div>
      <h3 className="p-3 font-semibold text-gray-600">
        BB Collection For 4 Persons
      </h3>
      <ItemQuantity />
    </div>
  );
};

export default ItemDetail;
