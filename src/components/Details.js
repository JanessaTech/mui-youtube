import { Box, Container } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect } from 'react';
import Header from './Header';
import FullMenu from './FullMenu';
import { YoutubeDrawer } from '../common/YoutubeDrawer';
/*
const YoutubeDrawer = styled((props) => {
  const {open, onClose, ...others} = props;
  console.log('others,', others)
  return <Drawer
            sx={{'& .MuiDrawer-paper': { boxSizing: 'border-box', width: fullDrawerWidth }}}
            open={open}
            anchor="left"
            onClose={onClose}
            {...others}
          />;
})({})*/



export default function Details() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [isLargeMenu, setIsLargeMenu] = React.useState(isLargeScreen)
  const [drawerOpen, setDrawerOpen] = React.useState(false)



  useEffect(() => {
    setIsLargeMenu(isLargeScreen)
    if(isLargeScreen) {
      closeDrawer()
    }
  }, [isLargeScreen])

  const closeDrawer = () => {
    setDrawerOpen(false)
  }

  const toggleDrawer = (e) => {
    e.preventDefault();
    setDrawerOpen(!drawerOpen)
  }

  const toggleMenu = (e) => {
    e.preventDefault();
    toggleDrawer(e)
  }

  return (
    <Container maxWidth='xl'>
      <Box sx={{backgroundColor:'#c8c8c8', width:1, height:'100vh'}}>
        <Header toggleMenu={toggleMenu} isLargeScreen={isLargeScreen}/>
        <YoutubeDrawer open={drawerOpen} onClose={closeDrawer}>
          <FullMenu isHome={false} open={true} toggleMenu={toggleMenu} isInDrawer={true}></FullMenu>
        </YoutubeDrawer>
      </Box>

    </Container>
  )
}

