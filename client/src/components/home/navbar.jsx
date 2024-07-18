import { Box, Typography, styled } from "@mui/material";
import { navData } from "../../constants/data";

const Component = styled(Box)(({theme} ) => ({
    display: "flex",
    margin: "55px 130px 0 130px",
    justifyContent: "space-between",
    overflow: 'hidden',
    backgroundColor:"#ffffff",
    [theme.breakpoints.down('lg')]: {
        margin: 0
    }
    
}));

const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center;
    background-color: '#000';
`;

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;

`

const NavBar= () => {
    return(
        <Box style= {{backgrround: "#F9E795"}}>
            <Component>
            {
                navData.map(data => (
                    <Container>
                    <img src={data.url} alt="nav" style={{width: 70 , backgroundColor: "#ffffff", height: 70}}/>
                    <Text>{data.text}</Text>

                    </Container>
                ))
            }
            </Component>
        </Box>
    )
}

export default NavBar;