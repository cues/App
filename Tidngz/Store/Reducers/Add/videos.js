import { VIDEO_ADD_VIDEO_LINK, VIDEO_ADD_HEADLINE , VIDEO_ADD_CONTENT , VIDEO_ADD_LINK , VIDEO_HEADLINE_ACTIVE} from '../../Actions/action_types';

const initialState = {
    videoHeadlineActive     : 'ok',
    videoPlaceActive        : false,
    video_add_video_link    :  null,
    video_add_headline      :  null,
    video_add_content       :  null,
    video_add_place         :  null,
    video_add_landmark      :  null,
    video_add_landmarkDesc  :  null,
    video_add_category      :  null,
    video_add_tags          :  null,
    video_add_link          :  null,
};


const reducer = (state = initialState, action) => {

    switch(action.type){
        case VIDEO_HEADLINE_ACTIVE : 
            return{
                ...state,
                videoHeadlineActive : 'thnk'
            }
        case VIDEO_ADD_VIDEO_LINK : 
            return{
                ...state,
                video_add_video_link : action.video_link
            }
        case VIDEO_ADD_HEADLINE : 
            return{
                ...state,
                video_add_headline : action.headline
            }
        case VIDEO_ADD_CONTENT : 
            return{
                ...state,
                video_add_content : action.content
            }
        case VIDEO_ADD_LINK : 
            return{
                ...state,
                video_add_link : action.link
            }
        default :
            return {
                ...state
            }
    }
}

export default reducer;
