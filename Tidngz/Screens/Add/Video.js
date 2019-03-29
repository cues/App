import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import float from '../Headers/Float';


export default class AddVideo extends Component {



  render() {
    return (
      <View style={styles.container}>
                <Text>AddVideo</Text>
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
  