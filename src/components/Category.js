import Image from "next/image";

// images
import men from "../../public/men.jpg";
import women from "../../public/women.jpg";
import electronics from "../../public/electronics.jpg";
import jewelery from "../../public/jewelery.jpg";
// mui
import { Box } from "@mui/system";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
// import { productsData } from "../constants/dummySoda";

const Category = () => {
    const isTablet = useMediaQuery("(max-width:900px)");
    const router = useRouter();

    const { categories } = useSelector(state => state.products);

    return (
        <Box
            px={2}
            sx={{ backgroundColor: "#f4f5f5", paddingTop: "28px" }}
            m="auto"
        >
            <Grid container spacing={2}>
                {categories && categories.map((item, i) => {
                    return (
                        <Grid item xs={6} key={i}>
                            <Image
                                // onClick={() => router.push("/category/item")}
                                onClick={() => router.push("/category/" + item.id)}
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
