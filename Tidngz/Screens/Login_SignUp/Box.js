import React, {Component} from 'react';
import {Platform, StyleSheet, View, TextInput, Text, ImageBackground, KeyboardAvoidingView} from 'react-native';
import style from '../../Styles/Styles';
import BlurView from '../../Components/BlurVIew/BlurVIew';
import LoginImage  from '../../assets/Images/tidngz-135.png';
import SignUpImage  from '../../assets/Images/tidngz-141.png';
import ForgotImage  from '../../assets/Images/tidngz-176.png';
import TermsImage  from '../../assets/Images/tidngz-129.png';
import ActivateImage  from '../../assets/Images/tidngz-123.png';

import { connect } from 'react-redux';

const state = state => {
    return {
        tabBlur          :   state.themes.tabBlur,
        headerColor      :   state.themes.headerColor
    }
}

const dispatch = dispatch => {
    return {
        
    }
}

class Box extends Component {


    render (){

     const {tabBlur, headerColor, theme} = this.props

     const image =  theme == 'login' ? LoginImage : 
                    theme == 'signUp' ? SignUpImage : 
                    theme == 'forgotPassword' ? ForgotImage : 
                    theme == 'activate' ? ActivateImage : 
                    theme == 'terms' || theme == 'privacy' ? TermsImage : null

        return (
            <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : null}
            keyboardVerticalOffset={Platform.OS === "ios" ? -300 : 0}
            style={[styles.container]}>

                <ImageBackground source={image} style={[style.absolute]}></ImageBackground>

                <View style={[style.absolute, {opacity:Platform.select({android:.8}) , backgroundColor:Platform.select({android:headerColor})} ]}>
                    <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={50} />                  
                </View>

                <View style={[styles.loginContainer]}>
                    {this.props.children}
                </View>
            </KeyboardAvoidingView>
        )
    }
}


const styles = StyleSheet.create({
    container : {
        flex:1,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginContainer:{
        overflow:'hidden',
        // height:300,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        // borderRadius : 7,
        // borderWidth:1,
        borderColor:'rgba(177,177,177,1)',
    }
})


export default connect(state)(Box);