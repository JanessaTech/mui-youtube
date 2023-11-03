import { Avatar, Box, Button, IconButton, Snackbar, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { YoutubeIcon } from '../customization/Svgs'
import Slide from '@mui/material/Slide';

function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
  }

export default function VideoActions() {
    const [isSubscribed, setIsSubscribed] = React.useState(false)
    const [openSnackbar, setSnackbar] = React.useState(false)
    const handleSubscribe = (e) => {
        e.preventDefault()
        setSnackbar(true)
        setIsSubscribed(true)
    }
    const closeSnackbar = () => {
        setSnackbar(false)
    }
  return (
    <Box sx={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', my:1}}>
        <Box sx={{display:'flex', alignItems:'center'}}>
            <IconButton sx={{p:0}} href='me'>
                <Avatar sx={{ width: 50, height: 50 }} alt="Janessa Tech" src="imgs/prof.png"/>
            </IconButton>
            <Box sx={{ml:1, mr:1}}>
                <Tooltip title={'Janessa Tech xxxxxxxxxx'} placement="top-start" >
                    <Typography variant='h6' sx={{textOverflow: 'ellipsis', overflow: 'hidden', width:100, whiteSpace:'nowrap'}}>Janessa Tech xxxxxxxxxx</Typography>
                </Tooltip>
                <Typography sx={{whiteSpace:'nowrap'}} variant='body2' color="text.secondary">4.83M subscribers</Typography>
            </Box>
            <Box>
                <Button sx={{
                            '&.MuiButtonBase-root':{borderRadius:'50vh'},
                            display:isSubscribed ? 'flex' : 'none',
                        }}
                        variant="contained" 
                        style={{textTransform: 'none'}} 
                        startIcon={<YoutubeIcon name={'togzhi'}/>} 
                        endIcon={<YoutubeIcon name={'arrow-down'}/>}
                        disableElevation
                        onClick={handleSubscribe}
                >
                    <Typography variant='h6' color='text.primary'>Subscribed</Typography>
                </Button>
                <Button sx={{
                            display:isSubscribed ? 'none' : 'block',
                            px:2,
                            '&.MuiButtonBase-root':{borderRadius:'50vh'}, 
                            backgroundColor:'common.black', 
                            '&.MuiButtonBase-root:hover':{backgroundColor:'rgba(0,0,0,0.7)'},
                            '&.MuiButtonBase-root:active':{backgroundColor:'rgba(0,0,0,0.8)'},
                            color: 'common.white', textTransform: 'none'}} disableElevation onClick={handleSubscribe}>
                    <Typography variant='h6' color='inherit'>Subscribe</Typography>
                </Button>
            </Box>
            
        </Box>

        <Box sx={{display:'flex', alignItems:'center'}}>
            <Box sx={{width:162}}>
                <Tooltip title='I like this' placement='bottom'>
                    <Button sx={{
                                '&.MuiButtonBase-root':{ borderRadius:'50vh 0 0 50vh'},
                                '& .MuiButton-startIcon': {ml:1}
                            }}
                            startIcon={<YoutubeIcon name={'support'}/>}
                            disableElevation
                    >
                        <Typography variant='h6' color='text.primary'>512</Typography> 
                    </Button>
                </Tooltip>
                <Tooltip title='I dislike this' placement='bottom'>
                    <Button sx={{
                                '&.MuiButtonBase-root':{ borderRadius:'0 50vh 50vh 0', borderLeft:'2px solid #757575'},
                                '& .MuiButton-endIcon': {mr:1}

                            }}
                            endIcon={<YoutubeIcon name={'support-no'}/>}
                            disableElevation
                    >
                        <Typography variant='h6' color='text.primary' sx={{textIndent: '-9999px' }}>xxx</Typography> 
                    </Button>
                </Tooltip>
                
            </Box>
            <Tooltip title='Share' placement='bottom'>
                <Button sx={{
                                '&.MuiButtonBase-root':{ borderRadius:'50vh'},
                                '& .MuiButton-startIcon': {ml:1},
                                ml:1
                            }}
                            startIcon={<YoutubeIcon name={'share'}/>}
                            style={{textTransform: 'none'}} 
                            disableElevation
                    >
                        <Typography variant='h6' color='text.primary'>share</Typography> 
                </Button>
            </Tooltip>
            <Tooltip title='Save' placement='bottom'>
                <Button sx={{
                                '&.MuiButtonBase-root':{ borderRadius:'50vh'},
                                '& .MuiButton-startIcon': {ml:1},
                                ml:1, 
                                display:{xs:'none', sm:'flex'}
                            }}
                            startIcon={<YoutubeIcon name={'save'}/>}
                            style={{textTransform: 'none'}} 
                            disableElevation
                    >
                        <Typography variant='h6' color='text.primary'>Save</Typography> 
                </Button>
            </Tooltip>
            <IconButton sx={{
                            '&.MuiButtonBase-root':{ borderRadius:'50vh'},
                            ml:1,
                        }}
                        disableElevation>
                <YoutubeIcon name='more'/>
            </IconButton>  
        </Box>
        <Snackbar sx={{'&.MuiSnackbar-root .MuiSnackbarContent-root': {minWidth:'100px', width:'fit-content', fontSize:'1.2em'}}}
            open={openSnackbar}
            autoHideDuration={2000}
            onClose={closeSnackbar}
            message="Subscribed successfully"
            TransitionComponent={SlideTransition}
            key={SlideTransition.name}
        >

        </Snackbar>
    </Box>
  )
}

