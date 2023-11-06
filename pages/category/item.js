import React from "react";

import p1 from "../../public/images/p1.jpg";
import p2 from "../../public/images/p2.jpg";
import p3 from "../../public/images/p3.jpg";
import Router from "next/router";
import { useRouter } from "next/router";
import { Box, Grid, Typography } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";

const combo = () => {
  const router = useRouter();
  const history = () => {
    Router.back();
  };

  const categories = [
    {
      img: p1,
      title: "BB Collection for 4 persons",
    },
    {
      img: p2,
      title: "The BB Curtet for 4 persons",
    },
    {
      img: p3,
      title: "The BB select 1 Person",
    },
  ];
  return (
    <div>
      <nav className="flex border-b border-gray-200 p-5">
        <div className="cursor-pointer" onClick={history}>
          <ArrowBackOutlinedIcon />
        </div>
        <h2 className="flex w-full  items-center font-semibold justify-center">
          Combo Meal
        </h2>
      </nav>
      <Box sx={{ p: 2 }} m="auto">
        <Grid container spacing={2}>
          {categories.map((item, i) => {
            return (
              <Grid
                sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
                item
                xs={6}
                key={i}
              >
                <Image
                  style={{
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                  onClick={() => router.push("/product/combo-meal/item")}
                  src={item.img}
                  alt="men"
                  width="380px"
                  height="270px"
                />
                <Typography
                  className="max-lg:line-clamp-2"
                  variant="body2"
                  sx={{ fontWeight: 700 }}
                  component="h2"
                >
                  {item.title}
                </Typography>
                <Typography
                  className="max-lg:line-clamp-2"
                  variant="body2"
                  sx={{ lineClamp: 1 }}
                  component="h2"
                >
                  Four bb burgers, two fresh fries, boneless buffalo chicken
                  with ranch, four soft drinks
                </Typography>
                <div className="w-full duration-300 rounded-md hover:bg-slate-200 flex items-center font-semibold py-[2px] justify-center gap-2 border border-black">
                  <AddIcon />
                  Add
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default combo;
