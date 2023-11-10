import { Avatar, Box, Button, IconButton, TextField, Typography } from '@mui/material'
import React from 'react'
import { YoutubeIcon } from '../../customization/Svgs'
import { alpha } from '@mui/material/styles';
import {SubmitComment} from '../../data/MockRestfuls'

export default function CommentByMe({level, vid, parentId, from, toggleReplyme, toggleTriggering}) {
    const [state, setState] = React.useState({
        comment: '',
        cancled: false,
        level: level,
        showBut: false
    })
    const leftMargin = level === 1 ? 70 : 40;
    const profileSize = level === 1 ? 50 : 30;

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

    const submitNewComment = () => {
        SubmitComment(vid, parentId, from, state.comment)
        toggleTriggering()
        setState({...state, comment:''})
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
                            onClick={submitNewComment}
                            >
                        <Typography variant='h6' color='inherit'>{ level === 1 ? 'Comment' : 'Reply'}</Typography>        
                    </Button>
                </Box>
            </Box>
        </Box>    
    </Box>
  )
}

