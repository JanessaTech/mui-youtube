import { Box } from '@mui/system'
import React from 'react'
import { useTheme } from '@mui/material/styles';
import shadows from '@mui/material/styles/shadows';

export default function HeaderSearchHis({isShow}) {
    const theme = useTheme();

  return (
    <Box sx={{
                boxShadow: shadows[10],
                width:1, height:300, backgroundColor: theme.palette.background.paper,
                position: 'absolute',
                top:60,
                left:0, borderRadius:4,
                display:isShow ? 'block': 'none'
            }}>

    </Box>
  )
}

