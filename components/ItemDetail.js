import Image from "next/image";
import React from "react";
import ItemQuantity from "./ItemQuantity";

const ItemDetail = () => {
  return (
    <div className="bg-white">
      <div className="w-full flex items-center justify-center">
        <Image src={"/images/p1.jpg"} alt="men" width="380px" height="270px" />
      </div>
      <h3 className="p-2 font-semibold text-gray-600">
        BB Collection For 4 Persons
      </h3>
      <ItemQuantity />
    </div>
  );
};

export default ItemDetail;
