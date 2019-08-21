import React, {Component} from 'react';
import {StyleSheet, Platform, Animated, Image, View, Text, TouchableOpacity} from 'react-native';
import BlurView from '../../Components/BlurVIew/BlurVIew';
import {brand, model, models} from '../../Components/DeviceInfo/DeviceInfo';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { withNavigation } from 'react-navigation'

import { connect } from 'react-redux';

const state = state => {
    return {
        tabBlur          :   state.themes.tabBlur,
        headerColor      :   state.themes.headerColor,
        headerIcons      :   state.themes.headerIcons,
    }
}



class Header extends Component {


    render (){
        const {tabBlur, headerColor , headerIcons,  scrollAnim, offsetAnim, navigation} = this.props

        const name = navigation.getParam('name')

        // const headerHeight = this.props.scrollAnim.interpolate({
        //     inputRange : [0,HOME_HEADER_MAX_HEIGHT],
        //     outputRange : [HOME_HEADER_MAX_HEIGHT, HOME_HEADER_MAX_HEIGHT],
        //     extrapolate:'clamp'
        // })

        // const HOME_HEADER_ICONS = HOME_HEADER_MAX_HEIGHT - (models.includes(model) ? 40 : 20)

        const headerIconsOpacity = Animated.add(scrollAnim, offsetAnim).interpolate({
            inputRange : [1,HOME_HEADER_MAX_HEIGHT],
            outputRange : [1,0],
            extrapolate:'clamp'
        })


        const translateY = Animated.add(scrollAnim, offsetAnim).interpolate({
            inputRange: [0, HOME_HEADER_MAX_HEIGHT],
            outputRange: [0, -HOME_HEADER_MIN_HEIGHT],
            extrapolate: 'clamp'
          });


        return (
            <Animated.View style= {[styles.header , { transform: [{translateY}] ,  backgroundColor:Platform.select({android:headerColor}) }]}>
                    <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={17} />  

                    <Animated.View style={[styles.headerIcons, {opacity: headerIconsOpacity}]}>

                        <TouchableOpacity style={[styles.headerLeft]} onPress = {() => navigation.goBack()}>
                            <MaterialIcons style={{lineHeight : 47, textAlign:'center'}} name="keyboard-arrow-left" size={25} color={headerIcons} />
                        </TouchableOpacity>

                        <Text style={[styles.headerTitle]}>{name}</Text>

                    </Animated.View>
     
            </Animated.View>
        )
    }
}


const styles = StyleSheet.create({
    header: {
          position : 'absolute',
          top:0,
          left:0,
          right:0,
          alignItems:'center',
          borderBottomWidth:1,
          borderBottomColor:'rgba(23,23,23,.1)',
          overflow:'hidden', 
        // backgroundColor:'red',

        // marginTop : getStatusBarHeight(),
    },
    headerIcons : {
        marginTop: models.includes(model) ? 40 : brand === 'Apple' ? 16 : 7,
        width:'100%',
        flexDirection : 'row',
        justifyContent:'space-between'
    },
    headerTitle : {
        position:'absolute',
        top:0,
        left:50,
        right:50,
        bottom:0,
        lineHeight : 44,
        // minWidth:240,
        // backgroundColor:'red',
        fontFamily :'Monoton-Regular',
        fontWeight:Platform.select({android:'200'}),
        textAlign:'center',
        alignSelf: "center", 
        flexGrow:1,
        color:'rgba(15,101,141,1)',
        textShadowColor: 'rgba(23,23,23, 1)',
        textShadowOffset: {width: 1, height: -0},
        textShadowRadius: 1,
        fontSize : 18,
        letterSpacing : 1.4
        // backgroundColor:'blue'
    },
    headerLeft:{
        width: 40,
        marginLeft: 5,
        lineHeight : 47
        // backgroundColor:'red'
    },
})


export default withNavigation(connect(state)(Header));