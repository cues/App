import { SEARCH_VALUE, SEARCH_HISTORY, SEARCH_SUGGESTIONS, SEARCH_PLACES_1 , SEARCH_PLACES_2 , SEARCH_PLACES_3 , 
        SEARCH_USERS_1 , SEARCH_USERS_2 , SEARCH_USERS_3 ,
        SEARCH_TAGS_1 , SEARCH_TAGS_2 , SEARCH_TAGS_3 ,
        SEARCH_PLACES , SEARCH_USERS , SEARCH_TAGS } from './action_types';


export const search_value = (value) => {
    return {
        type : SEARCH_VALUE,
        search_value : value
    }
} 

export const search_history = (count, result) => {
    return {
        type : SEARCH_HISTORY,
        count : count, 
        result : result
    }
} 

export const search_suggestions = (count, result) => {
    return {
        type : SEARCH_SUGGESTIONS,
        count : count, 
        result : result
    }
} 

export const search_places_1 = (count, result) => {
    return {
        type : SEARCH_PLACES_1,
        count : count, 
        result : result
    }
} 


export const search_places_2 = (count, result) => {
    return {
        type : SEARCH_PLACES_2,
        count : count, 
        result : result
    }
} 


export const search_places_3 = (count, result) => {
    return {
        type : SEARCH_PLACES_3,
        count : count, 
        result : result
    }
} 


export const search_users_1 = (count, result) => {
    return {
        type : SEARCH_USERS_1,
        count : count, 
        result : result
    }
} 


export const search_users_2 = (count, result) => {
    return {
        type : SEARCH_USERS_2,
        count : count, 
        result : result
    }
} 


export const search_users_3 = (count, result) => {
    return {
        type : SEARCH_USERS_3,
        count : count, 
        result : result
    }
} 



export const search_tags_1 = (count, result) => {
    return {
        type : SEARCH_TAGS_1,
        count : count, 
        result : result
    }
} 


export const search_tags_2 = (count, result) => {
    return {
        type : SEARCH_TAGS_2,
        count : count, 
        result : result
    }
} 


export const search_tags_3 = (count, result) => {
    return {
        type : SEARCH_TAGS_3,
        count : count, 
        result : result
    }
} 



export const search_places = (count, result) => {
    return {
        type : SEARCH_PLACES,
        count : count, 
        result : result
    }
} 


export const search_users = (count, result) => {
    return {
        type : SEARCH_USERS,
        count : count, 
        result : result
    }
} 


export const search_tags = (count, result) => {
    return {
        type : SEARCH_TAGS,
        count : count, 
        result : result
    }
} 
