import { ADD_HEADLINE , ADD_CONTENT , ADD_LINK , HEADLINE_ACTIVE} from '../action_types';

export const headline_active = () => {
    return {
        type : HEADLINE_ACTIVE
    }
}

export const add_headline = headline => {
    return {
        type : ADD_HEADLINE,
        headline : headline
    }
}

export const add_content = content => {
    return {
        type : ADD_CONTENT,
        content : content
    }
}

export const add_link = link => {
    return {
        type : ADD_LINK,
        link : link
    }
}