import React, {Component} from 'react';
import {StyleSheet, Platform, Animated, Image, View} from 'react-native';
import HeaderIcons from './HeaderIcons';
import BlurView from '../../../Components/BlurVIew/BlurVIew';
import {brand, model, models} from '../../../Components/DeviceInfo/DeviceInfo';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { connect } from 'react-redux';

const state = state => {
    return {
        tabBlur          :   state.themes.tabBlur,
        headerColor      :   state.themes.headerColor
    }
}



class Header extends Component {


    render (){
        const {tabBlur, headerColor , scrollAnim, offsetAnim} = this.props


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
                        <HeaderIcons type='Home' position='Left'/>
                        <Image style={styles.headerTitle} resizeMode={'cover'} source = {{uri : 'https://www.wedngz.com/Tidngz/User_Images/tidngz.png'}}/>
                        <HeaderIcons type='Home' position='Right' />
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
        marginTop: models.includes(model) ? 38 : brand === 'Apple' ? 16 : 7,
        width:'100%',
        // backgroundColor:'red',
        flexDirection : 'row',
        justifyContent:'space-between'
    },
    headerTitle : {
        height: '100%',
        width: 55,
        alignSelf: "center", 
        marginLeft: "auto", 
        marginRight: "auto",
        // backgroundColor:'blue'
    },
})


export default connect(state)(Header);