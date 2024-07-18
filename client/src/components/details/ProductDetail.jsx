import{ Box, Table, TableBody, TableCell, TableRow, Typography ,styled} from '@mui/material';
import {LocalOffer as Badge} from '@mui/icons-material';

const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`;

const StyledBadge = styled(Badge)`
    margin-right: 10px;
    color: #FD913C;
    font-size: 15px;
`;

const ColumnText = styled(TableRow)`
font-size: 14px;
vertical-align: baseline;
& > td {
    font-size: 14px;
    margin-top: 10px;
    border: none;
}
`

const ProductDetail = ({product}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const date = new Date(new Date().getTime()+(5 * 24 * 60 * 60* 1000));
   
    return(
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{marginTop: 5, color: "#878787" , fontSize: 14}}>8 Ratings & 1 Review
            </Typography>
            <Typography>
                <Box component="span" style={{fontSize: 28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color: '#388e3c'}}>{product.price.discount}</Box>&nbsp;&nbsp;&nbsp;
            </Typography>
            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography><StyledBadge/>Bank OfferGet ₹50 instant discount on first UPI txn on order of ₹200 and aboveT&C</Typography>
                <Typography><StyledBadge/>Bank Offer5% Cashback on Axis Bank CardT&C</Typography>
                <Typography><StyledBadge/>Bank Offer10% off up to ₹1,250 on HDFC Bank Credit Card EMI Txns, Tenure: 6 and 9 months, Min Txn Value: ₹7500T&C</Typography>
                <Typography><StyledBadge/>Special PriceGet extra 22% off (price inclusive of cashback/coupon)T&C</Typography>
                <Typography><StyledBadge/>FreebieFlat 1000 off on hotels booking + flat 500 Super coinsT&C</Typography>
                <Typography><StyledBadge/>FreebieFlat 650 off on flights booking + flat 500 Super CoinsT&C</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{color: "#878787"}}>Delivery</TableCell>
                        <TableCell style={{fontWeight: 600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color: "#878787"}}>Warranty</TableCell>
                        <TableCell > No Warranty </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color: "#878787"}}>Seller</TableCell>
                        <TableCell > 
                        <Box component="span" style={{color: "#2874f0"}}>SuperComNet</Box>
                        <Typography>GST invoice available</Typography>
                        <Typography>View more sellers starting from ₹{product.price.cost} </Typography> 
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color: "#878787"}}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>

    )
}

export default ProductDetail;