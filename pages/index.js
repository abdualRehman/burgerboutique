import Head from "next/head";

// mui
import { Box, Button, Typography } from "@mui/material";

// component
import Category from "../components/Category";
import Slider from "../components/Slider";
import Image from "next/image";
import logo from "../public/images/logo.jpg";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import MoneyOffCsredIcon from "@mui/icons-material/MoneyOffCsred";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import TwoWheelerOutlinedIcon from "@mui/icons-material/TwoWheelerOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

export default function Home() {
  return (
    <Box
      px={2}
      sx={{ position: "relative", flexDirection: "column", gap: "1px" }}
    >
      {/* section 1 */}
      <Box
        display={"flex"}
        alignItems={"center"}
        py={2}
        sx={{ borderBottom: "2px solid #dee2e6" }}
      >
        <Box flex={1} display={"flex"} alignItems={"center"} gap={2}>
          <Image
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
          <InfoOutlinedIcon style={{ fontSize: "24px" }} />
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
          variant="outlined"
          sx={{
            "&:hover": {
              bgcolor: "white",
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
          variant="outlined"
          sx={{
            "&:hover": {
              bgcolor: "white",
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
              Earliest Arival
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
        sx={{ borderBottom: "2px solid #dee2e6" }}
        mb={5}
      >
        <Category />
      </Box>

      {/* <Box>
        <Slider />
      </Box> */}
    </Box>
  );
}
