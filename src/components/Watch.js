import { Box, Container } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useEffect } from 'react'
import Header from './Header'
import FullMenu from './FullMenu'
import { YoutubeDrawer } from '../common/YoutubeDrawer'
import { headerHeight} from '../common/Constants'
import VideoInPlay from './VideoInPlay'
import Comments from './comment/Comments'
import RecommendIn from './RecommendIn'
import RecommendOut from './RecommendOut'



const breakpointColumnsObj = {
  1536: 2,
  1200: 1
};

export default function Watch() {
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
      <Box sx={{width:1}}>
        <Header toggleMenu={toggleMenu} isLargeScreen={isLargeScreen}/>
        <YoutubeDrawer open={drawerOpen} onClose={closeDrawer}>
          <FullMenu isHome={false} open={true} toggleMenu={toggleMenu} isInDrawer={true}></FullMenu>
        </YoutubeDrawer>
        <Box sx={{width:1, mb:3, marginTop:`${headerHeight}px`, display:'flex', justifyContent:'space-between'}}>
            <Box sx={{width:{xs:1, sm:1, md:1, lg:0.7, xl:0.7}}}>
              <VideoInPlay/>
              <RecommendIn/>
              <Comments/>
            </Box>
            <RecommendOut/>
        </Box>
      </Box>
    </Container>
  )
}

