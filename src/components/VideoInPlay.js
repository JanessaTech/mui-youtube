import {  Box,  Card, CardMedia, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import VideoActions from './VideoActions'
import VideoIntro from './VideoIntro'
import {GetVideoDetails} from '../data/MockRestfuls'

export default function VideoInPlay({vid}) {
  const [video, setVideo] = React.useState({})
  useEffect(() => {
    setVideo(GetVideoDetails(vid))
  },[vid])

  return (
    <Box sx={{width:1}}>
        <Card sx={{backgroundColor:'inherit'}} elevation={0}>
            <CardMedia
                sx={{borderRadius:4}}
                component='video'
                src={video.videoSrc}
                controls autoPlay
            >
            </CardMedia>
            <Box sx={{mt:2}}>
                <Typography variant='h5'>{video.title}</Typography>
                <VideoActions video={video}/>
                <VideoIntro video={video}/>
            </Box>
        </Card>
    </Box>
  )
}

