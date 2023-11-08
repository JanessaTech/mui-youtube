import { Box, Button, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { YoutubeIcon } from '../../customization/Svgs'
import CommentByMe from './CommentByMe'
import OneComment from './OneComment'

export default function Comments() {
  const comments = [
    {
      from: 'UncommonSenz',
      days: '5 days ago',
      profile: 'imgs/commenters/p1.png',
      comment:'Anytime I come here, I leave inspired and motivated. The universe brought you into my life. And I\'ve been learning since, hoping to find myself. May God bless you JanessaTech.',
      likes:33,
      dislikes:1,
      commentedBy: [
        {
          from: 'arthurthomasware5004',
          days: '4 days ago',
          profile: 'imgs/commenters/p3.png',
          comment: 'A profound message succinctly put. Has it occurred to you, though, JanessaTech, the meaning we\'ve to search for could be common to us all. Just picked up Michael Newton\'s, "Life between Lives - Hypnotherapy for Spiritual Regression." Have you ever read any of his stuff? e.g. Journey of Souls, and Destiny of Souls.',
          likes:50,
          dislikes:1,
          commentedBy: [
            {
              from: 'Nicktuck333',
              days: '3 days ago',
              profile: 'imgs/commenters/p5.png',
              comment: 'This was amazing JanessaTech, the point on reciprocity was outstanding, really fantastic advice',
              likes:17,
              dislikes:1,
              commentedBy: undefined
            }
          ]
        },
        {
          from: 'G6EJD',
          days: '7 days ago',
          profile: 'imgs/commenters/p4.png',
          comment: 'Thank you, that was very thought provoking and insightful.',
          likes:45,
          dislikes:1,
          commentedBy: undefined
        }
      ]
    },
    {
      from: 'kamabk1',
      days: '6 days ago',
      profile: 'imgs/commenters/p2.png',
      comment:'Beautiful lovey words.. Finding meaning is the key in every communication.. and not following the lessons from failure...another key..',
      likes:15,
      dislikes:1,
      commentedBy: undefined
    }
  ]
  
  return (
    <Box sx={{width:1}}>
      <Box sx={{display:'flex', mb:1}}>
        <Typography variant='h6'>3 Comments</Typography>
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
        comments.map( (comment) => (<OneComment level={1} {...comment}/>))
      }
    </Box>
  )
}

