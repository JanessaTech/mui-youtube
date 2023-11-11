import { Box, Grid } from '@mui/material'
import React from 'react'
import Video from './Video';

export default function VideoLayout({videos, sideline}) {
  return (
    <Box sx={{my:2}}>
        <Grid container spacing={{sm: 2, md:2, lg:3}} columns={{ xs: 2, sm: 8, md: 12, lg:12, xl:12}}>
            { videos.map( (video) => (
                <Grid key={video.id} item xs={2} sm={sideline ? 8: 4} md={sideline ? 12: 6} lg={sideline ? 12 : 4} xl={sideline ? 12 : 3}>
                    <Video {...video} sideline={sideline}/>
                </Grid>
            ))}          
        </Grid>
    </Box>
  )
}

