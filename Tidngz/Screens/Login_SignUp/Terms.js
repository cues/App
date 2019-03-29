import React, {Component} from 'react';
import {Platform,StatusBar, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Header from './Header';
import Footer from './Footer';
import Box from './Box';

import style from '../../Styles/Styles';
import { withNavigation } from 'react-navigation';


import {connect} from 'react-redux'

const state = state => {
    return {
        LoggedIn : state.main.LoggedIn,
        backgroundMain         :   state.themes.backgroundMain,
        menuIconColor     :   state.themes.menuIconColor,      
        menuIconColor2     :   state.themes.menuIconColor2,      
        tabBlur          :   state.themes.tabBlur,
    }
}


class Terms extends Component {



  render() {
    const {backgroundMain, tabBlur, menuIconColor2, navigation} = this.props

    statusBar   =  navigation.getParam('statusBar', true)

    statusBar ? StatusBar.setHidden(false) : Platform.OS === 'ios' ? StatusBar.setHidden(true) : null
  
    return (
   
      <View style={[styles.container, {backgroundColor: backgroundMain}]}>

           
          
            <Box theme='terms'>

                    <Text>Terms</Text>

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
        height : 20,
        width : 300,
        marginVertical : 20
    },
    optionsText : {
        lineHeight:20,
        width : 300,
        fontSize: 12,
        textAlign:'center',
        letterSpacing:1
    },

});
  

  export default withNavigation(connect(state)(Terms))