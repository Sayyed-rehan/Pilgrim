import React, { useState } from 'react'
import "./ProductConfig.css"
import { Alert, Box, Button, Fab, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, Snackbar, Typography } from '@mui/material'
import data from "../../../db/ClothesData.json"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import data2 from "../../../db/ProductConfigureData.json"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';



// Render a product card with:
// o A basic t-shirt image 
// o Size dropdown
// o Color selector (radio or buttons)
// o Quantity selector (+ / – buttons with min 1, max 10)
// o Live updating price (base price ₹499 x quantity)
// o “Add to Cart” button (on click, show a confirmation message with selected
// options)

const ProductConfig = () => {

    console.log(data2)
    const colorObj = data2[0].color
    // console.log(Object.keys(colorObj))

    const [size, setsize] = useState(data2[0].size[0])

    const [qty, setqty] = useState(1)

    const [color, setcolor] = useState(Object.keys(colorObj)[0])

    const [open, setOpen] = useState(false);


    const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      }


    const handleSizeChange = (e) => {
        setsize(e.target.value)
    }
    console.log(data2[0].color[color])

    const handleAddClick = () => {
        if (qty < 10) {
            setqty(qty + 1)
        }
    }

    const handleMinusClick = () => {
        if (qty > 1) {
            setqty(qty - 1)
        }
    }

    const handleColorChange = (e) => {
        console.log(e.target.value);
        setcolor(e.target.value)
    }

    const handleAddCart = () => {
        console.log(color, size, qty, data2[0].price * qty);

    }



    return (
        <Box className="ProductConfig-container">
            <Typography variant='h4' textAlign='center' fontWeight='bold' color="#424242">Product Configrator</Typography>
            <Snackbar
            open={open}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert severity="success" variant='filled' onClose={handleClose}>Product is Added to Cart</Alert>
            </Snackbar>
            <Grid container>
                <Grid size={6} bgcolor='' className='grid-1'>
                    <Typography variant='h4' color="#424242">{data2[0].name}</Typography>
                    <Typography variant='h5' color="#757575">{data2[0].brand}</Typography>
                    <Typography variant='h6'>{data2[0].material}</Typography>
                    <FormControl >
                        <InputLabel id="demo-simple-select-label">Size</InputLabel>
                        <Select
                            value={size}
                            label="Size"
                            onChange={handleSizeChange}
                        >
                            {data2[0].size.map((item, idx) => {
                                return <MenuItem value={item} key={item}>{item}</MenuItem>

                            })}

                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel color='#424242' sx={{ fontWeight: "bold", fontSize: "large" }} >Color</FormLabel>
                        <RadioGroup row onChange={handleColorChange} value={color}>
                            {Object.keys(colorObj).map((item, index) => {
                                return (
                                    <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
                                )
                            })}

                        </RadioGroup>
                    </FormControl>
                    <Box className='qty-section'>
                        <Fab size="small" color="info" onClick={handleMinusClick}>
                            <RemoveIcon />
                        </Fab>
                        <Typography color="#424242" variant='h6'>{qty}</Typography>
                        <Fab size="small" color="info" onClick={handleAddClick}>
                            <AddIcon />
                        </Fab>
                    </Box>
                </Grid>
                <Grid size={"grow"} bgcolor='' className='grid-2'>
                    <Box className='product-config-img' sx={{ backgroundImage: `url(${data2[0].color[color]})` }} >
                    </Box>
                    <Typography variant='h5' color="#424242" fontWeight='bolder' sx={{ display: 'flex', alignItems: 'center' }} >
                        <CurrencyRupeeIcon fontSize='medium' sx={{ color: '#424242' }} />
                        {data2[0].price * qty}
                    </Typography>
                    <Button variant='contained' color="info" fullWidth onClick={handleClick}>Add To Cart</Button>

                </Grid>
            </Grid>
        </Box >
    )
}

export default ProductConfig