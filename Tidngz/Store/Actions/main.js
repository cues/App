import {LOGIN, LOGOUT, TABBAR_VISIBLE, TABBAR_ANIMATION, TABBAR_TYPE, ERROR, ERROR_2, SIDEBAR, SIDEBAR_2} from './action_types';


export const login = response => { 
    return {
        type : LOGIN,
        response : response,
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

export const error = text => {
    return {
        type : ERROR,
        text : text
    }
}


export const error_2 = () => {
    return {
        type : ERROR_2,
    }
}


export const sideBar = () => {
    return {
        type : SIDEBAR,
    }
}


export const sideBar_2 = () => {
    return {
        type : SIDEBAR_2,
    }
}