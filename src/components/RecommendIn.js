import { Box } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles'

export default function RecommendIn() {
    const theme = useTheme();
  return (
    <Box sx={{width:1, height:700, backgroundColor:'blue', [theme.breakpoints.up('lg')]:{display:'none'}}}></Box>
  )
}

