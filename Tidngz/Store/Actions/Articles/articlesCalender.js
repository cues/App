import {CALENDER_REFRESH_ARTICLES, CALENDER_ADD_ARTICLE, CALENDER_SELECTED_ARTICLE, CALENDER_IMAGE_SELECTED_ARTICLE, CALENDER_LOADER, CALENDER_ALL_ARTICLES, CALENDER_LOAD_ARTICLES, CALENDER_UPDATE_ARTICLES} from '../action_types';

export const calender_refresh_articles = () => {
    return {
        type : CALENDER_REFRESH_ARTICLES
    }
}

export const calender_add_article = article => {
    return {
        type     :  CALENDER_ADD_ARTICLE,
        article  :  article
    }
};

export const calender_selected_article = article => {
    return {
        type            :   CALENDER_SELECTED_ARTICLE,
        article         :   article
    }
}

export const calender_image_selected_article = article => {
    return {
        type    : CALENDER_IMAGE_SELECTED_ARTICLE,
        article : article
    }
}

export const calender_loader = () => {
    return {
        type : CALENDER_LOADER
    }
};


export const calender_all_articles = (total_records, last_articles_id, number_of_pages) => {
    return {
        type                :   CALENDER_ALL_ARTICLES,
        total_records       :   total_records,
        last_articles_id    :   last_articles_id,
        number_of_pages     :   number_of_pages
    }
};


export const calender_load_articles = (current_page, start) => {
    return {
        type            :   CALENDER_LOAD_ARTICLES,
        current_page    :   current_page,
        start           :   start
    }
}


export const calender_update_article = allArticles => {
    return {
        type         :  CALENDER_UPDATE_ARTICLES,
        allArticles  :  allArticles
    }
}