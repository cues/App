import { VIDEO_ADD_VIDEO_LINK,  VIDEO_ADD_HEADLINE , VIDEO_ADD_CONTENT , VIDEO_ADD_LINK ,  VIDEO_HEADLINE_ACTIVE} from '../action_types';


export const video_headline_active = () => {
    return {
        type : VIDEO_HEADLINE_ACTIVE
    }
}

export const video_add_video_link = video_link => {
    return {
        type : VIDEO_ADD_VIDEO_LINK,
        video_link : video_link
    }
}


export const video_add_headline = headline => {
    return {
        type : VIDEO_ADD_HEADLINE,
        headline : headline
    }
}

export const video_add_content = content => {
    return {
        type : VIDEO_ADD_CONTENT,
        content : content
    }
}

export const video_add_link = link => {
    return {
        type : VIDEO_ADD_LINK,
        link : link
    }
}