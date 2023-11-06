import React from "react";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { useRouter } from "next/router";

const PickupStore = () => {
  const router = useRouter();
  return (
    <div className="mt-8">
      <h3 className="text-sm p-2 font-semibold">Choose a store</h3>
      <div className="bg-white border-y border-gray-300 p-3">
        <div className="w-full flex justify-between items-center">
          <span className="font-semibold ml-2 border-b w-full pb-2 border-gray-300">
            Burger Boutique
          </span>
          <div onClick={() => router.push("/branch/1734")} className="pl-2">
            <HelpOutlineOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickupStore;
