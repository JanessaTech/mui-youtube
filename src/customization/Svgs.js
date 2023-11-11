import { Icon } from "@mui/material"

const iconSize = 30
const svgMapping = new Map([
  ['home', 'imgs/home-fill.svg'],
  ['shorts', 'imgs/shorts.svg'],
  ['subscriptions', 'imgs/reg.svg'],
  ['register', 'imgs/reg.svg'],
  ['library', 'imgs/library-books.svg'],
  ['history', 'imgs/his.svg'],
  ['your videos', 'imgs/video.svg'],
  ['watch later', 'imgs/watch.svg'],
  ['arrow-down', 'imgs/arrow-down.svg'],
  ['arrow-up', 'imgs/arrow-up.svg'],
  ['create', 'imgs/video-plus.svg'],
  ['search', 'imgs/len.svg'],
  ['voice_search','imgs/speaker.svg'],
  ['close', 'imgs/close.svg'],
  ['hist', 'imgs/his.svg'],
  ['more_intro', 'imgs/more_intro.svg'],
  ['prof', 'imgs/prof.png'],
  ['tongzhi', 'imgs/tongzhi.svg'],
  ['tongzhi-fill', 'imgs/tongzhi-fill.svg'],
  ['tongzhi-no', 'imgs/tongzhi-no.svg'],
  ['unreg', 'imgs/unreg.svg'],
  ['support', 'imgs/support.svg'],
  ['support-no','imgs/support-no.svg'],
  ['share','imgs/share.svg'],
  ['save','imgs/save.svg'],
  ['more', 'imgs/more.svg'],
  ['sort', 'imgs/sort.svg'],
  ['emoji', 'imgs/emoji.svg'],
  ['triangle-down', 'imgs/triangle-down.svg'],
  ['triangle-up', 'imgs/triangle-up.svg'],
  ['add-to-list', 'imgs/popups/add-to-list.svg'],
  ['watch', 'imgs/popups/watch.svg'],
  ['category-add', 'imgs/popups/category-add.svg'],
  ['no-interest', 'imgs/popups/no-interest.svg'],
  ['no-recommd', 'imgs/popups/no-recommd.svg'],
  ['report', 'imgs/popups/report.svg'],
  ['script', 'imgs/popups/script.svg']
])

function generateIcon(src, size) {
  return (
    <Icon sx={{width:size, height:size}}>
      <img src={src} height={size} width={size}/>
    </Icon>
  )
}

export function YoutubeIcon({name,size}) {return (generateIcon(svgMapping.get(name) || 'imgs/bookmarker.svg', size || iconSize))}