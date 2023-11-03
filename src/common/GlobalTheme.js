import { createTheme } from '@mui/material/styles';

const YoutubeTheme = createTheme({
    components: {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    fontSize: '1.2em',
                    fontWeight:'normal',
                    padding:'10px'
                }
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: 'inherit', 
                    textDecoration: 'inherit'
                }               
            }
        },
        MuiListItemButton: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root:  {
                    '&:hover':{backgroundColor:'rgba(0,0,0,0.04)'},
                    '&:active':{backgroundColor:'rgba(0,0,0,0.12)'}
                }               
            }
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root:  {
                    backgroundColor:'#e0e0e0',
                    '&:hover':{backgroundColor:'#bdbdbd'},
                    '&:active':{backgroundColor:'#9e9e9e'}
                }
                   
            }
        },
        MuiIconButton: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root:  {
                    '&:hover':{backgroundColor:'rgba(0,0,0,0.04)'},
                    '&:active':{backgroundColor:'rgba(0,0,0,0.12)'}
                }
                   
            }
        }

    }
})

export default YoutubeTheme