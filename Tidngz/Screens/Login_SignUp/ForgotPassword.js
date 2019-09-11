import React, {Component} from 'react';
import {Platform, StatusBar, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Header from './Header';
import Footer from './Footer';
import Box from './Box';
import LoginButton from '../../Components/Button/Button';
import Input from '../../Components/TextInput/User';
import FontAwesome from  'react-native-vector-icons/FontAwesome';
import BlurView from '../../Components/BlurVIew/BlurVIew';

import style from '../../Styles/Styles';
import { withNavigation } from 'react-navigation';


import {connect} from 'react-redux'
import { login , add_theme_white , loginRoute} from '../../Store/Actions/index'

const state = state => {
    return {
        LoggedIn : state.main.LoggedIn,
        backgroundMain         :   state.themes.backgroundMain,
        menuIconColor     :   state.themes.menuIconColor,      
        menuIconColor2     :   state.themes.menuIconColor2,      
        tabBlur          :   state.themes.tabBlur,
    }
}

const dispatch = dispatch => {
    return {
        this_login : () => dispatch(login()),
        this_add_theme_white     :   ()   =>  dispatch(add_theme_white()),
        this_login_route         :   route  =>  dispatch(loginRoute(route))
    }
}

class ForgotPassword extends Component {


    login = () => {
        this.props.this_login()
        this.props.this_add_theme_white()
    }

    navigate = (route) => {
        this.props.this_login_route(route)
        this.props.navigation.navigate(route)
    }

  render() {
    const {backgroundMain, tabBlur, menuIconColor2, navigation} = this.props

    statusBar   =  navigation.getParam('statusBar', true)
    statusBar ? StatusBar.setHidden(false) : StatusBar.setHidden(true)
  
    return (
   
      <View style={[styles.container, {backgroundColor: backgroundMain}]}>
          
            <Box theme='forgotPassword'>

                <Input textContentType = 'emailAddress' placeholder = 'EMAIL' iconName = 'mail-outline' maxLength = {25}/>

                <LoginButton text='DONE' styleProps={styles.button} handler={this.login}/>

                <View style={style.line_3}/>

                <TouchableOpacity style={styles.options} onPress={() => this.navigate('Login')}>
                    <Text style={[styles.optionsText, style.ci, {color:menuIconColor2}]}>Back to <Text style={[style.tidngz_color, style.cib]}> LOGIN</Text></Text>
                </TouchableOpacity>

            </Box>

            <Footer/>

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
    options : {
        height : 30,
        width : 300,
        marginVertical : 15
    },
    optionsText : {
        lineHeight:30,
        width : 300,
        fontSize: 12,
        textAlign:'center',
        letterSpacing:1
    },
   

});
  

  export default withNavigation(connect(state, dispatch)(ForgotPassword))