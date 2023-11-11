import React from 'react'
import { Box, Button } from '@mui/material'
import {minDrawerWidth, headerHeight} from '../common/Constants'
import { YoutubeIcon } from '../customization/Svgs'
import { styled } from '@mui/material/styles';
import {capitalize} from '../common/Utils'

const MinMenuButton = styled((props => {
  const {label, ...others} = props
  return (
    <Button
              sx={{width:1, height:80, backgroundColor:'inherit', borderRadius:4, minWidth:minDrawerWidth,
                  '& .MuiButton-startIcon':{m:0},
                  '&.MuiButtonBase-root':{px:0},
                  flexDirection:'column',
                  textTransform:'none',
                  color:'inherit'
                  }}
              startIcon={<YoutubeIcon name={label}/>}
              {...others}>
                <span>{capitalize(label)}</span>
    </Button>

  )
}))({})

export default function MinMenu({open}) {
  return (
    <Box sx={{position: 'fixed',
                      top: headerHeight, left:{xs:8, sm: 8},
                      width: minDrawerWidth,
                      height:700,
                      zIndex:1100,
                      display: open ? 'block' : 'none'
            }}>
              <MinMenuButton label={'home'}/>
              <MinMenuButton label={'shorts'}/>
              <MinMenuButton label={'register'}/>
    </Box>
  )
}

