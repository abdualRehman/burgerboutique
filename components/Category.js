import Image from "next/image";

// images
import men from "../public/men.jpg";
import women from "../public/women.jpg";
import electronics from "../public/electronics.jpg";
import jewelery from "../public/jewelery.jpg";

// mui
import { Box } from "@mui/system";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";

import p1 from "../public/images/p1.jpg";
import p2 from "../public/images/p2.jpg";
import p3 from "../public/images/p3.jpg";
import p4 from "../public/images/p4.jpg";
import p5 from "../public/images/p5.jpg";
import p6 from "../public/images/p6.jpg";
import p7 from "../public/images/p7.jpg";
import p8 from "../public/images/p8.jpg";
import { useRouter } from "next/router";

const categories = [
  {
    img: p1,
    title: "Combo Meal",
  },
  {
    img: p2,
    title: "SALADS / APPETIZERS",
  },
  {
    img: p3,
    title: "BEEF BURGERS",
  },
  {
    img: p4,
    title: "CHICKEN BURGERS",
  },
  {
    img: p5,
    title: "SLIDERS",
  },
  {
    img: p6,
    title: "LEMONADES",
  },
  {
    img: p7,
    title: "SODAS & WATER",
  },
  {
    img: p8,
    title: "Extra Toppings",
  },
];

const Category = () => {
  const isTablet = useMediaQuery("(max-width:900px)");
  const router = useRouter();

  return (
    <Box m="auto">
      <Grid container spacing={2}>
        {categories.map((item, i) => {
          return (
            <Grid item xs={6} key={i}>
              <Image
                onClick={() => router.push("/category/item")}
                style={{
                  borderRadius: "7px",
                  objectFit: "contain",
                  cursor: "pointer",
                }}
                src={item.img}
                alt="men"
                width="380px"
                height="270px"
              />
              <Typography
                variant="body2"
                sx={{ fontWeight: 700 }}
                component="h2"
              >
                {item.title}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
      {/* <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap='20px' mb='20px'>
                <Box sx={{ position: 'relative' }}>
                    <Image src={men} alt='men' width='380px' height='500px' />
                    <Box sx={{
                        position: 'absolute', top: '0px', bottom: '0px', right: '0px', left: '0px', width: '100%', height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)', display: 'flex', gap: '30px',
                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Typography variant='h6' component='h3' color='white'>
                            mens clothing
                        </Typography>
                        <Link href='/products'>
                            <Button variant='outlined' color='secondary'>
                                Shop Now
                            </Button>
                        </Link>
                    </Box>
                </Box>
                <Box sx={{ position: 'relative' }}>
                    <Image src={electronics} alt='men' width='500px' height='350px' />
                    <Box sx={{
                        position: 'absolute', top: '0px', bottom: '0px', right: '0px', left: '0px', width: '100%', height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)', display: 'flex', gap: '30px', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Typography variant='h6' component='h3' color='white'>
                            electronics
                        </Typography>
                        <Link href='/products'>
                            <Button variant='outlined' color='secondary'>
                                Shop Now
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>

            <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap='20px'>
                <Box sx={{ position: 'relative' }}>
                    <Image src={women} alt='men' width='500px' height='350px' />
                    <Box sx={{
                        position: 'absolute', top: '0px', bottom: '0px', right: '0px', left: '0px', width: '100%', height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)', display: 'flex', gap: '30px', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Typography variant='h6' component='h3' color='white'>
                            womens clothing
                        </Typography>
                        <Link href='/products'>
                            <Button variant='outlined' color='secondary'>
                                Shop Now
                            </Button>
                        </Link>
                    </Box>
                </Box>
                <Box sx={{ position: 'relative' }}>
                    <Image src={jewelery} alt='men' width='400px' height='500px' />
                    <Box sx={{
                        position: 'absolute', top: '0px', bottom: '0px', right: '0px', left: '0px', width: '100%', height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)', display: 'flex', gap: '30px', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Typography variant='h6' component='h3' color='white'>
                            jewelery
                        </Typography>
                        <Link href='/products'>
                            <Button variant='outlined' color='secondary'>
                                Shop Now
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box> */}
    </Box>
  );
};

export default Category;
