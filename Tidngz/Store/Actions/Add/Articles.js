import { HEADLINE , ARTICLE } from '../action_types';

export const add_headline = headline => {
    return {
        type : HEADLINE,
        headline : headline
    }
}

export const add_articles = article => {
    return {
        type : ARTICLE,
        article : article
    }
}