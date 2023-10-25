import { Avatar, Box, Collapse, Divider, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Burger from './Burger';
import {fullDrawerWidth, headerHeight} from '../common/Constants'
import {MenuList} from '../customization/MenuList'
import {YoutubeIcon} from '../customization/Svgs'

function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}

export default function FullMenu({isHome, open,toggleMenu, isInDrawer}) {
  const [showLibMore, setShowLibMore] = React.useState(true)
  const [showSubMore, setShowSubMore] = React.useState(true)

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
      <MenuList >
        {['home', 'shorts', 'subscriptions'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton disableRipple selected={isHome ? text === 'home' : false}>
              <ListItemIcon>
                <YoutubeIcon name={text}/>
              </ListItemIcon>
              <ListItemText primary={capitalize(text)} />
            </ListItemButton>
          </ListItem>
        ))}
      </MenuList>
      <Divider />
      <MenuList >
        {['library', 'history', 'your videos', 'watch later'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton disableRipple>
              <ListItemIcon>
                <YoutubeIcon name={text}/>
              </ListItemIcon>
              <ListItemText primary={capitalize(text)} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem sx={{display: showLibMore? 'block': 'none'}} key={'show more lib'} disablePadding>
          <ListItemButton disableRipple onClick={toggleShowLibMore}>
            <ListItemIcon>
              <YoutubeIcon name={'more'}/>
            </ListItemIcon>
            <ListItemText primary={capitalize('show more')} />
          </ListItemButton>
        </ListItem> 
        <Collapse in={!showLibMore} timeout="auto" unmountOnExit>
          {['FullStack Dev', 'Web3.0 Dev', 'Ethereum'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton disableRipple>
                <ListItemIcon>
                  <YoutubeIcon name={text}/>
                </ListItemIcon>
                <ListItemText primary={capitalize(text)} />
              </ListItemButton>
            </ListItem>
          ))}
        </Collapse>
        <ListItem sx={{display: !showLibMore ? 'block': 'none'}} key={'show less lib'} disablePadding>
          <ListItemButton disableRipple onClick={toggleShowLibMore}>
            <ListItemIcon>
              <YoutubeIcon name={'less'}/>
            </ListItemIcon>
            <ListItemText primary={capitalize('show less')} />
          </ListItemButton>
        </ListItem> 
      </MenuList>
      <Divider />
      <MenuList>
        <ListSubheader sx={{backgroundColor:'#f3f2f2', fontSize:'1.2em', color: '#4b4b4b'}}>Subscriptions</ListSubheader>
        {new Array(5).fill('Janessa Tech').map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton disableRipple >
              <ListItemAvatar>
                <Avatar sx={{ width: 35, height: 35 }} alt="Janessa Tech" src="imgs/prof.png" />
              </ListItemAvatar>
              <ListItemText key={index} primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem sx={{display: showSubMore? 'block': 'none'}} key={'show more sub'} disablePadding>
          <ListItemButton disableRipple onClick={toggleShowSubMore}>
            <ListItemIcon>
              <YoutubeIcon name={'more'}/>
            </ListItemIcon>
            <ListItemText primary={capitalize('show more')} />
          </ListItemButton>
        </ListItem> 
        <Collapse in={!showSubMore} timeout="auto" unmountOnExit>
            {new Array(20).fill('Janessa Tech').map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton disableRipple >
                  <ListItemAvatar>
                    <Avatar sx={{ width: 35, height: 35 }} alt="Janessa Tech" src="imgs/prof.png" />
                  </ListItemAvatar>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
        </Collapse>
        <ListItem sx={{display: !showSubMore? 'block': 'none'}} key={'show less sub'} disablePadding>
          <ListItemButton disableRipple onClick={toggleShowSubMore}>
            <ListItemIcon>
              <YoutubeIcon name={'less'}/>
            </ListItemIcon>
            <ListItemText primary={capitalize('show less')} />
          </ListItemButton>
        </ListItem> 
      </MenuList>
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

