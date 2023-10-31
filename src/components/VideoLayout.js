import { Box, Grid } from '@mui/material'
import React from 'react'
import Video from './Video';

export default function VideoLayout({videos}) {
  /*
    const videos = [
        {id: 0, key:'Javascript algorithm', url: 'detail', videoSrc: 'videos/20230529-210928.mp4', author: 'Janessa Tech', img_profile: 'imgs/prof.png', title: "Javascript algorithm", views:'1.5K views', days:'5 days ago'},
        {id: 1, key:'Javascript algorithm', url: 'detail', videoSrc: 'videos/20230529-210928.mp4', author: 'Janessa Tech', img_profile: 'imgs/prof.png', title: "Javascript algorithm", views:'1.5K views', days:'5 days ago'},
        {id: 2, key:'tailwind css tutorial', url: 'detail', videoSrc: 'videos/20230529-210928.mp4', author: 'Janessa Tech', img_profile: 'imgs/prof.png', title: "tailwind css tutorial", views:'1.5K views', days:'5 days ago'},
        {id: 3, key:'defi dapp', url: 'detail', videoSrc: 'videos/20230529-210928.mp4', author: 'Janessa Tech', img_profile: 'imgs/prof.png', title: "defi dapp", views:'1.5K views', days:'5 days ago'},
        {id: 4, key:'defi dapp', url: 'detail', videoSrc: 'videos/20230529-210928.mp4', author: 'Janessa Tech', img_profile: 'imgs/prof.png', title: "defi dapp", views:'1.5K views', days:'5 days ago'},
        {id: 5, key:'defi dapp', url: 'detail', videoSrc: 'videos/20230529-210928.mp4', author: 'Janessa Tech', img_profile: 'imgs/prof.png', title: "defi dapp", views:'1.5K views', days:'5 days ago'},
        {id: 6, key:'React js tips and tricks', url: 'detail', videoSrc: 'videos/20230529-210928.mp4', author: 'Janessa Tech', img_profile: 'imgs/prof.png', title: "React js tips and tricks", views:'1.5K views', days:'5 days ago'},
        {id: 7, key:'web3.0 fullstack developer', url: 'detail', videoSrc: 'videos/20230529-210928.mp4', author: 'Janessa Tech', img_profile: 'imgs/prof.png', title: "web3.0 fullstack developer", views:'1.5K views', days:'5 days ago'},
        {id: 8, key:'web3.0 fullstack developer', url: 'detail', videoSrc: 'videos/20230529-210928.mp4', author: 'Janessa Tech', img_profile: 'imgs/prof.png', title: "web3.0 fullstack developer", views:'1.5K views', days:'5 days ago'},
    ]*/
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

