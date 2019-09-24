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
                  
                    <Text style={[style.itemsHeader, {color:menuText} , style.la]}>
                        What notifications do i receive?
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} , style.la]}>
                        You get notified when any user
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} , style.la]}>
                    1) Likes your posts.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} , style.la]}>
                    2) Comments on your posts.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} , style.la]}>
                    3) Likes on your comments.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} , style.la]}>
                    4) Replies on your comments.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} , style.la]}>
                    5) Likes on your replies.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} , style.la]}>
                    6) Replies on the comments you have replied.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} , style.la]}>
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