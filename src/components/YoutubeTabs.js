import { Box, Chip } from '@mui/material'
import React from 'react'
import {GetYoutuberInfo} from '../data/MockRestfuls'

export default function YoutubeTabs({curTab}) {
  const meId = parseInt(localStorage.getItem('user'))
  const [me, setMe] = React.useState(GetYoutuberInfo(meId))

  return (
    <Box sx={{display:{xs:'none', sm:'block'}}}>
      {
        me.tabs.map((tab, index) => (
          <Chip key={tab} sx={{fontSize:'1.2em', mr:2, mb:1, fontWeight:'bold'}}
            label={tab}
            component="a"
            href="#"
            variant={curTab === tab ? "filled" : "outlined"}
            clickable
          />
        ))
      } 
    </Box>
  )
}

