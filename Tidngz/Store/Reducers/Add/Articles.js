import { HEADLINE , ARTICLE } from '../../Actions/action_types';

const initialState = {
    headline : null,
    article : null
};


const reducer = (state = initialState, action) => {

    switch(action.type){
        case HEADLINE : 
            return{
                ...state,
                headline : action.headline
            }
        case ARTICLE : 
            return{
                ...state,
                headline : action.article
            }
        default :
            return {
                ...state
            }
    }
}

export default reducer;
