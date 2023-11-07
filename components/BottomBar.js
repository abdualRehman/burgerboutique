import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const BottomBar = ({ addToCart, category }) => {
  const router = useRouter();
  return addToCart ? (
    <Box
      sx={{
        position: "sticky",
        bottom: 0,
        width: "100%",
        paddingY: "7px",
        paddingLeft: "10px",
        paddingRight: "10px",
        backgroundColor: "white",
      }}
    >
      <Button
        className="bg-black font-extralight"
        variant="contained"
        sx={{
          "&:hover": {
            bgcolor: "black",
          },
          fontWeight: 100,
          width: "100%",
          py: 1,
          fontWeight: 400,
          backgroundColor: "black",
          color: "white",
        }}
      >
        <div className="flex justify-between w-full">
          <div className=" flex-[2.5] text-center ">Add To Cart</div>
          <div className="text-right">300 KD</div>
        </div>
      </Button>
    </Box>
  ) : category ? (
    <Box
      sx={{
        position: "sticky",
        bottom: 0,
        width: "100%",
        paddingY: "7px",
        paddingLeft: "10px",
        paddingRight: "10px",
        backgroundColor: "white",
      }}
    >
      <Button
        className="bg-black font-extralight"
        variant="contained"
        sx={{
          "&:hover": {
            bgcolor: "black",
          },
          fontWeight: 100,
          width: "100%",
          py: 1,
          fontWeight: 400,
          backgroundColor: "black",
          color: "white",
        }}
      >
        <div className="flex justify-between w-full">
          <div className="text-right">1</div>
          <div className=" flex-[2.5] text-center ">Review Your Order</div>
          <div className="text-right">300 KD</div>
        </div>
      </Button>
    </Box>
  ) : (
    <Box
      sx={{
        position: "sticky",
        bottom: 0,
        width: "100%",
        paddingY: "7px",
        paddingLeft: "10px",
        paddingRight: "10px",
        backgroundColor: "white",
      }}
    >
      <Button
        onClick={() => router.push("/select/branch")}
        className="bg-black font-extralight"
        variant="contained"
        sx={{
          "&:hover": {
            bgcolor: "black",
          },
          fontWeight: 100,
          width: "100%",
          py: 1,
          fontWeight: 400,
          backgroundColor: "black",
          color: "white",
        }}
      >
        Select Your Location
      </Button>
    </Box>
  );
};

export default BottomBar;
