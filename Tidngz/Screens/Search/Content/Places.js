import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions} from 'react-native';
import style from '../../../Styles/Styles'
import BlurView from '../../../Components/BlurVIew/BlurVIew';
import Follow from '../../../Functions/Place/Follow';
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



class SearchPlaces extends Component {


  navigate = () => {

    const { api, apiKey, user_id ,place, navigation, this_search_history} = this.props; 

    navigation.navigate('Place',{place_id:place.id})

    const url = `${api}/Search/search.php?key=${apiKey}&user_id=${user_id}&type=add&item_id=${place.id}&item_type=PLACE`;
      
    fetch(url)
    .then((response) => response.json())
    .then((response) => {
 
        this_search_history(response.data.count, response.data.items)
    })
  }



  render() {
    const {place, menuIconColor, tabBlur, navigation} = this.props



    return (
        <View style={styles.eachSearch} >

        <TouchableOpacity style={styles.eachSearch} onPress={this.navigate}>
            <Image style={styles.placeFlag} source={{uri : place.flag}}/>

            <View style={styles.placeNameContainer}>

                            {
                            place.name != place.county && place.county != '' ?
                                place.province != '' ?
                                    <View style={styles.placeNameBox}><Text style={[style.bt, styles.placeName, {color:menuIconColor}]}>{place.name} </Text><Text style={[style.bt, styles.placeAddress, {color:menuIconColor}]}>{place.county} | {place.province} | {place.country} </Text></View>
                                :
                                    <View style={styles.placeNameBox}><Text style={[style.bt, styles.placeName, {color:menuIconColor}]}>{place.name} </Text><Text style={[style.bt, styles.placeAddress, {color:menuIconColor}]}>{place.county} | {place.country} </Text></View>
                                :
                                place.name != place.province && place.province != '' ?
                                    <View style={styles.placeNameBox}><Text style={[style.bt, styles.placeName, {color:menuIconColor}]}>{place.name} </Text><Text style={[style.bt, styles.placeAddress, {color:menuIconColor}]}>{place.province} | {place.country} </Text></View>
                                :   
                                    place.name == place.country ? 
                                    <View style={styles.placeNameBox}><Text style={[style.bt, styles.placeName, styles.placeNameCountry, {color:menuIconColor}]}>{place.name} </Text></View>
                                    :
                                    <View style={styles.placeNameBox}><Text style={[style.bt, styles.placeName, {color:menuIconColor}]}>{place.name} </Text><Text style={[style.bt, styles.placeAddress, {color:menuIconColor}]}>{place.country} </Text></View>
                                
                            }
            </View>
        </TouchableOpacity>

        <View style={styles.followButton}>
            <Follow  place={place}/>
        </View>
          
    </View>
    );
  }
}

const styles = StyleSheet.create({

    eachSearch : {
      // height:50,
      width:'100%',
      flexDirection:'row',
      alignItems:'center'
    },
    placeFlag : {
      height : 24,
      width:40,
      borderRadius : 3,
      marginHorizontal: 10
    },
    placeNameContainer : {
        // height:'100%',
        width:WIDTH - 160,
        // backgroundColor:'green'
    },
    placeNameBox : {
      flexDirection:'column',
        width:'100%',
        // height:'100%',
      // backgroundColor:'orange'
    },
    placeName : {
      height:25,
        width:'100%',
        fontSize:14,
      lineHeight:25,
      letterSpacing:.6,
      // backgroundColor:'red'
    },
    placeNameCountry : {
      // height:'100%',
      height:50,
      lineHeight:50,
    },
    placeAddress : {
      // height:'50%',
      width:'100%',
      lineHeight:25,
      letterSpacing:.5,
        // marginLeft:2,
        fontSize:11,
      // backgroundColor:'blue'
    },

    followButton : {
        position:'absolute',
        right : 0, 
        justifyContent:'center',
        height : 50,
        paddingRight: 10,
        // backgroundColor:'red'
    }
  });
  

  export default withNavigation(connect(state, dispatch)(SearchPlaces));