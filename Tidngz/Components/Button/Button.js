import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import style from '../../Styles/Styles';



const buttonUI = props => {

        const { handler , 
                text , 
                styleProps = '', 
                stylePropsText = '' } = props;


        return (
            <TouchableOpacity style={[styles.container, styleProps]} onPress={handler}>
                    <Text style={[styles.text, style.mo, stylePropsText]}>{text}</Text>
            </TouchableOpacity>
        )
    
}


const styles = StyleSheet.create({
    container : {
        height : 35,
        width: 300,
        marginVertical : 25,
    },
    text:{
        width:'100%',
        textAlign:'center',
        lineHeight : 35,
        fontSize:21,
        letterSpacing : 2,
        color:'rgba(15,101,141,1)',
        textShadowColor: 'rgba(0,0,0, 0.3)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1
    }
})


export default buttonUI;