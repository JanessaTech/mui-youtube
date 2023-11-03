import {  Box,  Card, CardMedia, Typography } from '@mui/material'
import React from 'react'
import VideoActions from './VideoActions'
import VideoIntro from './VideoIntro'

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
            <Box sx={{mt:2}}>
                <Typography variant='h5'>Can China get on a new economic growth path? | DW Business</Typography>
                <VideoActions/>
                <VideoIntro/>
            </Box>
        </Card>
    </Box>
  )
}

