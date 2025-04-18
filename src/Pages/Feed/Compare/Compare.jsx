import React from 'react'
import "./Compare.css"
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Fab, Grid, Typography } from "@mui/material"
import data from "../../../db/ClothesData.json"

const Compare = (props) => {

    let path = "https://img.freepik.com/free-photo/purchase-sale-discount-fashion-style_53876-15282.jpg?ga=GA1.1.1315428490.1744818360&semt=ais_hybrid&w=740"

    let dummy_data = data[1]
    console.log(props.compareThisData);
    return (
        <Box className="compare-container">
            <Box className='compare-heading'>
                <h1>Compare Your Fav Products</h1>
                <Button onClick={props.handleClose} variant='contained'>Go Back</Button>
            </Box>
            <Grid container columns={12} gap={3}>
          

                <Grid size={2.5 } className='g1' boxShadow={12}>
                    <Box height="50vh" mb="5vh"
                        sx={{ backgroundImage: `url(${path})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", mb: "5vh", borderRadius: "2vw" }}
                    >
                    </Box>
                    <Typography>Name</Typography>
                    <Typography>brand</Typography>
                    <Typography>Material</Typography>
                    <Typography>Weight</Typography>
                    <Typography>Color</Typography>
                    <Typography>price</Typography>
                    <Typography>rating</Typography>

                </Grid>

            
                {props.compareThisData.length > 0 && props.compareThisData.map((item) => {
                    return <Grid size="grow" className='compare-grid' boxShadow={12}>
                        <Box className='ass' height="50vh" bgcolor=''
                            sx={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", mb: "5vh", borderRadius: "2vw" }}>
                        </Box>
                        <Typography>{item.name}</Typography>
                        <Typography>{item.brand}</Typography>
                        <Typography>{item.material}</Typography>
                        <Typography>{item.weight}</Typography>
                        <Typography>{item.color}</Typography>
                        <Typography>{item.price}</Typography>
                        <Typography>{item.rating}</Typography>
                    </Grid>
                })}
            </Grid>
        </Box>
    )
}

export default Compare