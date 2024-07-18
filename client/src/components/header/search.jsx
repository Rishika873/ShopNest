import { Box,List, ListItem, InputBase, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState , useEffect} from "react";
import {useSelector , useDispatch} from "react-redux";
import {getProducts} from '../../redux/actions/productAction';
import { Link } from "react-router-dom";


const SearchContainer = styled(Box)`
    background: #fff;
    width: 45%;
    border-radius: 10px;
    margin-left: 10px;
    display: flex;
`;

const InputSearchBase = styled(InputBase)`
    padding-left :20px;
    width: 100%;
    font-size: unset;
    font-family: cursive;
`;

const SearchIconWrapper = styled(Box)`
    color: #F96167;
    padding: 5px;
    display: flex;
`;

const ListWrapper = styled(List)`
    position: absolute;
    border: 2px solid #E72744;
    border-radius: 10px;
    background: #ffffff;
    color: #000;
    margin-top: 36px;
`;


const Search = () => {

    const [text, setText] = useState('');

    const {products} = useSelector(state => state.getProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const getText =(text) => {
        setText(text);

    }
    return(
    <SearchContainer>
        <InputSearchBase placeholder="Search for products, brands and more"  onChange= {(e) => getText(e.target.value)}
        value={text}/>
        
        <SearchIconWrapper>
            <SearchIcon/>
        </SearchIconWrapper>
        {
            text && 
            <ListWrapper>
                {
                    products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                        <ListItem>
                            <Link  
                            to= {`product/${product.id}`}
                            onClick={() => setText('')}
                            style={{textDecoration: "none" , color: "inherit"}}>
                                {product.title.longTitle}
                            </Link>  
                        </ListItem>
                    ))
                }
            </ListWrapper>
        }
    </SearchContainer>
    )
}

export default Search;