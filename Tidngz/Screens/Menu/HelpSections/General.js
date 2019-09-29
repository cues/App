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
                  
                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                      What is Tidngz?
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                      Tidngz is a news based web service, that caters manly to all the local news & classified ads that may or may not have been published on any newspapers, websites or blogs. Be it a road accident or some social gathering, if you think it’s a news information worth reporting, be a reporter and get your side of the story reach users who visit our service on a daily basis. You can also view and post classified ads for any location on this planet.
                    </Text>

                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                      How much does it cost to use the service?
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                      We collect and store information that others provide about you that could include messages sent to you, photos and documents shared to you on message box.
                    </Text>
                   
                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                      How do I find users to follow?
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                      Once you sign in, you can search for people by name or username, articles are posted by different users.
                    </Text>
                    
                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                      How many users can I follow?
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                      You can follow upto a maximum of 3000 unique accounts.
                    </Text>

                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                      How many places can I follow?
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                      We have limited follow limit for places to 500.
                    </Text>

                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                      How can I check who am I following , or whose following me?
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                      On your profile page, you can click on the number indicating the amount of user you are following, a column would open showing all the users you are following, the same for the other the only difference being you need to enter a person's name or username to view if that particluar user is following you.
                    </Text>

                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                      Who can view my posts?
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                      Any user following you can view your posts, users can also view your articles for the place or place landmark the article is published, users searching for hastags that are included in your posts will also be able to view your post.
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