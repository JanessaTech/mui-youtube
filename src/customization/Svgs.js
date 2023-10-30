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
  ['hist', 'imgs/his.svg'],
  ['more_intro', 'imgs/more_intro.svg']
])

function generateIcon(src, size) {
  return (
    <Icon sx={{width:size, height:size}}>
      <img src={src} height={size} width={size}/>
    </Icon>
  )
}

export function YoutubeIcon({name,size}) {return (generateIcon(svgMapping.get(name) || 'imgs/bookmarker.svg', size || iconSize))}