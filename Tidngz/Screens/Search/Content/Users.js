import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions} from 'react-native';
import style from '../../../Styles/Styles'
import Follow from '../../../Functions/Profile/Follow';
import ProfilePic from '../../../Functions/User/ProfilePic';
import { withNavigation } from 'react-navigation';

const WIDTH = Dimensions.get('window').width;

import { connect } from 'react-redux';
import { search_history } from '../../../Store/Actions/index'

const state = state => {
    return {
        api                 :   state.main.api,
        user_id             :   state.main.user.user_id,
        apiKey              :   state.main.apiKey,
        tabBlur             :   state.themes.tabBlur,
        menuIconColor       :   state.themes.menuIconColor,
    }
}

const dispatch = dispatch => {
    return {
        this_search_history  : (count, result) => dispatch(search_history(count, result)),
    }
  }

class SearchUsers extends Component {

    navigate = users_id => {

        const { api, apiKey, user_id , navigation, this_search_history} = this.props;

        navigation.navigate('UsersTitle')
    
        const url = `${api}/Search/search.php?key=${apiKey}&user_id=${user_id}&type=add&item_id=${users_id}&item_type=USER`;
          
        fetch(url)
        .then((response) => response.json())
        .then((response) => {
     
            this_search_history(response.data.count, response.data.items)
        })
    }
    

  render() {
    const {user, menuIconColor, tabBlur, navigation} = this.props



    return (
        <View style={styles.eachSearch} >

                <TouchableOpacity style={styles.eachSearch} onPress={() => this.navigate(user.user_id)}>

                        <ProfilePic styleImage={styles.image} image={user.user_image} styleInitial={styles.imageInitial} styleInitialText={styles.imageInitialText} initial={user.user_name_initial}/>

                        <View style={styles.user}>
                            <Text style={[styles.user_name, style.bt, {color:menuIconColor}]}>{user.user_name} </Text>
                            <Text style={[styles.username, style.bt, {color:menuIconColor}]}>{user.username} </Text>
                        </View>

                </TouchableOpacity>

                <View style={styles.followButton}>
                    <Follow  user={user}/>
                </View>
          
    </View>
    );
  }
}

const styles = StyleSheet.create({

    eachSearch : {
      height:50,
      width:'100%',
      flexDirection:'row',
      alignItems:'center',
    //   backgroundColor:'red'
    },
    image : {
        height: 40,
        width: 40,
        borderRadius: 25,
        marginHorizontal: 10,
        // backgroundColor:'blue'
    },
    imageInitial : {
        height: 40,
        width: 40,
        borderRadius: 25,
        marginHorizontal: 10,
        overflow:'hidden'
    },
    imageInitialText : {
        fontSize:21,
        paddingLeft:1,
        lineHeight:40,
        height: 40,
        width: 40,
        textAlign:'center',
    },
    user : {
        width:WIDTH - 70,
        height: 50,
    },
    user_name : {
        height: 28,
        lineHeight: 28,
        color: 'rgba(240,240,240, 0.8)',
        fontSize: 14,
        letterSpacing: .6,
        // backgroundColor:'orange'
    },
    username : {
        height: 22,
        lineHeight: 22,
        fontSize: 11,
        marginLeft:2,
         color: 'rgba(221,221,221, 0.8)',
         letterSpacing: .5,
        //  backgroundColor:'green'
        },
    followButton : {
        position:'absolute',
        right : 0, 
        height : 50,
        width:60,
        paddingRight:10,
        // backgroundColor:'red'
    }
  });
  

  export default withNavigation(connect(state, dispatch)(SearchUsers));