
import { Box, IconButton, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import { YoutubeIcon } from '../customization/Svgs'
import { useTheme } from '@mui/material/styles';
import HeaderSearchHis from './HeaderSearchHis';

export default function HeaderSearch({isLargeScreen}) {
  const theme = useTheme()
  const [showHis, setShowHis] = React.useState(false)
  const [search, setSearch] = React.useState('')
  const [clear, setClear] =  React.useState(false)

  const handleFocus = (e) => {
    e.preventDefault()
    setShowHis(true)
  }
  const handleBlur = (e) => {
    e.preventDefault()
    setShowHis(false)

  }
  const handleChanges = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
    if (e.target.value && e.target.value.length > 0) {
      setClear(true)
      setShowHis(false)
    } else {
      setClear(false)
      setShowHis(true)
    }
  }
  const handleClear = (e) => {
    e.preventDefault()
    setClear(false)
    setSearch('')
    setShowHis(true)
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
          value={search}
          variant="outlined" 
          placeholder='Search'
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment sx={{display: isLargeScreen ? 'flex' : 'none'}} position="start">
                <YoutubeIcon name={'search'}/>
              </InputAdornment>
            ),
            endAdornment:(
              <InputAdornment sx={{display: clear ? 'flex': 'none'}} position="end">
                <IconButton onClick={handleClear}>
                  <YoutubeIcon name={'close'}/>
                </IconButton> 
              </InputAdornment>
            )
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChanges}
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

