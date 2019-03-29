import React, {Component} from 'react';
import {StyleSheet, Platform, Animated, Image, View, Text, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import BlurView from '../../Components/BlurVIew/BlurVIew';
import {brand, model, models} from '../../Components/DeviceInfo/DeviceInfo';
import { withNavigation } from 'react-navigation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import style from '../../Styles/Styles'

import { connect } from 'react-redux';

const state = state => {
    return {
        tabBlur          :   state.themes.tabBlur,
        headerIcons      :   state.themes.headerIcons,
        headerColor      :   state.themes.headerColor
    }
}

FLOAT_HEADER_MAX_HEIGHT = models.includes(model) ? 88 : brand === 'Apple' ? 44 : 50 
FLOAT_HEADER_MIN_HEIGHT = models.includes(model) ? 70 : brand === 'Apple' ? 26 : 40

class Header extends Component {


  
    
    render (){
        const {tabBlur, headerColor, headerIcons , scrollAnim, offsetAnim, navigation} = this.props

        const name = navigation.getParam('name')

        const type = navigation.getParam('type' , 0)

        
        const translateY = Animated.add(scrollAnim, offsetAnim).interpolate({
        inputRange: [0, HOME_HEADER_MAX_HEIGHT],
        outputRange: [0, -HOME_HEADER_MIN_HEIGHT],
        extrapolate: 'clamp'
        });

        const headerIconsOpacity = Animated.add(scrollAnim, offsetAnim).interpolate({
            inputRange : [1,HOME_HEADER_MAX_HEIGHT],
            outputRange : [1,0],
            extrapolate:'clamp'
        })


          const AnimatedMaterialIcons = Animatable.createAnimatableComponent(MaterialIcons)

        return (
            <Animated.View style= {[styles.header , {transform: [{translateY}]  , backgroundColor:Platform.select({android:headerColor})}]}>
                    <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={17} />  

                    <Animated.View style={[styles.headerIcons, {opacity: headerIconsOpacity}]}>

                        <TouchableOpacity style={[styles.headerLeft]} onPress = {() => navigation.goBack()}>
                                <MaterialIcons style={{textAlign:'center', lineHeight:47}} name="keyboard-arrow-left"  color={headerIcons} size={25}/>
                        </TouchableOpacity>

                        <Animatable.View animation="lightSpeedIn" duration={1000} style={[styles.headerTitle]}>
                            <Text style={[style.mo,styles.headerTitleText]}>{name}</Text>
                        </Animatable.View>

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
          borderColor:'rgba(23,23,23,.1)',
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

    },
    headerTitleText:{
        height:'100%',
        width:'100%',
        color:'rgba(15,101,141,1)',
        fontSize:18,
        letterSpacing:1.4,
        lineHeight:44, 
        // minWidth:240,
        textShadowColor: 'rgba(0,0,0, .4)',
        textShadowOffset: {width: 1, height: -0},
        textShadowRadius: 1,
        fontWeight:Platform.select({android:'200', ios:'bold'}),
        textAlign:'center',
        alignSelf: "center", 
    },
    headerLeft:{
        width: 40,
        marginLeft: 5,
        lineHeight : 47
        // backgroundColor:'red'
    },
})


export default withNavigation(connect(state)(Header));