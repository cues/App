import { LOGINROUTE , LOGINERROR , LOGINERROR_2 } from './action_types';

export const loginRoute = route => {
    return {
        type    :   LOGINROUTE,
        route   :   route
    }
}



export const loginError = error => {
    return {
        type    :   LOGINERROR,
        error   :   error
    }
}


export const loginError_2 = () => {
    return {
        type    :   LOGINERROR_2,
    }
}


