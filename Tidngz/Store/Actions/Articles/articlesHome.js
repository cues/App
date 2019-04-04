import {HOME_REFRESH_ARTICLES, HOME_ADD_ARTICLE, HOME_SELECTED_ARTICLE, HOME_IMAGE_SELECTED_ARTICLE, HOME_LOADER, HOME_ALL_ARTICLES, HOME_LOAD_ARTICLES, HOME_ARTICLE_TABLET, HOME_UPDATE_ARTICLES} from '../action_types';

export const refresh_articles = () => {
    return {
        type : HOME_REFRESH_ARTICLES
    }
}

export const add_article = article => {
    return {
        type     :  HOME_ADD_ARTICLE,
        article  :  article
    }
};

export const selected_article = article => {
    return {
        type            :   HOME_SELECTED_ARTICLE,
        article         :   article
    }
}

export const image_selected_article = article => {
    return {
        type    : HOME_IMAGE_SELECTED_ARTICLE,
        article : article
    }
}

export const loader = () => {
    return {
        type : HOME_LOADER
    }
};


export const all_articles = (total_records, last_articles_id, number_of_pages) => {
    return {
        type                :   HOME_ALL_ARTICLES,
        total_records       :   total_records,
        last_articles_id    :   last_articles_id,
        number_of_pages     :   number_of_pages
    }
};


export const load_articles = (current_page, start) => {
    return {
        type            :   HOME_LOAD_ARTICLES,
        current_page    :   current_page,
        start           :   start
    }
}


export const articleTablet = article => {
    return {
        type            :   HOME_ARTICLE_TABLET,
        article         :   article
    }
}


export const update_article = allArticles => {
    return {
        type         :  HOME_UPDATE_ARTICLES,
        allArticles  :  allArticles
    }
}