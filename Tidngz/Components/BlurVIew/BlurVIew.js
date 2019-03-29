import React ,{Component} from 'react';
import { Platform , View , StyleSheet} from 'react-native';
import { BlurView, VibrancyView } from 'react-native-blur';
  

const blur = props => {
    const blur_view = Platform.select({ios: <BlurView  style={styles.blurView} {...props} /> , android : <View  style={styles.blurView} {...props}/>})
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
export default blur;