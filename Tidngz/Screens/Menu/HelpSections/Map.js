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


class Map extends Component {

  render() {
    const {backgroundMain, menuIconColor, menuIconColor2, menuText, menuTextLight} = this.props

    return (
      <View style={[styles.container,  {backgroundColor: backgroundMain}]}>

            <ScrollView>
              <View style={[styles.inner, style.paddingBackgroundTop, style.paddingBackgroundBottom_2]}>
                  
                    <Text style={[style.itemsHeader, {color:menuText} , style.la]}>
                        What is the map for?
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} , style.la]}>
                        The map shows you all the places that you can follow, they are colored in dark blue.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} , style.la]}>
                        The search box allows you to search for a place
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} , style.la]}>
                        The right section displays all the places you are following.
                    </Text>

                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} , style.la]}>
                        What can't I follow on the map page?
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} , style.la]}>
                        You won't be able to follow anything that's not mentioned on the map.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} , style.la]}>
                        1) Business centers
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} , style.la]}>
                        2) Establisments
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} , style.la]}>
                        3) Roads
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} , style.la]}>
                        4) Points of interest
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} , style.la]}>
                        5) Places marked in blue but are in disputes
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} , style.la]}>
                        Can't be followed.
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
  

  export default connect(state)(Map);