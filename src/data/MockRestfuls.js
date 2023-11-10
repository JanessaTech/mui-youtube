
import {videos, youtubers, comments} from './MockData'


export function GetRecommendedVideos(userId, search) {
    var filteredVideos = videos.filter((v) => {return v.recommendTo === userId}).filter((v) => {return !!search ? v.key === search : true})

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

export function GetHistoryKeyWords(user) {
    const me = youtubers.find((you) => {return you.id === user})
    return me ? me.historyKeyWords : []
}

export function GetSubscriptions(user) {
    const me = youtubers.find((you) => {return you.id === user})
    var subs = []
    if(me && me.subscriptions.length > 0) {
        subs = youtubers.filter((y) => {return me.subscriptions.includes(y.id)})
    }
    return subs
}

/**
 * Subscribe to a youtuber
 * 
 * @param {*} subject - The id of the youtuber which subscriber wants to subscribe to
 * @param {*} subscriber - The id of the subscriber who clicks the subscribe button on watch page
 */
export function Subscribe(subject, subscriber) {
    const youtuber = youtubers.find((you) => {return you.id === subject})
    if (!youtuber.subscribers) {
        youtuber.subscribers = [subscriber]
    } else if (youtuber.subscribers.includes(subscriber)) {
        console.warn(`${subscriber} is already subscribed in youtuber ${subject}`)
    } else {
        youtuber.subscribers.push(subscriber)
        console.log(`Subscribe ${subscriber} to youtuber ${subject}`)
        console.log(youtubers.find((you) => {return you.id === subject}))
    }
}

/**
 * Unsubscribe from a youtuber
 * 
 * @param {*} subject - The id of the youtuber which subscriber wants to unsubscribe from
 * @param {*} subscriber - The id of the subscriber who clicks the unsubscribe option on watch page
 */
export function Unsubscribe(subject, subscriber) {
    const youtuber = youtubers.find((you) => {return you.id === subject})
    if (!youtuber.subscribers) {
        console.warn(`subscribers in youtuber ${subject} is empty. You cannot unsubscribe ${subscriber} to it`)
    } else if (!youtuber.subscribers.includes(subscriber)) {
        console.error(`cannot find ${subscriber} in youtuber ${subject}`)
    } else {
        youtuber.subscribers = youtuber.subscribers.splice(subscriber, 1)
        console.log(`Unsubscribe ${subscriber} from youtuber ${subject}`)
        console.log(youtubers.find((you) => {return you.id === subject}))
    }
}
/**
 * Submit a new comment
 * 
 * @param {*} vId - The video id the new comment is made on. It is not empty if we leave the comment based on the video. It is empty if we leave the comment based on an existing comment
 * @param {*} parentId - The parent comment id on which the comment is made. It is empty id we leave the comment based on the video. It is not empty if we leave the comment based on an existing comment
 * @param {*} from - The youtube id of who left the comment
 * @param {*} content - The content of the comment
 */
export function SubmitComment(vId, parentId, from, content) {
    console.log('SubmitComment, vId=', vId)
    if (vId !== undefined) {
        const comment = {
            id: comments.length + 1,
            vedioId: vId,
            from: from,
            days: 'now',
            comment: content,
            likes:0,
            dislikes:0,
            commentedBy: undefined
        }
        comments.unshift(comment)
    } else if (parentId!== undefined){
        const newCommentId = comments.length + 1
        const comment = {
            id: newCommentId,
            vedioId: undefined,
            from: from,
            days: 'now',
            comment: content,
            likes:0,
            dislikes:0,
            commentedBy: undefined
        }
        console.log(comments)
        var parentComment = comments.find((c) => {return c.id === parentId})
        if(!parentComment) {
            console.error(`cannot find parent comment by parentId ${parentId}`)
        }
        if (parentComment) {
            if (parentComment.commentedBy) {
                parentComment.commentedBy.unshift(newCommentId)
                comments.unshift(comment)
            } else {
                parentComment.commentedBy = [newCommentId]
                comments.unshift(comment)
            }
        }
    } else {
        console.error('Failed to submit a new comment. You must either set vId or parentId')
    }
    
    console.log(`A new comment is added. There are ${comments.length} in total`)

}