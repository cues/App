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

    const display = Platform.OS == 'ios' ? 'flex' : 'none'

     return (
        <View style={{width: '100%', height:'100%', position:'absolute', display:display}}>
            <ImageBackground source={{uri:'http://www.wedngz.com/Tidngz/Images/tidngz-107.png'}} style={{width: '100%', height:'100%', position:'absolute'}}></ImageBackground>
            <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={17} />  
        </View>

    )
}

export default connect(state)(themes);