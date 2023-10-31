import {fullDrawerWidth} from '../common/Constants'
import { styled } from '@mui/material/styles';
import { Drawer } from '@mui/material'

export const YoutubeDrawer = styled((props) => {
    const {open, onClose, ...others} = props;
    return <Drawer
              sx={{'& .MuiDrawer-paper': { boxSizing: 'border-box', width: fullDrawerWidth }}}
              open={open}
              anchor="left"
              onClose={onClose}
              {...others}
            />;
  })({})