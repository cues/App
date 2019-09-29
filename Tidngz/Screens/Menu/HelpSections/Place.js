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


class Place extends Component {

  render() {
    const {backgroundMain, menuIconColor, menuIconColor2, menuText, menuTextLight} = this.props

    return (
      <View style={[styles.container,  {backgroundColor: backgroundMain}]}>

            <ScrollView>
              <View style={[styles.inner, style.paddingBackgroundTop, style.paddingBackgroundBottom_2]}>
                  
                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                        Each place
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        ach place provides you with news for that particular place and places within that place.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        For eg. A country would display news for all the places within that country.
                    </Text>
                    <Text style={[style.itemsBody]}></Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        You will also be provided with the current weather and time for that place.
                    </Text>

                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                        Articles
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        All articles that are posted for a place are displayed here.
                    </Text>
                   
                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                        Classified
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        Classified ads posted for a place for the day are displayed here.
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
  

  export default connect(state)(Place);