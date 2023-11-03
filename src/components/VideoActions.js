import { Avatar, Box, Button, IconButton, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { YoutubeIcon } from '../customization/Svgs'

export default function VideoActions() {
  return (
    <Box sx={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', my:1}}>
        <Box sx={{display:'flex', alignItems:'center'}}>
            <IconButton sx={{p:0}} href='me' disableRipple>
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
    </Box>
  )
}

