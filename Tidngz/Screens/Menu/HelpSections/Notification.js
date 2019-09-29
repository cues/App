import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import style from '../../../Styles/Styles'; 

import Header from '../../Headers/FloatHeader'

import { connect } from 'react-redux';

const state = state => {
  return {
      backgroundMain         :   state.themes.backgroundMain,
      menuIconColor          :   state.themes.menuIconColor,
      menuIconColor2         :   state.themes.menuIconColor2,
      menuText               :   state.themes.menuText,
      menuTextLight          :   state.themes.menuTextLight,
  };
};


class Notification extends Component {

  render() {
    const {backgroundMain, menuIconColor, menuIconColor2, menuText, menuTextLight} = this.props

    return (
      <View style={[styles.container,  {backgroundColor: backgroundMain}]}>

            <ScrollView>
              <View style={[styles.inner, style.paddingBackgroundTop, style.paddingBackgroundBottom_2]}>
                  
                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                        What notifications do i receive?
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        You get notified when any user
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                    1) Likes your posts.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                    2) Comments on your posts.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                    3) Likes on your comments.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                    4) Replies on your comments.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                    5) Likes on your replies.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                    6) Replies on the comments you have replied.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                    7) Follows you.
                    </Text>

                    
              </View>
            </ScrollView>

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
  

  export default connect(state)(Notification);