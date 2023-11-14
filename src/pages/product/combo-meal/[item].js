import Image from "next/image";
import React, { useEffect, useState } from "react";
import ItemDetail from "../../../components/ItemDetail";
import SodaChoice from "../../../components/SodaChoice";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Router, { useRouter } from "next/router";
import BottomBar from "../../../components/BottomBar";
import Share from "../../../components/product-page/Share";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../../RTK/slices/productReducer";

const Item = () => {

  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);

  const router = useRouter();
  const { item } = router.query;

  const globalState = useSelector(state => state.products)
  const dispatch = useDispatch();
  useEffect(() => {
    if (globalState?.list) {
      let obj = globalState.list.find((listItem) => listItem.id == item);
      setProduct(obj || {});
    } else {
      dispatch(fetchData())
    }
  }, [globalState?.list, item]);



  return (
    <div className="min-h-screen bg-[#f4f5f5]">
      <nav className="flex border-b bg-white border-gray-200 p-3">
        <div className="cursor-pointer" onClick={() => Router.back()}>
          <ArrowBackOutlinedIcon />
        </div>
      </nav>
      {product && (
        <>
          <ItemDetail product={product} qty={qty} setQty={setQty} />
          <SodaChoice product={product} />
          <Share />
          <BottomBar addToCartBtn product={product} qty={qty} />
        </>
      )}
    </div>
  );
};

export default Item;
