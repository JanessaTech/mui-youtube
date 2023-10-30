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
        }
    }
})

export default YoutubeTheme