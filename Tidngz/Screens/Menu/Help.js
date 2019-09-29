import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import style from '../../Styles/Styles'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Header from '../Headers/FloatHeader'

import { connect } from 'react-redux';

const state = state => {
  return {
      backgroundMain         :   state.themes.backgroundMain,
      menuIconColor          :   state.themes.menuIconColor,
      menuIconColor2         :   state.themes.menuIconColor2,
      menuText           :   state.themes.menuText,
  };
};

const width = Dimensions.get('window').width;

class Help extends Component {

  render() {
    const {backgroundMain, menuIconColor, menuIconColor2, menuText} = this.props

    const iconRight = (
      <MaterialIcons style={[styles.itemsIcon, styles.iconRight]} name="keyboard-arrow-right" size={22} color={menuIconColor2} />
  )

    return (
      <View style={[styles.container,  {backgroundColor: backgroundMain}]}>

            <ScrollView>
              <View style={[styles.container, style.paddingBackgroundTop, style.paddingBackgroundBottom_2]}>
                  
                    <TouchableOpacity style={styles.items} onPress = {() => this.props.navigation.navigate('GeneralHelp',{name:'GENERAL'})}>
                      <MaterialIcons style={styles.itemsIcon} name="all-out" size={22} color={menuIconColor} />
                      <Text style={[styles.itemsText, {color:menuText} , style.ma]}>GENERAL</Text>
                      {iconRight}
                    </TouchableOpacity>

                    <View style={styles.line}/>

                    <TouchableOpacity style={styles.items} onPress = {() => this.props.navigation.navigate('AccountHelp',{name:'ACCOUNT'})}>
                      <MaterialIcons style={styles.itemsIcon} name="account-circle" size={22} color={menuIconColor} />
                      <Text style={[styles.itemsText, {color:menuText} , style.ma]}>ACCOUNT</Text>
                      {iconRight}
                    </TouchableOpacity>

                    <View style={styles.line}/>

                    <TouchableOpacity style={styles.items} onPress = {() => this.props.navigation.navigate('ArticleHelp',{name:'ARTICLE'})}>
                      <MaterialIcons style={styles.itemsIcon} name="crop-portrait" size={22} color={menuIconColor} />
                      <Text style={[styles.itemsText, {color:menuText} , style.ma]}>ARTICLE</Text>
                      {iconRight}
                    </TouchableOpacity>

                    <View style={styles.line}/>

                    <TouchableOpacity style={styles.items} onPress = {() => this.props.navigation.navigate('BookmarkHelp',{name:'BOOKMARK'})}>
                      <MaterialIcons style={styles.itemsIcon} name="bookmark" size={22} color={menuIconColor} />
                      <Text style={[styles.itemsText, {color:menuText} , style.ma]}>BOOKMARK</Text>
                      {iconRight}
                    </TouchableOpacity>

                    <View style={styles.line}/>

                    <TouchableOpacity style={styles.items} onPress = {() => this.props.navigation.navigate('ClassifiedHelp',{name:'CLASSIFIED'})}>
                      <MaterialIcons style={styles.itemsIcon} name="language" size={22} color={menuIconColor} />
                      <Text style={[styles.itemsText, {color:menuText} , style.ma]}>CLASSIFIED</Text>
                      {iconRight}
                    </TouchableOpacity>

                    <View style={styles.line}/>

                    <TouchableOpacity style={styles.items} onPress = {() => this.props.navigation.navigate('HomeHelp',{name:'HOME'})}>
                      <MaterialIcons style={styles.itemsIcon} name="home" size={22} color={menuIconColor} />
                      <Text style={[styles.itemsText, {color:menuText} , style.ma]}>HOME</Text>
                      {iconRight}
                    </TouchableOpacity>

                    <View style={styles.line}/>

                    <TouchableOpacity style={styles.items} onPress = {() => this.props.navigation.navigate('MapHelp',{name:'MAP'})}>
                      <MaterialIcons style={styles.itemsIcon} name="map" size={22} color={menuIconColor} />
                      <Text style={[styles.itemsText, {color:menuText} , style.ma]}>MAP</Text>
                      {iconRight}
                    </TouchableOpacity>

                    <View style={styles.line}/>

                    <TouchableOpacity style={styles.items} onPress = {() => this.props.navigation.navigate('NotificationHelp',{name:'NOTIFICATION'})}>
                      <MaterialIcons style={styles.itemsIcon} name="notifications" size={22} color={menuIconColor} />
                      <Text style={[styles.itemsText, {color:menuText} , style.ma]}>NOTIFICATION</Text>
                      {iconRight}
                    </TouchableOpacity>
      
                    <View style={styles.line}/>

                    <TouchableOpacity style={styles.items} onPress = {() => this.props.navigation.navigate('PlaceHelp',{name:'PLACE'})}>
                      <MaterialIcons style={styles.itemsIcon} name="place" size={22} color={menuIconColor} />
                      <Text style={[styles.itemsText, {color:menuText} , style.ma]}>PLACE</Text>
                      {iconRight}
                    </TouchableOpacity>

                    <View style={styles.line}/>

                    <TouchableOpacity style={styles.items} onPress = {() => this.props.navigation.navigate('ProfileHelp',{name:'PROFILE'})}>
                      <MaterialIcons style={styles.itemsIcon} name="person" size={22} color={menuIconColor} />
                      <Text style={[styles.itemsText, {color:menuText} , style.ma]}>PROFILE</Text>
                      {iconRight}
                    </TouchableOpacity>

                    <View style={styles.line}/>
                    
                    <TouchableOpacity style={styles.items} onPress = {() => this.props.navigation.navigate('SearchHelp',{name:'SEARCH'})}>
                      <MaterialIcons style={styles.itemsIcon} name="search" size={22} color={menuIconColor} />
                      <Text style={[styles.itemsText, {color:menuText} , style.ma]}>SEARCH</Text>
                      {iconRight}
                    </TouchableOpacity>

                    <View style={styles.line}/>

                    <TouchableOpacity style={styles.items} onPress = {() => this.props.navigation.navigate('SettingHelp',{name:'SETTING'})}>
                      <MaterialIcons style={styles.itemsIcon} name="settings" size={22} color={menuIconColor} />
                      <Text style={[styles.itemsText, {color:menuText} , style.ma]}>SETTING</Text>
                      {iconRight}
                    </TouchableOpacity>

                    {/* <View style={styles.line}/>

                    <TouchableOpacity style={styles.items} onPress = {() => this.props.navigation.navigate('ThemesHelp',{name:'ACCOUNT'})}>
                      <MaterialIcons style={styles.itemsIcon} name="panorama" size={22} color={menuIconColor} />
                      <Text style={[styles.itemsText, {color:menuText} , style.ma]}>THEMES</Text>
                      {iconRight}
                    </TouchableOpacity> */}

                    

                   

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
    line :{
        height:1, 
        width:width - 40, 
        backgroundColor:'rgba(123,123,123,.4)'
    },
    items : {
      height: 35,
      width: width,
      marginVertical: 12,
      paddingHorizontal:10,
      // paddingLeft:20,
      flexDirection:'row',
      // backgroundColor:'red'
      // marginVertical:2,
      // backgroundColor:'rgba(255,255,255,1)',
    },
    itemsText:{
      lineHeight:35,
      letterSpacing: 2,
      fontSize: 16,
      fontWeight:Platform.select({android:'400'}),
  },
    itemsIcon:{
      height: 35,
      lineHeight:35,
      width:35,
      textAlign:'center',
      // backgroundColor:'red',
      marginRight:10
  },
  iconRight:{
      position:'absolute',
      right:0,
  },
  });
  

  export default connect(state)(Help);