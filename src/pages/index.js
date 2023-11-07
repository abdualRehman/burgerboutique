import Head from "next/head";

// mui
import { Box, Button, Typography } from "@mui/material";

// component
import Category from "../components/Category";

import Image from "next/image";
import logo from "../../public/images/logo.jpg";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import MoneyOffCsredIcon from "@mui/icons-material/MoneyOffCsred";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import TwoWheelerOutlinedIcon from "@mui/icons-material/TwoWheelerOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import BottomBar from "../components/BottomBar";
export default function Home() {
  const router = useRouter();
  return (
    <>
      <Box sx={{ position: "relative", flexDirection: "column", gap: "1px" }}>
        {/* section 1 */}
        <Navbar />
        <Box
          px={2}
          display={"flex"}
          alignItems={"center"}
          py={2}
          sx={{
            borderBottom: "2px solid #dee2e6",
            animationDelay: 300,
            ":hover": {
              backgroundColor: "#f4f5f5",
            },
          }}
        >
          <Box flex={1} display={"flex"} alignItems={"center"} gap={2}>
            <Image
              alt="logo"
              src={logo}
              width={70}
              height={70}
              style={{ borderRadius: "8px" }}
            />
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
              gap={1}
            >
              <Typography variant="h6">Burger Boutique</Typography>
              <Box display={"flex"} gap={1.4}>
                <CreditCardOutlinedIcon style={{ color: "lightgreen" }} />
                <MoneyOffCsredIcon style={{}} />
              </Box>
            </Box>
          </Box>
          <Box
            width={"50px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            height={"50px"}
          >
            <div onClick={() => router.push("/contact")}>
              <InfoOutlinedIcon
                style={{ fontSize: "24px", cursor: "pointer" }}
              />
            </div>
          </Box>
        </Box>
        {/* section 2 */}
        <Box
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          py={2}
          sx={{ borderBottom: "2px solid #dee2e6" }}
        >
          <Button
            onClick={() => router.push("/select/branch")}
            variant="outlined"
            sx={{
              "&:hover": {
                bgcolor: "white",
                border:"1px solid #666666"
              },
              fontWeight: 400,
              borderColor: "#666666",
              color: "#666666",
              mx: 4,
            }}
          >
            Delivery
          </Button>
          <Button
            onClick={() => router.push("/select/branch")}
            variant="outlined"
            sx={{
              "&:hover": {
                bgcolor: "white",
                border:"1px solid #666666"
              },
              fontWeight: 400,
              borderColor: "#666666",
              color: "#666666",
              mx: 4,
            }}
          >
            Pickup
          </Button>
        </Box>
        {/* section 3 */}
        <Box
          sx={{ borderBottom: "2px solid #dee2e6" }}
          py={3}
          px={3}
          display={"flex"}
          flexDirection={"column"}
          gap={2}
        >
          <Box
            display={"flex"}
            px={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box flex={1} display={"flex"} alignItems={"center"} gap={3.5}>
              <TwoWheelerOutlinedIcon style={{ color: "#adadad" }} />
              <Typography variant="body2" color="#adadad">
                Deliver to
              </Typography>
            </Box>
            <Box
              flex={1}
              justifyContent={"flex-end"}
              display={"flex"}
              alignItems={"center"}
              gap={2}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 700,
                }}
                color={"black"}
              >
                Choose Location
              </Typography>
              <Typography
                onClick={() => router.push("/select/branch")}
                variant="body2"
                fontSize={"12px"}
                width={"20px"}
                color={"gray"}
                sx={{
                  "&:hover": {
                    bgcolor: "#f4f5f5",
                  },
                  cursor: "pointer",
                }}
              >
                Edit
              </Typography>
            </Box>
          </Box>
          <Box
            display={"flex"}
            px={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box flex={1} display={"flex"} alignItems={"center"} gap={3.5}>
              <AccessTimeOutlinedIcon style={{ color: "#adadad" }} />
              <Typography variant="body2" color="#adadad">
                Earliest Arrival
              </Typography>
            </Box>
            <Box
              flex={1}
              justifyContent={"flex-end"}
              display={"flex"}
              alignItems={"center"}
              gap={2}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                }}
                variant="body2"
                color={"black"}
              >
                Choose Location
              </Typography>
              <Typography
                variant="body2"
                fontSize={"12px"}
                width={"20px"}
                color={"gray"}
              ></Typography>
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          py={2}
          sx={{ borderBottom: "2px solid #dee2e6", backgroundColor: "#f4f5f5" }}
          mb={5}
        >
          <Category />
        </Box>

        {/* <Box>
        <Slider />
      </Box> */}
      </Box>
      <BottomBar />
    </>
  );
}
