
import React, {Component} from 'react';
import {Platform,StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import style from '../Styles/Styles'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import headerStyle from './Headers/HeaderStyles';

export default navigationOptions = ({navigation}) =>  {
    return {
        headerTitle: (
            <Image style={styles.headerTitle} resizeMode={'cover'} source = {{uri : 'https://www.wedngz.com/Tidngz/User_Images/tidngz.png'}}/>
        ), 
        headerBackTitle : null,
        headerTintColor : 'rgba(15,101,141,1)',
        headerStyle:headerStyle,
        headerLeft: (
            <TouchableOpacity style={[styles.headerLeft, style.displayFlex]}>
                <Feather name="menu" size={25} color='rgba(47, 47, 47, 0.7)' onPress = {() => navigation.navigate('Menu',{name:'Menu'})}/>
            </TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity style={[styles.headerRight, style.displayFlex]} onPress = {() => navigation.navigate('Notifications',{name:'Notification'})}>
                <FontAwesome name="bell-o" size={22} color='rgba(47, 47, 47, 0.7)' />
            </TouchableOpacity>
        ),
       
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor:'rgba(240,240,240,1)',
    },
    headerTitle : {
        height: 55,
        width: 55,
        alignSelf: "center", 
        marginLeft: "auto", 
        marginRight: "auto"
    },
    headerLeft : {
        height: 40,
        width: 40,
        marginLeft: 5,
        lineHeight:30,
    },
    headerRight : {
        height: 40,
        width: 40,
        marginRight: 5,
        lineHeight:30,
        fontWeight:'900'
    },
  });