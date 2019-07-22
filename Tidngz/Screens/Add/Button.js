import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import style from '../../Styles/Styles';
import addStyle from '../../Styles/Add';


const state = state => {
    return {
        menuIconColor2          :   state.themes.menuIconColor2,
    }
}


const button = props => {

    const { write, text , menuIconColor2, this_sideBar } = props;
    
    return (
        <TouchableOpacity onPress={write}>
            <Text style={[addStyle.textInput, style.ca, {color:menuIconColor2}]}>{text}</Text>
        </TouchableOpacity>
    )
    
}


const styles = StyleSheet.create({
})


export default connect(state)(button);