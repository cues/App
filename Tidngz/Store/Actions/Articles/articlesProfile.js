import {PROFILE_REFRESH_ARTICLES, PROFILE_ADD_ARTICLE,  PROFILE_LOADER, PROFILE_ALL_ARTICLES, PROFILE_LOAD_ARTICLES,  PROFILE_UPDATE_ARTICLES} from '../action_types';

export const profile_refresh_articles = () => {
    return {
        type : PROFILE_REFRESH_ARTICLES
    }
}

export const profile_add_article = article => {
    return {
        type     :  PROFILE_ADD_ARTICLE,
        article  :  article
    }
};





export const profile_loader = () => {
    return {
        type : PROFILE_LOADER
    }
};


export const profile_all_articles = (total_records, last_articles_id, number_of_pages) => {
    return {
        type                :   PROFILE_ALL_ARTICLES,
        total_records       :   total_records,
        last_articles_id    :   last_articles_id,
        number_of_pages     :   number_of_pages
    }
};


export const profile_load_articles = (current_page, start) => {
    return {
        type            :   PROFILE_LOAD_ARTICLES,
        current_page    :   current_page,
        start           :   start
    }
}




export const profile_update_article = allArticles => {
    return {
        type         :  PROFILE_UPDATE_ARTICLES,
        allArticles  :  allArticles
    }
}