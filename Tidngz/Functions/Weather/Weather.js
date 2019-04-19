import React, {Component} from 'react';
import {Platform, View, Text, StyleSheet, TouchableOpacity, Animated, AsyncStorage, LayoutAnimation} from 'react-native';
import style from '../../Styles/Styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import WeatherMain from './WeatherMain';
import WeatherSide from './WeatherSide';

import { connect } from 'react-redux';

const state = state => {
    return {
     

    }
}

const WEATHER_TYPE = 'weather_type';


class weather extends Component {

    constructor(){
        super()

        this.state = {
            weatherSideActive : false,
            weatherWindActive : false,
            weatherWidth : null,
            addAnimate : new Animated.Value(0),
    
            weatherUndergroundActive : false,
            addAnimate_2 : new Animated.Value(0),
    
            weatherCF : false,
            // flexDirection:'row',
            addAnimate_CF : new Animated.Value(0),

        }



        this.getToken()

        // if (Platform.OS === 'android')
        // {
        //   UIManager.setLayoutAnimationEnabledExperimental(true)
        // }
    }


  getToken = async () => {
    try {
       let token =  await AsyncStorage.getItem(WEATHER_TYPE);

        if(token){

            this.weatherCF_Handler(token)
       }
      } 
      catch (error) {
      }
}
    


    weatherSideHandler = (type) => {
        this.setState(prevState => ({
            weatherSideActive : !prevState.weatherSideActive
        }))

        if(type == 1){
            setTimeout(() => {
                this.setState(prevState => ({
                    weatherWindActive : !prevState.weatherWindActive
                }))
            },300)
        }else{
            setTimeout(() => {
            this.setState(prevState => ({
                    weatherWindActive : !prevState.weatherWindActive
                }))
            },10)
        }
       

        const weatherSide = !this.state.weatherSideActive ? 1 : 0

        Animated.timing(this.state.addAnimate, {
                toValue : weatherSide,
                duration : 300,
         }).start()
    }   


    weatherUndergroundHandler = () => {
        this.setState(prevState => ({
            weatherUndergroundActive : !prevState.weatherUndergroundActive
        }))

        const weatherUnderground = !this.state.weatherUndergroundActive ? 1 : 0

        Animated.timing(this.state.addAnimate_2, {
            toValue : weatherUnderground,
            duration : 300,
         }).start()
    }



    weatherCF_Handler = (type) => {


            const weatherCF_type = type == 1 ? false : true
            // const weatherCF_direction = type == 1 ? 'row' : 'row-reverse'
            const weatherCF = type == 1 ? 0 : 1

            const token = type == 1 ? '1' : '2'
            this.storeToken(token)
        
            this.setState({
                weatherCF : weatherCF_type,
                // flexDirection : weatherCF_direction,
            })
    
            Animated.timing(this.state.addAnimate_CF, {
                toValue : weatherCF,
                duration : 400,
             }).start()
  
    }


    storeToken = async (accessToken) => {
        try {
            await AsyncStorage.setItem(WEATHER_TYPE , accessToken);
        } catch (error) {
            // console.warn('something went wrong')
        }
    }

    layout = (event) => {
        var {x, y, width, height} = event.nativeEvent.layout;
        this.setState({
            weatherWidth : width
        })
    }


    render(){


        const { weatherSideHandler, layout, weatherUndergroundHandler, weatherCF_Handler } = this

        const { weatherSideActive, weatherWindActive, addAnimate, addAnimate_2, addAnimate_CF, weatherWidth , weatherCF} = this.state

        const { weather } = this.props;


        const astro = {
            sunrise_hour        :    weather.data.astro.sunrise_hour,
            sunrise_minutes     :    weather.data.astro.sunrise_minutes,
            sunset_hour         :    weather.data.astro.sunset_hour,
            sunset_minutes      :    weather.data.astro.sunset_minutes
        }
    
        const hourly = {
            source              :    weather.data.hourly.source,
            icon                :    weather.data.hourly.icon,
            content             :    weather.data.hourly.content,
            temp                :    weather.data.hourly.temp,
            temp_2              :    weather.data.hourly.temp_2,
            feels               :    weather.data.hourly.feels,
            feels_2             :    weather.data.hourly.feels_2,
            dew                 :    weather.data.hourly.dew,
            dew_2               :    weather.data.hourly.dew_2,
            humidity            :    weather.data.hourly.humidity,
            wind_degree         :    weather.data.hourly.wind_degree,
            wind_speed_km       :    weather.data.hourly.wind_speed_km,
            wind_speed_mph      :    weather.data.hourly.wind_speed_mph,
            precipitation_mm    :    weather.data.hourly.precipitation_mm,
            precipitation_in    :    weather.data.hourly.precipitation_in,
        }

        // console.warn(weather)
        

            const WEATHER_LINE_MARGIN = addAnimate.interpolate({
                inputRange : [0,1],
                outputRange :[0 , -10],
                extrapolate:'clamp'
            })


            const WEATHER_UNDERGROUND_ROTATE = addAnimate_2.interpolate({
                inputRange : [0,1],
                outputRange :['0deg' ,'180deg'],
                extrapolate:'clamp'
            })


            const WEATHER_CELSIUS = addAnimate_CF.interpolate({
                inputRange : [0,1],
                outputRange :[25, 0],
                extrapolate:'clamp'
            })

            const WEATHER_CELSIUS_UNIT_TEXT = addAnimate_CF.interpolate({
                inputRange : [0,1],
                outputRange : [21, 13],
                extrapolate : 'clamp'
            })

            const WEATHER_CELSIUS_UNIT_TEXT_COLOR = addAnimate_CF.interpolate({
                inputRange : [0,1],
                outputRange : ['rgba(15, 101, 141, 1)', 'rgba(15, 101, 141, 0.6)'],
                extrapolate : 'clamp'
            })

          
            // const WEATHER_CELSIUS_UNIT_TEXT_SHADOW = weatherCF ? '100' : 'bold'
            
    
            const WEATHER_FARENHEIT = addAnimate_CF.interpolate({
                inputRange : [0,1],
                outputRange :[0, 25],
                extrapolate:'clamp'
            })

            const WEATHER_FARENHEIT_UNIT_TEXT = addAnimate_CF.interpolate({
                inputRange : [0,1],
                outputRange : [13, 21],
                extrapolate : 'clamp'
            })

            const WEATHER_FARENHEIT_UNIT_TEXT_COLOR = addAnimate_CF.interpolate({
                inputRange : [0,1],
                outputRange : ['rgba(15, 101, 141, .6)', 'rgba(15, 101, 141, 1)'],
                extrapolate : 'clamp'
            })

            // const WEATHER_FARENHEIT_UNIT_TEXT_SHADOW = weatherCF ? 1 : 0
         
           
 
 
        return (
            <View style={styles.container} onLayout = {layout}>
                <Animated.View style={[styles.line, {marginHorizontal:WEATHER_LINE_MARGIN}]}></Animated.View>
                <View style={styles.weatherToday}>

                        <TouchableOpacity style={styles.weatherMoreIcon} onPress={() => weatherSideHandler(1)}>
                            <MaterialIcons style={styles.weatherArrowIcons} name="keyboard-arrow-left" size={25} color='rgba(77, 77, 77, 0.8)'/>
                        </TouchableOpacity>

                        {/* <Animated.View style={[styles.weatherMoreIcon, styles.weatherBottomIcon, {transform: [{ rotate: WEATHER_UNDERGROUND_ROTATE}]}]}>
                            <TouchableOpacity   onPress={weatherUndergroundHandler}>
                                <MaterialIcons style={styles.weatherArrowIcons} name="keyboard-arrow-down" size={25} color='rgba(77, 77, 77, 0.8)'/>
                            </TouchableOpacity>
                        </Animated.View> */}
                   
            
            {/* <Text>{WEATHER_CELSIUS_UNIT_TEXT_SHADOW}</Text> */}
                        {/* <View style={[styles.weatherUnitContainer, {flexDirection : this.state.flexDirection}]}> */}

                            <Animated.View style={[styles.weatherUnit, {left:WEATHER_CELSIUS}]} >
                                <TouchableOpacity onPress={() => weatherCF_Handler(1)}>
                                    <Animated.Text style={[styles.weatherUnitText, style.mo,  {fontSize:WEATHER_CELSIUS_UNIT_TEXT, color:WEATHER_CELSIUS_UNIT_TEXT_COLOR}]}>°C</Animated.Text>
                                </TouchableOpacity>
                            </Animated.View>
                            

                            <Animated.View style={[styles.weatherUnit, {left:WEATHER_FARENHEIT}]} >
                                <TouchableOpacity onPress={() => weatherCF_Handler(2)}>
                                    <Animated.Text style={[styles.weatherUnitText, style.mo, {fontSize:WEATHER_FARENHEIT_UNIT_TEXT, color:WEATHER_FARENHEIT_UNIT_TEXT_COLOR}]}>°F</Animated.Text>
                                </TouchableOpacity>
                            </Animated.View>

                        {/* </View> */}
                     


                     
                   



                        <View style={styles.weatherInner} >

                                <WeatherMain weather={weather} astro = {astro} hourly = {hourly} addAnimate = {addAnimate_2}  weatherCF = {weatherCF}/>

                        </View>
                        

                        <WeatherSide 
                            hourly = {hourly}
                            weatherCF = {weatherCF}
                            addAnimate = {addAnimate}
                            weatherSideActive = {weatherSideActive} 
                            weatherWindActive = {weatherWindActive}
                            weatherSideHandler={weatherSideHandler}
                            weatherWidth={weatherWidth}/>
                    
                </View>
            </View>
        )
    }
     
}

const styles = StyleSheet.create({
    line : {
        height:2,
        borderRadius:100,
        marginVertical:10,
        backgroundColor:'rgba(102, 102, 102, 0.2)'
    },

    container : {
        // backgroundColor:'red',
        marginBottom:-10
    },
    weatherToday : {
        // backgroundColor : 'grey',
        // height:200,
        width:'100%',
    },
    weatherMoreIcon : {
        height: 30,
        width: 30,
        position: 'absolute',
        right: 0,
        zIndex:2,
    },
    weatherBottomIcon : {
        bottom:0,
    },
    weatherArrowIcons: {
        lineHeight:30, 
        textAlign:'center',
    },
    weatherUnitContainer : {
        height: 40,
        width: 65,
        padding:5,
        // backgroundColor:'red',
        top: 0,
        left: 0,
        zIndex:2,
        position: 'absolute',
    },
    weatherUnit : {
        height: 25,
        width: 25,
        zIndex:2,
        position: 'absolute',
        top: 5,
        left: 0,
        // backgroundColor:'blue'
    },
    weatherUnitActive : {
        left: 35
    },
    weatherUnitText :{
        lineHeight:30,
        textAlign:'center',
        color: 'rgba(15, 101, 141, 0.8)',
        fontSize: 15,
        textShadowColor: 'rgba(15, 101, 141, 1)',
        textShadowOffset: {width: 1, height: 0},
    },

    // weatherUnitTextActive : {
        // textShadowColor: 'rgba(15, 101, 141, 1)',
        // textShadowOffset: {width: 1, height: 0},
        // textShadowRadius : 1,
        // fontWeight:'bold'
    // },
 



    weatherInner :{
        // position:'relative',
        zIndex:1,
        // height:200,
        width:'100%',
        // backgroundColor:'red'
    },


    
  
    
})

export default connect(state)(weather)


