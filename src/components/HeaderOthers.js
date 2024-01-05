
import Badge from '@mui/material/Badge';
import { Avatar, Box, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import {YoutubeIcon} from '../customization/Svgs'
import { useTheme } from '@mui/material/styles';
import {GetYoutuberInfo} from '../data/MockRestfuls'

export default function HeaderOthers() {
  const theme = useTheme();
  const meId = parseInt(localStorage.getItem('user'))
  console.log('meId:', meId)
  const [me, setMe] = React.useState(GetYoutuberInfo(meId))
  return (
    <Box sx={{width:'fit-content', height:1, display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
      <Tooltip title="Create">
        <IconButton sx={{mr:1, [theme.breakpoints.down('md')]:{display:'none'}}}>
          <YoutubeIcon name={'create'}/>
        </IconButton>
      </Tooltip>
      <Tooltip title="Notifications">
        <IconButton sx={{mr:1, [theme.breakpoints.down('sm')]:{display:'none'}}}>
          <Badge badgeContent={me.notifications} color="error">
            <YoutubeIcon name={'tongzhi'}/>
          </Badge>
        </IconButton>
      </Tooltip>
      <Tooltip title="Me">
        <IconButton sx={{mr:1, p:0}} disableRipple href='me'>
          <Avatar alt={me.name} src={me.img_profile}/>
        </IconButton>
      </Tooltip>
    </Box>
  )
}

