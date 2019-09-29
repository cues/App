import { PLACE , PLACE_FOLLOW, PLACE_ACTIVE} from './action_types';


export const get_place = response => {
    return{
        type : PLACE,
        response : response,
    }
}


export const place_follow = place => {
    return{
        type : PLACE_FOLLOW,
        place : place,
    }
}


export const place_active = () => {
    return{
        type : PLACE_ACTIVE,
    }
}