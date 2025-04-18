import React, { useState } from 'react'
import "./Cards.css"
import { Alert, Box, Card, CardActions, CardContent, CardMedia, Collapse, IconButton, Snackbar, Stack, Typography } from "@mui/material"
import StarIcon from '@mui/icons-material/Star';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CompareIcon from '@mui/icons-material/Compare';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import StraightenIcon from '@mui/icons-material/Straighten';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ClearIcon from '@mui/icons-material/Clear';
// import {ExpandMoreIcon, CurrencyRupeeIcon,CompareIcon, StarIcon,  StraightenIcon} from "@mui/icons-material/"

const Cards = (props) => {

    const [expanded, setExpanded] = useState(false);

    const [isCompared, setisCompared] = useState(false)

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleCompare = () => {
        if (props.length < 3) {
            console.log(isCompared);
            console.log(props.data);
            setisCompared(true)
            props.handleCompareThisData(props.data)
        } else {
            console.log("Alamknasj");
            handleClick()

        }
    }

    const handleRemoveCompare = () => {
        console.log(isCompared);
        console.log('clicked',)
        setisCompared(false)
        props.handleRemoveThisData(props.data)
    }




    // console.log(data[0])
    let dummy = props.data
    return (
        <Box className="card">
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
    onClose={handleClose}
    severity="error"
    variant='filled'
    sx={{ width: '100%' }}
  >
  Cannot Add more than 3 Items
  </Alert>
        </Snackbar>
            <Card sx={{ width: 335, boxShadow: "12", borderRadius:"10px" }}>
                <CardMedia

                    component="img"

                    image={dummy.image}
                    alt="Paella dish"
                    className='card-img'
                />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: "15px" }}>
                    <Typography variant='h5' fontWeight='bold'>{dummy.name}</Typography>
                    <Stack direction='row' justifyContent='space-around'>
                        <Typography variant='subtitle1'>{dummy.material}</Typography>
                        <Typography variant='subtitle1'>{dummy.brand}</Typography>
                    </Stack>

                    <Stack bgcolor='' direction='row' justifyContent='space-around'>
                        <Typography bgcolor='' sx={{ display: 'flex', alignItems: 'center', gap: "5px", color: "gray" }} fontSize='20px' fontWeight='bold'>
                            <CurrencyRupeeIcon fontSize='medium' sx={{ color: '#4caf50' }} />
                            {dummy.price}
                        </Typography>

                        <Typography bgcolor='' sx={{ display: 'flex', alignItems: 'center', gap: "5px", color: "gray" }} fontSize="20px" fontWeight='bold'>
                            {dummy.rating}
                            <StarIcon sx={{ color: "#fdd835", fontSize: "30px" }} />
                        </Typography>
                    </Stack>

                </CardContent>
                <CardActions justifyContent='space-between'>
                    <IconButton >
                        {/* <CompareIcon color={isCompared ?"disabled" :"error"} sx={{ fontSize: '35px' }} /> */}
                        {isCompared
                            ? <ClearIcon color='error' sx={{ fontSize: '35px' }} onClick={handleRemoveCompare} />
                            : <CompareIcon color='info' sx={{ fontSize: '35px' }} onClick={handleCompare} />
                        }
                    </IconButton>
                    <ExpandMore expand={expanded}
                        onClick={handleExpandClick}>
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent sx={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Typography sx={{ display: 'flex', alignItems: 'center', gap: "10px", color: "gray", fontSize: "17px", fontWeight: 'bold' }}>
                            <ColorLensIcon color='primary' />
                            {dummy.color}
                        </Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center', gap: "10px", color: "gray", fontSize: "17px", fontWeight: 'bold' }}>
                            <StraightenIcon color='gray' />
                            {dummy.size[0]}
                        </Typography>

                    </CardContent>
                </Collapse>
            </Card>
        </Box>
    )
}

export default Cards