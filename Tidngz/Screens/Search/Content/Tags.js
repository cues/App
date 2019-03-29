import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions} from 'react-native';
import style from '../../../Styles/Styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { withNavigation } from 'react-navigation';

const WIDTH = Dimensions.get('window').width;

import { connect } from 'react-redux';

const state = state => {
    return {
        tabBlur             :   state.themes.tabBlur,
        menuIconColor       :   state.themes.menuIconColor,
    }
}

class SearchTags extends Component {



  render() {
    const {tag, menuIconColor, tabBlur, navigation} = this.props



    return (

                <TouchableOpacity style={styles.eachSearch}  onPress={() => navigation.navigate('TagsTitle')}>

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
  

  export default withNavigation(connect(state)(SearchTags));