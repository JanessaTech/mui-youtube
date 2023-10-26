import { Box } from '@mui/system'
import React from 'react'
import { useTheme } from '@mui/material/styles';
import shadows from '@mui/material/styles/shadows';
import { Button, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import { YoutubeIcon } from '../customization/Svgs';
import DeleteIcon from '@mui/icons-material/Delete';

export default function HeaderSearchHis({isShow, setKeyword}) {
    const theme = useTheme();
    const [mockHist, setMockHist] = React.useState(['Javascript algorithm', 'tailwind css tutorial', 'defi dapp', 'React js tips and tricks', 'web3.0 fullstack developer'])

    const handleRemove = (e, index) => {
      e.preventDefault()
      mockHist.splice(index, 1)
      setMockHist(mockHist.slice())
    }

    const handleClick = (e, key) => {
      console.log('handleClick = ', key)
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
            }}>
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
            <ListItemButton disableRipple onClick={(e) => {handleClick(e, text); console.log(text)}}>
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
}

