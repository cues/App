import React from 'React';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import style from '../../Styles/Styles';

import { connect } from 'react-redux';

const state = state => {
    return {
        wind_direction    :   state.weather.hourly.wind_direction,
        wind_speed_km     :   state.weather.hourly.wind_speed_km,
        wind_speed_mph    :   state.weather.hourly.wind_speed_mph,
        weatherDesc       :   state.themes.weatherDesc,
    }
}

const weatherWind = props => {

    const {weatherDesc, wind_direction, wind_speed_km, wind_speed_mph} = props

    let windDirection;
    let windCompassNeedle;


      if(wind_direction == "N"){
        windCompassNeedle = { transform: [{ rotate: '0deg'}], left:0, top:0 };
        windDirection = "North";
      }
      else if(wind_direction == "NNE" ){
        windCompassNeedle = { transform: [{ rotate: '22.5deg'}], left:7.5, top:2.5 };
        windDirection = "Northeast";
      }
      else if( wind_direction == "NE" ){
        windCompassNeedle = { transform: [{ rotate: '45deg'}], left:15, top:5 };
        windDirection = "Northeast";
      }
      else if(wind_direction == "ENE"){
        windCompassNeedle = { transform: [{ rotate: '67.5deg'}], left:17.5, top:12.5 };
        windDirection = "Northeast";
      }
      else if(wind_direction == "E"){
        windCompassNeedle = { transform: [{ rotate: '90deg'}], left:20, top:20 };
        windDirection = "East";
      }
      else if(wind_direction == "ESE" ){
        windCompassNeedle = { transform: [{ rotate: '112.5deg'}], left:17.5, top:27.5 };
        windDirection = "Southeast";
      }
      else if(wind_direction == "SE" ){
        windCompassNeedle = { transform: [{ rotate: '135deg'}], left:15, top:35 };
        windDirection = "Southeast";
      }
      else if(wind_direction == "W"){
        windCompassNeedle = { transform: [{ rotate: '157.5deg'}], left:7.5, top:37.5 };
        windDirection = "Southeast";
      }
      else if(wind_direction == "S"){
        windCompassNeedle = { transform: [{ rotate: '180deg'}], left:0, top:40 };
        windDirection = "South";
      }
      else if(wind_direction == "W"){
        windCompassNeedle = { transform: [{ rotate: '202.5deg'}], left:-7.5, top:37.5 };
        windDirection = "Southwest";
      }
      else if(wind_direction == "SW" ){
        windCompassNeedle = { transform: [{ rotate: '225deg'}], left:-15, top:35 };
        windDirection = "Southwest";
      }
      else if(wind_direction == "WSW"){
        windCompassNeedle = { transform: [{ rotate: '247.5deg'}], left:-17.5, top:27.5 };
        windDirection = "Southwest";
      }
      else if(wind_direction == "W"){
        windCompassNeedle = { transform: [{ rotate: '270deg'}], left:-20, top:20 };
        windDirection = "West";
      }
      else if(wind_direction == "WNW" ){
        windCompassNeedle = { transform: [{ rotate: '292.5deg'}], left:-17.5, top:12.5 };
        windDirection = "Northwest";
      }
      else if(wind_direction == "NW"){
        windCompassNeedle = { transform: [{ rotate: '315deg'}], left:-15, top:5 };
        windDirection = "Northwest";
      }
      else if(wind_direction == "NNW"){
        windCompassNeedle = { transform: [{ rotate: '337.5deg'}], left:-7.5, top:2.5 };
        windDirection = "Northwest";
      }

    return (
        <View style={[styles.container]}>
            <Text style={[{color:weatherDesc}, style.bt, styles.wind, styles.windDirection]}>Wind from {windDirection}</Text>
            <View style={[style.displayFlex, styles.windIcon]}>
                <View style={styles.windIconBox}>
                    <View style={[styles.windCompassNeedle, windCompassNeedle]}>
                        <View style={styles.windCompassNeedleLine}></View>
                        <View style={styles.windCompassNeedleArrow}></View>
                    </View>
                    <View style={[styles.windCompass]}>
                        <Text style={[style.la, styles.windCompassDirection, styles.windCompassDirectionNorth]}>N</Text>
                        <Text style={[style.la, styles.windCompassDirection, styles.windCompassDirectionEast]}>E</Text>
                        <Text style={[style.la, styles.windCompassDirection, styles.windCompassDirectionSouth]}>S</Text>
                        <Text style={[style.la, styles.windCompassDirection, styles.windCompassDirectionWest]}>W</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.wind]}>
                <Text style={[{color:weatherDesc}, style.bt, styles.wind]}>{wind_speed_km} km</Text>
                <Text style={[{color:weatherDesc}, style.bt, styles.wind, style.none]}>{wind_speed_mph} mph</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        height:140,
        width:'100%',
    },
    wind : {
        // color:'rgba(255, 255, 255, 0.9)',
        textAlign:'center',
        width:'100%',
        lineHeight:30,
        letterSpacing:.5,
        fontSize:10
    },
    windDirection:{
    },
    windIcon:{
        height:80,
        width:'100%',
    },
    windIconBox:{
        height:61,
        width:61,
        borderRadius:35,
        borderWidth: 3,
        borderColor:'rgba(123,123,123, 0.8)'
    },
    windCompass : {
        height:24,
        width:24,
        top:16,
        left:16,
        // backgroundColor:'red',
        position:'absolute'
    },
    windCompassDirection : {
        height: 10,
        width: 10,
        color: 'rgba(123,123,123, 0.6)',
        position:'absolute',
        fontSize: 10,
        // backgroundColor:'blue',
        lineHeight:10,
        textAlign:'center'
    },
    windCompassDirectionNorth : {
        top: -10,
        left:7
    },
    windCompassDirectionEast : {
        top: 7,
        right:-10
    },
    windCompassDirectionSouth : {
        bottom: -10,
        right:7
    },
    windCompassDirectionWest : {
        top: 7,
        left:-10
    },
    windSpeed:{
    },




    windCompassNeedle : {
        height : 45,
        marginTop:-15,
        marginLeft:25,
        width:6,
        // backgroundColor:'blue',
    },
    windCompassNeedleLine : {
        height:22,
        width:6,
        backgroundColor:'rgba(123,123,123,.9)',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    windCompassNeedleArrow : {
        marginTop: 0,
        marginLeft: -3,
        borderLeftWidth: 6,
        borderRightWidth: 6 ,
        borderTopWidth: 14,
        // backgroundColor:'blue', 
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        borderTopColor: 'rgba(123,123,123,.9)'
    }

  
})


export default connect(state)(weatherWind);
