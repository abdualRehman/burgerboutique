import { useEffect, useState } from "react";
import Link from "next/link";

// mui
import { Box, Button, Typography, useMediaQuery } from "@mui/material";

// redux
import { useDispatch, useSelector } from "react-redux";

// component
import CartProducts from "../components/CartProducts";
import CartField from "../components/CartField";
import CartItem from "../components/CartItem";

const Cart = () => {
  const isTablet = useMediaQuery("(max-width:900px)");

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

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
      <div className="flex gap-8 flex-col">
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
        <h2 className="ml-3 font-semibold mt-7 mb-2">Items</h2>
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
};

export default Cart;
