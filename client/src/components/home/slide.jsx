
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Countdown from 'react-countdown';

import { Box , Typography , Button, Divider, styled} from "@mui/material";
import { Link } from "react-router-dom";

const responsive = {
   
    desktop: {
        breakpoint: { max: 3000, min: 1024},
        items: 5
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1
    }

};

const Timer = styled(Box)`
    display: flex;
    margin-left: 10px;
    align-items: center;
    color: #E72744;
`;

const Component = styled(Box)`
    margin-top: 10px;
    background: #ffffff;
`;

const Deal = styled(Box)`
    background-color: #ffffff;
    padding: 15px 20px;
    display: flex;
`;

const DealText = styled(Typography)`
    color: #E72744;
    font-size: 22px;
    font-weight: 600;
    margin-right: 25px;
    line-height: 32px;
`;

const ViewAllButton = styled(Button)`
    margin-left: auto;
    background-color: #E72744;
    border-radius: 2px;
    font-size: 13px;
    font-weight: 600;
    color: #fff;
    &:hover {
        background: #fff;  
        color: #E72744;          
`;

const Image = styled('img')({
    // backgroundColor: '#F9E795',
    width: 'auto',
    height: 150
});

const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px;
`;

const Slide = ({products, title , timer}) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({hours, minutes, seconds}) => {
        return <Box variant = "span">{hours} : {minutes} : {seconds} Left</Box>;
    }

    return(
        <Component >
            <Deal>
                <DealText >{title}</DealText>
                {
                    timer &&
                    <Timer>
                        <img src={timerURL} alt="timer" style={{width: 24}}/>
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer}/>
                    </Timer>
                }
                

                <ViewAllButton variant="contained" >View All</ViewAllButton>
            </Deal>
            <Divider/>
        <Carousel 
                responsive = {responsive}
                swipeable= {false}
                draggable= {false}
            //    showDots= {true}
                infinite= {true}
                autoPlay= {true}
                autoPlaySpeed={4000} 
                keyBoardControl= {true}
                centerMode= {true}
                dotListClass='custom-dot-list-style' itemClass='carousel-item-padding-40px' containerClass='carousel-container'
        >
            {
                products.map(product => (
                <Link to={`product/${product.id}`} style={{textDecoration: "none"}}>
                    <Box textAlign="center" style= {{padding: '25px 15px'}}>
                        <Image src = {product.url} alt="product"/>
                        <Text style={{fontWeight: 600, color: '#212121'}}>{product.title.shortTitle}</Text>
                        <Text style={{color: 'red'}}>{product.discount}</Text> 
                        <Text style={{color: '#212121' , opacity: '.6'}}>{product.tagline}</Text>
                    </Box>
                </Link>
                ))
            }
        </Carousel>
     </Component>
    )
}
export default Slide;