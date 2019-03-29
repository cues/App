import {ADD_WEATHER, HOME_WEATHER_CALL} from './action_types';

export const add_weather = weather => {
    return  {
        type : ADD_WEATHER,
        weather : weather
    }
}

export const home_weather_call = bool => {
    return {
        type : HOME_WEATHER_CALL,
        bool : bool
    }
}