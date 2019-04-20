import { HEADLINE } from '../../Actions/action_types';

const initialState = {
    headline : null
};


const reducer = (state = initialState, action) => {

    switch(action.type){
        case HEADLINE : 
            return{
                ...state,
                headline : action.headline
            }
    }
}

export default reducer;
