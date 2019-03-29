import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import float from './Headers/Float';


export default class Notifications extends Component {


static navigationOptions = float

  render() {
    return (
      <View style={styles.container}>
                <Text>Notifications</Text>
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
  