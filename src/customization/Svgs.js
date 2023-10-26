import { Icon } from "@mui/material"

const iconSize = 30
const svgMapping = new Map([
  ['home', 'imgs/home-fill.svg'],
  ['shorts', 'imgs/shorts.svg'],
  ['subscriptions', 'imgs/reg.svg'],
  ['library', 'imgs/library-books.svg'],
  ['history', 'imgs/his.svg'],
  ['your videos', 'imgs/video.svg'],
  ['watch later', 'imgs/watch.svg'],
  ['more', 'imgs/arrow-down.svg'],
  ['less', 'imgs/arrow-up.svg'],
  ['create', 'imgs/video-plus.svg'],
  ['notification', 'imgs/togzhi.svg'],
  ['search', 'imgs/len.svg'],
  ['voice_search','imgs/speaker.svg'],
  ['close', 'imgs/close.svg'],
  ['hist', 'imgs/his.svg']

  
])

function generateIcon(src) {
  return (
    <Icon sx={{width:iconSize, height:iconSize}}>
      <img src={src} height={iconSize} width={iconSize}/>
    </Icon>
  )
}

export function YoutubeIcon({name}) {return (generateIcon(svgMapping.get(name) || 'imgs/bookmarker.svg'))}