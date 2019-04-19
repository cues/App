import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import float from '../Headers/Float';
import First from './Article/Headlines';

import { connect } from 'react-redux';

const state = state => {
  return {
      backgroundMain         :   state.themes.backgroundMain,
    };
};

class AddArticle extends Component {

  render() {
    const {backgroundMain} = this.props
    return (
        <View style={[styles.container, {backgroundColor: backgroundMain}]}>               
          <First navigation = {this.props.navigation}/>
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


  export default connect(state)(AddArticle)
  