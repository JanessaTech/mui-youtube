import { Box, Grid } from '@mui/material'
import React from 'react'
import Video from './Video';

export default function VideoLayout({videos}) {
  return (
    <Box sx={{mt:2}}>
        <Grid container spacing={{sm: 2, md:2, lg:3}} columns={{ xs: 2, sm: 8, md: 12, lg:12, xl:12}}>
            { videos.map( (video) => (
                <Grid key={video.id} item xs={2} sm={4} md={6} lg={4} xl={3}>
                    <Video {...video}/>
                </Grid>
            ))}          
        </Grid>
    </Box>
  )
}

