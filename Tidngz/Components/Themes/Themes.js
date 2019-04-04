import React from 'react';
import {Platform, View, ImageBackground} from 'react-native';
import BlurView from '../BlurVIew/BlurVIew';
import image  from '../../assets/Images/tidngz-137.png';


import { connect } from 'react-redux';

const state = state => {
    return {
        tabBlur                 :   state.themes.tabBlur,
    }
}

const themes = props => {
    let {tabBlur} = props

    tabBlur = tabBlur == 'xlight' ? 'light' : 'extraDark'

    const display = ( 
        Platform.OS == 'ios' ? 
            <View style={{width: '100%', height:'100%', position:'absolute', display:'none'}}>
                <ImageBackground source={{uri:'http://www.wedngz.com/Tidngz/Images/tidngz-135.png'}} style={{width: '100%', height:'100%', position:'absolute'}}></ImageBackground>
                <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={17} />  
            </View>
        : null 
    )

     return display
}

export default connect(state)(themes);