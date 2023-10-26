import { Box } from '@mui/system'
import React from 'react'
import { useTheme } from '@mui/material/styles';
import shadows from '@mui/material/styles/shadows';
import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { YoutubeIcon } from '../customization/Svgs';

export default function HeaderSearchHis({isShow}) {
    const theme = useTheme();
    const [mockHist, setMockHist] = React.useState(['Javascript algorithm', 'tailwind css tutorial', 'defi dapp', 'React js tips and tricks', 'web3.0 fullstack developer'])

    const handleRemove = (e, index) => {
      e.preventDefault()
      console.log('remove ', index)
      mockHist.splice(index, 1)
      setMockHist(mockHist.slice())
    }

  return (
   
    <Box sx={{
                boxShadow: shadows[10],
                width:1, backgroundColor: theme.palette.background.paper,
                position: 'absolute',
                top:60,
                left:0, borderRadius:4,
                display:isShow && mockHist.length > 0 ? 'block': 'none',
                color: 'black'
            }}>
         {console.log('reddering ....')}
        <List>
        {mockHist.map((text, index) => (
          <ListItem key={index} disablePadding
              secondaryAction={
                <Button sx={{
                  backgroundColor:'inherit',
                  '&:hover, &:active': {backgroundColor:theme.palette.background.paper, textDecoration:'underline'}
                  }} 
                  href="#text-buttons" disableRipple onClick={(e) => handleRemove(e, index)}>
                    Remove
                </Button>
              }
          >
            <ListItemButton disableRipple>
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

