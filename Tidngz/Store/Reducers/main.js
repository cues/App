import {LOGIN, LOGOUT, TABBAR_VISIBLE, TABBAR_ANIMATION, TABBAR_TYPE, ERROR, ERROR_2} from '../Actions/action_types';


const initialState = {
    error               : false,
    errorReason         : null,
    tabBarVisible       : true,
    tabBarAnimation     : true,
    tabBarType          : 'normal',
    api                 : "http://www.wedngz.com/Tidngz/API",
    apiKey              : 1707,
    LoggedIn            : false,
    selectedUser        : '',
    selectedPlace       : '',
    selectedPlaceLocal  : '',
    selectedHashtag     : '',
    selectedLinked      : '',
    user                : ''
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case LOGIN :
            return {
                ...state,
                LoggedIn : true,
                user : {
                    user_id            :  action.response.data.user.user_id,
                    user_name          :  action.response.data.user.user_name,
                    user_name_initial  :  action.response.data.user.user_name_initial,
                    username           :  action.response.data.user.username,
                    user_sex           :  action.response.data.user.user_sex,
                    user_verified      :  action.response.data.user.user_verified,
                    user_image         :  action.response.data.user.user_image,
                    user_image_2       :  action.response.data.user.user_image_2,
                    user_image_3       :  action.response.data.user.user_image_3,
                    user_active        :  action.response.data.user.user_active,
                    user_place_id      :  action.response.data.user.user_place_id,
                    user_place         :  action.response.data.user.user_place,
                    user_bio           :  action.response.data.user.user_bio,
                    user_website       :  action.response.data.user.user_website,
                    user_facebook      :  action.response.data.user.user_facebook,
                    user_instagram     :  action.response.data.user.user_instagram,
                    user_twitter       :  action.response.data.user.user_twitter,
                    user_youtube       :  action.response.data.user.user_youtube,
                    user_posts         :  action.response.data.user.user_posts,
                    user_following     :  action.response.data.user.user_following,
                    user_followers     :  action.response.data.user.user_followers,
                }
            }
        case LOGOUT : {
            return {
                ...state,
                LoggedIn : false,
                user : ''
            }
        }
        case TABBAR_VISIBLE : 
            return {
                ...state,
                tabBarVisible : !state.tabBarVisible
            }
        case TABBAR_ANIMATION : 
            return {
                ...state,
                tabBarAnimation : !state.tabBarAnimation
            }
        case TABBAR_TYPE : 
            return {
                ...state,
                tabBarType : action.tabBarType
            }
        case ERROR :
            return {
                ...state,
                error        : true,
                errorReason  : action.text,
            }
        case ERROR_2 :
            return {
                ...state,
                error        : false,
                errorReason  : null,
            }
        default :
            return state;
    }
}

export default reducer;
