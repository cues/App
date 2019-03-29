import React from 'react';
import {Platform, StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
import style from '../../../Styles/Styles'; 

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { withNavigation } from 'react-navigation';


import { connect } from 'react-redux';

const state = state => {
  return {
        headerIcons            :   state.themes.headerIcons,
    };
};


const headerIcons = (props) => {

    const {navigation, headerIcons, position, type} = props;

    if(type == 'Home' && position =='Left'){
        return(
            <TouchableOpacity style={[styles.headerLeft ]} onPress = {() => navigation.navigate('Menu',{name:'MENU'})}>
                <Feather style={{lineHeight : 47, textAlign:'center'}} name="menu" size={23} color={headerIcons} />
            </TouchableOpacity>
        )         
    }


    if(type == 'Home' && position =='Right'){
        return(
            <TouchableOpacity style={[styles.headerRight ]} onPress = {() => navigation.navigate('Notifications',{name:'NOTIFICATIONS'})}>
                  <FontAwesome style={{lineHeight : 47, textAlign:'center'}}  name="bell-o" size={20} color={headerIcons} />
              </TouchableOpacity>
        )         
    }
   

};

const styles = StyleSheet.create({

        headerLeft : {
            width: 40,
            // marginLeft: "auto", 
            // marginRight: "auto",
            marginLeft: 5,
            // backgroundColor:'yellow'
        },
        headerRight : {
            width: 40,
            // marginLeft: "auto", 
            // marginRight: "auto",
            marginRight: 5,
            // backgroundColor:'green',
            // fontWeight:'900'
        },

  });
export default withNavigation(connect(state)(headerIcons));
