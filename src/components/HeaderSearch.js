
import { Box, Button, IconButton, InputAdornment, TextField, Tooltip } from '@mui/material'
import React from 'react'
import { YoutubeIcon } from '../customization/Svgs'
import { useTheme } from '@mui/material/styles';
import HeaderSearchHis from './HeaderSearchHis';
import { useRef, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

export default function HeaderSearch({isLargeScreen}) {
  const theme = useTheme()
  const navigate = useNavigate();
  const [showHis, setShowHis] = React.useState(false)
  const [search, setSearch] = React.useState('')
  const [clear, setClear] =  React.useState(false)
  const histRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const search = searchParams.get('search_query')
    setSearch(search)
  }, [searchParams])
  
  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!histRef.current?.contains(event.target)) {
        //  click outside of hist when hist popup is shown
        setShowHis(false)
      }
    };
    window.addEventListener("mousedown", handleOutSideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [histRef]);

  const handleFocus = (e) => {
    e.preventDefault()
    setShowHis(true)
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

  const setKeyword = (key) => {
    setSearch(key)
    setShowHis(false)
    setClear(true)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('search by ', search)
    navigate(`/results?search_query=${search}`)
  }

  const handleVoiceSearch = (e) => {
    e.preventDefault()
    console.log('search by voice')
  }

  return (
    <Box sx={{width:0.7, height:1}}>
      <Box sx={{display:'flex', position:'relative'}} component='form' noValidate autoComplete='off'>
        <TextField sx={{
              '& .MuiOutlinedInput-root':{
                    'fieldset' : {borderRadius:'50vh 0 0 50vh'},
                    '&.Mui-focused fieldset': {borderColor:'primary.main'},
                    

                  },
              '& .MuiInputBase-adornedStart' :{pl: 2}
              }}
          id="youtube-search-input" 
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
          onChange={handleChanges}
        />
        <HeaderSearchHis isShow={showHis} setKeyword={setKeyword} ref={histRef}/>
        
        <Tooltip title="Search">
              <Button 
                  sx={{borderRadius:'0 50vh 50vh 0', border:'1px solid #bdbdbd', boxSizing:'border-box'}}
                  startIcon={<YoutubeIcon name={'search'}/>} 
                  onClick={handleSearch}/>
        </Tooltip>          
        <Tooltip title="Search with your voice">
          <IconButton sx={{
                          '&.MuiButtonBase-root':{p:'13px'}, 
                          ml:2, 
                          [theme.breakpoints.down('sm')]:{display:'none'},
                          
                        }} 
                      aria-label="voice_search" onClick={handleVoiceSearch}>
                <YoutubeIcon name={'voice_search'}/>
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  )
}

