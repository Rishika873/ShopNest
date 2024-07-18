
import { useEffect } from "react";

//components
import NavBar from "./navbar";
import Banner from "./banner";
import Slide from './slide';
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";


import { Box, styled } from "@mui/material";
import { getProducts } from "../../redux/actions/productAction";
import { useDispatch , useSelector} from "react-redux";

const Component = styled(Box)`
    padding: 10px;
    background: #E82C4F;
`;

const Home = () => {

    const  {products}= useSelector(state => state.getProducts);
  

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch (getProducts())
    }, [dispatch])

    return (
        <>
        <NavBar/>
        <Component>
             <Banner/>
             <MidSlide products = {products} title= "Deal of the Day" timer= {true} />
             <MidSection/>
             <Slide products = {products} title= "Discount for you" timer= {false}/>
             <Slide products = {products} title= "Suggested Items" timer= {false}/>
             <Slide products = {products} title= "Top Selection" timer= {false}/>
             <Slide products = {products} title= "Recommended Items" timer= {false}/>
             <Slide products = {products} title= "Trending Offers" timer= {false}/>
             <Slide products = {products} title= "Season's top picks" timer= {false}/>
             <Slide products = {products} title= "Top Deals on Acessories" timer= {false}/>   
             
        </Component>
        
        </>
    )
}

export default Home;