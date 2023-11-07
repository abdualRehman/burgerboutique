import React from "react";
import CartItemQuantity from "./CartItemQuantity";

const Soda = ({ setActiveSoda, activeSoda, name }) => {
  const item = activeSoda.find((item) => item === name);
  return (
    <div
      className={`flex mx-2  items-center pt-4 pr-4 rounded-md ${item === name ? 'border-2 border-black' : ''}  justify-between`}
    >
      <div className={`form-group  w-full  flex items-center`}>
        <input
          onClick={() => setActiveSoda((prev) => [...prev, name])}
          type="checkbox"
          id={name}
        />
        <label className="font-semibold text-gray-500 " htmlFor={name}>
          {name}
        </label>
      </div>
      <CartItemQuantity />
    </div>
  );
};

export default Soda;
