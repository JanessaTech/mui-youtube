import { Avatar, Box, Card, CardMedia, Chip, Divider, IconButton, Link, ListItemIcon, ListItemText, Menu, Tooltip, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { YoutubeMenuItem } from '../customization/YoutubeStyling';
import { YoutubeIcon } from '../customization/Svgs';
import {  styled } from '@mui/material/styles';

const VideoTab = styled((props) => {
    const {label, ...others} = props
    return (<Chip sx={{mr:0.5, mb:0.5}} label={label} color="success" size="small"/>)
})({})



export default function Video({id, labels, url, videoSrc, author, img_profile, title, views, days, sideline}) {
    const [state, setState] = React.useState({
        anchorMoreMenu: null,
    })
    const isMoreMenuOpen = Boolean(state.anchorMoreMenu);
    
    const autoPlayVideo = (e) => {
        e.preventDefault()
        e.target.play()
    }
    const pauseVideo = (e) => {
        e.preventDefault()
        e.target.pause()
    }
    const closeMoreMenu = () => {
        setState({...state, anchorMoreMenu: null})
    }
    const openMoreMenu = (e) => {
        setState({...state, anchorMoreMenu: e.currentTarget})
    }

  return (
    <Card sx={{width:1, backgroundColor:'inherit', pb:{xs:3, sm:0}}} elevation={0}>
        <Box sx={{display: sideline ? 'flex': 'block'}}>
            <Link href={`${url}?vid=${id}`}>
                <CardMedia 
                        sx={{borderRadius:3, width:sideline ? 250 : null}}
                        component='video' 
                        src={videoSrc} 
                        controls muted 
                        onMouseOver={autoPlayVideo} onMouseOut={pauseVideo}
                />
            </Link>
            <Box sx={{mt:1, display:'flex', justifyContent: 'space-between', '&:hover .MuiSvgIcon-root':{color:'black', visibility:'visible'}}}>
                
                <Box sx={{display:'flex'}}>
                    <Box sx={{display: sideline?'none':'block'}}>
                        <IconButton sx={{mr:1, p:0}} href='me'>
                            <Avatar alt={author} src={img_profile}/>
                        </IconButton>
                    </Box>
                    <Box sx={{ml:1}}>
                        <Link href={`${url}?vid=${id}`}>
                            <Box>
                                <Typography variant="h6">{title}</Typography>
                            </Box>
                            <Box>
                                {
                                    labels && labels.map((l) => (<VideoTab label={l} />))
                                }
                                
                            </Box>
                            <Tooltip title={author} placement="top-start" >
                                <Typography color="text.secondary">{author}</Typography>
                            </Tooltip>
                            <Typography color="text.secondary">{views} • {days}</Typography>
                        </Link> 
                    </Box>
                </Box>
                <Box>
                    <IconButton
                        id={`more-button-${id}`}
                        aria-controls={isMoreMenuOpen ? `more-menu-${id}`: undefined}
                        aria-haspopup="true"
                        aria-expanded={isMoreMenuOpen ? 'true' : undefined}
                        onClick={openMoreMenu}>
                        <MoreVertIcon fontSize='small' sx={{visibility:'hidden'}}/>
                    </IconButton>
                </Box>
            </Box>
        </Box>
            
        
        <Menu
            id={`more-menu-${id}`}
            anchorEl={state.anchorMoreMenu}
            open={isMoreMenuOpen}
            onClose={closeMoreMenu}
            sx={{mt:1}}
            MenuListProps={{
                'aria-labelledby': `more-button-${id}`,
            }}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}>
                <YoutubeMenuItem disableRipple={true} onClick={closeMoreMenu}>
                    <ListItemIcon>
                        <YoutubeIcon name={'add-to-list'}/>
                    </ListItemIcon>
                    <ListItemText>Add to queue</ListItemText>
                </YoutubeMenuItem>
                <YoutubeMenuItem disableRipple={true} onClick={closeMoreMenu}>
                    <ListItemIcon>
                        <YoutubeIcon name={'watch'}/>
                    </ListItemIcon>
                    <ListItemText>Saved to Watch later</ListItemText>
                </YoutubeMenuItem>
                <YoutubeMenuItem disableRipple={true} onClick={closeMoreMenu}>
                    <ListItemIcon>
                        <YoutubeIcon name={'category-add'}/>
                    </ListItemIcon>
                    <ListItemText>Saved to playlist</ListItemText>
                </YoutubeMenuItem>
                <YoutubeMenuItem disableRipple={true} onClick={closeMoreMenu}>
                    <ListItemIcon>
                        <YoutubeIcon name={'share'}/>
                    </ListItemIcon>
                    <ListItemText>Share</ListItemText>
                </YoutubeMenuItem>
                <Divider />
                <YoutubeMenuItem disableRipple={true} onClick={closeMoreMenu}>
                    <ListItemIcon>
                        <YoutubeIcon name={'no-interest'}/>
                    </ListItemIcon>
                    <ListItemText>Not interested</ListItemText>
                </YoutubeMenuItem>
                <YoutubeMenuItem disableRipple={true} onClick={closeMoreMenu}>
                    <ListItemIcon>
                        <YoutubeIcon name={'no-recommd'}/>
                    </ListItemIcon>
                    <ListItemText>Don't recommend channel</ListItemText>
                </YoutubeMenuItem>
                <YoutubeMenuItem disableRipple={true} onClick={closeMoreMenu}>
                    <ListItemIcon>
                        <YoutubeIcon name={'report'}/>
                    </ListItemIcon>
                    <ListItemText>Report</ListItemText>
                </YoutubeMenuItem>
        </Menu>
            
    </Card>
  )
}

