import Image from "next/image";
import React from "react";
import ItemDetail from "../../../components/ItemDetail";
import SodaChoice from "../../../components/SodaChoice";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Router from "next/router";

const item = () => {
  return (
    <div className="min-h-screen bg-[#f4f5f5]">
      <nav className="flex border-b bg-white border-gray-200 p-3">
        <div className="cursor-pointer" onClick={() => Router.back()}>
          <ArrowBackOutlinedIcon />
        </div>
      </nav>
      <ItemDetail />
      <SodaChoice />
    </div>
  );
};

export default item;
