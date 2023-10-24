import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import Burger from './Burger';
import { headerHeight} from '../common/Constants'
import { Search } from '@mui/icons-material';

export default function Header({toggleMenu}) {
  return (
    <AppBar sx={{position: 'fixed', top:0, left:0, height: headerHeight, background: '#f3f2f2'}} elevation={0}
            >
              <Toolbar sx={{'&.MuiToolbar-root':{height: headerHeight}}}>
                    <Burger toggleMenu={toggleMenu}/>   
              </Toolbar>             
    </AppBar>
  )
}

