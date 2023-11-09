import { Avatar, Button, Collapse, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { YoutubeIcon } from '../../customization/Svgs'
import CommentByMe from './CommentByMe'
import {GetYoutuberInfo, GetCommentsByCommentIds} from '../../data/MockRestfuls'

function ShowReplies({commentedBy, level}) {
    const [state, setState] = React.useState(
        {
            showReply: false,
            comments: GetCommentsByCommentIds(commentedBy)
        })
    const toggleShowReply = () => {
        setState({...state, showReply: !state.showReply})
    }

    if (state.comments && state.comments.length > 0) {
        return (
        <Box>
            <Button sx={{textTransform:'none', borderRadius:'50vh',
                        '&.MuiButtonBase-root:hover': {backgroundColor:'#b6e2fa'},
                        '&.MuiButtonBase-root:active': {backgroundColor:'#9dc2d7'},
                    }}
                    startIcon={<YoutubeIcon name={state.showReply ? 'triangle-down' : 'triangle-up'} size={20}/>}
                    onClick={toggleShowReply}
                >
                    <Typography variant='body2' sx={{color:'black', fontWeight:'bold'}}>{state.comments.length } replies</Typography>
            </Button>
            <Collapse in={state.showReply} timeout="auto" unmountOnExit>
                    {
                        state.comments.map((comment) => (<OneComment key={comment.id} level={level} {...comment}/>))
                    }
            </Collapse>
        </Box>)
    } 
    return <Box></Box>
}

export default function OneComment({level, from, days, comment, likes, dislikes, commentedBy}) {
    const [state, setState] = React.useState({
        level: level,
        replyMeVisible: false,
        youtuber: GetYoutuberInfo(from)
    })
    const leftMargin = state.level === 1 ? 70 : 40
    const profileSize = state.level === 1 ? 50 : 30

    
    const toggleReplyme = () => {
        setState({...state, replyMeVisible: !state.replyMeVisible})
    }
  return (
    <Box sx={{my: state.level === 1 ? 4 : 1, color: 'text.primary', display:'flex'}}>
        <Box sx={{width: leftMargin}}>
            <IconButton sx={{p:0}}>
                    <Avatar sx={{ width: profileSize, height: profileSize }} alt={state.youtuber?.name} src={state.youtuber?.img_profile}/>
            </IconButton>
        </Box>
        <Box sx={{width:`calc(100% - ${leftMargin}px)`}}>
            <Box sx={{display:'flex'}}>
                <Typography sx={{mr:2}} color='black'>@{from}</Typography>
                <Typography color={'text.secondary'}>{days}</Typography>
            </Box>
            <Box sx={{my:1}}>
                <Typography>
                {comment}
                </Typography>
            </Box>
            <Box sx={{display:'flex', alignItems:'center'}}>
                <IconButton>
                    <YoutubeIcon name={'support'} size={25}/>
                </IconButton>
                <Typography variant='body2'>{likes}</Typography>
                <IconButton sx={{ml:2}}>
                    <YoutubeIcon name={'support-no'} size={25}/>
                </IconButton>
                <Typography variant='body2'>{dislikes}</Typography>
                { level < 3 && 
                <Button sx={{textTransform:'none', borderRadius:'50vh', ml:2}} onClick={toggleReplyme}>
                    <Typography variant='body2' sx={{color:'black', fontWeight:'bold'}}>Reply</Typography>
                </Button>}
                
            </Box>
            {state.replyMeVisible && level < 3 && <CommentByMe level={ state.level + 1} toggleReplyme={toggleReplyme}/>}
            {level < 3 && <ShowReplies commentedBy={commentedBy} level={ state.level + 1}/>}
        </Box>
    </Box>
  )
}

