import React, { useEffect } from 'react'
import { Box, Container, Drawer } from '@mui/material';
import FullMenu from './components/FullMenu';
import MinMenu from './components/MinMenu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from './components/Header';
import Main from './components/Main';
import { YoutubeDrawer } from './common/YoutubeDrawer';
import { useSearchParams } from "react-router-dom";
import {GetRecommendedVideos} from './data/MockRestfuls'

export default function Home() {

  const theme = useTheme();
  localStorage.setItem('user', '1')  // hardcode logined user to mock a user with id has logined
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [isLargeMenu, setIsLargeMenu] = React.useState(isLargeScreen)
  const [isSmallMemu, setIsSmallMemu] = React.useState(isSmallScreen)
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [videos, setVideos] = React.useState([])
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // mock the functionalities of restful calling to fetch video by search_query
    const search = searchParams.get('search_query')
    const tab = searchParams.get('tab_query')
    console.log('search:', search)
    console.log('tab:', tab)
    setVideos(GetRecommendedVideos(parseInt(localStorage.getItem('user')), search, tab))
  }, [searchParams])

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
                <YoutubeDrawer open={drawerOpen} onClose={closeDrawer}>
                  <FullMenu isHome={true} open={true} toggleMenu={toggleMenu} isInDrawer={true}></FullMenu>
                </YoutubeDrawer>
                <Main isLargeMenu={isLargeMenu} videos={videos}/>
            </Box>
    </Container>
  )
}

