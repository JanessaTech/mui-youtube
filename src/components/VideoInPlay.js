import { Box, Card, CardMedia } from '@mui/material'
import React from 'react'

export default function VideoInPlay() {
  return (
    <Box sx={{width:1}}>
        <Card sx={{backgroundColor:'inherit'}} elevation={0}>
            <CardMedia
                sx={{borderRadius:4}}
                component='video'
                src='videos/20230529-210928.mp4'
                controls autoPlay
            >
            </CardMedia>
            <Box sx={{mt:2, backgroundColor:'purple', height:400}}>

            </Box>
        </Card>
    </Box>
  )
}

