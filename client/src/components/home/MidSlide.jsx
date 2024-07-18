import { Box , styled} from "@mui/material"
import Slide from "./slide";

const Component = styled(Box)`
    display: flex;
    
`;

const LeftComponent = styled(Box)(( {theme}) => ({
    width: "83%",
    [theme.breakpoints.down('md')] : {
        width: "100%"
    }
}));

const RightComponent = styled(Box)(( {theme} ) => ({
    background: "#E72744",
    padding: 5,
    marginTop: 10,
    marginLeft: 10,
    width: "17%",
   textAlign: "center",
   [theme.breakpoints.down('md')]: {
     display: "none"
   }
 
}));

const MidSlide = ({products, title , timer}) => {
    const adURL = 'https://img.freepik.com/free-vector/super-sale-banner-design-vector-illustration_1035-14931.jpg?t=st=1717149560~exp=1717153160~hmac=4125f26a2d342b717b131f7c41850582b162ed9bab7a52c61848808f38481076&w=740';
    return(
        <Component>
            <LeftComponent>
            <Slide
             products = {products} 
             title= {title} 
             timer= {timer}/>
            </LeftComponent>
            <RightComponent>
            <img src={adURL} alt="ad" style={{width:217, height: 300}}/>
            </RightComponent>
        </Component>
    )
}

export default MidSlide;