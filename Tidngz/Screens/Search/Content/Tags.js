import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions} from 'react-native';
import style from '../../../Styles/Styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
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
  
  

class SearchTags extends Component {

    navigate = tag_id => {

        const { api, apiKey, user_id , navigation, this_search_history} = this.props;
    
        navigation.navigate('TagsTitle')
    
        const url = `${api}/Search/search.php?key=${apiKey}&user_id=${user_id}&type=add&item_id=${tag_id}&item_type=TAG`;
          
        fetch(url)
        .then((response) => response.json())
        .then((response) => {
     
            this_search_history(response.data.count, response.data.items)
        })
      }
    

  render() {
    const {tag, menuIconColor, tabBlur, navigation} = this.props



    return (

                <TouchableOpacity style={styles.eachSearch} onPress={() => this.navigate(tag.tag_id)}>

                        <FontAwesome5 style={styles.tagIcon} name="slack-hash" size={25} color={menuIconColor} />
                        <Text style={[style.bt, styles.tagText, {color:menuIconColor}]}>{tag.tag} </Text>

                </TouchableOpacity>
          
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
    tagIcon : {
        height: 40,
        width: 40,
        lineHeight:40,
        textAlign:'center',
        borderRadius: 25,
        marginHorizontal: 10,
        transform: [{ rotate: '25deg'}]
        // backgroundColor:'blue'
    },
    tagText :{
        height: 40,
        lineHeight : 40,
        fontSize:15,
        letterSpacing:.6
    }
    
  });
  

  export default withNavigation(connect(state, dispatch)(SearchTags));