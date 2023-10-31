import React, { useEffect } from 'react'
import { Box, Container, Drawer } from '@mui/material';
import FullMenu from './components/FullMenu';
import MinMenu from './components/MinMenu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from './components/Header';
import Main from './components/Main';
import { YoutubeDrawer } from './common/YoutubeDrawer';
import {mockVideos} from './data/Videos'

export default function Home() {

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [isLargeMenu, setIsLargeMenu] = React.useState(isLargeScreen)
  const [isSmallMemu, setIsSmallMemu] = React.useState(isSmallScreen)
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [videos, setVideos] = React.useState([...mockVideos])

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

  const searchVideosCallback = (videos) => {
    console.log('searchVideosCallback is called')
    console.log('found ', videos.length, 'videos')
    setVideos(videos)
  }
 
  return (
    <Container maxWidth='false'>         
            <Box sx={{position: 'relative'}}>
                <Header toggleMenu={toggleMenu} isLargeScreen={isLargeScreen} videoCb={searchVideosCallback}/>
                <FullMenu isHome={true} open={isLargeMenu} toggleMenu={toggleMenu}></FullMenu>
                <MinMenu isHome={true} open={!isLargeMenu && !isSmallMemu}></MinMenu>
                <YoutubeDrawer open={drawerOpen} onClose={closeDrawer}>
                  <FullMenu isHome={true} open={true} toggleMenu={toggleMenu} isInDrawer={true}></FullMenu>
                </YoutubeDrawer>
                <Main isLargeMenu={isLargeMenu} videos={videos}/>
            </Box>
    </Container>
  )
}

