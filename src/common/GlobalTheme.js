import { createTheme } from '@mui/material/styles';

const YoutubeTheme = createTheme({
    components:{
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
                focusVisibleClassName: 'focus-visible'
            },
            styleOverrides: {
                root: {
                    '&.focus-visible': {
                       //backgroundColor: 'rgba(0, 0, 0, 0.12)', // theme.pallate.action.focus
                       backgroundColor: '#c8c8c8', // theme.pallate.action.focus
                     },
                   },
            }
        }
    }
})

export default YoutubeTheme
// why it cannot work?
// https://stackoverflow.com/questions/66193678/add-focusvisibleclassname-globally-in-material-ui