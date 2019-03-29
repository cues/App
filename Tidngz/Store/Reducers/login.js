import { LOGINROUTE , LOGINERROR , LOGINERROR_2 } from '../Actions/action_types';


const initialState = {
   loginRoute   : 'Login',
   error        : false,
   errorReason  : null
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case LOGINROUTE :
            return {
                ...state,
                loginRoute : action.route
            }
        case LOGINERROR : 
            return {
                ...state,
                error       : true,
                errorReason : action.error
            }
        case LOGINERROR_2 : 
            return {
                ...state,
                error       : false,
                // errorReason : null
            }
        default :
            return state;
    }
}

export default reducer;
