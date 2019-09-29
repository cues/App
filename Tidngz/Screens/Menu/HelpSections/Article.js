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


class General extends Component {

  render() {
    const {backgroundMain, menuIconColor, menuIconColor2, menuText, menuTextLight} = this.props

    return (
      <View style={[styles.container,  {backgroundColor: backgroundMain}]}>

            <ScrollView>
              <View style={[styles.inner, style.paddingBackgroundTop, style.paddingBackgroundBottom_2]}>
                  
                    <Text style={[style.itemsHeader, {color:menuText}]}>
                        How to post an article?
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight}]}>
                        To post an article click on the logo icon, you will we redirected to the add article or classified page.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight}]}>
                        You can also post an article by adding a Youtube video link on you homepage.
                    </Text>

                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText}]}>
                        How are news articles displayed?
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight}]}>
                        The latest news is displayed at first for home, places, landmarks, profile or hashtags.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight}]}>
                        You can search for the top news by clicking on the links to top 24 hours, 48 hours, 1 week, and 1 months.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight}]}>
                        You can also search news articles for a particular date, plese note that althought we store articles according to GMT+0 in our database, they will be displayed to you according to your time.
                    </Text>

                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText}]}>
                        Each news article
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight}]}>
                        All news articles are displayed in a box, that includes  
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight}]}>
                        1) Name : The name and the username of the user who has posted the news article.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight}]}>
                        2) Profile Picture : The profile picture of the user who has posted the news article.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight}]}>
                        3) Place : The place the article is for.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight}]}>
                        4) Category : The category the article is for. 
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight}]}>
                        5) Headlines : Displays the headline for the news article.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight}]}>
                        6) Images/Videos : Displays the main image of the article, you may swipe to view the other images/videos, or click on the fullscreen icon to view in full screen. On your laptop you are able to view the number of videos and images with an icon, clicking the same will open the gallery for them.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight}]}>
                        7) Hashtags : Includes all the hastags entered by the user, for the news article.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight}]}>
                        8) News story : Include the whole story for this particular news article.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight}]}>
                        9) Likes : Displays the number of users who have liked the news article. By clicking on the number, a box opens on the left side, displaying all the users who have liked the same.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight}]}>
                        10) Share : You can share an article over social media's, email or print it.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight}]}>
                        11) Comments : We use thrid party comment system by Facebook
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
  

  export default connect(state)(General);