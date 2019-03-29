import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions} from 'react-native';
import style from '../../Styles/Styles'
import {brand, model, models, models2} from '../../Components/DeviceInfo/DeviceInfo';
import BlurView from '../../Components/BlurVIew/BlurVIew';
import SearchUsers from './Content/Users';

const WIDTH = Dimensions.get('window').width;

import { connect } from 'react-redux';

const state = state => {
    return {
        tabBlur             :   state.themes.tabBlur,
        backgroundMain      :   state.themes.backgroundMain,
        menuIconColor       :   state.themes.menuIconColor,
        search_value        :   state.search.search_value,
        search_users_count  :   state.search.search_users_count,
        search_users        :   state.search.search_users
    }
}

class Users extends Component {


  render() {
    const {backgroundMain, search_value, search_users_count, search_users, menuIconColor, tabBlur} = this.props




    const searchUser = search_users.map((search, index) => (
      <View key={search.key}>

            <SearchUsers user={search}/>

          <View style={[style.line, index + 1 == search_users_count ? style.none : null]}/>
      </View>
    ))


    const search = (
         search_users_count == 0 ? 
            search_value == '' ?
                  <Text style={[style.noSearch, {color:menuIconColor}]}>Search for an user</Text>
                :
                  <Text style={[style.noSearch, {color:menuIconColor}]}>No users found</Text>
         :
          <View>
            <Text style={[style.noSearch, {color:menuIconColor}]}>Users</Text>
            <View style={style.line}/>
            { searchUser }
          </View>
    )

    return (
      <View style={[styles.container,  {backgroundColor:backgroundMain}]}>
                <ScrollView style={[styles.scrollView]}>

                      <View style={{height: Platform.select({android:50 + 44 , ios : models2.includes(model) ? 88 + 44 : 63 + 44}) }}/>
                      {search}
                      <View style={{height: brand === 'Apple' && models.includes(model) ? 73 :  59 }}/>
                </ScrollView>
       </View> 
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor:'rgba(23,23,23,1)',
    },
    scrollView : {
      width:'100%',
      marginVertical: 10,
    },
 
  });
  

  export default connect(state)(Users);