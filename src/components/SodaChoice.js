import React, { useState } from "react";
import Soda from "./Soda";
import SpecialRequests from "./SpecialRequests";

const SodaChoice = () => {
  const sodas = ["Coke", "Coke Zero", "Sprite"];
  const [activeSoda, setActiveSoda] = useState([]);

  return (
    <div>
      <h3 className="ml-2 mt-6 font-semibold mb-2">Choice of soda</h3>
      <div className="bg-white  p-3">
        <div className="flex gap-3 mb-6 items-center">
          <span className="bg-gray-400 flex items-center justify-center w-fit rounded-xl px-3 py-1 text-white" style={{ fontSize: "13px" }}>
            Required
          </span>
          <span style={{ fontSize: "13px" }} >min:4, max:4</span>
        </div>
        <div className="flex flex-col gap-6">
          {sodas.map((soda) => (
            <Soda
              setActiveSoda={setActiveSoda}
              activeSoda={activeSoda}
              key={soda}
              name={soda}
            />
          ))}
        </div>
      </div>
      <SpecialRequests />
    </div>
  );
};

export default SodaChoice;
