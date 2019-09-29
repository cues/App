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


class Classified extends Component {

  render() {
    const {backgroundMain, menuIconColor, menuIconColor2, menuText, menuTextLight} = this.props

    return (
      <View style={[styles.container,  {backgroundColor: backgroundMain}]}>

            <ScrollView>
              <View style={[styles.inner, style.paddingBackgroundTop, style.paddingBackgroundBottom_2]}>
                  
                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                        How to post a classified ad?
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        To post a classified ad click on the logo icon, you will we redirected to the add article or classified page.
                    </Text>

                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                        How are classified ads displayed?
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        Ads are diplayed for any province/state/county (basically the second administrative division after a country), for the country you chose. Ads are not displayed for a country. We offer a free of charge advertisment to meet your urgent requirement of placing a classified ad.
                    </Text>
                   
                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                        How many classified ads can you post?
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        You can post a maximum of 50 classified ads per day. Each place you chose is considered as one classified ad. They are some countries that have more than 50 divisions, in that case you will be able to post an ad for all the places of that country but as you cross the 50 ad mark you won't be able to post any more ads for that specific day.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        Please use the ad space responisble as we hold every right to delete your classified ad or in some cases your account if you violet our terms regarding any ads placed.
                    </Text>

                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                        Images
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        1) It is not compulsory to upload an image
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        2) You are able to upload a maximum of 5 images per ad.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        3) You can add captions under each image with a maximum of 150 characters.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        4) Images will be displayed in the order you upload them.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        5) Maximum image size is 10 MB.
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
  

  export default connect(state)(Classified);