import { Box } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles'

export default function RecommendOut() {
    const theme = useTheme();
  return (
    <Box sx={{width:0.28, height:700, backgroundColor:'blue', [theme.breakpoints.down('lg')]:{display:'none'}}}></Box>
  )
}

