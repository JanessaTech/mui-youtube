import { Box, IconButton, Link } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'

export default function Burger({toggleMenu}) {
  return (
    <Box>
        <IconButton
            aria-label="burger"
            sx={{ mr: 2, '& svg': {fontSize: 40}, verticalAlign:'top'}}
            onClick={(e) => toggleMenu(e)}
        >
            <MenuIcon/>
        </IconButton>
        <Link href="/">
            <img src="imgs/logo1.png" height="50"/>
        </Link>
    </Box>
  )
}

