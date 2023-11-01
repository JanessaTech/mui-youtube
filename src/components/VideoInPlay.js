import { Avatar, Box, Button, Card, CardMedia, IconButton, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { YoutubeIcon } from '../customization/Svgs'
import { styled } from '@mui/material/styles'

export default function VideoInPlay() {
  return (
    <Box sx={{width:1}}>
        <Card sx={{backgroundColor:'inherit'}} elevation={0}>
            <CardMedia
                sx={{borderRadius:4}}
                component='video'
                src='videos/20230529-210928.mp4'
                controls autoPlay
            >
            </CardMedia>
            <Box sx={{mt:2, height:400}}>
                <Typography variant='h5'>Can China get on a new economic growth path? | DW Business</Typography>
                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                    <Box sx={{display:'flex', alignItems:'center'}}>
                        <IconButton sx={{p:0}} href='me' disableRipple>
                            <Avatar sx={{ width: 50, height: 50 }} alt="Janessa Tech" src="imgs/prof.png"/>
                        </IconButton>
                        <Box sx={{ml:1, mr:1}}>
                            <Tooltip title={'Janessa Tech xxxxxxxxxx'} placement="top-start" >
                                <Typography variant='h6' sx={{textOverflow: 'ellipsis', overflow: 'hidden', width:60, whiteSpace:'nowrap'}}>Janessa Tech xxxxxxxxxx</Typography>
                            </Tooltip>
                            <Typography sx={{whiteSpace:'nowrap'}} variant='body2' color="text.secondary">4.83M subscribers</Typography>
                        </Box>
                        <Box>
                            <Button sx={{
                                        '&.MuiButtonBase-root':{backgroundColor:'grey.300', borderRadius:'50vh'},
                                        '&.MuiButtonBase-root:hover':{backgroundColor:'grey.400'},
                                        '&.MuiButtonBase-root:active':{backgroundColor:'grey.500'}
                                    }}
                                    variant="contained" 
                                    style={{textTransform: 'none'}} 
                                    startIcon={<YoutubeIcon name={'togzhi'}/>} 
                                    endIcon={<YoutubeIcon name={'arrow-down'}/>}
                                    disableRipple
                                    disableElevation
                            >
                                <Typography variant='h6' color='text.primary'>Subscribed</Typography>
                            </Button>
                        </Box>
                        
                    </Box>

                    <Box>
                        <Box>
                            <Button sx={{
                                        '&.MuiButtonBase-root':{backgroundColor:'grey.300', borderRadius:'50vh 0 0 50vh'},
                                        '&.MuiButtonBase-root:hover':{backgroundColor:'grey.400'},
                                        '&.MuiButtonBase-root:active':{backgroundColor:'grey.500'}
                                    }}
                                    startIcon={<YoutubeIcon name={'support'}/>}
                                    disableRipple
                                    disableElevation
                            >
                                <Typography variant='h6' color='text.primary'>512</Typography> 
                            </Button>
                            <Button sx={{
                                        '&.MuiButtonBase-root':{backgroundColor:'grey.300', borderRadius:'0 50vh 50vh 0', borderLeft:'2px solid #757575'},
                                        '&.MuiButtonBase-root:hover':{backgroundColor:'grey.400'},
                                        '&.MuiButtonBase-root:active':{backgroundColor:'grey.500'},

                                    }}
                                    endIcon={<YoutubeIcon name={'support-no'}/>}
                                    disableRipple
                                    disableElevation
                            >
                                <Typography variant='h6' color='text.primary' sx={{textIndent: '-9999px' }}>xxx</Typography> 
                            </Button>
                        </Box>
                        
                    </Box>
                </Box>

            </Box>
        </Card>
    </Box>
  )
}

