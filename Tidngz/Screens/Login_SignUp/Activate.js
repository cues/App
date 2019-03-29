import React, {Component} from 'react';
import {Platform,StatusBar, StyleSheet, Text, View, TouchableOpacity, AsyncStorage} from 'react-native';
import Header from './Header';
import Box from './Box';

import style from '../../Styles/Styles';
import { withNavigation } from 'react-navigation';


import {connect} from 'react-redux'
import { logout , add_theme_black } from '../../Store/Actions/index';

const state = state => {
    return {
        LoggedIn        : state.main.LoggedIn,
        backgroundMain  :   state.themes.backgroundMain,
        menuIconColor   :   state.themes.menuIconColor,      
        menuIconColor2  :   state.themes.menuIconColor2,      
        tabBlur         :   state.themes.tabBlur,
        user            :   state.main.user,
    }
}

const dispatch = dispatch => {
    return {
        this_logout             :   ()   =>  dispatch(logout()),
        this_add_theme_black    :   ()   =>  dispatch(add_theme_black()),
    }
}

const ACCESS_TOKEN = 'access_token';

class Activate extends Component {

    constructor(props){
        super(props)

        Platform.OS === 'ios' ? StatusBar.setHidden(true) : null

    }

    logout = () => {
        this.removeToken()
        this.props.this_add_theme_black()
        this.props.this_logout();
    }

    removeToken = async () => {
        try {
            await AsyncStorage.removeItem(ACCESS_TOKEN);
        } catch (error) {
            // console.warn('something went wrong')
        }
    }

  render() {
    const {backgroundMain, tabBlur, menuIconColor, navigation, user} = this.props
  
    return (
   
      <View style={[styles.container, {backgroundColor: backgroundMain}]}>

           
            <Box theme='activate'>

                    <Text style={[styles.activateText, style.ca]}>{user.user_name} please activate your account, by clicking on the link sent on the email that your provided while signing up</Text>

            </Box>

            <TouchableOpacity style={styles.logout} onPress={this.logout}>
                <Text style={[styles.logoutText, style.bt]}>Logout</Text>
            </TouchableOpacity>

       </View> 
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    activateText : {
        lineHeight:37,
        width : 300,
        fontSize: 20,
        letterSpacing:1.2,
        textAlign:'center',
        color: 'rgba(15, 101, 141, 1)',
        fontWeight:Platform.select({android: '400', ios:'bold'}),
        textShadowColor: 'rgba(0,0,0, 0.7)',
          textShadowOffset: {width: 1, height: 1},
          textShadowRadius:1  
    },
    logout : {
        height : 40,
        width: 100,
        position:'absolute',
        right: 10,
        bottom: 10
    },
    logoutText : {
        lineHeight:40,
        width: 100,
        textAlign:'center',
        fontSize: 15,
        letterSpacing:1,
        color:'white'
    }
});
  

  export default withNavigation(connect(state, dispatch)(Activate))