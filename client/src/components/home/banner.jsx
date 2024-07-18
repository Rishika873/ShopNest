
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Box, styled } from '@mui/material';
import { bannerData } from '../../constants/data';

const Container = styled(Box) (( {theme}) => ({
    backgroundColor: "#e1daba",
    width: "100%",
    height: "50vh",
    overflow: "hidden",
    [theme.breakpoints.down('lg')]: {
        objectPosition: 'center',
        height: "40vh"
    }
}))

const Image = styled('img') (({ theme }) => ({
    objectPosition: 'center',
    width: "100%",
    height: 600,
    objectFit: 'cover',
  [theme.breakpoints.down('lg')]: {
        objectFit: 'cover',
        objectPosition: 'center',
        height: 480
   }
}));

const responsive = {
   
    desktop: {
        breakpoint: { max: 3000, min: 1024},
        items: 1
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 1
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1
    }

};

const Banner = () => {

    return (
       <Carousel responsive={responsive} 
       swipeable= {false}
       draggable= {false}
       showDots= {true}
       infinite= {true}
       autoPlay= {true}
       autoPlaySpeed={4000} 
       keyBoardControl= {true}
       slidesToSlide={1}
       dotListClass='custom-dot-list-style' itemClass='carousel-item-padding-40px' containerClass='carousel-container'>
        {
            bannerData.map(data => (
                <Container>
                <Image src={data.url} alt="banner" />
                </Container>
            ))
        }
        </Carousel>
    )
}

export default Banner;