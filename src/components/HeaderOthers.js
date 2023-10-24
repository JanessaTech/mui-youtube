
import Badge from '@mui/material/Badge';
import { Avatar, Box, IconButton } from '@mui/material'
import React from 'react'
import {MenuIcon} from '../customization/Svgs'
import { useTheme } from '@mui/material/styles';

export default function HeaderOthers() {
  const theme = useTheme();
  return (
    <Box sx={{width:'fit-content', height:1, backgroundColor:'#c8c8c8', display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
      <IconButton sx={{mr:1, [theme.breakpoints.down('md')]:{display:'none'}}}>
        <MenuIcon name={'create'}/>
      </IconButton>
      <IconButton sx={{mr:1, [theme.breakpoints.down('sm')]:{display:'none'}}}>
        <Badge badgeContent={4} color="error">
          <MenuIcon name={'notification'}/>
        </Badge>
      </IconButton>
      <IconButton sx={{mr:1, p:0}} disableRipple>
        <Avatar alt="Janessa Tech" src="imgs/prof.png"/>
      </IconButton>
      
      

    </Box>
  )
}

