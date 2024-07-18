
import { useState } from 'react';
import { AppBar , Toolbar, List , ListItem, Box, Typography, IconButton , Drawer , styled} from '@mui/material';
import {Menu} from '@mui/icons-material';

import { Link } from 'react-router-dom';

//components
import Search from './search';
import CustomButtons from './customButtons';

const StyledHeader = styled(AppBar)`
    background: #E82C4F;
    height: 55px;
    
`;

const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    text-decoration: none;
    color: inherit;
`;

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`;

const PlusImage = styled('img')({
    width: 10,
    height:10,
    marginLeft: 4
});

const CustomButtonWrapper = styled(Box)(( {theme}) => ({
    margin:" 0 5% 0 auto",
    [theme.breakpoints.down('md')]: {
        display: "none"
    }
}));
   
const MenuButton = styled(IconButton)(({theme}) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));

const Logo = styled('img')({
    margin: '30px 1px 30px 10px',
    padding: "10px 0px 10px 0px",
    height: 50,
    borderRadius: "50px"
});
const Header = () => {

    const logoURL = 'https://img.freepik.com/free-vector/hand-drawn-clothing-store-logo-design_23-2149577874.jpg?t=st=1717171756~exp=1717175356~hmac=938865f7b046d1aaec1ade11e96071422b50bd3ff03aa8c7ff2ba29ae9e5bf91&w=996';

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const list = () => (
        <Box style = {{width: 200}} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButtons/>
                </ListItem>
            </List>
        </Box>
    )

    return (
       <StyledHeader>
        <Toolbar style={{minHeight: 55}}>
        <MenuButton color='inherit' onClick={handleOpen}>
            <Menu/>
        </MenuButton>

        <Drawer open = {open} onClose={handleClose}>
        {list()}
        </Drawer>
            <Component to={'/'}>
                <Logo src={logoURL} alt="logo" style={{width:75}}/>
            </Component>
            <Search/>
            <CustomButtonWrapper>
            <CustomButtons/>
            </CustomButtonWrapper>

        </Toolbar>
       </StyledHeader>
    )
}

export default Header;