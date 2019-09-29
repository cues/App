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


class Home extends Component {

  render() {
    const {backgroundMain, menuIconColor, menuIconColor2, menuText, menuTextLight} = this.props

    return (
      <View style={[styles.container,  {backgroundColor: backgroundMain}]}>

            <ScrollView>
              <View style={[styles.inner, style.paddingBackgroundTop, style.paddingBackgroundBottom_2]}>
                  
                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                        Home Screen
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        Home screen lets you view all the news article that are uploaded by the users that you follow as well as the news articles for places you follow.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        Here you will find a link to trending news articles
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        You can upload a Youtube video as a news article.
                    </Text>
                    <Text style={style.itemsBody}></Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        You will also find the library bar where you can
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        1) Select a category, to display news for that category.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        2) Check for the top news of the last 24hours, 48hours, 1 week and 1 month, you can also select a date or a date range to view articles for those particular dates. Note: Articles are stored in our database as GMT+0 but will be displayed according to your time.
                    </Text>
                    <Text style={style.itemsBody}></Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        The home page displays the current time & weather for your location. There are times when the browser you are using may not be able to get your location or you may have disabled the location service, during that time the weather information may not be provided to you.
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
  

  export default connect(state)(Home);