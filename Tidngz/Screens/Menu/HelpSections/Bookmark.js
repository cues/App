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


class Bookmark extends Component {

  render() {
    const {backgroundMain, menuIconColor, menuIconColor2, menuText, menuTextLight} = this.props

    return (
      <View style={[styles.container,  {backgroundColor: backgroundMain}]}>

            <ScrollView>
              <View style={[styles.inner, style.paddingBackgroundTop, style.paddingBackgroundBottom_2]}>
                  
                    <Text style={[style.itemsHeader, {color:menuText} , style.la]}>
                        Can I bookmark articles?
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} , style.la]}>
                        All articles that are posted by other users can be bookmarked, by clikcing on the top right section of the article.
                    </Text>
                    
                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} , style.la]}>
                        How to view the articles that I bookmarked?
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} , style.la]}>
                        Click on the menu icon --> Bookmarks, this will lead you to the bookmarks page.
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
  

  export default connect(state)(Bookmark);