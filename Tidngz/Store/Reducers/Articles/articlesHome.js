import {HOME_REFRESH_ARTICLES, HOME_ADD_ARTICLE, HOME_SELECTED_ARTICLE, HOME_IMAGE_SELECTED_ARTICLE, HOME_LOADER, HOME_ALL_ARTICLES, HOME_LOAD_ARTICLES, HOME_ARTICLE_TABLET, HOME_UPDATE_ARTICLES} from "../../Actions/action_types";

const initialState = {
    allArticles : [{
        key : 1,
        article : {
            articles_id: 1,
            type:'inital'
        }
    }],
    selectedArticle : null,
    articleTablet:1,
    loader:false,
    start : 0,
    records_per_page:3,
    current_page : 1,
    number_of_pages: null,
    total_records:null,
    last_articles_id:null,
    option : 1,
    top : 0,
    calender : 0,
    imageSelectedArticle:null
};


const reducer = (state = initialState, action) => {

    switch (action.type){  
        case HOME_REFRESH_ARTICLES : 
            return {
                ...state, 
                allArticles : [{
                    key : 1,
                    article : {
                        articles_id: 1,
                        type:'inital'
                    }
                }],
                selectedArticle : null,
                articleTablet:1,
                loader:true,
                start : 0,
                records_per_page:3,
                current_page : 1,
                number_of_pages: null,
                total_records:null,
                last_articles_id:null,
            };
        case HOME_ADD_ARTICLE :
            return {
                ...state,
                allArticles : state.allArticles.concat({ 
                    key           :   `${action.article.articles_id}`, 
                    article       :   action.article
                }),
                loader:false
            };
        case HOME_SELECTED_ARTICLE :
            return {
                ...state,
                selectedArticle : action.article,
            }
        case HOME_IMAGE_SELECTED_ARTICLE :
            return {
                ...state,
                imageSelectedArticle : action.article,
            }
        case HOME_LOADER :
            return {
                ...state,
                loader:true
            }
        case HOME_ALL_ARTICLES : 
            return {
                ...state,
                total_records      :   action.total_records,
                last_articles_id   :   action.last_articles_id,
                number_of_pages    :   action.number_of_pages
            }
       
        case HOME_LOAD_ARTICLES :
            return {
                ...state,
                current_page : action.current_page,
                start        : action.start
            }
        case HOME_ARTICLE_TABLET :
            return {
                ...state,
                articleTablet : action.article,
            }
        case HOME_UPDATE_ARTICLES :
            return {
                ...state,
                allArticles : action.allArticles,
            }
        
        default:
            return state;
    }
};

export default reducer;