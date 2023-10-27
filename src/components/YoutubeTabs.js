import { Box, Chip } from '@mui/material'
import React from 'react'

export default function YoutubeTabs({curTab}) {
  const tabs = new Array('All', 'Web3.0', 'Ethereum', 'Security', 'Blockchain', 'EVM')

  return (
    <Box sx={{display:{xs:'none', sm:'block'}}}>
      {
        tabs.map((tab, index) => (
          <Chip key={tab} sx={{fontSize:'1.2em', mr:2, fontWeight:'bold'}}
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

