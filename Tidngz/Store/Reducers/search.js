import { SEARCH_VALUE, SEARCH_HISTORY, SEARCH_SUGGESTIONS, SEARCH_PLACES_1 , SEARCH_PLACES_2 , SEARCH_PLACES_3 , 
    SEARCH_USERS_1 , SEARCH_USERS_2 , SEARCH_USERS_3 ,
    SEARCH_TAGS_1 , SEARCH_TAGS_2 , SEARCH_TAGS_3 ,
    SEARCH_PLACES , SEARCH_USERS , SEARCH_TAGS } from '../Actions/action_types';


const initialState = {
    search_value : '',
    search_history_count : 0,
    search_history : [],
    search_suggestions_count : 0,
    search_suggestions      : [],
    search_places_1_count  : 0,
    search_places_1        : [],
    search_places_2_count  : 0,
    search_places_2        : [],
    search_places_3_count  : 0,
    search_places_3        : [],
    search_users_1_count  : 0,
    search_users_1        : [],
    search_users_2_count  : 0,
    search_users_2        : [],
    search_users_3_count  : 0,
    search_users_3        : [],
    search_tags_1_count  : 0,
    search_tags_1        : [],
    search_tags_2_count  : 0,
    search_tags_2        : [],
    search_tags_3_count  : 0,
    search_tags_3        : [],
    search_places_count : 0,
    search_places       : [],
    search_users_count  : 0,
    search_users        : [],
    search_tags_count   : 0,
    search_tags         : [],
}



const reducer = (state = initialState, action) => {
    switch (action.type){
        case SEARCH_VALUE : 
            return {
                ...state,
                search_value : action.search_value
            }
        case SEARCH_HISTORY :
            return {
                ...state,
                search_history_count : action.count,
                search_history : action.result
            }
        case SEARCH_SUGGESTIONS :
            return {
                ...state,
                search_suggestions_count : action.count,
                search_suggestions : action.result
            }
        case SEARCH_PLACES_1 :
            return {
                ...state,
                search_places_1_count : action.count,
                search_places_1 : action.result
            }
        case SEARCH_PLACES_2 :
            return {
                ...state,
                search_places_2_count : action.count,
                search_places_2 : action.result
            }
        case SEARCH_PLACES_3 :
            return {
                ...state,
                search_places_3_count : action.count,
                search_places_3 : action.result
            }
        case SEARCH_USERS_1 :
            return {
                ...state,
                search_users_1_count : action.count,
                search_users_1 : action.result
            }
        case SEARCH_USERS_2 :
            return {
                ...state,
                search_users_2_count : action.count,
                search_users_2 : action.result
            }
        case SEARCH_USERS_3 :
            return {
                ...state,
                search_users_3_count : action.count,
                search_users_3 : action.result
            }
        case SEARCH_TAGS_1 :
            return {
                ...state,
                search_tags_1_count : action.count,
                search_tags_1 : action.result
            }
        case SEARCH_TAGS_2 :
            return {
                ...state,
                search_tags_2_count : action.count,
                search_tags_2 : action.result
            }
        case SEARCH_TAGS_3 :
            return {
                ...state,
                search_tags_3_count : action.count,
                search_tags_3 : action.result
            }
        case SEARCH_PLACES :
            return {
                ...state,
                search_places_count : action.count,
                search_places : action.result
            }
        case SEARCH_USERS :
            return {
                ...state,
                search_users_count : action.count,
                search_users : action.result
            }
        case SEARCH_TAGS :
            return {
                ...state,
                search_tags_count : action.count,
                search_tags : action.result
            }
        default : 
            return {
                ...state
            }
    }
}

export default reducer;
