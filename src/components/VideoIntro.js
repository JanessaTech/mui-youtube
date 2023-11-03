import { Box, Button } from '@mui/material'
import React from 'react'

export default function VideoIntro() {
  return (
    <Box sx={{mt:2, mb:3, backgroundColor:'grey.200', width:1, height:300, borderRadius:3, '&:hover': {backgroundColor:'grey.300'}, cursor:'pointer'}}>
        <Button color="secondary" style={{textTransform: 'none'}} >More</Button>

    </Box>
  )
}

