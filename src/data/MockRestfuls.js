
import {mockVideos} from './Videos'
import {videos, youtubers, comments} from './MockData'

export function GetVideos(profileId, key) {
    return mockVideos.filter((v) => {return v.profileId === profileId}).filter((v) => {return !!key ? v.key === key : true})
}
export function GetRecommendedVideos(userId, search) {
    var filteredVideos = videos.filter((v) => {return v.recommendTo === userId}).filter((v) => {return !!search ? v.search === search : true})

    const res = []
    filteredVideos.forEach((v) => {
        const youtuber = GetYoutuberInfo(v.authorId)
        if (!youtuber) {
            console.error('Cannot find youtuber by id ', v.authorId)
        } else {
            res.push({...v, author: youtuber.name, img_profile: youtuber.img_profile})
        }
    })
    return res
}

export function GetVideoDetails(vid) {
    var video = videos.find(v => {return v.id === vid})
    if (!video) {
        console.error('Cannot find video by id ', vid)
        return undefined
    }
    return video
}

export function GetYoutuberInfo(id) {
    return youtubers.find((you) => {return you.id === id})
}

export function GetComments(vid) {
    return comments.filter((c) => {return c.vedioId === vid})
}
export function GetCommentsByCommentIds(cids) {
    return comments.filter((c) => {return cids ? cids.includes(c.id) : false })
}