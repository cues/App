import { ADD_HEADLINE , ADD_CONTENT , ADD_LINK , HEADLINE_ACTIVE} from '../../Actions/action_types';

const initialState = {
    headlineActive    : 'ok',
    placeActive       : false,
    add_headline      :  null,
    add_content       :  null,
    add_place         :  null,
    add_landmark      :  null,
    add_landmarkDesc  :  null,
    add_category      :  null,
    add_tags          :  null,
    add_link          :  null,
};


const reducer = (state = initialState, action) => {

    switch(action.type){
        case HEADLINE_ACTIVE : 
            return{
                ...state,
                headlineActive : 'thnk'
            }
        case ADD_HEADLINE : 
            return{
                ...state,
                add_headline : action.headline
            }
        case ADD_CONTENT : 
            return{
                ...state,
                add_content : action.content
            }
        case ADD_LINK : 
            return{
                ...state,
                add_link : action.link
            }
        default :
            return {
                ...state
            }
    }
}

export default reducer;
