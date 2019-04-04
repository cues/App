import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text, Animated, Dimensions} from 'react-native';
import style from '../../../Styles/Styles';
import BlurView from '../../../Components/BlurVIew/BlurVIew';
import ProfileContainer from '../../../Functions/Profile/Profile';

import {brand, model, models} from '../../../Components/DeviceInfo/DeviceInfo';


import { connect } from 'react-redux';

const state = state => {
    return {
        headerColor     :   state.themes.headerColor,
        tabBlur         :   state.themes.tabBlur,
        menuIconColor   :   state.themes.menuIconColor,
        user            :   state.main.user,
    }
}

const dispatch = dispatch => {
    return {
        
    }
}

const HEADER_MAX_HEIGHT = models.includes(model) ? 100 : brand === 'Apple' ? 80 : 70 
const HEADER_MIN_HEIGHT = models.includes(model) ? 70 : brand === 'Apple' ? 55 : 40
const PROFILE_IMAGE_MAX_HEIGHT = 100
const PROFILE_IMAGE_MIN_HEIGHT = 50
const WIDTH = Dimensions.get('window').width;

class Header extends Component {

    state = {
        user : [{
            key : '1',
            user_image : this.props.user.user_image,
            user_name : this.props.user.user_name
        }],
        scrollY : new Animated.Value(0),
        viewWidthOld : null,
        viewWidthNew : null,
        viewActive : false
    }


    userInfo = () => {

        const { user , menuIconColor } = this.props;

        return (
            <View style={styles.userInfo}>
                <View style={styles.Each_userInfo}>
                    <Text style={[styles.Each_userInfoText, style.ca, {color:menuIconColor}]}>Followers</Text>
                    <Text style={[styles.Each_userInfoText, styles.Each_userInfoTextCount, style.ca, {color:menuIconColor}]}>{user.user_followers}</Text>
                </View>
                <View style={styles.Each_userInfo}>
                    <Text style={[styles.Each_userInfoText, style.ca, {color:menuIconColor}]}>Posts</Text>
                    <Text style={[styles.Each_userInfoText, styles.Each_userInfoTextCount, style.ca, {color:menuIconColor}]}>{user.user_posts}</Text>
                </View>
                <View style={styles.Each_userInfo}>
                    <Text style={[styles.Each_userInfoText, style.ca, {color:menuIconColor}]}>Following</Text>
                    <Text style={[styles.Each_userInfoText, styles.Each_userInfoTextCount, style.ca, {color:menuIconColor}]}>{user.user_following}</Text>
                </View>
            </View>
        )
    }


    layout = event => {

        if(!this.state.viewActive){
            var {x, y, width, height} = event.nativeEvent.layout;

            this.setState({
                viewWidthNew : width,
                viewWidthOld : WIDTH - 20,
                viewActive : true
            })
        }
       
    }

    render (){

        const {tabBlur, user, menuIconColor, headerColor} = this.props
        const {scrollY, viewWidthOld, viewWidthNew} = this.state;
    
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
       
        const headerTitle = scrollY.interpolate({
            inputRange : [0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT, 
                HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT+2+PROFILE_IMAGE_MIN_HEIGHT, 
                HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT+2+PROFILE_IMAGE_MIN_HEIGHT+40],
            outputRange : [-40,-40,-40,0],
            extrapolate:'clamp'
        })


        const headerMove = scrollY.interpolate({
            inputRange : [0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT, 
                HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT+2+PROFILE_IMAGE_MIN_HEIGHT, 
                HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT+2+PROFILE_IMAGE_MIN_HEIGHT+40, 
                HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT+2+PROFILE_IMAGE_MIN_HEIGHT+100],
            outputRange : [viewWidthOld, viewWidthOld, viewWidthOld, viewWidthOld, viewWidthNew],
            extrapolate:'clamp'
        })

        const headerFont = scrollY.interpolate({
            inputRange : [0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT, 
                HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT+2+PROFILE_IMAGE_MIN_HEIGHT, 
                HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT+2+PROFILE_IMAGE_MIN_HEIGHT+40, 
                HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT+2+PROFILE_IMAGE_MIN_HEIGHT+70, 
                HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT+2+PROFILE_IMAGE_MIN_HEIGHT+100],
            outputRange : [15, 19, 19, 19, 17, 15],
            extrapolate:'clamp'
        })


        const imageDimensions = scrollY.interpolate({
            inputRange : [0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT,
                HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT+2+PROFILE_IMAGE_MIN_HEIGHT+40, 
                HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT+2+PROFILE_IMAGE_MIN_HEIGHT+100],
            outputRange : [0,0,0,20],
            extrapolate:'clamp'
        })


        const userInfo = this.userInfo();
                  

        return (

            <View style={[styles.container]}>

                <Animated.View style={[styles.header, { height:headerHeight, zIndex:header1, opacity:header0 , backgroundColor:Platform.select({android:headerColor})}]}>
                    <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={17} />   
                    {userInfo}
                </Animated.View>


                <ProfileContainer scrollY={scrollY}/>

                <Animated.View style= {[styles.headerBlur , { height:headerHeight, opacity:header1 , backgroundColor:Platform.select({android:headerColor})}]}>
                    <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={17} />   

                    <Animated.View onLayout = {this.layout} style={[styles.headerUser_nameContainer, {width:headerMove, bottom:headerTitle}]}>

                        <Animated.Image source={{uri:user.user_image}} style={[styles.headerUser_Image, {height:imageDimensions, width:imageDimensions}]}/>

                        <Animated.Text style={[style.ca, styles.headerUser_Name, {fontSize :headerFont, color:menuIconColor}]}>
                            {user.user_name} 
                        </Animated.Text>

                    </Animated.View>
                      
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
          borderBottomWidth:1,
          borderColor:'rgba(23,23,23,.1)',
          overflow:'hidden',  
    },
    headerUser_nameContainer : {
        position:'absolute',
        flexDirection:'row',
        // backgroundColor:'red',

    },
    headerUser_Image : {
        // height : 20,
        // width : 20,
        borderRadius: 10,
        position:'absolute',
        top:5,
        left: -30
    },
    headerUser_Name : {
        height: 30,
        lineHeight: 30,
        fontSize : 15,
        letterSpacing:1,
        color: 'black',
        textTransform : 'uppercase',
        textAlign:'left'
    },

    userInfo : {
        height : 44,
        width: WIDTH - 100,
        position:'absolute',
        right:0,
        bottom:5,
        justifyContent:'space-evenly',
        flexDirection:'row'
    },
    Each_userInfo : {
        marginHorizontal : 10,
        height: '100%',
        width:70,
        // flexDirection:'c'
    },
    Each_userInfoText : {
        lineHeight:20,
        height : '50%',
        width: '100%',
        fontSize : 17,
        textAlign : 'center',
        letterSpacing : .7
    },
    Each_userInfoTextCount : {
        lineHeight:24,
        fontSize : 19,
        letterSpacing : 1
    }
})


export default connect(state)(Header);