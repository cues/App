import React from 'React';
import {Platform, View, Text, StyleSheet, TouchableWithoutFeedback, Animated} from 'react-native';
import style from '../../Styles/Styles';
import WeatherWind from './WeatherWind';
import BlurView from '../../Components/BlurVIew/BlurVIew';


import { connect } from 'react-redux';

const state = state => {
    return {
        humidity            :   state.weather.hourly.humidity,
        precipitation_mm    :   state.weather.hourly.precipitation_mm,
        precipitation_in    :   state.weather.hourly.precipitation_in,
        dew                 :   state.weather.hourly.dew,
        dew_2               :   state.weather.hourly.dew_2,
        tabBlur             :   state.themes.tabBlur,
        weatherDesc         :   state.themes.weatherDesc,
        weatherSide         :   state.themes.weatherSide,
    }
}


const weatherSide = props => {
    const {tabBlur, weatherDesc, weatherSide, humidity, precipitation_in, precipitation_mm, dew, dew_2, weatherSideActive, weatherWindActive, weatherSideHandler, addAnimate, weatherWidth, weatherCF} = props

    const containerActive = weatherSideActive ? styles.containerActive : null


    const windActive = weatherWindActive ? style.flex : style.none
    


    const WEATHER_SIDE = addAnimate.interpolate({
        inputRange:[0,0],
        outputRange: [0,1] ,
        extrapolate:'clamp'
    })

    const WEATHER_SIDE_WIDTH = addAnimate.interpolate({
        inputRange : [0,1],
        outputRange :[0, weatherWidth + 20],
        extrapolate:'clamp'
    })


    const WEATHER_PRECIPITATION   = precipitation_in != null ? weatherCF ? precipitation_in + ' in' : precipitation_mm + ' mm' : '---'
    const WEATHER_DEW             = dew != null ? weatherCF ? dew + '°C' : dew_2 + '°F' : '---'

    return (
        <Animated.View style={[styles.container, containerActive, {width:WEATHER_SIDE_WIDTH, opacity:WEATHER_SIDE, backgroundColor:Platform.select({android : weatherSide, ios:'transparent'})}]}>

            <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={7} />  
            
            <TouchableWithoutFeedback onPress={() => weatherSideHandler(2)}>

                <View style={[styles.weatherSide, windActive]}>
                    <View style={[style.displayFlex, styles.weatherSide1]}>
                        <WeatherWind weatherCF={weatherCF}/>
                    </View>
                    <View style={styles.weatherSide2}>
                        <View style={styles.weatherFeatures}>
                            <Text style={[{color:weatherDesc}, style.bt, styles.weatherFeatureDivide, styles.weatherFeatureDivide1]}>Humidity</Text>
                            <Text style={[{color:weatherDesc}, style.bt, styles.weatherFeatureDivide, styles.weatherFeatureDivide2]}>:</Text>
                            <Text style={[{color:weatherDesc}, style.bt, styles.weatherFeatureDivide, styles.weatherFeatureDivide3]}>{humidity} %</Text>
                        </View>
                        <View style={styles.weatherFeatures}>
                            <Text style={[{color:weatherDesc}, style.bt, styles.weatherFeatureDivide, styles.weatherFeatureDivide1]}>Precipitation</Text>
                            <Text style={[{color:weatherDesc}, style.bt, styles.weatherFeatureDivide, styles.weatherFeatureDivide2]}>:</Text>
                            <Text style={[{color:weatherDesc}, style.bt, styles.weatherFeatureDivide, styles.weatherFeatureDivide3]}>{WEATHER_PRECIPITATION}</Text>
                        </View>
                        <View style={styles.weatherFeatures}>
                            <Text style={[{color:weatherDesc}, style.bt, styles.weatherFeatureDivide, styles.weatherFeatureDivide1]}>Dew Point</Text>
                            <Text style={[{color:weatherDesc}, style.bt, styles.weatherFeatureDivide, styles.weatherFeatureDivide2]}>:</Text>
                            <Text style={[{color:weatherDesc}, style.bt, styles.weatherFeatureDivide, styles.weatherFeatureDivide3]}>{WEATHER_DEW}</Text>
                        </View>
                    </View>
                </View>
            
            </TouchableWithoutFeedback>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
  

    container : {
        position:'absolute',
        right:-10,
        top:-10,
        // left:-10,
        bottom:0,
        zIndex:2,
        borderBottomLeftRadius:6,
        borderBottomRightRadius:6,
        overflow:'hidden'
    },
    containerActive : {
        // right:-10,
        // left:-10,
    },
    weatherSide:{
        // height:'100%',
        // width:'100%',
        flexDirection:'row'
    },
    weatherSide1:{
        width:'43%',
        borderRightWidth:2,
        borderRightColor:'rgba(102, 102, 102, 0.2)',
        height:'100%',
        overflow:'hidden'
        // backgroundColor:'red',
    },
    weatherSide2:{
        width:'57%',
        height:'100%',
        justifyContent:'space-evenly',
        overflow:'hidden'
        // backgroundColor:'blue',
    },
    
    weatherFeatures:{
        height:30,
        width:'100%',
        // backgroundColor:'green',
        flexDirection:'row'
    },
    weatherFeatureDivide : {
        height:30,
        lineHeight:30,
        height:'100%',
        // color:'rgba(255, 255, 255, 0.9)',
        fontSize:11,
        letterSpacing:.9
    },
    weatherFeatureDivide1 :{
        width:'50%',
        textAlign:'right',
    },
    weatherFeatureDivide2 :{
        width:'10%',
        textAlign:'center',
    },
    weatherFeatureDivide3 :{
        width:'40%',
        textAlign:'left',
    }
});

export default connect(state)(weatherSide);
