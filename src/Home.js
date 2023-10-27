import React, { useEffect } from 'react'
import { Box, Container, Drawer } from '@mui/material';
import FullMenu from './components/FullMenu';
import MinMenu from './components/MinMenu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from './components/Header';
import {fullDrawerWidth} from './common/Constants'
import Main from './components/Main';

export default function Home() {

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [isLargeMenu, setIsLargeMenu] = React.useState(isLargeScreen)
  const [isSmallMemu, setIsSmallMemu] = React.useState(isSmallScreen)
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  useEffect(() => {
    setIsLargeMenu(isLargeScreen)
    if(isLargeScreen) {
      closeDrawer()
    }
  }, [isLargeScreen])
  useEffect(() => {
    setIsSmallMemu(isSmallScreen)
  }, [isSmallScreen])


  const closeDrawer = () => {
    setDrawerOpen(false)
  }

  const toggleDrawer = (e) => {
    e.preventDefault();
    setDrawerOpen(!drawerOpen)
  }

  const toggleMenu = (e) => {
    e.preventDefault();
    if (isLargeScreen) {
      setIsLargeMenu(!isLargeMenu)
    } else {
      toggleDrawer(e)
    }
  }
 
  return (
    <Container maxWidth='false'>
        <Box sx={{position: 'relative'}}>
            <Header toggleMenu={toggleMenu} isLargeScreen={isLargeScreen}/>
            <FullMenu isHome={true} open={isLargeMenu} toggleMenu={toggleMenu}></FullMenu>
            <MinMenu isHome={true} open={!isLargeMenu && !isSmallMemu}></MinMenu>
            <Drawer
                    sx={{'& .MuiDrawer-paper': { boxSizing: 'border-box', width: fullDrawerWidth }}}
                    open={drawerOpen}
                    anchor="left"
                    onClose={closeDrawer}
                >
                    <FullMenu isHome={true} open={true} toggleMenu={toggleMenu} isInDrawer={true}></FullMenu>
            </Drawer>
            <Main isLargeMenu={isLargeMenu}/>
        </Box>
    </Container>  
  )
}

