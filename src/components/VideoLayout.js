import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Video from './Video';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    height:300,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }));

export default function VideoLayout() {
    const videos = [
        {url: 'detail', videoSrc: 'videos/20230529-210928.mp4', author: 'Janessa Tech', img_profile: 'imgs/prof.png', title: "Without a Goal, you can't Score | from Ireland, the Ring of Kerry", views:'1.5K views', days:'5 days ago'},
        {url: 'detail', videoSrc: 'videos/20230529-210928.mp4', author: 'Janessa Tech', img_profile: 'imgs/prof.png', title: "Without a Goal, you can't Score | from Ireland, the Ring of Kerry", views:'1.5K views', days:'5 days ago'},
        {url: 'detail', videoSrc: 'videos/20230529-210928.mp4', author: 'Janessa Tech', img_profile: 'imgs/prof.png', title: "Without a Goal, you can't Score | from Ireland, the Ring of Kerry", views:'1.5K views', days:'5 days ago'},
        {url: 'detail', videoSrc: 'videos/20230529-210928.mp4', author: 'Janessa Tech', img_profile: 'imgs/prof.png', title: "Without a Goal, you can't Score | from Ireland, the Ring of Kerry", views:'1.5K views', days:'5 days ago'},
        {url: 'detail', videoSrc: 'videos/20230529-210928.mp4', author: 'Janessa Tech', img_profile: 'imgs/prof.png', title: "Without a Goal, you can't Score | from Ireland, the Ring of Kerry", views:'1.5K views', days:'5 days ago'},
        {url: 'detail', videoSrc: 'videos/20230529-210928.mp4', author: 'Janessa Tech', img_profile: 'imgs/prof.png', title: "Without a Goal, you can't Score | from Ireland, the Ring of Kerry", views:'1.5K views', days:'5 days ago'},
        {url: 'detail', videoSrc: 'videos/20230529-210928.mp4', author: 'Janessa Tech', img_profile: 'imgs/prof.png', title: "Without a Goal, you can't Score | from Ireland, the Ring of Kerry", views:'1.5K views', days:'5 days ago'},
        {url: 'detail', videoSrc: 'videos/20230529-210928.mp4', author: 'Janessa Tech', img_profile: 'imgs/prof.png', title: "Without a Goal, you can't Score | from Ireland, the Ring of Kerry", views:'1.5K views', days:'5 days ago'},
        {url: 'detail', videoSrc: 'videos/20230529-210928.mp4', author: 'Janessa Tech', img_profile: 'imgs/prof.png', title: "Without a Goal, you can't Score | from Ireland, the Ring of Kerry", views:'1.5K views', days:'5 days ago'},
    ]
  return (
    <Box sx={{mt:2}}>
        <Grid container spacing={{sm: 2, md:2, lg:3}} columns={{ xs: 2, sm: 8, md: 12, lg:12, xl:12}}>
            { videos.map( (video) => (
                <Grid item xs={2} sm={4} md={6} lg={4} xl={3}>
                    <Video {...video}/>
                </Grid>
            ))}          
        </Grid>
    </Box>
  )
}

