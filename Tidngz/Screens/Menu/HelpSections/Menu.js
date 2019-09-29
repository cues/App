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


class Menu extends Component {

  render() {
    const {backgroundMain, menuIconColor, menuIconColor2, menuText, menuTextLight} = this.props

    return (
      <View style={[styles.container,  {backgroundColor: backgroundMain}]}>

            <ScrollView>
              <View style={[styles.inner, style.paddingBackgroundTop, style.paddingBackgroundBottom_2]}>
                  
                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                        How do I create an account?
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        To create and account on Tidngz
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        1) Go to https://www.tidngz.com or download the Tidngz App on your ios or android device
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        2) Click 'Don’t have an account, SIGN UP'
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        3) Enter your Full name, username, email and password
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        4) Click on the sign up button
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        Alternatively you can sign up using your Facebook or Google Accounts.
                    </Text>

                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                        How old do I have to be to use Tidngz?
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        To use our service you need to be atleast 13 years old.
                    </Text>
                   
                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                        Do I need to confirm my email address?
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        Yes, once you signup an email would be sent to you with a confirmation link. Please click on the link to start accesing all the feature of our service. This is only to confirm that you are the owner of the email address you provide us with.
                    </Text>
                    
                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                        Can I change my account details?
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        If you feel the need to change you email address, you may do so from your account settings. Click on the menu section go to account and change any of your account details and click save.
                    </Text>

                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                        How do I chose a username?
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        You may use numbers and alphabeths to a maximum of 20 characters while choosing a username. All usernames are unique and we do not guarantee the existance of something you like.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        NOTE : Please do not use usernames that may include names of established brands, celebraties, media companies, politicians, journalists, religion or any know figures. In case you do use we have the whole right to change your username if we are contacted regarding a username belonging to a know figure, that is being used in order to block the username.
                    </Text>

                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                        What do I do if I cant login into my account?
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        If your having trouble login into Tidngz, you may wish to recheck your username/ email or your password, alternatively you may wish to reset your password if you have forgotten it.
                    </Text>

                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                        How do I reset my password?
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        Go to the login page of the website, click on the forgot password, and follow the on screen instructions.
                    </Text>
                    
                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                        Can my account be deleted?
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        If we find that you are violating our term, we will definitely deleted your account. You may wish to delete your account from the Account tab.  
                    </Text>
                    <Text style={[style.itemsBody, {color:menuTextLight} ]}>
                        Please note : An account thats deleted cannot be recovered.
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
  

  export default connect(state)(Menu);