import {ADD_THEME_WHITE, ADD_THEME_BLACK} from  '../Actions/action_types';

const initialState = {
    theme                   :   'white',
    keyboard                :   'light',
    headerColor             :   'rgba(255,255,255,1)',
    headerIcons             :   'rgba(47,47,47, .6 )',
    placeholderColor        :   'rgba(47,47,47, .4 )',
    searchBlur              :   'rgba(23,23,23,.1)',
    searchColor             :   'rgba(23, 23, 23, 0.8)',
    searchPlaceholderColor  :   'rgba(37,37,37, .7 )',
    backgroundMain          :   'rgba(221,221,221,1)',
    tabBlur                 :   'xlight',
    tabIcons                :   'rgba(47,47,47, .6 )',
    menuIconColor           :   'rgba(23,23,23,.7)',
    menuIconColor2          :   'rgba(77,77,77,.7)',
    menuText                :   'rgba(23, 23, 23, 0.7)',
    articleItem             :   'rgba(255,255,255,1)',
    articleTitle            :   'rgba(7,7,7,.9)',
    articleContent          :   'rgba(23, 23, 23, 0.7)',
    commentViewMore         :   'rgba(23, 23, 23, 0.5)',
    commentWrite            :   'rgba(23, 23, 23, 1)',
    footerColor             :   'rgba(23,23,23, 0.8)',
    homeContainer           :   'rgba(255,255,255,1)',
    weatherDesc             :   'rgba(23, 23, 23, 0.8)',
    weatherSide             :   'rgba(240,240,240,.9)',
    userName                :   'rgba(23, 23, 23, 0.8)',
    username                :   'rgba(23, 23, 23, 0.6)',
}



const reducer = (state = initialState, action) => {

    switch (action.type){
        case ADD_THEME_WHITE :  
            return {
                ...state,
                theme                   :   'white',
                keyboard                :   'light',
                headerColor             :   'rgba(255,255,255,1)',
                headerIcons             :   'rgba(47,47,47, .6 )',
                placeholderColor        :   'rgba(47,47,47, .4 )',
                searchBlur              :   'rgba(23,23,23,.1)',
                searchColor             :   'rgba(23, 23, 23, 0.8)',
                searchPlaceholderColor  :   'rgba(37,37,37, .7 )',
                backgroundMain          :   'rgba(221,221,221,1)',
                tabBlur                 :   'xlight',
                tabIcons                :   'rgba(47,47,47, .6 )',
                menuIconColor           :   'rgba(23,23,23,.7)',
                menuIconColor2          :   'rgba(77,77,77,.7)',
                menuText                :   'rgba(23, 23, 23, 0.7)',
                articleItem             :   'rgba(255,255,255,1)',
                articleTitle            :   'rgba(7,7,7,.9)',
                articleContent          :   'rgba(23, 23, 23, 0.7)',
                commentViewMore         :   'rgba(23, 23, 23, 0.5)',
                commentWrite            :   'rgba(23, 23, 23, 1)',
                footerColor             :   'rgba(23,23,23, 0.8)',
                homeContainer           :   'rgba(255,255,255,1)',
                weatherDesc             :   'rgba(23, 23, 23, 0.8)',
                weatherSide             :   'rgba(240,240,240,.9)',
                userName                :   'rgba(23, 23, 23, 0.8)',
                username                :   'rgba(23, 23, 23, 0.6)',
            }   
        case ADD_THEME_BLACK :  
            return {
                ...state,
                theme                   :   'black',
                keyboard                :   'dark',
                headerColor             :   'rgba(23,23,23,1)',
                placeholderColor        :   'rgba(210,210,210, .4 )',
                headerIcons             :   'rgba(213,213,213, .6 )',
                searchBlur              :   'rgba(221,221,221,.1)',
                searchColor             :   'rgba(232,232,232,1)',
                searchPlaceholderColor  :   'rgba(217,217,217, .7 )',
                backgroundMain          :   'rgba(47,47,47,.9)',
                tabBlur                 :   'dark',
                tabIcons                :   'rgba(213,213,213, .6 )',
                menuIconColor           :   'rgba(240,240,240,.7)',
                menuIconColor2          :   'rgba(177,177,177,.7)',
                menuText                :   'rgba(221, 221, 221, 0.7)',
                articleItem             :   'rgba(23,23,23,1)',
                articleTitle            :   'rgba(240,240,240,.9)',
                articleContent          :   'rgba(230,230,230, 0.9)',
                commentViewMore         :   'rgba(230,230,230, 0.5)',
                commentWrite            :   'rgba(230,230,230, 1)',
                footerColor             :   'rgba(230,230,230, 0.8)',
                homeContainer           :   'rgba(23,23,23,1)',
                weatherDesc             :   'rgba(230,230,230, 0.8)',
                weatherSide             :   'rgba(17,17,17,.9)',
                userName                :   'rgba(230,230,230, 0.8)',
                username                :   'rgba(230,230,230, 0.6)',
            }
        default:
            return state;
    }
}

export default reducer;
