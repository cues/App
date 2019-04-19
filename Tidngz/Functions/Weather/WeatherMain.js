import React from 'React';
import {View, Text, StyleSheet, TouchableOpacity, Image, Animated} from 'react-native';
import style from '../../Styles/Styles';
import WeatherIcons from '../../assets/weatherIcons/weatherIcons';
// import weatherUndergroundLogo  from '../../assets/Images/weatherUndergroundlLogo.png';
// import weatherUndergroundLogo_2  from '../../assets/Images/weatherUndergroundlLogo_2.png';
import { connect } from 'react-redux';

const state = state => {
    return {
        weatherDesc     :    state.themes.weatherDesc
    }
}


const weatherMain = props => {

    const {weatherDesc, addAnimate, weatherCF, weather, astro, hourly} = props

    const time = weather.data.weatherTime



    let temp_today_c;
    let temp_today_f;

    if((hourly.temp != null || hourly.feels == null) &&  (hourly.temp == hourly.feels))
    {
        temp_today_c = `The temperature is ${hourly.temp} °C  `;
    }else{
        temp_today_c = `The temperature is ${hourly.temp} °C , though it feels like ${hourly.feels} °C  `;
    }


    if((hourly.temp_2 != null || hourly.feels_2 == null) && (hourly.temp_2 == hourly.feels_2))
    {
        temp_today_f = `The temperature is ${hourly.temp_2} °F`;
    }else{
        temp_today_f = `The temperature is ${hourly.temp_2} °F , though it feels like ${hourly.feels_2} °F  `;
    }


    // check_min = ['1','2','3','4','5','6','7','8','9'];

    // sunrise_minute = check_min.includes(sunrise_minutes) ? '0' + sunrise_minutes : sunrise_minutes;
    // sunset_minute = check_min.includes(sunset_minutes) ? '0' + sunset_minutes : sunset_minutes;
    
    sunrise_time = parseInt(astro.sunrise_hour + astro.sunrise_minutes);
    sunset_time = parseInt(astro.sunset_hour + astro.sunset_minutes);

  


    const icon_sun              =   'rgba(253,184,19,1)';
    const icon_moon             =   'rgba(15,101,141,.4)'; 
    const icon_frosty           =   'rgba(15,101,141,.5)';
    const icon_windysnow        =   'rgba(15,101,141,.4)';
    const icon_showers          =   'rgba(15,101,141,.5)';
    const icon_basecloud        =   'rgba(184,184,181,1)';
    const icon_cloud            =   'rgba(184,184,181,1)';
    const icon_rainy            =   'rgba(15,101,141,.5)';
    const icon_mist             =   'rgba(184,184,181,1)';
    const icon_windysnowcloud   =   'rgba(184,184,181,1)';
    const icon_drizzle          =   'rgba(15,101,141,.4)';
    const icon_snowy            =   'rgba(15,101,141,.4)';
    const icon_snowy_2          =   'rgba(15,101,141,.6)';
    const icon_sleet            =   'rgba(15,101,141,.4)';
    const icon_sleet_2          =   'rgba(15,101,141,.6)';
    const icon_windyrain        =   'rgba(15,101,141,.4)';
    const icon_hail             =   'rgba(184,184,181,.5)';
    const icon_windyraincloud   =   'rgba(15,101,141,.4)';
    const icon_thunder          =   'rgba(23,23,23,.5)';
    const icon_windy            =   'rgba(184,184,181,1)';
    const icon_sunrise          =   'rgba(253,184,19,1)';
    const icon_sunset           =   'rgba(253,184,19,1)';
  
    const iconSize = 90
    // icon_moon:before {left:0; content: "\f10d";color: rgba(15,101,141,.4);  -ms-transform: rotate(-240deg);-webkit-transform: rotate(-240deg);transform: rotate(-240deg) }
    
   
    let weatherIcon;
    let weatherText;



    if(time >= sunrise_time && time <= sunset_time){
   

        if(hourly.icon == 1){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={styles.weatherIcons} name='sun' size={iconSize} color={icon_sun}/></View> ;
            weatherText = 'Its Sunny';
        }
        if(hourly.icon == 2){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {marginLeft: -3, lineHeight:94}]} name='cloud' size={iconSize} color={icon_cloud}/><WeatherIcons style= {[styles.weatherIcons, {lineHeight:87}]} name='sunny' size={iconSize} color={icon_sun}/></View> ;
            weatherText = 'Its sunny with some scattered clouds';
        }
        if(hourly.icon == 3){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {marginLeft: -3, lineHeight:94}]} name='cloud' size={iconSize} color={icon_cloud}/><WeatherIcons style= {[styles.weatherIcons, {lineHeight:87}]} name='sunny' size={iconSize} color={icon_sun}/></View> ;
            weatherText = 'Its pretty cloudy with some sunshine';
        }
        if(hourly.icon == 4){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {marginLeft: -3, lineHeight:94}]} name='cloud' size={iconSize} color={icon_cloud}/><WeatherIcons style= {[styles.weatherIcons, {lineHeight:87}]} name='sunny' size={iconSize} color={icon_sun}/></View> ;
            weatherText = 'It seems to be cloudy';
        }
        if(hourly.icon == 5){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={styles.weatherIcons} name='sun' size={iconSize} color={icon_sun}/></View> ;
            weatherText = 'Its sunny but quite hazy';
        }
        if(hourly.icon == 6){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={styles.weatherIcons} name='mist' size={iconSize} color={icon_mist}/></View> ;
            weatherText = 'Its foggy';
        }
        if(hourly.icon == 7){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={styles.weatherIcons} name='sun' size={iconSize} color={icon_sun}/></View> ;
            weatherText = 'Its sunny and very hot';
        }
        if(hourly.icon == 8){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {marginLeft: -3, lineHeight:94}]} name='cloud' size={iconSize} color={icon_cloud}/><WeatherIcons style= {[styles.weatherIcons, {lineHeight:87}]} name='sunny' size={iconSize} color={icon_sun}/></View> ;
            weatherText = 'Its sunny and very cold';
        }
        if(hourly.icon == 9){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {marginLeft: 1, lineHeight:94}]} name='windysnowcloud' size={iconSize} color={icon_windysnowcloud}/><WeatherIcons style= {[styles.weatherIcons, {lineHeight:90}]} name='windysnow' size={iconSize} color={icon_windysnow}/><WeatherIcons style={[styles.weatherIcons, {lineHeight:89}]} name='sunny' size={iconSize} color={icon_sun}/></View> ;
            weatherText = 'Its sunny with some blowing snow';
        }
        if(hourly.icon == 10){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {lineHeight:85}]} name='drizzle' size={iconSize} color={icon_drizzle}/><WeatherIcons style= {[styles.weatherIcons, {lineHeight:85}]} name='basecloud' size={iconSize} color={icon_basecloud}/><WeatherIcons style={[styles.weatherIcons, {lineHeight:83}]} name='sunny' size={iconSize} color={icon_sun}/></View> ;
            weatherText = 'Its sunny with chances of light rain';
        }
        if(hourly.icon == 11 || icon == 13){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {lineHeight:85}]} name='rainy' size={iconSize} color={icon_rainy}/><WeatherIcons style= {[styles.weatherIcons, {lineHeight:85}]} name='basecloud' size={iconSize} color={icon_basecloud}/><WeatherIcons style={[styles.weatherIcons, {lineHeight:83}]} name='sunny' size={iconSize} color={icon_sun}/></View> ;
            weatherText = 'Its raining';
        }
        if(hourly.icon == 12){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {lineHeight:85}]} name='drizzle' size={iconSize} color={icon_drizzle}/><WeatherIcons style= {[styles.weatherIcons, {lineHeight:85}]} name='basecloud' size={iconSize} color={icon_basecloud}/><WeatherIcons style={[styles.weatherIcons, {lineHeight:83}]} name='sunny' size={iconSize} color={icon_sun}/></View> ;
            weatherText = 'Its sunny with chances of rain';
        }
        if(hourly.icon == 14){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {lineHeight:85}]} name='thunder' size={iconSize} color={icon_thunder}/><WeatherIcons style= {[styles.weatherIcons, {lineHeight:85}]} name='basecloud' size={iconSize} color={icon_basecloud}/><WeatherIcons style={[styles.weatherIcons, {lineHeight:83}]} name='sunny' size={iconSize} color={icon_sun}/></View> ;
            weatherText = 'Its sunny with a chance of a thunderstorm';
        }
        if(hourly.icon == 15){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {lineHeight:85}]} name='thunder' size={iconSize} color={icon_thunder}/><WeatherIcons style= {[styles.weatherIcons, {lineHeight:85}]} name='basecloud' size={iconSize} color={icon_basecloud}/><WeatherIcons style={[styles.weatherIcons, {lineHeight:83}]} name='sunny' size={iconSize} color={icon_sun}/></View> ;
            weatherText = 'There is a thunderstorm';
        }
        if(hourly.icon == 16){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {lineHeight:85}]} name='frosty' size={iconSize} color={icon_frosty}/><WeatherIcons style= {[styles.weatherIcons, {lineHeight:85}]} name='basecloud' size={iconSize} color={icon_basecloud}/><WeatherIcons style={[styles.weatherIcons, {lineHeight:83}]} name='sunny' size={iconSize} color={icon_sun}/></View> ;
            weatherText = 'There is a little snow showers/flurries';
        }
        if(hourly.icon == 18){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {lineHeight:85}]} name='snowy' size={iconSize} color={icon_snowy}/><WeatherIcons style= {[styles.weatherIcons, {lineHeight:85}]} name='basecloud' size={iconSize} color={icon_basecloud}/><WeatherIcons style={[styles.weatherIcons, {lineHeight:83}]} name='sunny' size={iconSize} color={icon_sun}/></View> ;
            weatherText = 'There is a chances of snow showers';
        }
        if(hourly.icon == 19){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {lineHeight:85}]} name='snowy' size={iconSize} color={icon_snowy_2}/><WeatherIcons style= {[styles.weatherIcons, {lineHeight:85}]} name='basecloud' size={iconSize} color={icon_basecloud}/><WeatherIcons style={[styles.weatherIcons, {lineHeight:83}]} name='sunny' size={iconSize} color={icon_sun}/></View> ;
            weatherText = 'Its snowing';
        }
        if(hourly.icon == 20){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {lineHeight:85}]} name='snowy' size={iconSize} color={icon_snowy}/><WeatherIcons style= {[styles.weatherIcons, {lineHeight:85}]} name='basecloud' size={iconSize} color={icon_basecloud}/><WeatherIcons style={[styles.weatherIcons, {lineHeight:83}]} name='sunny' size={iconSize} color={icon_sun}/></View> ;
            weatherText = 'There is a chances of snow showers';
        }
        if(hourly.icon == 21){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {lineHeight:85}]} name='snowy' size={iconSize} color={icon_snowy_2}/><WeatherIcons style= {[styles.weatherIcons, {lineHeight:85}]} name='basecloud' size={iconSize} color={icon_basecloud}/><WeatherIcons style={[styles.weatherIcons, {lineHeight:83}]} name='sunny' size={iconSize} color={icon_sun}/></View> ;
            weatherText = 'Its snowing';
        }
        if(hourly.icon == 22){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {lineHeight:85}]} name='hail' size={iconSize} color={icon_hail}/><WeatherIcons style= {[styles.weatherIcons, {lineHeight:85}]} name='basecloud' size={iconSize} color={icon_basecloud}/><WeatherIcons style={[styles.weatherIcons, {lineHeight:83}]} name='sunny' size={iconSize} color={icon_sun}/></View> ;
            weatherText = 'There are chances of ice pellets';
        }
        if(hourly.icon == 23){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {lineHeight:85}]} name='hail' size={iconSize} color={icon_hail}/><WeatherIcons style= {[styles.weatherIcons, {lineHeight:85}]} name='basecloud' size={iconSize} color={icon_basecloud}/><WeatherIcons style={[styles.weatherIcons, {lineHeight:83}]} name='sunny' size={iconSize} color={icon_sun}/></View> ;
            weatherText = 'Ice pellets are all over';
        }
        if(hourly.icon == 24){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {lineHeight:85}]} name='snowy' size={iconSize} color={icon_snowy_2}/><WeatherIcons style= {[styles.weatherIcons, {lineHeight:85}]} name='basecloud' size={iconSize} color={icon_basecloud}/><WeatherIcons style={[styles.weatherIcons, {lineHeight:83}]} name='sunny' size={iconSize} color={icon_sun}/></View> ;
            weatherText = 'There is a snow storm/blizzard';
        }
    }else{

        if(hourly.icon == 1){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={styles.weatherIcons} name='moon' size={iconSize} color={icon_moon}/></View> ;
            weatherText = 'Its a clear night sky';
        }
        if(hourly.icon == 2){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {marginLeft: -2, lineHeight:90}]} name='cloud' size={iconSize} color={icon_cloud}/><WeatherIcons style= {[styles.weatherIcons, {lineHeight:87}]} name='night' size={iconSize} color={icon_moon}/></View> ;
            weatherText = 'Its clear with some scattered clouds';
        }
        if(hourly.icon == 3){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {marginLeft: -2, lineHeight:90}]} name='cloud' size={iconSize} color={icon_cloud}/><WeatherIcons style= {[styles.weatherIcons, {lineHeight:87}]} name='night' size={iconSize} color={icon_moon}/></View> ;
            weatherText = 'Its pretty cloudy';
        }
        if(hourly.icon == 4){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {marginLeft: -2, lineHeight:90}]} name='cloud' size={iconSize} color={icon_cloud}/><WeatherIcons style= {[styles.weatherIcons, {lineHeight:87}]} name='night' size={iconSize} color={icon_moon}/></View> ;
            weatherText = 'It seems to be cloudy';
        }
        if(hourly.icon == 5){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={styles.weatherIcons} name='moon' size={iconSize} color={icon_moon}/></View> ;
            weatherText = 'Its clear but quite hazy';
        }
        if(hourly.icon == 6){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={styles.weatherIcons} name='mist' size={iconSize} color={icon_mist}/></View> ;
            weatherText = 'Its foggy';
        }
        if(hourly.icon == 7){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={styles.weatherIcons} name='moon' size={iconSize} color={icon_moon}/></View> ;
            weatherText = 'Its clear and very hot';
        }
        if(hourly.icon == 8){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {marginLeft: -2, lineHeight:90}]} name='cloud' size={iconSize} color={icon_cloud}/><WeatherIcons style= {[styles.weatherIcons, {lineHeight:87}]} name='night' size={iconSize} color={icon_moon}/></View> ;
            weatherText = 'Its clear and very cold';
        }
        if(hourly.icon == 9){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {marginLeft: 1, lineHeight:90}]} name='windysnowcloud' size={iconSize} color={icon_windysnowcloud}/><WeatherIcons style= {[styles.weatherIcons, {lineHeight:90}]} name='windysnow' size={iconSize} color={icon_windysnow}/><WeatherIcons style={[styles.weatherIcons, {lineHeight:89}]} name='night' size={iconSize} color={icon_moon}/></View> ;
            weatherText = 'Its clear with some blowing snow';
        }
        if(hourly.icon == 10){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {marginLeft: 1, lineHeight:84}]} name='drizzle' size={iconSize} color={icon_drizzle}/><WeatherIcons style= {[styles.weatherIcons, {marginLeft: 1, lineHeight:83}]} name='basecloud' size={iconSize} color={icon_basecloud}/><WeatherIcons style={[styles.weatherIcons, {lineHeight:83}]} name='night' size={iconSize} color={icon_moon}/></View> ;
            weatherText = 'Its clear sky with chances of light rain';
        }
        if(hourly.icon == 11 || icon == 13){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {marginLeft: 1, lineHeight:84}]} name='rainy' size={iconSize} color={icon_rainy}/><WeatherIcons style= {[styles.weatherIcons, {marginLeft: 1, lineHeight:83}]} name='basecloud' size={iconSize} color={icon_basecloud}/><WeatherIcons style={[styles.weatherIcons, {lineHeight:83}]} name='night' size={iconSize} color={icon_moon}/></View> ;
            weatherText = 'Its raining';
        }
        if(hourly.icon == 12){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {marginLeft: 1, lineHeight:84}]} name='drizzle' size={iconSize} color={icon_drizzle}/><WeatherIcons style= {[styles.weatherIcons, {marginLeft: 1, lineHeight:83}]} name='basecloud' size={iconSize} color={icon_basecloud}/><WeatherIcons style={[styles.weatherIcons, {lineHeight:83}]} name='night' size={iconSize} color={icon_moon}/></View> ;
            weatherText = 'Its clear sky with chances of rain';
        }
        if(hourly.icon == 14){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {marginLeft: 1, lineHeight:84}]} name='thunder' size={iconSize} color={icon_thunder}/><WeatherIcons style= {[styles.weatherIcons, {marginLeft: 1, lineHeight:83}]} name='basecloud' size={iconSize} color={icon_basecloud}/><WeatherIcons style={[styles.weatherIcons, {lineHeight:83}]} name='night' size={iconSize} color={icon_moon}/></View> ;
            weatherText = 'Its clear sky with a chance of a thunderstorm';
        }
        if(hourly.icon == 15){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {marginLeft: 1, lineHeight:84}]} name='thunder' size={iconSize} color={icon_thunder}/><WeatherIcons style= {[styles.weatherIcons, {marginLeft: 1, lineHeight:83}]} name='basecloud' size={iconSize} color={icon_basecloud}/><WeatherIcons style={[styles.weatherIcons, {lineHeight:83}]} name='night' size={iconSize} color={icon_moon}/></View> ;
            weatherText = 'There is a thunderstorm';
        }
        if(hourly.icon == 16){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {marginLeft: 1, lineHeight:84}]} name='frosty' size={iconSize} color={icon_frosty}/><WeatherIcons style= {[styles.weatherIcons, {marginLeft: 1, lineHeight:83}]} name='basecloud' size={iconSize} color={icon_basecloud}/><WeatherIcons style={[styles.weatherIcons, {lineHeight:83}]} name='night' size={iconSize} color={icon_moon}/></View> ;
            weatherText = 'There is a little snow showers/flurries';
        }
        if(hourly.icon == 18){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {marginLeft: 1, lineHeight:84}]} name='snowy' size={iconSize} color={icon_snowy}/><WeatherIcons style= {[styles.weatherIcons, {marginLeft: 1, lineHeight:83}]} name='basecloud' size={iconSize} color={icon_basecloud}/><WeatherIcons style={[styles.weatherIcons, {lineHeight:83}]} name='night' size={iconSize} color={icon_moon}/></View> ;
            weatherText = 'There is a chances of snow showers';
        }
        if(hourly.icon == 19){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {marginLeft: 1, lineHeight:84}]} name='snowy' size={iconSize} color={icon_snowy_2}/><WeatherIcons style= {[styles.weatherIcons, {marginLeft: 1, lineHeight:83}]} name='basecloud' size={iconSize} color={icon_basecloud}/><WeatherIcons style={[styles.weatherIcons, {lineHeight:83}]} name='night' size={iconSize} color={icon_moon}/></View> ;
            weatherText = 'Its snowing';
        }
        if(hourly.icon == 20){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {marginLeft: 1, lineHeight:84}]} name='snowy' size={iconSize} color={icon_snowy}/><WeatherIcons style= {[styles.weatherIcons, {marginLeft: 1, lineHeight:83}]} name='basecloud' size={iconSize} color={icon_basecloud}/><WeatherIcons style={[styles.weatherIcons, {lineHeight:83}]} name='night' size={iconSize} color={icon_moon}/></View> ;
            weatherText = 'There is a chances of snow showers';
        }
        if(hourly.icon == 21){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {marginLeft: 1, lineHeight:84}]} name='snowy' size={iconSize} color={icon_snowy_2}/><WeatherIcons style= {[styles.weatherIcons, {marginLeft: 1, lineHeight:83}]} name='basecloud' size={iconSize} color={icon_basecloud}/><WeatherIcons style={[styles.weatherIcons, {lineHeight:83}]} name='night' size={iconSize} color={icon_moon}/></View> ;
            weatherText = 'Its snowing';
        }
        if(hourly.icon == 22){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {marginLeft: 1, lineHeight:84}]} name='hail' size={iconSize} color={icon_hail}/><WeatherIcons style= {[styles.weatherIcons, {marginLeft: 1, lineHeight:83}]} name='basecloud' size={iconSize} color={icon_basecloud}/><WeatherIcons style={[styles.weatherIcons, {lineHeight:83}]} name='night' size={iconSize} color={icon_moon}/></View> ;
            weatherText = 'There are chances of ice pellets';
        }
        if(hourly.icon == 23){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {marginLeft: 1, lineHeight:84}]} name='hail' size={iconSize} color={icon_hail}/><WeatherIcons style= {[styles.weatherIcons, {marginLeft: 1, lineHeight:83}]} name='basecloud' size={iconSize} color={icon_basecloud}/><WeatherIcons style={[styles.weatherIcons, {lineHeight:83}]} name='night' size={iconSize} color={icon_moon}/></View> ;
            weatherText = 'Ice pellets are all over';
        }
        if(hourly.icon == 24){
            weatherIcon = <View style={styles.weatherIconInner}><WeatherIcons style={[styles.weatherIcons, {marginLeft: 1, lineHeight:84}]} name='snowy' size={iconSize} color={icon_snowy_2}/><WeatherIcons style= {[styles.weatherIcons, {marginLeft: 1, lineHeight:83}]} name='basecloud' size={iconSize} color={icon_basecloud}/><WeatherIcons style={[styles.weatherIcons, {lineHeight:83}]} name='night' size={iconSize} color={icon_moon}/></View> ;
            weatherText = 'There is a snow storm/blizzard';
        }

    }

    weatherText = hourly.content != null ? hourly.content : weatherText



 

    const WEATHER_UNDERGROUND = addAnimate.interpolate({
        inputRange : [0,1],
        outputRange :[0, 30],
        extrapolate:'clamp'
    })

    const WEATHER_UNDERGROUND_OPACITY = addAnimate.interpolate({
        inputRange : [0,1],
        outputRange :[0, 1],
        extrapolate:'clamp'
    })



    const WEATHER_UNDERGROUND_MARGIN_TOP = addAnimate.interpolate({
        inputRange : [0,1],
        outputRange :[0, 5],
        extrapolate:'clamp'
    })


    const WEATHER_CELSIUS   = weatherCF ? 'none' : 'flex'
    const WEATHER_FARENHEIT = weatherCF ? 'flex' : 'none'


    // const WEATHER_UNDERGROUND_LOGO = theme == 'white' ? weatherUndergroundLogo : weatherUndergroundLogo_2

    return (
        <View style={styles.container}>

            <View style={[style.displayFlex, styles.weatherIcon]}>
                 {weatherIcon}
            </View>

            <Animated.View style={[styles.weatherDesc, {display:WEATHER_CELSIUS}]}>
                <Text style={[styles.weatherDescText, style.ma, {color:weatherDesc}]}>{weatherText}</Text>
                <Text style={[styles.weatherDescText, style.ma, {color:weatherDesc}]}>{temp_today_c}</Text>
            </Animated.View>

            <Animated.View style={[styles.weatherDesc, {display:WEATHER_FARENHEIT}]}>
                <Text style={[styles.weatherDescText, style.ma, {color:weatherDesc}]}>{weatherText}</Text>
                <Text style={[styles.weatherDescText, style.ma, {color:weatherDesc}]}>{temp_today_f}</Text>
            </Animated.View>

            <View style={[style.displayFlex, styles.weatherSun]}>
                <View style={[style.displayFlex, styles.weatherSunInfo]}>
                    <WeatherIcons style={styles.weatherSunIcons} name='sunrise' size={35} color={icon_sunrise}/>
                    <Text style={[styles.weatherSunTime, {color:weatherDesc}]}>{astro.sunrise_hour} : {astro.sunrise_minutes}</Text>
                </View>
                <View style={[style.displayFlex, styles.weatherSunInfo]}>
                    <WeatherIcons style={styles.weatherSunIcons} name='sunset' size={35} color={icon_sunrise}/>
                    <Text style={[styles.weatherSunTime, {color:weatherDesc}]}>{astro.sunset_hour} : {astro.sunset_minutes}</Text>
                </View>
            </View>

            {/* <Animated.View style={[style.displayFlex, styles.weatherUnderground, {height:WEATHER_UNDERGROUND, opacity:WEATHER_UNDERGROUND_OPACITY, marginTop:WEATHER_UNDERGROUND_MARGIN_TOP}]}>
                    <Text style={[style.bt, styles.weatherUndergroundText, {color:weatherDesc}]}>Weather By : </Text>
                    <Image resizeMode={'cover'} style={[styles.weatherUndergroundLogo]} source = {WEATHER_UNDERGROUND_LOGO}/> 
            </Animated.View> */}

        </View>
        

    )
}


const styles = StyleSheet.create({

    weatherIcon :{
        width: '100%',
        height: 80,
    },

    weatherIconInner : {
        height:'100%', 
        width:'100%',
    },

    weatherIcons :{
        top:0, 
        left:0, 
        right:0,
        bottom:0,
        height:'100%', 
        width:'100%', 
        position:'absolute', 
        textAlign:'center'
    },

   

    weatherDesc :{
        width: '100%',
        marginTop: 10,
        flexDirection: 'column',
    },

    weatherDescText : {
        width: '100%',
        fontSize: 15,
        lineHeight: 27,
        textAlign:'center',
        textShadowColor: 'rgba(23, 23, 23, 0.5)',
        textShadowOffset: {width: 1, height: 0},
        textShadowRadius: 1,
        letterSpacing:1
    },



    weatherDesc2 :{

    },

    weatherSun : {
        height:30,
        width:'100%',
        marginTop:15,
        flexDirection:'row'
    },
    weatherSunInfo : {
        height:30,
        width:'50%',
        flexDirection:'row',
        // backgroundColor:'red'
    },
    weatherSunIcons:{
        height:30,
        lineHeight:28,
        width:30,
        marginRight:7,
        // backgroundColor:'blue'
    },
    weatherSunTime : {
        letterSpacing:.5,
        fontSize:12,
        lineHeight:30,
        textShadowColor: 'rgba(23, 23, 23, 0.4)',
        textShadowOffset: {width: 1, height: 0},
        textShadowRadius: 1,
    },

    weatherUnderground :{
        overflow:'hidden',
        width:'100%',
        flexDirection:'row',
    },
    weatherUndergroundText : {
        fontSize:11,
        height:30,
        letterSpacing:.5,
        lineHeight:30
    },
    weatherUndergroundLogo : {
        height:20,
        marginTop: -5,
        width:96,
    }
})


export default connect(state)(weatherMain);