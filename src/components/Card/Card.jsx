import React, {useState} from 'react';
import "./index.css"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Cart({ el, active, handler }) {
    const [eded, setEded] = useState(1)


    return (
        <Card sx={{ maxWidth: 345 }} key={el.id}>
            <CardActionArea>
                <CardMedia
                    style={{ objectFit: "contain" }}
                    component="img"
                    height="400"
                    image={el.gallery[0]}
                    alt={el.id}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {el.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {el.prices[0].currency.symbol} {el.prices[0].amount}
                    </Typography>
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            {el.attributes.map(prop => {
                                if (prop.id == "Color") {
                                    return (
                                        <div style={{ display: "flex", gap: "10px" }}>
                                            {prop.items.map(color => {
                                                return <div className="colorCubic" style={{ backgroundColor: color.value, width: "30px", height: "30px" }}></div>
                                            })}
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div style={{ display: "flex", gap: "10px" }}>
                                            {prop.items.map(size => {
                                                return <div className="valueCubic" style={{ border: "1px solid gray", width: "50px", height: "30px" }}>{size.value}</div>
                                            })}
                                        </div>
                                    )
                                }
                            })}
                        </div>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => handler(el)}>
                    Add to Bag
                </Button>
            </CardActions>
        </Card>
        // <div className="card">
        //     <div>
        //         <img style={{objectFit: "fit", width: "100%"}}  src={el.gallery[0]} alt=""/>
        //     </div>
        //     <div>
        //         <h5>{el.name}</h5>
        //         <span>{el.prices[0].currency.symbol} {el.prices[0].amount}</span>
        //         <div style={{display: "flex",flexDirection: "column", gap: "10px"}}>
        //             {el.attributes.map(prop => {
        //                 if(prop.id == "Color"){
        //                     return (
        //                         <div style={{display: "flex", gap: "10px"}}>
        //                             {prop.items.map(color => {
        //                         return <div className="colorCubic" style={{backgroundColor: color.value, width: "30px", height: "30px"}}></div>
        //                    })}
        //                         </div>
        //                     )
        //                 }else {
        //                     return (
        //                         <div style={{display: "flex", gap: "10px"}}>
        //                             {prop.items.map(size => {
        //                         return <div className="valueCubic" style={{border: "1px solid gray",width: "50px", height: "30px"}}>{size.value}</div>
        //                    })}
        //                         </div>
        //                     )
        //                 }
        //             })}
        //         </div>
        //         <div className="green_shop" style={{position: "absolute", left: "80%", bottom: "20%"}}>
        //         <ShoppingCartOutlinedIcon style={{color: "rgb(94, 206, 12)", fontSize: "40px"}}/>
        //         </div>
        //     </div>
        //     {!el.inStock && <div style={{position: "absolute"}} className="availibility">Product is not available</div>}
        // </div>
    )
}