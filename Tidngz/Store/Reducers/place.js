import { PLACE , PLACE_FOLLOW , PLACE_ACTIVE } from '../Actions/action_types';

const initialState = {
    placeActive : false,
    place : {
        id               : '',
        google_id        : '',   
        url              : '',   
        name             : '',
        county           : '',
        province         : '',
        country          : '',
        latitude         : '',
        longitude        : '',
        timezone         : '',
        flag             : '',
        place_followers  : '',
        place_following  : '',
    },
    county_id   : '',
    province_id : '',
    country_id  : '',
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case PLACE :
            return {
                ...state,
                place : {
                    id               :  action.response.data.placeData.id,
                    google_id        :  action.response.data.placeData.google_id,   
                    url              :  action.response.data.placeData.url,   
                    name             :  action.response.data.placeData.name,
                    county           :  action.response.data.placeData.county,
                    province         :  action.response.data.placeData.province,
                    country          :  action.response.data.placeData.country,
                    latitude         :  action.response.data.placeData.latitude,
                    longitude        :  action.response.data.placeData.longitude,
                    timezone         :  action.response.data.placeData.timezone,
                    flag             :  action.response.data.placeData.flag,
                    place_followers  :  action.response.data.placeData.place_followers,
                    place_following  :  action.response.data.placeData.place_following,
                },
                county_id    :  action.response.data.placeData.county_id,
                province_id  :  action.response.data.placeData.province_id,
                country_id   :  action.response.data.placeData.country_id,
            }
        case PLACE_FOLLOW :
            return {
                ...state,
                place : action.place,
                placeActive : true,
            }
        case PLACE_ACTIVE :
            return {
                ...state,
                placeActive : false,
            }
        default : 
            return {
                ...state
            }
    }
}


export default reducer;