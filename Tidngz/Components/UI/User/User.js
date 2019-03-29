import React , {Component}from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Image} from 'react-native';
import { withNavigation } from 'react-navigation';
import style from '../../../Styles/Styles'; 

import { connect } from 'react-redux';

const state = state => {
  return {
      username    :   state.themes.username,
      userName    :   state.themes.userName,
  };
};


const user = props => {

   
        const {user, username, userName} = props;
        return (
            
            <TouchableOpacity style={styles.container} onPress={() => alert('profile')}>
                <Image style={styles.image} source={{uri : user.user_image_2}}/>
                <View style={styles.user}>
                    <Text style={[styles.user_name, style.bt, {color:userName}]}>{user.user_name}</Text>
                    <Text style={[styles.username, style.bt, {color:username}]}>{user.username}</Text>
                </View>
            </TouchableOpacity>
        )
    
}


const styles = StyleSheet.create({
    container: {
        height: 40,
        // marginTop: 0,
        // marginBottom: 20,
        width:'100%',
        flexDirection:'row',
        // backgroundColor:'green',
        // zIndex:0,
    },
    image : {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    user : {
        height: 40,
        paddingLeft: 10
    },
    user_name : {
        height: 22,
        lineHeight: 22,
        fontSize: 13,
        letterSpacing: .7,
        // backgroundColor:'red'
    },
    username : {
        height: 18,
        lineHeight: 18,
        fontSize: 11,
         letterSpacing: .6,
        //  backgroundColor:'red'
        },
});



export default withNavigation(connect(state)(user));
