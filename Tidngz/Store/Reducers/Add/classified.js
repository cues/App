
import { CLASSIFIED_ADD_CONTENT , CLASSIFIED_ADD_LINK , CLASSIFIED_ADD_EMAIL , CLASSIFIED_ADD_CONTACT , CLASSIFIED_ADD_CONTACT_2 } from '../../Actions/action_types';

const initialState = {
    add_classified    :  null,
    add_country       :  null,
    add_place         :  null,
    add_category      :  null,
    add_link          :  null,
    add_email         :  null,
    add_contact       :  null,
    add_contact_2     :  null,
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case CLASSIFIED_ADD_CONTENT : 
            return {
                ...state,
                add_classified : action.text
            }
        default :
            return {
                ...state
            }
    }
}

export default reducer;
