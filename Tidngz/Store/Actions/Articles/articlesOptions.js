import {OPTIONS_REFRESH_ARTICLES, OPTIONS_ADD_ARTICLE, OPTIONS_SELECTED_ARTICLE, OPTIONS_IMAGE_SELECTED_ARTICLE, OPTIONS_LOADER, OPTIONS_ALL_ARTICLES, OPTIONS_LOAD_ARTICLES, OPTIONS_UPDATE_ARTICLES} from '../action_types';

export const options_refresh_articles = () => {
    return {
        type : OPTIONS_REFRESH_ARTICLES
    }
}

export const options_add_article = article => {
    return {
        type     :  OPTIONS_ADD_ARTICLE,
        article  :  article
    }
};

export const options_selected_article = article => {
    return {
        type            :   OPTIONS_SELECTED_ARTICLE,
        article         :   article
    }
}

export const options_image_selected_article = article => {
    return {
        type    : OPTIONS_IMAGE_SELECTED_ARTICLE,
        article : article
    }
}

export const options_loader = () => {
    return {
        type : OPTIONS_LOADER
    }
};


export const options_all_articles = (total_records, last_articles_id, number_of_pages) => {
    return {
        type                :   OPTIONS_ALL_ARTICLES,
        total_records       :   total_records,
        last_articles_id    :   last_articles_id,
        number_of_pages     :   number_of_pages
    }
};


export const options_load_articles = (current_page, start) => {
    return {
        type            :   OPTIONS_LOAD_ARTICLES,
        current_page    :   current_page,
        start           :   start
    }
}



export const options_update_article = allArticles => {
    return {
        type         :  OPTIONS_UPDATE_ARTICLES,
        allArticles  :  allArticles
    }
}