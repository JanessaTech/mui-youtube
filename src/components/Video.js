import { Avatar, Box, Card, CardMedia, CssBaseline, IconButton, Link, Tooltip, Typography } from '@mui/material'
import React from 'react'

export default function Video() {
    
    const autoPlayVideo = (e) => {
        e.preventDefault()
        e.target.play()
    }
    const pauseVideo = (e) => {
        e.preventDefault()
        e.target.pause()
    }
  return (
    <Card sx={{width:1}} elevation={0}>
        <Link href="/detail">
            <CardMedia 
                    sx={{borderRadius:3}}
                    component='video' 
                    src='videos/20230529-210928.mp4' 
                    controls muted 
                    onMouseOver={autoPlayVideo} onMouseOut={pauseVideo}
            />
            <Box sx={{mt:1, backgroundColor:'#dfdede', display:'flex'}}>
                <Box>
                    <IconButton sx={{mr:1, p:0}} disableRipple>
                        <Avatar alt="Janessa Tech" src="imgs/prof.png"/>
                    </IconButton>
                </Box>
                <Box>
                    <Typography variant="h6">Without a Goal, you can't Score | from Ireland, the Ring of Kerry</Typography>
                    <Tooltip title="Janessa Tech" placement="top-start" >
                        <Typography color="text.secondary">Janessa Tech</Typography>
                    </Tooltip>
                    <Typography color="text.secondary">1.5K views • 5 days ago</Typography>
                </Box>
            </Box>
        </Link>    
    </Card>
  )
}

