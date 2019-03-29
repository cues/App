import React from 'react';
import {Platform, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import { withNavigation } from 'react-navigation';
import Feather from 'react-native-vector-icons/Feather';
import BlurView from '../../Components/BlurVIew/BlurVIew';

import { connect } from 'react-redux';

const state = state => {
  return {
      headerColor     :   state.themes.headerColor,
      tabBlur         :   state.themes.tabBlur,
  };
};


const header = (props) => {

    const {headerColor, tabBlur} = props;


    return(
        <View style={[styles.container, {backgroundColor:Platform.select({android : headerColor , ios :'transparent'})}]}>
            <BlurView style= {styles.header} viewRef={1}  blurType={tabBlur} blurAmount={17} />
        </View>
    )
      
};

const styles = StyleSheet.create({
    container :{
        borderBottomWidth:1,
        borderColor:'rgba(23,23,23,.1)'
    },
    header : {
        paddingTop:20, 
        height:'100%', 
        width:'100%', 
        flexDirection: 'row',
        // alignSelf: "center", 
        // marginLeft: "auto", 
        // marginRight: "auto",
        borderBottomWidth:1,
        borderColor:'rgba(23,23,23,.1)',
    },
  });
export default connect(state)(header);
