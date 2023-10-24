import { Box, IconButton, Link } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'

export default function Burger({toggleMenu}) {
  return (
    <Box sx={{display:'flex'}}>
        <IconButton
            aria-label="burger"
            sx={{'& svg': {fontSize: 40}}}
            onClick={(e) => toggleMenu(e)}
        >
            <MenuIcon/>
        </IconButton>
        <Link href="/" sx={{display:{xs: 'none', sm:'block' }}}>
            <img src="imgs/logo1.png" height="50"/>
        </Link>
    </Box>
  )
}

