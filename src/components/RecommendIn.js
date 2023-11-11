import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useTheme } from '@mui/material/styles'
import {GetRecommendedVideos} from '../data/MockRestfuls'
import VideoLayout from './VideoLayout';
import YoutubeTabs from './YoutubeTabs';

export default function RecommendIn() {
    const theme = useTheme();
    const [videos, setVideos] = React.useState([])
    useEffect(() => {
      // mock the functionalities of restful calling to get default recommended videos
      setVideos(GetRecommendedVideos(parseInt(localStorage.getItem('user')), undefined))
    }, [])
  return (
    <Box sx={{width:1, [theme.breakpoints.up('lg')]:{display:'none'}}}>
      <YoutubeTabs curTab={'All'}/>
      <VideoLayout videos={videos} sideline={true}/>
    </Box>
  )
}

