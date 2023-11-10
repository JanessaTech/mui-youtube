import { Box, Button, Tooltip, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { YoutubeIcon } from '../../customization/Svgs'
import CommentByMe from './CommentByMe'
import OneComment from './OneComment'
import {GetComments} from '../../data/MockRestfuls'

export default function Comments({vid}) {
  const [comments, setComments] = React.useState(GetComments(vid))
  const [triggering, setTriggering] = React.useState(false)
  const meId = parseInt(localStorage.getItem('user'))

  const toggleTriggering = () => {
    console.log('toggleTriggering')
    setTriggering(!triggering)
  }

  useEffect(() => {
    console.log('setComments(GetComments(vid))')
    const cc = GetComments(vid)
    console.log(cc)
    setComments(cc)
  }, [triggering])

  return (
    <Box sx={{width:1}}>
      <Box sx={{display:'flex', mb:1}}>
        <Typography variant='h6'>{comments.length} Comments</Typography>
        <Tooltip title='Sort comments' placement='bottom'>
          <Button 
            sx={{ml: 4, fontSize:'1em', color:'inherit', backgroundColor:'inherit'}}
            style={{textTransform:'none'}}
            startIcon={<YoutubeIcon name='sort' size={20}/>} 
            >Sort by
          </Button>
        </Tooltip>
      </Box>
      <CommentByMe level={1} vid={vid} parentId={undefined} from={meId} toggleTriggering={toggleTriggering}/>
      {
        comments.map( (comment, index) => (<OneComment key={comment.id} level={1} {...comment} toggleTriggering={toggleTriggering}/>))
      }
    </Box>
  )
}

