import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import style from '../../Styles/Styles'; 

import Header from '../Headers/FloatHeader'

import { connect } from 'react-redux';

const state = state => {
  return {
      backgroundMain         :   state.themes.backgroundMain,
      menuIconColor          :   state.themes.menuIconColor,
      menuIconColor2         :   state.themes.menuIconColor2,
      menuText               :   state.themes.menuText,
  };
};


class Privacy extends Component {

  render() {
    const {backgroundMain, menuIconColor, menuIconColor2, menuText} = this.props

    return (
      <View style={[styles.container,  {backgroundColor: backgroundMain}]}>

            <ScrollView>
              <View style={[styles.inner, style.paddingBackgroundTop, style.paddingBackgroundBottom_2]}>
                  
                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                      INFORMATION WE COLLECT
                    </Text>
                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                      ACCOUNT
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} ]}>
                      When you create your account, you provide us with some basic information that includes,
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} ]}>
                      1) Name
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} ]}>
                      2) Username
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} ]}>
                      3) Email
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} ]}>
                      Once you start using our service you may or may not provide us with
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} ]}>
                      1) Display picture
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} ]}>
                      2) Your website
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} ]}>
                      3) Your basic bio information
                    </Text>
                    <Text style={[style.itemsHeader, {color:menuText, marginTop:15} ]}>
                      FOLLOW
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} ]}>
                      We collect information about the people you follow and the people who are following you. All communications between you and any other users through our service will also be stored.
                    </Text>

                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                      INFORMATION OTHERS PROVIDE ABOUT YOU
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} ]}>
                      We collect and store information that others provide about you that could include messages sent to you, photos and documents shared to you on message box.
                    </Text>
                   
                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                      PAYMENTS
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} ]}>
                      We collect information of any sort of transactions done by you while using our service that include payments for placing advertisements.
                    </Text>
                    
                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                      DEVICES
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} ]}>
                      We collect information from or about the computers, phones, or other devices where you install or access our Services, depending on the permissions you’ve granted. This could include Device geographical locations, connection information such as the name of your mobile operator or ISP, browser type, language and time zone, mobile phone number and IP address. We may use this information to improve our services to you, for e.g. for showing you relevant local news content.
                    </Text>

                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                      SHARING YOUR INFORMATION
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} ]}>
                      We never share information we receive from you unless:
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} ]}>
                      (a) we have your permission to share that information;
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} ]}>
                      (b) we have given you prior notice that the information will be shared, and with whom, or
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} ]}>
                      (c) that information is aggregate information or other information that does not identify you.
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} ]}>
                      We may also use the information to enhance our existing service and to develop new ones.
                    </Text>

                    <View style={style.line}/>

                    <Text style={[style.itemsHeader, {color:menuText} ]}>
                    COOKIES
                    </Text>
                    <Text style={[style.itemsBody, {color:menuText} ]}>
                      When you use our service, we may use cookies, local storage etc. to collect information how you use Tidngz and provide features to you. We do use cookies to identify that you have logged in, and that your web browser has accessed the Services, and we may associate that information with your Account if you have one. Most web browsers have an option for turning off the cookie feature, which will prevent your browser from accepting new cookies, as well as (depending on the sophistication of your web browser) allowing you to decide on acceptance of each new cookie in a variety of ways. If you disable cookies, you won't be able to log into your Account, and so won’t be able to use the vast majority of our Services; as such, we don't recommend disabling cookies when using the Tidngz.
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
  

  export default connect(state)(Privacy);