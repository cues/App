import { ACCOUNT_PLACES } from '../Actions/action_types';

const initialState = {
    account_places_count : 0,
    account_places       : [],
}


const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case ACCOUNT_PLACES :
            return {
                ...state,
                account_places_count : action.count,
                account_places       : action.result
            }
        default :
            return{
                ...state
            }
    }

}


export default reducer;

