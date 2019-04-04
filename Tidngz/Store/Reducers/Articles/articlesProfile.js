import { PROFILE_REFRESH_ARTICLES, PROFILE_ADD_ARTICLE, PROFILE_LOADER, PROFILE_ALL_ARTICLES, PROFILE_LOAD_ARTICLES,  PROFILE_UPDATE_ARTICLES } from "../../Actions/action_types";

const initialState = {
    allArticles : [],
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
        case PROFILE_REFRESH_ARTICLES : 
            return {
                ...state, 
                allArticles : [],
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
        case PROFILE_ADD_ARTICLE :
            return {
                ...state,
                allArticles : state.allArticles.concat({ 
                    key           :   `${action.article.articles_id}`, 
                    article       :   action.article
                }),
                loader:false
            };
        case PROFILE_LOADER :
            return {
                ...state,
                loader:true
            }
        case PROFILE_ALL_ARTICLES : 
            return {
                ...state,
                total_records      :   action.total_records,
                last_articles_id   :   action.last_articles_id,
                number_of_pages    :   action.number_of_pages
            }
       
        case PROFILE_LOAD_ARTICLES :
            return {
                ...state,
                current_page : action.current_page,
                start        : action.start
            }
        case PROFILE_UPDATE_ARTICLES :
            return {
                ...state,
                allArticles : action.allArticles,
            }
        
        default:
            return state;
    }
};

export default reducer;