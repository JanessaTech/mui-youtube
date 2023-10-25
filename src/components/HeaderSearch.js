
import { Box, IconButton, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import { YoutubeIcon } from '../customization/Svgs'
import { useTheme } from '@mui/material/styles';
import HeaderSearchHis from './HeaderSearchHis';

export default function HeaderSearch({isLargeScreen}) {
  const theme = useTheme()
  const [showHis, setShowHis] = React.useState(false)

  const handleFocus = (e) => {
    e.preventDefault()
    setShowHis(true)
  }
  const handleBlur = (e) => {
    e.preventDefault()
    setShowHis(false)

  }
  return (
    <Box sx={{width:0.7, height:1}}>
      <Box sx={{display:'flex', position:'relative'}} component='form' noValidate autoComplete='off'>
        <TextField sx={{
              '& .MuiOutlinedInput-root':{
                    'fieldset' : {borderRadius:'28px 0 0 28px'},
                    '&.Mui-focused fieldset': {borderColor:'primary.main'},
                    

                  },
              '& .MuiInputBase-adornedStart' :{pl: 2}
              }}
          id="outlined-basic" 
          variant="outlined" 
          placeholder='Search'
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment sx={{display: isLargeScreen ? 'flex' : 'none'}} position="start">
                <YoutubeIcon name={'search'}/>
              </InputAdornment>
            )
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <HeaderSearchHis isShow={showHis}/>
        <Box sx={{ 
                  backgroundColor:'action.hover', 
                  px:1,
                  boxSizing:'border-box',
                  border:'1px solid rgba(0, 0, 0, 0.23)',
                  borderRadius:'0 28px 28px 0', 
                  '&:hover':{backgroundColor:'action.selected'},
                  '&:active':{backgroundColor:'action.focus'}
                  }}
        >
           <IconButton sx={{'&.MuiButtonBase-root':{p:'12px'}}} 
                    aria-label="search" disableRipple>
              <YoutubeIcon name={'search'}/>
            </IconButton>
        </Box>
        <IconButton sx={{'&.MuiButtonBase-root':{p:'13px'}, ml:2, [theme.breakpoints.down('sm')]:{display:'none'}}} 
                    aria-label="voice_search">
              <YoutubeIcon name={'voice_search'}/>
        </IconButton>
       
      </Box>
    </Box>
  )
}

