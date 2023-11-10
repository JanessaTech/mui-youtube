import { Box } from '@mui/system'
import React from 'react'
import { useTheme } from '@mui/material/styles';
import shadows from '@mui/material/styles/shadows';
import {IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import { YoutubeIcon } from '../customization/Svgs';
import DeleteIcon from '@mui/icons-material/Delete';
import { forwardRef } from 'react';
import {GetHistoryKeyWords} from '../data/MockRestfuls'

const HeaderSearchHis = forwardRef(({isShow, setKeyword}, ref) => { 
  const theme = useTheme();
  const me = parseInt(localStorage.getItem('user'))
  const [mockHist, setMockHist] = React.useState(GetHistoryKeyWords(me))

  const handleRemove = (e, index) => {
    e.preventDefault()
    mockHist.splice(index, 1)
    setMockHist(mockHist.slice()) // set the copy of the origin array, otherwise no rendering
  }

  const handleClick = (e, key) => {
    e.preventDefault()
    setKeyword(key)
  }

return (
  <Box sx={{
              boxShadow: shadows[10],
              width:1, backgroundColor: theme.palette.background.paper,
              minWidth:300,
              position: 'absolute',
              top:60,
              left:{xs: -70, sm:0}, borderRadius:4,
              display:isShow && mockHist.length > 0 ? 'block': 'none',
              color: 'black'
          }} ref={ref}>
      <List>
      {
      mockHist.map((text, index) => (
        <ListItem key={index} disablePadding
            secondaryAction={
              <Tooltip title="Delete">
                <IconButton edge="end" aria-label="delete" onClick={(e) => handleRemove(e, index)}>
                  <DeleteIcon />
                </IconButton> 
              </Tooltip>             
            }
        >
          <ListItemButton disableRipple onClick={(e) => {handleClick(e, text)}}>
            <ListItemIcon>
              <YoutubeIcon name={'hist'}/>
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))
      }
      </List>

  </Box>
)
})

export default HeaderSearchHis

