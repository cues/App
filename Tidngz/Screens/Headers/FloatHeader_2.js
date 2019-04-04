import React, {Component} from 'react';
import {StyleSheet, Platform, Animated, Image, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import * as Animatable from 'react-native-animatable';
import BlurView from '../../Components/BlurVIew/BlurVIew';
import {brand, model, models} from '../../Components/DeviceInfo/DeviceInfo';
import { withNavigation } from 'react-navigation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import style from '../../Styles/Styles'
import ArticleOptions from '../../Functions/Options/Article_Options/Article_Options';

import { connect } from 'react-redux';

const state = state => {
    return {
        tabBlur          :   state.themes.tabBlur,
        headerIcons      :   state.themes.headerIcons,
        headerColor      :   state.themes.headerColor
    }
}

// FLOAT_HEADER_MAX_HEIGHT = models.includes(model) ? 88 : brand === 'Apple' ? 44 : 50 
// FLOAT_HEADER_MIN_HEIGHT = models.includes(model) ? 70 : brand === 'Apple' ? 26 : 40


const WIDTH = Dimensions.get('window').width;

class Header extends Component {


  
    
    render (){
        const {tabBlur, headerColor, headerIcons , scrollAnim, offsetAnim, navigation} = this.props

        const name = navigation.getParam('name')

        const routeName = navigation.getParam('routeName' , 0)

        const headerText = navigation.getParam('headerText' , 0)




        const headerTitle = (
                routeName  == 'home' ? 
                    <Image style={styles.headerTitleLogo} resizeMode={'cover'} source = {{uri : 'https://www.wedngz.com/Tidngz/User_Images/tidngz.png'}}/>
                :
                    <View style={styles.headerTitle}>
                            <Text style={[style.ca,styles.headerTitleText]}>{headerText}</Text>
                    </View> 
            
        )
        
        const translateY = Animated.add(scrollAnim, offsetAnim).interpolate({
            inputRange: [0, FLOAT_HEADER_MAX_HEIGHT],
            outputRange: [0, -FLOAT_HEADER_MIN_HEIGHT],
            extrapolate: 'clamp'
        });

        const headerIconsOpacity = Animated.add(scrollAnim, offsetAnim).interpolate({
            inputRange : [1,FLOAT_HEADER_MAX_HEIGHT],
            outputRange : [1,0],
            extrapolate:'clamp'
        })


          const AnimatedMaterialIcons = Animatable.createAnimatableComponent(MaterialIcons)

        return (
            // <View styles={styles.header}>
                   
                    <Animated.View style= {[styles.header , {transform: [{translateY}]  , backgroundColor:Platform.select({android:headerColor})}]}>
                            <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={17} />  

                            <Animated.View style={[styles.headerIcons, {opacity: headerIconsOpacity}]}>

                                <TouchableOpacity style={[styles.headerLeft]} onPress = {() => navigation.goBack()}>
                                        <MaterialIcons style={{textAlign:'center', lineHeight:47}} name="keyboard-arrow-left"  color={headerIcons} size={25}/>
                                </TouchableOpacity>

                            {headerTitle}

                                <View style={styles.headerRight}/>

                            </Animated.View>

                            <Animated.View style={[styles.headerOptions, {opacity: headerIconsOpacity}]}>
                                 <ArticleOptions type={1}/>
                            </Animated.View>
        
                    </Animated.View>


        // </View>
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
    headerOptions : {
        width:WIDTH + 20,
        justifyContent:'center',
    },


    headerIcons : {
        marginTop: models.includes(model) ? 40 : brand === 'Apple' ? 16 : 7,
        width:'100%',
        flexDirection : 'row',
        justifyContent:'space-between',
        // backgroundColor:'red',
    },
    
    headerTitleLogo : {
        height: '100%',
        width: 55,
        alignSelf: "center", 
        marginLeft: "auto", 
        marginRight: "auto",
        // backgroundColor:'blue'
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
        fontSize:15,
        letterSpacing:1,
        lineHeight:44, 
        // minWidth:240,
        textShadowColor: 'rgba(0,0,0, .4)',
        textShadowOffset: {width: 1, height: -0},
        textShadowRadius: 1,
        fontWeight:Platform.select({android:'200', ios:'bold'}),
        textAlign:'center',
        alignSelf: "center", 
        textTransform : 'uppercase'
    },
    headerLeft:{
        width: 40,
        marginLeft: 5,
        lineHeight : 47
        // backgroundColor:'red'
    },
    headerRight:{
        width: 40,
        marginRight: 5,
        lineHeight : 47
        // backgroundColor:'red'
    },
})


export default withNavigation(connect(state)(Header));