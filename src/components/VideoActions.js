import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, IconButton, ListItemIcon, ListItemText, Menu, Snackbar, Tooltip, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { YoutubeIcon } from '../customization/Svgs'
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';
import {YoutubeMenuItem} from '../customization/YoutubeStyling'
import {GetYoutuberInfo} from '../data/MockRestfuls'

function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}

function UnSubscribeDialog(props) {
    const {open, onClose, onUnsubscribe, from, ...others} = props
    const handleUnsubscribe = () => {
        onClose()
        onUnsubscribe()
    }
    return <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="unSubscribe-dialog-title"
                aria-describedby="unSubscribe-dialog-description"
                {...others}
            >
                <DialogContent>
                    <DialogContentText id="unSubscribe-dialog-description">
                        <Typography variant='h6'>Unsubscribe from <span style={{color: 'black'}}>{from}</span>?</Typography>   
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{justifyContent:'center'}}>
                    <Button sx={{px:3, backgroundColor:'inherit', fontSize:'1.2em', 
                                color:'black', borderRadius:'50vh',
                                }}
                            style={{textTransform:'none'}} 
                            onClick={onClose}>Cancel</Button>
                    <Button sx={{px:3,
                                backgroundColor:'inherit', fontSize:'1.2em',
                                borderRadius:'50vh',
                                '&:hover':{backgroundColor:'#e3f2fd'},
                                '&:active':{backgroundColor:'#bbdefb'}}} 
                                style={{textTransform:'none'}}
                                onClick={handleUnsubscribe} autoFocus>Unsubscribe</Button>
                </DialogActions>
            </Dialog>
}

UnSubscribeDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onUnsubscribe: PropTypes.func.isRequired,
    from: PropTypes.string.isRequired
}

export default function VideoActions({video}) {
    const subOptions = [ 'tongzhi-fill','tongzhi', 'tongzhi-no', 'unreg']
    const [state, setState] = React.useState(
        {
            subIndex : 1,  // default value
            isSubscribed: false,
            openSubSnackbar: false,
            openUnsubSnackbar: false,
            anchorSub: null,
            anchorReport: null,
            isUnSubscribeDialogOpen: false, 
            likes: video?.likes,
            dislikes: video?.dislikes,
            author: undefined
        }
    )
    useEffect(() => {
        const youtuber = GetYoutuberInfo(video?.authorId)
        const me = parseInt(localStorage.getItem('user'))
        setState(
            {...state, 
            subIndex: youtuber?.subIndex,
            likes: video?.likes,
            dislikes: video?.dislikes, 
            author: youtuber,
            isSubscribed: !!youtuber?.subscribers.includes(me)      
            })
    }, [video])
   
    const isSubMenuOpen = Boolean(state.anchorSub)
    const isReportMenuOpen = Boolean(state.anchorReport);

    const handleSubscribe = (e) => {
        e.preventDefault()
        setState({...state, openSubSnackbar: true, isSubscribed: true})
    }
    const handleSubIndex = (e, index) => {
        e.preventDefault()
        setState({...state, subIndex: index, anchorSub: null})
    }
    const handleCloseUnSubscribeDialog = () => {
        setState({...state, isUnSubscribeDialogOpen:false})
    }
    const handleUnsubscribe = () => {
        setState({...state, isSubscribed: false, isUnSubscribeDialogOpen: false, openUnsubSnackbar: true})
    }
    const openUnsubscribeDialog = (e) => {
        e.preventDefault()
        setState({...state, isUnSubscribeDialogOpen: true, anchorSub: null})
    }
    const closeSubSnackbar = () => {
        setState({...state, openSubSnackbar: false})
    }
    const closeUnsubSnackbar = () => {
        setState({...state, openUnsubSnackbar: false})
    }
    const openSubMenu = (e) => {
        setState({...state, anchorSub: e.currentTarget})
    }
    const openReportMenu = (e) => {
        setState({...state, anchorReport: e.currentTarget})
    }
    const closeSubMenu = () => {
        setState({...state, anchorSub: null})
    }
    const closeReportMenu = () => {
        setState({...state, anchorReport: null})
    }

    const increaseLikes = () => {
        setState({...state, likes: state.likes + 1})
    }
    const decreaseLikes = () => {
        setState({...state, dislikes: state.dislikes > 0 ? state.dislikes - 1 : 0})
    }
  return (
    <Box sx={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', my:1}}>
        <Box sx={{display:'flex', alignItems:'center'}}>
            <IconButton sx={{p:0}} href='me'>
                <Avatar sx={{ width: 50, height: 50 }} alt={state.author?.name} src={state.author?.img_profile}/>
            </IconButton>
            <Box sx={{ml:1, mr:1}}>
                <Tooltip title={state.author?.name} placement="top-start" >
                    <Typography variant='h6' sx={{textOverflow: 'ellipsis', overflow: 'hidden', width:100, whiteSpace:'nowrap'}}>{state.author?.name}</Typography>
                </Tooltip>
                <Typography sx={{whiteSpace:'nowrap'}} variant='body2' color="text.secondary">{state.author?.subscribers?.length} subscriber(s)</Typography>
            </Box>
            <Box>
                <Button 
                        id='sub-button'
                        sx={{
                            '&.MuiButtonBase-root':{borderRadius:'50vh'},
                            display:state.isSubscribed ? 'flex' : 'none',
                        }}
                        aria-controls={isSubMenuOpen ? 'sub-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={isSubMenuOpen ? 'true' : undefined}
                        variant="contained" 
                        style={{textTransform: 'none'}} 
                        startIcon={<YoutubeIcon name={subOptions[state.subIndex]}/>} 
                        endIcon={<YoutubeIcon name={'arrow-down'}/>}
                        disableElevation
                        onClick={openSubMenu}
                >
                    <Typography variant='h6' color='text.primary'>Subscribed</Typography>
                </Button>
                <Button sx={{
                            display:state.isSubscribed ? 'none' : 'block',
                            px:2,
                            '&.MuiButtonBase-root':{borderRadius:'50vh'}, 
                            backgroundColor:'common.black', 
                            '&.MuiButtonBase-root:hover':{backgroundColor:'rgba(0,0,0,0.7)'},
                            '&.MuiButtonBase-root:active':{backgroundColor:'rgba(0,0,0,0.8)'},
                            color: 'common.white', textTransform: 'none'}} disableElevation onClick={handleSubscribe}>
                    <Typography variant='h6' color='inherit'>Subscribe</Typography>
                </Button>
            </Box>
            
        </Box>

        <Box sx={{display:'flex', alignItems:'center'}}>
            <Box sx={{display:'flex', alignItems:'center'}}>
                <Tooltip title='I like this' placement='bottom'>
                    <Button sx={{
                                '&.MuiButtonBase-root':{ borderRadius:'50vh 0 0 50vh'},
                                '& .MuiButton-startIcon': {ml:1}
                            }}
                            startIcon={<YoutubeIcon name={'support'}/>}
                            disableElevation
                            onClick={increaseLikes}
                    >
                        <Typography variant='h6' color='text.primary'>{state.likes ? state.likes : 0}</Typography> 
                    </Button>
                </Tooltip>
                <Tooltip title='I dislike this' placement='bottom'>
                    <Button sx={{
                                '&.MuiButtonBase-root':{ borderRadius:'0 50vh 50vh 0', borderLeft:'2px solid #757575'},
                                '& .MuiButton-endIcon': {mr:1}

                            }}
                            endIcon={<YoutubeIcon name={'support-no'}/>}
                            disableElevation
                            onClick={decreaseLikes}
                    >
                        <Typography variant='h6' color='text.primary'>{state.dislikes ? state.dislikes : 0}</Typography> 
                    </Button>
                </Tooltip>
                
            </Box>
            <Tooltip title='Share' placement='bottom'>
                <Button sx={{
                                '&.MuiButtonBase-root':{ borderRadius:'50vh'},
                                '& .MuiButton-startIcon': {ml:1},
                                ml:1
                            }}
                            startIcon={<YoutubeIcon name={'share'}/>}
                            style={{textTransform: 'none'}} 
                            disableElevation
                    >
                        <Typography variant='h6' color='text.primary'>share</Typography> 
                </Button>
            </Tooltip>
            <Tooltip title='Save' placement='bottom'>
                <Button sx={{
                                '&.MuiButtonBase-root':{ borderRadius:'50vh'},
                                '& .MuiButton-startIcon': {ml:1},
                                ml:1, 
                                display:{xs:'none', sm:'flex'}
                            }}
                            startIcon={<YoutubeIcon name={'save'}/>}
                            style={{textTransform: 'none'}} 
                            disableElevation
                    >
                        <Typography variant='h6' color='text.primary'>Save</Typography> 
                </Button>
            </Tooltip>
            <IconButton sx={{
                            '&.MuiButtonBase-root':{ borderRadius:'50vh'},
                            ml:1,
                        }}
                        id='report-button'
                        aria-controls={isReportMenuOpen ? 'report-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={isReportMenuOpen ? 'true' : undefined}
                        disableElevation
                        onClick={openReportMenu}>
                <YoutubeIcon name='more'/>
            </IconButton>  
        </Box>
        <Snackbar sx={{'&.MuiSnackbar-root .MuiSnackbarContent-root': {minWidth:'100px', width:'fit-content', fontSize:'1.2em'}}}
            open={state.openSubSnackbar}
            autoHideDuration={2000}
            onClose={closeSubSnackbar}
            message="Subscribed successfully"
            TransitionComponent={SlideTransition}
            key={`${SlideTransition.name}-sub`}
        >
        </Snackbar>
        <Snackbar sx={{'&.MuiSnackbar-root .MuiSnackbarContent-root': {minWidth:'100px', width:'fit-content', fontSize:'1.2em'}}}
            open={state.openUnsubSnackbar}
            autoHideDuration={2000}
            onClose={closeUnsubSnackbar}
            message="Unsubscribed successfully"
            TransitionComponent={SlideTransition}
            key={`${SlideTransition.name}-unsub`}
        >
        </Snackbar>
        <Menu 
                id="sub-menu"
                anchorEl={state.anchorSub}
                open={isSubMenuOpen}
                onClose={closeSubMenu}
                sx={{mt:1}}
                MenuListProps={{
                    'aria-labelledby': 'sub-button',
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}>
                <YoutubeMenuItem disableRipple={true} onClick={(e) => handleSubIndex(e, 0)}>
                    <ListItemIcon>
                        <YoutubeIcon name={'tongzhi-fill'}/>
                    </ListItemIcon>
                    <ListItemText>All</ListItemText>
                </YoutubeMenuItem>
                <YoutubeMenuItem disableRipple={true} onClick={(e) => handleSubIndex(e, 1)}>
                    <ListItemIcon>
                        <YoutubeIcon name={'tongzhi'}/>
                    </ListItemIcon>
                    <ListItemText>Personalized</ListItemText>
                </YoutubeMenuItem>
                <YoutubeMenuItem disableRipple={true} onClick={(e) => handleSubIndex(e, 2)}>
                    <ListItemIcon>
                        <YoutubeIcon name={'tongzhi-no'}/>
                    </ListItemIcon>
                    <ListItemText>None</ListItemText>
                </YoutubeMenuItem>
                <YoutubeMenuItem disableRipple={true} onClick={openUnsubscribeDialog}>
                    <ListItemIcon>
                        <YoutubeIcon name={'unreg'}/>
                    </ListItemIcon>
                    <ListItemText>Unsubscribe</ListItemText>
                </YoutubeMenuItem>
        </Menu>
        <Menu
                id="report-menu"
                anchorEl={state.anchorReport}
                open={isReportMenuOpen}
                onClose={closeReportMenu}
                sx={{mt:1}}
                MenuListProps={{
                    'aria-labelledby': 'report-button',
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}>
                <YoutubeMenuItem disableRipple={true} onClick={closeReportMenu}>
                    <ListItemIcon>
                        <YoutubeIcon name={'report'}/>
                    </ListItemIcon>
                    <ListItemText>Report</ListItemText>
                </YoutubeMenuItem>
                <YoutubeMenuItem disableRipple={true} onClick={closeReportMenu}>
                    <ListItemIcon>
                        <YoutubeIcon name={'script'}/>
                    </ListItemIcon>
                    <ListItemText>Show transcript</ListItemText>
                </YoutubeMenuItem>
        </Menu>
        <UnSubscribeDialog
            open={state.isUnSubscribeDialogOpen}
            onClose={handleCloseUnSubscribeDialog}
            onUnsubscribe={handleUnsubscribe}
            from={state.author?.name}
        />      
    </Box>
  )
}

