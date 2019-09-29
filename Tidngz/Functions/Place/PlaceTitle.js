import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, View, Text, Animated, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import style from '../../Styles/Styles'; 
import BlurView from '../../Components/BlurVIew/BlurVIew';
import {brand, model, models} from '../../Components/DeviceInfo/DeviceInfo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CardView from 'react-native-cardview';
import ArticleOptions from '../Options/Article_Options/Article_Options';
import Chose from '../Options/Chose_Article_Classified/Chose';
import { placeCountryMatch , placeProvinceMatch, placeCountyMatch, countyProvinceMatch } from '../../Components/Place/PlaceMatch';
import { withNavigation } from 'react-navigation'
import Follow from '../../Functions/Place/Follow';

import { connect } from 'react-redux';
import { logout , add_theme_black } from '../../Store/Actions/index';

const state = state => {
    return {
        menuIconColor   :   state.themes.menuIconColor,
        menuIconColor_2 :   state.themes.menuIconColor_2,
        menuText        :   state.themes.menuText,
        headerColor     :   state.themes.headerColor,
        tabBlur         :   state.themes.tabBlur,
        theme           :   state.themes.theme,
        place           :   state.place.place,
        county_id       :   state.place.county_id,
        province_id     :   state.place.province_id,
        country_id      :   state.place.country_id,
    }
}


const dispatch = dispatch => {
    return {
    }
}


const ACCESS_TOKEN = 'access_token';


const HEADER_MAX_HEIGHT = models.includes(model) ? 100 : brand === 'Apple' ? 80 : 120 
const HEADER_MIN_HEIGHT = models.includes(model) ? 70 : brand === 'Apple' ? 55 : 40
const PLACE_IMAGE_MAX_HEIGHT = 50
const PLACE_IMAGE_MIN_HEIGHT = 20
const PLACE_IMAGE_MAX_WIDTH = 80
const PLACE_IMAGE_MIN_WIDTH = 32

const PLACE_FLAG_HOLDER_MAX_HEIGHT = 60
const PLACE_FLAG_HOLDER_MIN_HEIGHT = 0
const PLACE_FLAG_HOLDER_MAX_WIDTH = 6
const PLACE_FLAG_HOLDER_MIN_WIDTH = 6

const WIDTH = Dimensions.get('window').width;


class PlaceTitle extends Component {


  




    render (){

        const { scrollY, item , menuIconColor , menuIconColor_2, menuText,  headerColor , tabBlur , refresh, stylesProps, navigation, place, theme, county_id, province_id, country_id} = this.props;

        const placeImageHeight = scrollY.interpolate({
            inputRange : [0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
            outputRange : [PLACE_IMAGE_MAX_HEIGHT, PLACE_IMAGE_MIN_HEIGHT],
            extrapolate:'clamp'
        })

        const placeImageWidth = scrollY.interpolate({
            inputRange : [0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
            outputRange : [PLACE_IMAGE_MAX_WIDTH, PLACE_IMAGE_MIN_WIDTH],
            extrapolate:'clamp'
        })


        const placeImageMarginTop = scrollY.interpolate({
            inputRange : [0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
            outputRange : [ -110, -20],
            extrapolate:'clamp'
        })


        const placeFlagHolderHeight = scrollY.interpolate({
            inputRange : [0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
            outputRange : [PLACE_FLAG_HOLDER_MAX_HEIGHT, PLACE_FLAG_HOLDER_MIN_HEIGHT],
            extrapolate:'clamp'
        })

        const placeFlagHolderWidth = scrollY.interpolate({
            inputRange : [0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
            outputRange : [PLACE_FLAG_HOLDER_MAX_WIDTH, PLACE_FLAG_HOLDER_MIN_WIDTH],
            extrapolate:'clamp'
        })


        const placeFlagHolderMarginTop = scrollY.interpolate({
            inputRange : [0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
            outputRange : [ -61, 0],
            extrapolate:'clamp'
        })

        const shadow = theme == 'white' ? style.shadowLight : style.shadowDark


        const this_placeCountryMatch     = placeCountryMatch(place.name, place.country)
        const this_placeProvinceMatch    = placeProvinceMatch(place.name, place.province)
        const this_placeCountyMatch      = placeCountyMatch(place.name, place.county)
        const this_countyProvinceMatch   = countyProvinceMatch(place.county, place.province)


        const placeCounty  = (
            !this_placeProvinceMatch && !this_placeCountyMatch && !this_countyProvinceMatch && place.county != "" ?

                place.county + " |" 
            : null
        )

        const placeProvince = (
            !this_placeProvinceMatch && place.province != '' ?
                place.province + " |" 
            : null
        )

        const placeCountry = (
            place.country
        )

        const placeFullTitle  = (

            !this_placeCountryMatch ?  
             
                <Text style={[style.ci, styles.place, styles.placeCountry, {color:menuText}]}>{placeCounty}  {placeProvince} {placeCountry}</Text>
             
            : null

        )


        return (
            <View style={stylesProps}>



                <View style={styles.container}>

                    <Animated.View style={[styles.flagHolder, {height:placeFlagHolderHeight, width:placeFlagHolderWidth, marginTop:placeFlagHolderMarginTop}]} />

                    <Animated.View style={[styles.placeImageContainer, {height:placeImageHeight, width:placeImageWidth, marginTop:placeImageMarginTop}]}>
                        {/* <CardView style={[styles.placeImageContainerShadow]} cardElevation={7} cardMaxElevation={7} cornerRadius={10}> */}
                            <Image style={styles.placeImage} source={{uri : place.flag}} />
                        {/* </CardView> */}
                    </Animated.View>
                  
                

                    <View style={[styles.placeBox, {backgroundColor:Platform.select({android:headerColor})}]}>
                        <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={17} />   

                        <Text style={[style.mo, styles.place, styles.placeName, style.tidngz_color, shadow]}>{place.name}</Text>

                        {placeFullTitle}
                        
                    </View>

                </View>
          


                <Chose refresh={refresh}/>

                <ArticleOptions routeName='place' headerText={place.name}/>

    

            </View>
        )
    }
}



const styles = StyleSheet.create({
    container : {
        marginHorizontal : 0, 
        marginTop : HEADER_MAX_HEIGHT,
        // backgroundColor:'blue'
    },

    placeImageContainer : {
        position:'absolute',
        borderRadius : 3,
        borderBottomLeftRadius:0,
        overflow:'hidden',
        marginLeft: 20,
        borderColor:'rgba(0,0,0, 0.3)',
        borderWidth:.5,
    },
    placeImageContainerShadow:{
        height : '100%',
        width : '100%',
    },
    placeImage : {
        flex:1,
        height: null,
        width:null,
    },

    flagHolder : {
        backgroundColor:'rgba(84, 56, 13, 0.8)',
        borderColor:'#54380d',
        borderWidth:1,
        marginLeft: 20,
    },


    placeBox : {
        marginBottom:25,
        width : '100%',
        padding:10,
        borderWidth:1,
        borderColor:'rgba(23,23,23,.1)',
    },
  
   
    place : {
        // lineHeight : 22,
        width : '100%',
        // backgroundColor:'red',
        // marginTop: 5,
        textAlign:'center'
    },
    placeName:{
        // height:40,
        lineHeight:40,
        fontSize:25,
        letterSpacing:2.5,
        textTransform : 'uppercase',
        // backgroundColor:'red'
    },

    placeCountry : {
        fontSize:14,
        letterSpacing: 1.3,
        lineHeight:25,
        textTransform : 'uppercase',
        textShadowColor: 'rgba(0,0,0, 1)',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 1,
    },
    
    
})

export default withNavigation(connect(state, dispatch)(PlaceTitle));