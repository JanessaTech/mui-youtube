import { Avatar, Box, Card, CardMedia, IconButton, Link, Tooltip, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Video({url, videoSrc, author, img_profile, title, views, days}) {
    
    const autoPlayVideo = (e) => {
        e.preventDefault()
        e.target.play()
    }
    const pauseVideo = (e) => {
        e.preventDefault()
        e.target.pause()
    }

  return (
    <Card sx={{width:1, backgroundColor:'inherit', pb:{xs:3, sm:0}}} elevation={0}>
        <Link href={url}>
            <CardMedia 
                    sx={{borderRadius:3}}
                    component='video' 
                    src={videoSrc} 
                    controls muted 
                    onMouseOver={autoPlayVideo} onMouseOut={pauseVideo}
            />
        
            <Box sx={{mt:1, display:'flex', '&:hover .MuiSvgIcon-root':{color:'black', visibility:'visible'}}}>
                <Box>
                    <IconButton sx={{mr:1, p:0}} href='me'>
                        <Avatar alt={author} src={img_profile}/>
                    </IconButton>
                </Box>
                <Box>
                    <Typography variant="h6">{title}</Typography>
                    <Tooltip title={author} placement="top-start" >
                        <Typography color="text.secondary">{author}</Typography>
                    </Tooltip>
                    <Typography color="text.secondary">{views} • {days}</Typography>
                </Box>
                <Box>
                    <IconButton>
                        <MoreVertIcon fontSize='small' sx={{visibility:'hidden'}}/>
                    </IconButton>
                </Box>
            </Box>
        </Link>
            
    </Card>
  )
}

