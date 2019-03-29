import { GET_COMMENTS, REFRESH_COMMENTS, LOAD_COMMENTS, REPORT_MODAL_COMMENT, UPDATE_COMMENT, POST_COMMENTS } from './action_types';


export const get_comments = (comment, articles_id) => {
    return {
        type        : GET_COMMENTS,
        comment     : comment,
        articles_id : articles_id
    }
}

export const post_comments = comment => {
    return {
        type        : POST_COMMENTS,
        comment     : comment,
    }
}

export const refresh_comments = () => {
    return {
        type : REFRESH_COMMENTS,
    }
}


export const load_comments = (current_page, start) => {
    return {
        type            :   LOAD_COMMENTS,
        current_page    :   current_page,
        start           :   start
    }
}


export const report_modal_comment = id => {
    return {
        type  :  REPORT_MODAL_COMMENT,
        id    :  id
    }
}


export const update_comment = allComments => {
    return {
        type           :  UPDATE_COMMENT,
        allComments    :  allComments
    }
}


