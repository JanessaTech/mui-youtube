import { Avatar, Box, Collapse, Divider, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Burger from './Burger';
import {fullDrawerWidth, headerHeight} from '../common/Constants'
import {YoutubeMenuList} from '../customization/YoutubeStyling'
import {YoutubeIcon} from '../customization/Svgs'
import {GetYoutuberInfo, GetSubscriptions} from '../data/MockRestfuls'
import {capitalize} from '../common/Utils'

export default function FullMenu({isHome, open,toggleMenu, isInDrawer}) {
  const meId = parseInt(localStorage.getItem('user'))
  const [showLibMore, setShowLibMore] = React.useState(true)
  const [showSubMore, setShowSubMore] = React.useState(true)
  const [me, setMe] = React.useState(GetYoutuberInfo(meId))
  const [subscriptions, setSubscriptions] = React.useState(GetSubscriptions(meId))

  const toggleShowLibMore = (e) => {
    e.preventDefault();
    setShowLibMore(!showLibMore)
  }
  const toggleShowSubMore = (e) => {
    e.preventDefault();
    setShowSubMore(!showSubMore)
  }

  const drawer = (
    <Box sx={{width:260}}>
      <YoutubeMenuList >
        {['home', 'shorts', 'subscriptions'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton selected={isHome ? text === 'home' : false} href={text === 'home' ? '/' : '#'}>
              <ListItemIcon>
                <YoutubeIcon name={text}/>
              </ListItemIcon>
              <ListItemText primary={capitalize(text)} />
            </ListItemButton>
          </ListItem>
        ))}
      </YoutubeMenuList>
      <Divider />
      <YoutubeMenuList >
        {['library', 'history', 'your videos', 'watch later'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <YoutubeIcon name={text}/>
              </ListItemIcon>
              <ListItemText primary={capitalize(text)} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem sx={{display: showLibMore? 'block': 'none'}} key={'show more lib'} disablePadding>
          <ListItemButton onClick={toggleShowLibMore}>
            <ListItemIcon>
              <YoutubeIcon name={'arrow-down'}/>
            </ListItemIcon>
            <ListItemText primary={capitalize('show more')} />
          </ListItemButton>
        </ListItem> 
        <Collapse in={!showLibMore} timeout="auto" unmountOnExit>
          {me.libs.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <YoutubeIcon name={text}/>
                </ListItemIcon>
                <ListItemText primary={capitalize(text)} />
              </ListItemButton>
            </ListItem>
          ))}
        </Collapse>
        <ListItem sx={{display: !showLibMore ? 'block': 'none'}} key={'show less lib'} disablePadding>
          <ListItemButton onClick={toggleShowLibMore}>
            <ListItemIcon>
              <YoutubeIcon name={'arrow-up'}/>
            </ListItemIcon>
            <ListItemText primary={capitalize('show less')} />
          </ListItemButton>
        </ListItem> 
      </YoutubeMenuList>
      <Divider />
      <YoutubeMenuList>
        <ListSubheader sx={{backgroundColor:'inherit', fontSize:'1.2em', color: '#4b4b4b'}}>Subscriptions</ListSubheader>
        {subscriptions.slice(0,5).map((youtuber) => (
          <ListItem key={youtuber.id} disablePadding>
            <ListItemButton >
              <ListItemAvatar>
                <Avatar sx={{ width: 35, height: 35 }} alt={youtuber.name} src={youtuber.img_profile} />
              </ListItemAvatar>
              <ListItemText key={youtuber.id} primary={youtuber.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem sx={{display: showSubMore? 'block': 'none'}} key={'show more sub'} disablePadding>
          <ListItemButton onClick={toggleShowSubMore}>
            <ListItemIcon>
              <YoutubeIcon name={'arrow-down'}/>
            </ListItemIcon>
            <ListItemText primary={capitalize('show more')} />
          </ListItemButton>
        </ListItem> 
        <Collapse in={!showSubMore} timeout="auto" unmountOnExit>
            {subscriptions.slice(5).map((youtuber) => (
              <ListItem key={youtuber.id} disablePadding>
                <ListItemButton >
                  <ListItemAvatar>
                    <Avatar sx={{ width: 35, height: 35 }} alt={youtuber.name} src={youtuber.img_profile} />
                  </ListItemAvatar>
                  <ListItemText primary={youtuber.name} />
                </ListItemButton>
              </ListItem>
            ))}
        </Collapse>
        <ListItem sx={{display: !showSubMore? 'block': 'none'}} key={'show less sub'} disablePadding>
          <ListItemButton onClick={toggleShowSubMore}>
            <ListItemIcon>
              <YoutubeIcon name={'arrow-up'}/>
            </ListItemIcon>
            <ListItemText primary={capitalize('show less')} />
          </ListItemButton>
        </ListItem> 
      </YoutubeMenuList>
      <Divider />
      <Typography>
        About Press Copyright
      </Typography>
      <Typography>
        Contact us Creators
      </Typography>
      <Typography>
        Advertise Developers
      </Typography>
    </Box>
  )

  return (
    
    <Box sx={{position: 'fixed', 
                top: 0, left:0,
                width: fullDrawerWidth, zIndex:1100,
                display: open? 'block' : 'none'
            }}>
                <Box sx={{ml:2}}>
                    <Toolbar sx={{'&.MuiToolbar-root':{height: headerHeight}, ml:1}} disableGutters>
                      <Burger toggleMenu={toggleMenu} isInDrawer={isInDrawer}/>  
                    </Toolbar>
                    <Box sx={{overflowY:'hidden', height:'90vh', '&:hover':{overflowY:'scroll'}}}>
                        {drawer}
                    </Box>
                </Box>

                
    </Box>
  )
}

