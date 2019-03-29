import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import float from '../Headers/Float';

import { connect } from 'react-redux';
const state = state => {
    return {
        api                :  state.main.api,
        user_id            :  state.main.user_id,
        apiKey             :  state.main.apiKey,
        backgroundMain     :  state.themes.backgroundMain,
    };
  };
  

class Replies extends Component {


static navigationOptions = float

  render() {

    const {backgroundMain} = this.props;

    return (
      <View style={[styles.container, {backgroundColor:backgroundMain}]}>
                <Text>Replies</Text>
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
   
  });
  


  export default connect(state)(Replies);