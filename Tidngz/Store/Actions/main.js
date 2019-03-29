import {LOGIN, LOGOUT, TABBAR_VISIBLE, TABBAR_ANIMATION, TABBAR_TYPE} from './action_types';


export const login = userData => {
    return {
        type : LOGIN,
        userData : userData,
    }
} 


export const logout = () => {
    return {
        type : LOGOUT,
    }
} 

export const tabBarVisible = () => {
    return {
        type : TABBAR_VISIBLE
    }
}

export const tabBarAnimation = () => {
    return {
        type : TABBAR_ANIMATION
    }
}

export const tabBarType = tabBarType => {
    return {
        type : TABBAR_TYPE,
        tabBarType : tabBarType
    }
}