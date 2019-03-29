import {LOGIN, LOGOUT, TABBAR_VISIBLE, TABBAR_ANIMATION, TABBAR_TYPE} from '../Actions/action_types';


const initialState = {
    tabBarVisible   : true,
    tabBarAnimation : true,
    tabBarType      : 'normal',
    api : "https://www.wedngz.com/Tidngz/API",
    apiKey : 1707,
    LoggedIn : false,
    home:[
            {
                key :'0',
                type : 'home',
                user : 'Erroll',
            }
    ],
    user : ''
    // user : {
    //     user_id : 120,
    //     username: "erroll",
    //     user_name: "Erroll Alfredo Antao",
    //     user_name_initial: "E",
    //     user_sex : 1,
    //     user_verified: 1,
    //     user_image: "http://www.wedngz.com/Tidngz/User_Images/tidngz-erroll-2018419113843-standard.JPG",
    //     user_image_2: "http://www.wedngz.com/Tidngz/User_Images/tidngz-erroll-2018419113843-medium.JPG",
    //     user_image_3: "http://www.wedngz.com/Tidngz/User_Images/tidngz-erroll-2018419113843-small.JPG",
    // },
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case LOGIN :
            return {
                ...state,
                LoggedIn : true,
                user : {
                    user_id             :  action.userData.user_id,
                    username            :  action.userData.username,
                    user_name           :  action.userData.user_name,
                    user_name_initial   :  action.userData.user_name_initial,
                    user_sex            :  action.userData.user_sex,
                    user_verified       :  action.userData.user_verified,
                    user_image          :  action.userData.user_image,
                    user_image_2        :  action.userData.user_image_2,
                    user_image_3        :  action.userData.user_image_3,
                    user_active         :  action.userData.user_active
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
        default :
            return state;
    }
}

export default reducer;
