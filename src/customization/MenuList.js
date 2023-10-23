import { List } from "@mui/material"
import {  styled } from '@mui/material/styles';
/*
export const MenuList = styled(List)(({ theme }) => theme.unstable_sx({
    color:'common.black', 
   '& .MuiTypography-root': {fontSize: '1.2rem'},
   '& li > div:hover': {
     borderRadius:3
   },
   '& li > div:active': {
     backgroundColor:'#c8c8c8'
   }
 }))*/

 export const MenuList = styled(List)({
  color:'common.black', 
   '& .MuiTypography-root': {fontSize: '1.2rem'},
   '& li > div:hover': {borderRadius:12},
   '& li > div:active': {backgroundColor:'#c8c8c8'},
   '& .Mui-selected':{borderRadius:12}
 })