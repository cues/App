import {REFRESH_ARTICLES, ADD_ARTICLE, SELECTED_ARTICLE, IMAGE_SELECTED_ARTICLE, LOADER, ALL_ARTICLES, LOAD_ARTICLES, ARTICLE_TABLET, UPDATE_ARTICLES} from './action_types';

export const refresh_articles = () => {
    return {
        type : REFRESH_ARTICLES
    }
}

export const add_article = article => {
    return {
        type     :  ADD_ARTICLE,
        article  :  article
    }
};

export const selected_article = article => {
    return {
        type            :   SELECTED_ARTICLE,
        article         :   article
    }
}

export const image_selected_article = article => {
    return {
        type    : IMAGE_SELECTED_ARTICLE,
        article : article
    }
}

export const loader = () => {
    return {
        type : LOADER
    }
};


export const all_articles = (total_records, last_articles_id, number_of_pages) => {
    return {
        type                :   ALL_ARTICLES,
        total_records       :   total_records,
        last_articles_id    :   last_articles_id,
        number_of_pages     :   number_of_pages
    }
};


export const load_articles = (current_page, start) => {
    return {
        type            :   LOAD_ARTICLES,
        current_page    :   current_page,
        start           :   start
    }
}


export const articleTablet = article => {
    return {
        type            :   ARTICLE_TABLET,
        article         :   article
    }
}


export const update_article = allArticles => {
    return {
        type         :  UPDATE_ARTICLES,
        allArticles  :  allArticles
    }
}