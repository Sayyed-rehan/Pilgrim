import React, { useState } from 'react'
import "./Feed.css"
import { Box, Button, Modal, Typography } from "@mui/material"
import Cards from '../../assets/Components/Cards/Cards'
import data from "../../db/ClothesData.json"
import Compare from './Compare/Compare'
import { useNavigate } from 'react-router'


const Feed = () => {

  const nav = useNavigate()

  const [compareThisData, setcompareThisData] = useState([])

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCompareThisData = (data) => {
    if (compareThisData.length < 3) {
      setcompareThisData([...compareThisData, data])
    } else {
      console.log("sorry");
    }
  }

  const handleRemoveThisData = (data) => {
    console.log('remove this one', data)
    let filtered_Data = compareThisData.filter((item, idx) => item.name != data.name)
    console.log(filtered_Data);
    setcompareThisData(filtered_Data)
  }





  return (
    <Box className="feed-container">
    <Box className='feed-heading'>
    <Button onClick={()=>nav("/task2")} variant='contained'>Go to Product Configure</Button>
      <Typography variant='h3'>Welcome To Aura</Typography>
      <Button variant='contained' onClick={handleOpen}>See Compared Data</Button>
    </Box>
      <Modal open={open} onClose={handleClose}>
        <Compare
          compareThisData={compareThisData}
          handleClose={handleClose}
        />
      </Modal>
      <Box className="feed-cards">
        {data.map((item, index) => {
          return <Cards key={index}
            data={item}
            handleCompareThisData={handleCompareThisData}
            handleRemoveThisData={handleRemoveThisData}
            length = {compareThisData.length}
          />
        }
        )}
      </Box>
    </Box>
  )
}

export default Feed