import {ADD_WEATHER, HOME_WEATHER_CALL} from '../Actions/action_types';

const initialState = {
    api : "https://www.wedngz.com/Tidngz/API",
    isEmpty          : true,
    time             : true,
    homeWeatherCall  : false,
    placeWeatherCall : false,
    astro   : {
        sunrise_hour        : null,
        sunrise_minutes     : null,
        sunset_hour         : null,
        sunset_minutes      : null
    },
    hourly  : {
        icon                : null,
        temp                : null,
        temp_2              : null,
        feels               : null,
        feels_2             : null,
        wind_direction      : null,
        wind_speed_km       : null,
        wind_speed_mph      : null,
        humidity            : null,
        precipitation_mm    : null,
        precipitation_in    : null,
        pressure_eng        : null,
        pressure_met        : null,
        dew_eng             : null,
        dew_met             : null,
        uvi                 : null,
    }

}


const reducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_WEATHER :
            return {
                ...state,
                isEmpty : action.weather.data.isEmpty,
                time    : action.weather.data.weatherTime,
                astro   : {
                    sunrise_hour        :    action.weather.data.astro.sunrise_hour,
                    sunrise_minutes     :    action.weather.data.astro.sunrise_minutes,
                    sunset_hour         :    action.weather.data.astro.sunset_hour,
                    sunset_minutes      :    action.weather.data.astro.sunset_minutes
                },
                hourly  : {
                    icon                :    action.weather.data.hourly.icon,
                    temp                :    action.weather.data.hourly.temp,
                    temp_2              :    action.weather.data.hourly.temp_2,
                    feels               :    action.weather.data.hourly.feels,
                    feels_2             :    action.weather.data.hourly.feels_2,
                    wind_direction      :    action.weather.data.hourly.wind_direction,
                    wind_speed_km       :    action.weather.data.hourly.wind_speed_km,
                    wind_speed_mph      :    action.weather.data.hourly.wind_speed_mph,
                    humidity            :    action.weather.data.hourly.humidity,
                    precipitation_mm    :    action.weather.data.hourly.precipitation_mm,
                    precipitation_in    :    action.weather.data.hourly.precipitation_in,
                    pressure_eng        :    action.weather.data.hourly.pressure_eng,
                    pressure_met        :    action.weather.data.hourly.pressure_met,
                    dew_eng             :    action.weather.data.hourly.dew_eng,
                    dew_met             :    action.weather.data.hourly.dew_met,
                    uvi                 :    action.weather.data.hourly.uvi,
                }
            };
        case HOME_WEATHER_CALL :
            return {
                ...state,
                homeWeatherCall : action.bool
            }
        default:
            return state;
    }
}

export default reducer;
