import Image from "next/image";
import React from "react";
import ItemQuantity from "./ItemQuantity";
import { Box } from "@mui/material";

const ItemDetail = () => {
  return (
    <div className="bg-white">
      <div className="w-full flex items-center justify-center">
        {/* <Box src={"/images/p1.jpg"} alt="men" width="460px" height="270px" ></Box> */}
        <Box component="img" src={"/images/p1.jpg"} alt={"men"} sx={{ height: "auto", maxHeight:"300px", width: "100%" }} />

      </div>
      <h3 className="p-2 font-semibold text-gray-600">
        BB Collection For 4 Persons
      </h3>
      <ItemQuantity />
    </div>
  );
};

export default ItemDetail;
