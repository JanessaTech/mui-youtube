import React from 'react'
import { Box } from '@mui/material'
import { red} from '@mui/material/colors';

export default function MinMenu({open, headerHeight, minDrawerWidth}) {
  return (
    <Box sx={{position: 'fixed',
                      top: headerHeight, left:{xs:16, sm: 24},
                      width: minDrawerWidth,
                      height:700,
                      backgroundColor:red[500], zIndex:1100,
                      display: open ? 'block' : 'none'
                }}>

    </Box>
  )
}

