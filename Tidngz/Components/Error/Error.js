import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, StatusBar, Platform} from 'react-native';
import style from '../../Styles/Styles';
import BlurView from '../../Components/BlurVIew/BlurVIew';
import * as Animatable from 'react-native-animatable';


import { connect } from 'react-redux';
import { loginError_2 } from '../../Store/Actions/index'

const state = state => {
    return {
        tabBlur          :   state.themes.tabBlur,
        error            :   state.main.error,
        errorReason      :   state.main.errorReason,
        menuIconColor    :   state.themes.menuIconColor,
        theme             :   state.themes.theme,
    }
}



class Error extends Component {



    render (){
        const {type = 1, error, tabBlur, errorReason, menuIconColor} = this.props

        const display = error ? 'flex' : 'none';
        let slideError = error ? 'slideInDown' : 'slideOutUp';

        const top = type == 2 ? styles.containerTop : ''

        const absolute = display == 'flex' ? styles.containerAbsolute : null

        if(error){
            Platform.OS == 'android' ? StatusBar.setBackgroundColor('rgba(255,0,0,1)', true) : null
            StatusBar.setBarStyle('light-content')
        }else{
            value = this.props.theme == 'white' ? 1 : 0

            if(value == 0){
                Platform.OS == 'android' ? StatusBar.setBackgroundColor('rgba(23,23,23,1)', true) : null
                StatusBar.setBarStyle('light-content')
            }else{
                Platform.OS == 'android' ? StatusBar.setBackgroundColor('rgba(255,255,255,1)', true) : null
                StatusBar.setBarStyle('dark-content')
            }
        }

        return (
            <View style={[styles.container, top, absolute, {display:display}]}>
                <Animatable.View  animation={slideError} duration={500} style={[styles.loginError]}>
                {/* <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={10} />                   */}
                    <Text style={[style.la, styles.loginErrorText]}>{errorReason}</Text>
                </Animatable.View>
            </View>
          
        )
    }
}


const styles = StyleSheet.create({
    container : {
        // height : 100,
        // backgroundColor : 'red',
        // zIndex : 100000,

        height : HEADER_HEIGHT,
        width:'100%',
        left:0,
    },
    containerAbsolute : {
        position:'absolute',
    },
    containerTop : {
        top: 0
    },

    loginError : {
        // position:'absolute',
        height : '100%',
        width:'100%',
        // top:0,
        backgroundColor:'rgba(255,0,0,1)',
    },
    
    loginErrorText:{
        color:'rgba(0,0,0,1)',
        fontSize:13,
        width:'100%',
        height:HEADER_HEIGHT - MARGIN_TOP,
        lineHeight:HEADER_HEIGHT - MARGIN_TOP,
        position:'absolute',
        bottom:0,
        left:0,
        textAlign:'center',
        letterSpacing:1,
        textShadowColor: 'rgba(0,0,0,1)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius:1
    },
})


export default connect(state)(Error);