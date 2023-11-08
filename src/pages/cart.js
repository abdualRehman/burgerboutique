import { useEffect, useState } from "react";
import Link from "next/link";

// mui
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

// redux
import { useDispatch, useSelector } from "react-redux";

// component

import CartField from "../components/CartField";
import CartItem from "../components/CartItem";
import Router from "next/router";
import BottomBar from "../components/BottomBar";

const Cart = () => {
  const isTablet = useMediaQuery("(max-width:900px)");

  const state = useSelector((state) => state.cartList);


  const dispatch = useDispatch();
  const history = () => {
    Router.back();
  };

  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  const clearHandler = () => {
    dispatch({ type: "CLEAR" });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#f4f5f5] min-h-screen ">
      <nav className="flex border-b bg-white border-gray-200 p-5">
        <div className="cursor-pointer" onClick={history}>
          <ArrowBackOutlinedIcon />
        </div>
        <h2 className="flex w-full  items-center font-semibold justify-center">
          Shopping Cart
        </h2>
      </nav>
      <div className="flex mt-6 gap-8 flex-col">
        <CartField
          promotion
          placeholder={"Enter promotion code"}
          title={"Promotion"}
        />

        <CartField
          placeholder={"Enter your Special Remarks"}
          title={"Special Remarks"}
        />
      </div>
      <div>
        <h2 className="ml-3 font-semibold text-[#666666] text-sm mt-7 mb-2">
          Items
        </h2>
        {state?.selected && state.selected.map((item, i) => {
          return <CartItem key={i} item={item} />
        })}
      </div>
      <BottomBar />
    </div>
  );
};

export default Cart;
