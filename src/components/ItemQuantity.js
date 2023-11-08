import React from "react";

const ItemQuantity = ({ price, qty, setQty }) => {
  return (
    <div className="px-3 pb-3 flex items-center justify-between">
      <span className="font-semibold">{price} KD</span>
      <div className="flex border rounded-full h-8 border-gray-400 items-center max-h-max">
        <div className="p-2 border-r text-lg justify-center font-bold h-8 flex items-center border-gray-400 cursor-pointer" onClick={()=>setQty(qty - 1)} >
          -
        </div>
        <div className="px-5">{qty}</div>
        <div className="p-2 border-l font-bold justify-center text-lg h-8 flex items-center border-gray-400 cursor-pointer" onClick={()=>setQty(qty + 1)} >
          +
        </div>
      </div>
    </div>
  );
};

export default ItemQuantity;
