import { Avatar, Box, Button, IconButton, TextField, Typography } from '@mui/material'
import React from 'react'
import { YoutubeIcon } from '../../customization/Svgs'
import { alpha } from '@mui/material/styles';

export default function CommentByMe({mode, toggleReplyme}) {
    const [state, setState] = React.useState({
        comment: '',
        cancled: false,
        mode: mode,
        showBut: false
    })
    const leftMargin = state.mode === 'comment'? 70 : 40
    const profileSize = state.mode === 'comment'? 50 : 30

    const handleChange = (e) => {
        e.preventDefault()
        setState({...state, comment: e.target.value})   
    }
    const handleInputFocus = () => {
        setState({...state, showBut: true})
    }
    const handleCancel = () => {
        setState({...state, comment: '', showBut: false})
        toggleReplyme && toggleReplyme()
    }
    
  return (
    <Box sx={{display: 'flex', my:1}}>
        <Box sx={{width: leftMargin}}>
            <IconButton sx={{p:0}}>
                    <Avatar sx={{ width: profileSize, height: profileSize }} alt="Janessa Tech" src="imgs/prof.png"/>
            </IconButton>
        </Box>
        <Box sx={{width:`calc(100% - ${leftMargin}px)`}}>
            <TextField variant="standard" placeholder='Add a comment' fullWidth value={state.comment} onChange={handleChange} onFocus={handleInputFocus}/>
            <Box sx={{mt:1, display: state.showBut? 'flex': 'none', justifyContent:'space-between'}}>
                <IconButton>
                    <YoutubeIcon name={'emoji'}/>
                </IconButton>
                <Box>
                    <Button sx={{
                                '&.MuiButtonBase-root':{borderRadius:'50vh'},
                                textTransform: 'none',
                                backgroundColor:'inherit',
                                px:2,
                            }}
                            onClick={handleCancel}
                            >
                        <Typography variant='h6' color='black'>Cancel</Typography>        
                    </Button>
                    <Button sx={{
                                '&.MuiButtonBase-root':{borderRadius:'50vh'},
                                textTransform: 'none',
                                backgroundColor:'primary.main',
                                color: 'common.white',
                                '&.MuiButtonBase-root:hover':{backgroundColor: 'primary.dark'},
                                '&.MuiButtonBase-root:active':{backgroundColor: (theme) => alpha(theme.palette.primary.dark, 0.9)},
                                '&.MuiButtonBase-root.Mui-disabled':{backgroundColor: 'action.disabledBackground', color:'text.disabled'},
                                px:2,
                                ml:1
                            }}
                            disabled={!state.comment}
                            >
                        <Typography variant='h6' color='inherit'>{state.mode === 'comment' ? 'Comment' : 'Reply'}</Typography>        
                    </Button>
                </Box>
            </Box>
        </Box>    
    </Box>
  )
}

