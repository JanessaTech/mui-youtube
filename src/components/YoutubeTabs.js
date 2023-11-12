import { Box, Chip } from '@mui/material'
import React from 'react'
import {GetYoutuberInfo} from '../data/MockRestfuls'
import {useNavigate} from 'react-router-dom';

export default function YoutubeTabs({curTab}) {
  const meId = parseInt(localStorage.getItem('user'))
  const navigate = useNavigate();
  const [me, setMe] = React.useState(GetYoutuberInfo(meId))

  const handleSearch = (e, tab) => {
    e.preventDefault()
    console.log('search by ', tab)
    navigate(`/results?tab_query=${tab}`)
  }

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
            onClick={(e) => handleSearch(e, tab)}
          />
        ))
      } 
    </Box>
  )
}

