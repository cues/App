import {ALL_REFRESH_ARTICLES, ALL_ADD_ARTICLE, ALL_SELECTED_ARTICLE, ALL_IMAGE_SELECTED_ARTICLE, ALL_LOADER, ALL_ALL_ARTICLES, ALL_LOAD_ARTICLES, ALL_ARTICLE_TABLET, ALL_UPDATE_ARTICLES} from "../../Actions/action_types";

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
        case ALL_REFRESH_ARTICLES : 
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
        case ALL_ADD_ARTICLE :
            return {
                ...state,
                allArticles : state.allArticles.concat({ 
                    key           :   `${action.article.articles_id}`, 
                    article       :   action.article
                }),
                loader:false
            };
        case ALL_SELECTED_ARTICLE :
            return {
                ...state,
                selectedArticle : action.article,
            }
        case ALL_IMAGE_SELECTED_ARTICLE :
            return {
                ...state,
                imageSelectedArticle : action.article,
            }
        case ALL_LOADER :
            return {
                ...state,
                loader:true
            }
        case ALL_ALL_ARTICLES : 
            return {
                ...state,
                total_records      :   action.total_records,
                last_articles_id   :   action.last_articles_id,
                number_of_pages    :   action.number_of_pages
            }
       
        case ALL_LOAD_ARTICLES :
            return {
                ...state,
                current_page : action.current_page,
                start        : action.start
            }
        case ALL_ARTICLE_TABLET :
            return {
                ...state,
                articleTablet : action.article,
            }
        case ALL_UPDATE_ARTICLES :
            return {
                ...state,
                allArticles : action.allArticles,
            }
        
        default:
            return state;
    }
};

export default reducer;