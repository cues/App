import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text, Animated, Dimensions, TouchableOpacity} from 'react-native';
import style from '../../../Styles/Styles';
import BlurView from '../../../Components/BlurVIew/BlurVIew';
import Articles from '../../../Functions/Articles/ArticleList';
import  { withNavigation } from 'react-navigation'
import { _handleScroll } from '../../../Components/HeaderScroll/HeaderScroll'
import Follow from '../../../Functions/Place/Follow';
import moment from 'moment-timezone';
 
import {brand, model, models} from '../../../Components/DeviceInfo/DeviceInfo';


import { connect } from 'react-redux';
// import console = require('console');
// import { TouchableOpacity } from 'react-native-gesture-handler';

const state = state => {
    return {
        headerColor     :   state.themes.headerColor,
        tabBlur         :   state.themes.tabBlur,
        menuIconColor   :   state.themes.menuIconColor,
        menuText        :   state.themes.menuText,
        place           :   state.place.place,
    }
}

const dispatch = dispatch => {
    return {
        
    }
}

const HEADER_MAX_HEIGHT = models.includes(model) ? 100 : brand === 'Apple' ? 80 : 120 
const HEADER_MIN_HEIGHT = models.includes(model) ? 70 : brand === 'Apple' ? 55 : 40
const PROFILE_IMAGE_MAX_HEIGHT = 100
const PROFILE_IMAGE_MIN_HEIGHT = 50
const WIDTH = Dimensions.get('window').width;

class Header extends Component {

    constructor(props){
        super(props)

        const time  = moment.tz(this.props.place.timezone);
        const h     =   time.format("HH");
        const mm    =   time.format("mm");
        const s     =   time.format("ss");
        const a     =   time.format("a");
        const z     =   time.format("z");
        const d     =   time.format("dddd");
        const D     =   time.format("Do");
        const y     =   time.format("YYYY");
        const mmm   =   time.format("MMM");

        this.state = {
            scrollY     : new Animated.Value(0),
            viewWidthOld    : null,
            viewWidthNew    : null,
            viewActive      : false,
            displayHeader   : false,
            time    :   time,
            h       :   h,
            mm      :   mm,
            s       :   s,
            a       :   a,
            z       :   z,
            d       :   d,
            D       :   D,
            y       :   y,
            mmm     :   mmm,
        }
    }



    componentDidMount() {
       this.intervalId =  setInterval(() => {
            this.update_date()
           }, 1000);
    }

    componentWillUnMount() {
        clearInterval(this.intervalId);
    }

    update_date = () => {

        this.setState({
            time  : moment.tz(this.props.place.timezone)
        })

        const { time } = this.state;

        const h     =   time.format("HH");
        const mm    =   time.format("mm");
        const s     =   time.format("ss");
        const a     =   time.format("a");
        const z     =   time.format("z");
        const d     =   time.format("dddd");
        const D     =   time.format("Do");
        const y     =   time.format("YYYY");
        const mmm   =   time.format("MMM");

        this.setState({
            h       :   h,
            mm      :   mm,
            s       :   s,
            a       :   a,
            z       :   z,
            d       :   d,
            D       :   D,
            y       :   y,
            mmm     :   mmm,
        })
           
     }



    placeInfo = () => {

        const { place , menuIconColor } = this.props;

        return (
            <View style={styles.PlaceInfo}>

            </View>
        )
    }


    layout = event => {

        if(!this.state.viewActive){
            var {x, y, width, height} = event.nativeEvent.layout;

            // console.warn(width);

            this.setState({
                viewWidthNew : width + 23,
                viewWidthOld : WIDTH - 20,
                viewActive : true
            })
        }
       
    }


    handleMomentumScrollBegin = (event) => {
      
        this._previousScrollvalue = event.nativeEvent.contentOffset.y;

    };
        
  
    handleScroll = (event) => {

        this._currentScrollValue = event.nativeEvent.contentOffset.y;

        if (this._previousScrollvalue > this._currentScrollValue && this._currentScrollValue > HEADER_MAX_HEIGHT) { 
            this.setState({
                displayHeader:false
            })
          } else {
            this.setState({
                displayHeader:true
            })
          }

    };



    render (){

        const {tabBlur, place, menuText, headerColor, navigation} = this.props
        const {scrollY, viewWidthOld, viewWidthNew, displayHeader, time, h, mm, s, a, z, d, D, y, mmm} = this.state;



        const headerHeight = scrollY.interpolate({
            inputRange : [0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
            outputRange : [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            extrapolate:'clamp'
        })
    
        const header0 = scrollY.interpolate({
            inputRange : [1,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
            outputRange : [1,0],
            extrapolate:'clamp'
        })
    
        const header1 = scrollY.interpolate({
            inputRange : [0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
            outputRange : [0,1],
            extrapolate:'clamp'
        })



        const dateFontSize = scrollY.interpolate({
            inputRange : [0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
            outputRange : [19,0],
            extrapolate:'clamp'
        })
        const dateHeight = scrollY.interpolate({
            inputRange : [0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
            outputRange : [35,0],
            extrapolate:'clamp'
        })
        const dateBottom = scrollY.interpolate({
            inputRange : [0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
            outputRange : [65,20],
            extrapolate:'clamp'
        })



        const followCountFontSize = scrollY.interpolate({
            inputRange : [0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
            outputRange : [12,0],
            extrapolate:'clamp'
        })
        const followCountHeight = scrollY.interpolate({
            inputRange : [0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
            outputRange : [25,5],
            extrapolate:'clamp'
        })
        const followCountBottom = scrollY.interpolate({
            inputRange : [0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
            outputRange : [40, 10],
            extrapolate:'clamp'
        })



        const followFontSize = scrollY.interpolate({
            inputRange : [0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
            outputRange : [13,0],
            extrapolate:'clamp'
        })
        const followHeight = scrollY.interpolate({
            inputRange : [0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
            outputRange : [30,0],
            extrapolate:'clamp'
        })
        const followPadding = scrollY.interpolate({
            inputRange : [0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
            outputRange : [10,0],
            extrapolate:'clamp'
        })


       
        const headerTitle = scrollY.interpolate({
            inputRange : [HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT, 
                HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT+60],
            outputRange : [-40,0],
            extrapolate:'clamp'
        })


 



        const imageDimensionsHeight = scrollY.interpolate({
            inputRange : [HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT, 
                HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT+180],
            outputRange : [0,12],
            extrapolate:'clamp'
        })

        const imageDimensionsWidth = scrollY.interpolate({
            inputRange : [HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT, 
                HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT+180],
            outputRange : [0,18],
            extrapolate:'clamp'
        })


        const imageRight = scrollY.interpolate({
            inputRange : [HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT, 
                HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT+120],
            outputRange : [0,7],
            extrapolate:'clamp'
        })

        const imageRadius = scrollY.interpolate({
            inputRange : [HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT, 
                HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT+120],
            outputRange : [0,2],
            extrapolate:'clamp'
        })




        const placeFollowers = place.place_followers == 1 ? place.place_followers + '  FOLLOWER' : place.place_followers + '  FOLLOWERS'
        

        return (

            <View style={[styles.container]}>

                <Animated.View style={[styles.header, { height:headerHeight, zIndex:header1, opacity:header0 , backgroundColor:'transparent'}]}/>


                <Articles 
                    type = 'place'
                    scrollAnim = {scrollY}
                    handleScroll = {this.handleScroll}
                    onMomentumScrollBegin = {this.handleMomentumScrollBegin}
                />


                <Animated.View style= {[styles.headerBlur , { height:headerHeight, display:displayHeader ? 'flex' : 'none', opacity:header1, backgroundColor:Platform.select({android:headerColor})}]}>
                    <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={17} />   

                    <Animated.View onLayout = {this.layout} style={[styles.headerPlace_nameContainer, { bottom:headerTitle}]}>

                        <Animated.Image source={{uri:place.flag}} style={[styles.headerPlace_Image, {height:imageDimensionsHeight, width:imageDimensionsWidth, marginRight:imageRight, borderRadius: imageRadius}]}/>

                        <Animated.Text style={[style.ca, styles.headerPlace_Name, {color:menuText}]}>
                            {place.name} 
                        </Animated.Text>

                    </Animated.View>
                      
                </Animated.View>




                <Animated.View style={[styles.placeInfo, {height:headerHeight, zIndex:header1, opacity:header0}]}>

                    <Animated.Text style={[style.ma, styles.date, {bottom:dateBottom, height:dateHeight, fontSize:dateFontSize, color:menuText}]}>{h} : {mm} : {s}</Animated.Text>

                    <Animated.Text style={[style.ma, styles.followCount, {bottom:followCountBottom, height:followCountHeight, fontSize:followCountFontSize, color:menuText}]}>{placeFollowers}</Animated.Text>

                    <View style={styles.followButton}>
                        <Follow  place={place} height={followHeight} fontSize={followFontSize} padding={followPadding}/>
                    </View>

                </Animated.View>

               

            </View>


        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
    },
    placeInfo : {
        position:'absolute',
        // height:HEADER_MAX_HEIGHT,
        // backgroundColor:'blue',
        right : 0, 
        width:150,
    },
    date : {
        // height : 35,
        // fontSize:19,
        textAlign:'center',
        // backgroundColor:'red',
        paddingHorizontal:10,
        right : 0,
        letterSpacing:1,
        // bottom:65,
        position:'absolute',
    },
    followCount : {
        position:'absolute', 
        right : 10,
        // bottom:40,
        // height : 25,
        // fontSize : 12,
        letterSpacing:0,
        // backgroundColor:'red',
        textAlign:'right'
    },
    followButton : {
        position:'absolute',
        right : 0, 
        bottom:10,
        justifyContent:'center',
        // backgroundColor:'red',
        // height : 50,
        paddingRight: 10, 
    },


    headerBlur : {
        height: '100%',
        width: '100%',
        position : 'absolute',
        top:0,
        left:0,
        right:0,
        alignItems:'center',
        overflow:'hidden',     
        borderBottomWidth:1,
        borderColor:'rgba(23,23,23,.1)',     
    },
    header: {
        opacity: 1,
          position : 'absolute',
          top:0,
          left:0,
          right:0,
          alignItems:'center',
        //   borderBottomWidth:1,
        //   borderColor:'rgba(23,23,23,.1)',
          overflow:'hidden',  
    },
    headerPlace_nameContainer : {
        position:'absolute',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'blue',
        // marginBottom:0,
    },
    headerPlace_Image : {
        // height : 20,
        // width : 20,
        // position:'absolute',
        // left: -20,
    },
    headerPlace_Name : {
        height: 40,
        lineHeight: 40,
        // alignSelf:'center',
        // textAlignVertical:'center',
        // alignItems:'center',
        letterSpacing:.9,
        fontSize:14,
        textTransform : 'uppercase',
        textAlign:'center',
        // backgroundColor:'red'
    },



})


export default withNavigation(connect(state)(Header));