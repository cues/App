import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Animated} from 'react-native';
import Header from './Headers/Profile/Header';
import Theme from '../Components/Themes/Themes';

import { connect } from 'react-redux';

const state = state => {
  return {
      backgroundMain    :   state.themes.backgroundMain,
    };
};


 class Profile extends Component {


   
    static navigationOptions = ({navigation}) =>  {
        return {
                  headerTransparent : true,
                  header: null,
          }
      } 
  
  

  render() {
    const {backgroundMain} = this.props


    return (
        <View style={[styles.container, {backgroundColor: backgroundMain}]}>

            <Theme/>

            <Header/>

       </View> 
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width:'100%',
    },
  });
  


  export default connect(state)(Profile);