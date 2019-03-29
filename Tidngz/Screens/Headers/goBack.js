import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import style from '../../Styles/Styles'; 

import { connect } from 'react-redux';

const state = state => {
  return {
        headerIcons            :   state.themes.headerIcons,
    };
};


const goBack = props =>  {
    const {headerIcons} = props;

   
    return (
    <TouchableOpacity style={[styles.headerLeft, style.displayFlex]} onPress = {() => props.navigation.goBack()}>
        <MaterialIcons style={styles.goBack} name="keyboard-arrow-left" size={32} color={headerIcons} />
    </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    headerLeft:{
        height: 40,
        width: 40,
        marginLeft: 5,
        lineHeight:30,
        fontWeight:'bold',
        // backgroundColor:'red'
    },
    goBack:{
        fontWeight:'bold'
    }
  });
  




export default connect(state)(goBack);


