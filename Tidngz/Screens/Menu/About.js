import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import style from '../../Styles/Styles'; 

import Header from '../Headers/FloatHeader'

import { connect } from 'react-redux';

const state = state => {
  return {
      backgroundMain         :   state.themes.backgroundMain,
      menuIconColor          :   state.themes.menuIconColor,
      menuIconColor2         :   state.themes.menuIconColor2,
      menuText               :   state.themes.menuText,
  };
};


class About extends Component {

  render() {
    const {backgroundMain, menuIconColor, menuIconColor2, menuText} = this.props

    return (
      <View style={[styles.container,  {backgroundColor: backgroundMain}]}>

              <View style={[styles.container, style.paddingBackgroundTop, style.paddingBackgroundBottom_2]}>
                  
                   <View style={[styles.inner]}>

        
                      <Text style={[style.itemsHeader, {color:menuText, textAlign:'center', fontSize:23, lineHeight:36,} , style.ca]}>
                        Tidngz is a news based web service, that caters manly to all the local news & classified ads that may or may not have been published on any newspapers, websites or blogs.
                      </Text>
                      <Text style={[style.itemsBody, {color:menuText , textAlign:'center'} , style.cib]}>
                      </Text>
                      <Text style={[style.itemsBody, {color:menuText , textAlign:'center'} , style.cib]}>
                        You can use the website or the app. Our app is available to download from the apple app store and the google play store
                      </Text>


                  </View>
              </View>

          <Header/>

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
    inner:{
      margin:10,
    },

  });
  

  export default connect(state)(About);