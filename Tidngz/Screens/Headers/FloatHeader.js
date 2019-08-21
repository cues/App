import React, {Component} from 'react';
import {StyleSheet, Platform, Animated, Image, View, Text, TouchableOpacity} from 'react-native';
import BlurView from '../../Components/BlurVIew/BlurVIew';
import {brand, model, models} from '../../Components/DeviceInfo/DeviceInfo';
import GoBack from './goBack';
import { withNavigation } from 'react-navigation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import { connect } from 'react-redux';

const state = state => {
    return {
        tabBlur          :   state.themes.tabBlur,
        headerIcons      :   state.themes.headerIcons,
        headerColor      :   state.themes.headerColor
    }
}



class Header extends Component {


    render (){
        const {tabBlur, headerColor, headerIcons , scrollAnim, offsetAnim, navigation} = this.props

        const name = navigation.getParam('name')

        const type = navigation.getParam('type' , 0)

        // const fontSize      = type == 'options' ? 17 : 18 
        // const letterSpacing = type == 'options' ? 1.3 : 1.4


        const HEADER_HEIGHT = models.includes(model) ? 88 : brand === 'Apple' ? 64 : 50 


        return (
            <View style= {[styles.header , {height:HEADER_HEIGHT , backgroundColor:Platform.select({android:headerColor})}]}>
                    <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={17} />  

                    <View style={[styles.headerIcons]}>

                        <TouchableOpacity style={[styles.headerLeft]} onPress = {() => navigation.goBack()}>
                            <MaterialIcons style={{lineHeight : 47, textAlign:'center'}} name="keyboard-arrow-left" size={25} color={headerIcons} />
                        </TouchableOpacity>

                        <Text style={[styles.headerTitle]}>{name}</Text>

                    </View>
     

            </View>
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
        // textShadowColor: 'rgba(102,102,102, 1)',
        // textShadowColor: 'rgba(0,0,0, .4)',
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