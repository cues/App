import React ,{Component} from 'react';
import { Platform , View , StyleSheet} from 'react-native';
import { BlurView, VibrancyView } from 'react-native-blur';
  
import { connect } from 'react-redux';

const state = state => {
    return {
        tabBlur          :   state.themes.tabBlur,
        headerColor      :   state.themes.headerColor
    }
}


const blur = props => {
    const {headerColor} = props;
    const blur_view = Platform.select({ios: <BlurView  style={styles.blurView} {...props} /> , android : <View  style={styles.blurView} {...props} />})
    return blur_view;
}

const styles = StyleSheet.create({
    blurView:{
        width:'100%', 
        height:'100%', 
        position: 'absolute',
        right: 0,
        left: 0,
        bottom:0, 
        top:0,
        backgroundColor:'transparent'
    },
});
export default connect(state)(blur);