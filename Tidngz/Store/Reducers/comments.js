import { GET_COMMENTS, REFRESH_COMMENTS, LOAD_COMMENTS, REPORT_MODAL_COMMENT , UPDATE_COMMENT, POST_COMMENTS} from '../Actions/action_types';


const initialState = {
    allComments        :  [],
    articles_id        :  null,
    loader             :  false,
    start              :  0,
    records_per_page   :  10,
    current_page       :  1,
    number_of_pages    :  null,
    total_records      :  null,
    selectedComment    :  null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case REFRESH_COMMENTS :
            return {
                ...state,
                allComments        :  [{
                    key : 1,
                    comment : {
                        comment_id: 1,
                        type:'inital',
                        this_reported : null
                    }
                }],
                articles_id        :  null,
                loader             :  false,
                start              :  0,
                records_per_page   :  10,
                current_page       :  1,
                number_of_pages    :  null,
                total_records      :  null,
            }
        case GET_COMMENTS :
            return {
                ...state,
                allComments : state.allComments.concat({
                    key           :   `${action.comment.comment_id}`, 
                    comment       :   action.comment
                }),
                articles_id : action.articles_id
            }
        case POST_COMMENTS :
            return {
                ...state,
                newComment : [{
                    key        : `${action.comment.comment_id}`,
                    comment    :   action.comment
                }],
            }
        case LOAD_COMMENTS :
            return {
                ...state,
                current_page : action.current_page,
                start        : action.start
            }
        case REPORT_MODAL_COMMENT :
            return {
                ...state,
                selectedComment : action.id
            }
        case UPDATE_COMMENT :
            return {
                ...state,
                allComments : action.allComments
            }
        default:
            return state;
    }

}

export default reducer ;