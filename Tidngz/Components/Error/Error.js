import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
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
    }
}



class Error extends Component {

    render (){
        const {error, tabBlur, errorReason, menuIconColor} = this.props

        let slideError = error ? 'bounceIn' : 'slideOutUp';

        return (
            <Animatable.View  animation={slideError} duration={1500} style={[styles.loginError]}>
                {/* <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={10} />                   */}
                <Text style={[style.la, styles.loginErrorText, {color:menuIconColor}]}>{errorReason}</Text>
            </Animatable.View>
        )
    }
}


const styles = StyleSheet.create({
    container : {
        height : 100,
        backgroundColor : 'red',
        zIndex : 100000,
    },

    loginError : {
        position:'absolute',
        height : HEADER_HEIGHT,
        width:'100%',
        // top:0,
        left:0,
        backgroundColor:'rgba(255,0,0,1)',
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
        letterSpacing:1,
        textShadowColor: 'rgba(0,0,0,.9)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius:1
    },
})


export default connect(state)(Error);