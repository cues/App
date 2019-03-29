import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Header from '../Headers/FloatHeader'


export default class Ads extends Component {



  render() {
    return (
      <View style={styles.container}>
      
          <Header/>

                <Text>Ads</Text>
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
      backgroundColor:'rgba(240,240,240,1)',
    },
   
  });
  