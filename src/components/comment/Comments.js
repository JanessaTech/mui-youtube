import { Box, Button, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { YoutubeIcon } from '../../customization/Svgs'
import CommentByMe from './CommentByMe'
import OneComment from './OneComment'
import {GetComments} from '../../data/MockRestfuls'

export default function Comments({vid}) {
  const [comments, setComments] = React.useState(GetComments(vid))

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
      <CommentByMe level={1}/>
      {
        comments.map( (comment, index) => (<OneComment key={comment.id} level={1} {...comment}/>))
      }
    </Box>
  )
}

