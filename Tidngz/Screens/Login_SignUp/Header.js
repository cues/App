import React, {Component} from 'react';
import {StyleSheet, StatusBar, Platform, Animated, Image, Text, View, TouchableOpacity} from 'react-native';
import BlurView from '../../Components/BlurVIew/BlurVIew';
import {brand, model, models} from '../../Components/DeviceInfo/DeviceInfo';
import { withNavigation } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import style from '../../Styles/Styles';
import * as Animatable from 'react-native-animatable';

import { connect } from 'react-redux';
import { loginError_2 } from '../../Store/Actions/index'

const state = state => {
    return {
        tabBlur          :   state.themes.tabBlur,
        headerColor      :   state.themes.headerColor,
        loginRoute       :   state.login.loginRoute,
        error             :   state.login.error,
        errorReason       :   state.login.errorReason,
        LoggedIn        : state.main.LoggedIn,
    }
}

const dispatch = dispatch => {
    return {
        this_loginError_2     :   ()      =>  dispatch(loginError_2())
    }
}


HEADER_HEIGHT = models.includes(model) ? 88 : 65
MARGIN_TOP = models.includes(model) ? 40 : brand == 'Apple' ? 25 : 15
CLOSE = models.includes(model) ? 0 : -5



class Header extends Component {


    render(){
        const {tabBlur, headerColor , navigation, loginRoute, error, errorReason, LoggedIn} = this.props

        const { routes , index  }  = navigation.state;

    
        let slideError = error ? 'slideInDown' : 'slideOutUp';

        if(error){
            setTimeout(() => {
                this.props.this_loginError_2();
            },3000)
        }
        

        const close = (
            routes[index].key == 'Terms' || routes[index].key == 'Privacy' ? 
                <TouchableOpacity style={[styles.close]} onPress={() => navigation.navigate(loginRoute, {statusBar : true})}>
                        {/* <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={50} />                   */}
                        <MaterialIcons style={styles.closeIcon} name='close' size={27} color={Platform.select({android:'rgba(240,240,240,.7)', ios: 'rgba(17,17,17,1)'})}/>
                </TouchableOpacity>
            : null
        )

        return (

                <View style= {[styles.header ]}>

                    <View style={[styles.headerIcons]}>
                        <Image style={styles.headerTitle} resizeMode={'cover'} source = {{uri : 'https://www.wedngz.com/Tidngz/User_Images/tidngz.png'}}/>
                    </View>

                    {close}

                    <Animatable.View  animation={slideError} duration={1000} style={[styles.loginError]}>
                        <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={10} />                  
                        <Text style={[style.la, styles.loginErrorText]}>{errorReason}</Text>
                    </Animatable.View>

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
        // backgroundColor:'red',
        // borderBottomWidth:1,
        // borderBottomColor:'rgba(23,23,23,.1)',
        overflow:'hidden',
        height : HEADER_HEIGHT ,
    },
    loginError : {
        position:'absolute',
        height : HEADER_HEIGHT,
        width:'100%',
        // top:0,
        left:0,
        backgroundColor:'rgba(255,0,0,.3)',
    },
    loginErrorText:{
        fontSize:14,
        width:'100%',
        height:HEADER_HEIGHT - MARGIN_TOP,
        lineHeight:HEADER_HEIGHT - MARGIN_TOP,
        position:'absolute',
        bottom:0,
        left:0,
        textAlign:'center',
        color:'rgba(255,255,255,.9)',
        letterSpacing:1,
        textShadowColor: 'rgba(0,0,0,.9)',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius:3
    },
    headerIcons : {
        marginTop: MARGIN_TOP,
        width:'100%',
        height : HEADER_HEIGHT - MARGIN_TOP,
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

    close : {
        height : 70,
        width:70,
        position:'absolute',
        right: CLOSE,
        top: CLOSE,
        // backgroundColor:'black',
        borderRadius:35,
        overflow:'hidden'
    },
    closeIcon : {
        lineHeight: 70,
        width:70,
        textAlign:'center',
        fontWeight:'bold',
        textShadowColor: 'rgba(255,255,255 ,1)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius:Platform.select({ios: 20})
    }
 
})


export default withNavigation(connect(state, dispatch)(Header));