import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Video from './Video';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    height:300,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }));

export default function VideoLayout() {
  return (
    <Box sx={{mt:2}}>
        <Grid container spacing={{sm: 2, md:2, lg:3}} columns={{ xs: 2, sm: 8, md: 12, lg:12, xl:12}}>
            <Grid item xs={2} sm={4} md={6} lg={4} xl={3}>
                <Video/>
            </Grid>
            <Grid item xs={2} sm={4} md={6} lg={4} xl={3}>
                <Video/>
            </Grid>
            <Grid item xs={2} sm={4} md={6} lg={4} xl={3}>
                <Video/>
            </Grid>
            <Grid item xs={2} sm={4} md={6} lg={4} xl={3}>
                <Video/>
            </Grid>
            <Grid item xs={2} sm={4} md={6} lg={4} xl={3}>
                <Video/>
            </Grid>
            <Grid item xs={2} sm={4} md={6} lg={4} xl={3}>
                <Video/>
            </Grid>
            <Grid item xs={2} sm={4} md={6} lg={4} xl={3}>
                <Video/>
            </Grid>
            <Grid item xs={2} sm={4} md={6} lg={4} xl={3}>
                <Video/>
            </Grid>
            <Grid item xs={2} sm={4} md={6} lg={4} xl={3}>
                <Video/>
            </Grid>
        </Grid>
    </Box>
  )
}

