import Image from "next/image";

// swiper
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// images
import slideOne from "../../public/images/s1.jpg";
import slideTwo from "../../public/images/s2.jpg";
import slideThree from "../../public/images/s3.jpg";

// mui
import { Button, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";

const Slider = () => {
  const isTablet = useMediaQuery("(max-width:900px)");

  const content = [
    {
      img: slideOne,
    },
    {
      img: slideTwo,
    },
    {
      img: slideThree,
    },
  ];

  return (
    <>
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1000}
        pagination={{
          dynamicBullets: false,
        }}
        modules={[Autoplay]}
        loop={true}
        className="mySwiper"
      >
        {content.map((item, i) => (
          <SwiperSlide key={i}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: `${isTablet ? "column" : "row"}`,
                justifyContent: "center",
                gap: "50px",
                mb: "10px",
              }}
            >
              <Box>
                <Image src={item.img} alt="banner" height={"570px"} />
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
