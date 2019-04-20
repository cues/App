import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import style from '../../../Styles/Styles';
import addStyle from '../../../Styles/Add';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { connect } from 'react-redux';

const state = state => {
  return {
      backgroundMain   :   state.themes.backgroundMain,
      menuText         :   state.themes.menuText,
    };
};


 class Headlines extends Component {


  render() {
    const {backgroundMain, menuText} = this.props

    return (
        <View style={[styles.container, style.paddingBackgroundTop, style.paddingBackgroundBottom_2, {backgroundColor: backgroundMain}]}>         

          <View style={addStyle.topBox}>
            <TouchableOpacity style={styles.save}>
              <Text style={[style.ca, styles.saveText, {color:menuText}]}>SAVE</Text>
            </TouchableOpacity>
            <Text style={[style.ca, addStyle.textCount, {color:menuText}]}>123</Text>


            
          </View>    

          <View style={addStyle.bottomBox}>
            <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuText}]}>
              <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuText} name='drafts' size={23}/>
            </TouchableOpacity>
            <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuText}]}>
              <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuText} name='arrow-forward' size={25}/>           
            </TouchableOpacity>
          </View> 



       </View> 
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    save: {
      height : 40, 
      width:70, 
      position:'absolute',
      left:10,
      top:10,
    },
    saveText : {
      height : 40,
      width:70, 
      textAlign:'center',
      lineHeight : 40,
      letterSpacing:2,
      fontSize:18,
      color:'rgba(15, 101, 151, 0.7)'
    }
  });
  
  export default connect(state)(Headlines)
