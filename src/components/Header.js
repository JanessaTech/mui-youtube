import { AppBar, Box, Toolbar } from '@mui/material'
import React from 'react'
import Burger from './Burger';
import { headerHeight} from '../common/Constants'
import HeaderSearch from './HeaderSearch';
import HeaderOthers from './HeaderOthers';

export default function Header({toggleMenu}) {
  return (
    <AppBar sx={{position: 'fixed', top:0, left:0, height: headerHeight, background: '#f3f2f2'}} elevation={0}
            >
              <Toolbar sx={{'&.MuiToolbar-root':{height: headerHeight}, justifyContent: 'space-between'}}>
                    <Burger toggleMenu={toggleMenu}/>
                    <Box sx={{height:56, display:'flex', width: 0.8, ml:2, flex: '1 1 200', justifyContent: 'space-between'}}>
                      <HeaderSearch/>
                      <HeaderOthers/>
                    </Box>
              </Toolbar>             
    </AppBar>
  )
}

