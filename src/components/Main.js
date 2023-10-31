import { Box } from '@mui/material'
import React from 'react'
import {fullDrawerWidth, minDrawerWidth, headerHeight} from '../common/Constants'
import YoutubeTabs from './YoutubeTabs';
import VideoLayout from './VideoLayout';

export default function Main({isLargeMenu, videos}) {

  return (
    <Box component='main'
        sx={{
            width: { xs: 1, sm: `calc(100% - ${minDrawerWidth}px - 24px)`, lg: isLargeMenu ? `calc(100% - ${fullDrawerWidth}px)`: `calc(100% - ${minDrawerWidth}px - 24px)`},
            position: 'absolute',
            top: headerHeight,
            left: {xs: 0, sm: minDrawerWidth + 24, lg: isLargeMenu ? fullDrawerWidth : minDrawerWidth + 24},
        }}
    >
        <YoutubeTabs curTab={'All'}/>
        <VideoLayout videos={videos}/>
    </Box>
  )
}

