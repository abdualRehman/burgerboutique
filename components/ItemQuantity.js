import React from "react";

const ItemQuantity = () => {
  return (
    <div className="pl-2 pr-2 pb-3 flex items-center justify-between">
      <span className="font-semibold">1200 KD</span>
      <div className="flex border rounded-full h-8 border-gray-400 items-center max-h-max">
        <div className="p-2 border-r text-lg justify-center font-bold h-8 flex items-center border-gray-400 ">
          -
        </div>
        <div className="px-5">1</div>
        <div className="p-2 border-l font-bold justify-center text-lg h-8 flex items-center border-gray-400 ">
          +
        </div>
      </div>
    </div>
  );
};

export default ItemQuantity;
