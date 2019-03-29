import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import style from '../../../Styles/Styles';

import { connect } from 'react-redux';

const state = state => {
  return {
      backgroundMain         :   state.themes.backgroundMain,
    };
};


 class Second extends Component {


  render() {
    const {backgroundMain} = this.props
    return (
      <View style={[styles.container, style.paddingBackgroundBottom_2, {backgroundColor: backgroundMain}]}>               
      <Button title = 'Go to home'
            onPress = {() => this.props.navigation.navigate('First')}/>
       </View> 
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
   
  });
  
  export default connect(state)(Second)
