import React , {Component}from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Image} from 'react-native';
import style from '../../Styles/Styles'

const profilePic = props => {

    const { styleImage , image , styleInitial , styleInitialText , initial } = props;

    const pic = image != ''  ? <Image style={styleImage} source={{uri : image}}/> : <View  style={[styles.initial, styleInitial]}><Text style={[style.bt, styles.initialText, styleInitialText]}>{initial}</Text></View>

    return pic;

}

const styles = StyleSheet.create({
    initial : {
        backgroundColor:'rgba(15,101,141,1)',
    },
    initialText : {
        color:'rgba(255,255,255,1)'
    }
})


export default profilePic