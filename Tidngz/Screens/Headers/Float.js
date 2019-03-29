import React from 'react';
import {Platform, View, Text, StyleSheet} from 'react-native';
import GoBack from './goBack';
import headerStyle from './HeaderStyles';
import Header from '../Headers/Header';
// import HeaderIcons from '../Headers/HeaderIcons';

export default navigationOptions = ({navigation}) => {
  
    const type = navigation.getParam('type' , 0)

    const fontSize      = type == 'options' ? 17 : 18 
    const letterSpacing = type == 'options' ? 1.3 : 1.4
  
    return {
        headerTitle: navigation.getParam('name'),
        headerTransparent : true,
        headerBackground : <Header/>,
        headerBackgroundTransitionPreset : 'fade', 
        headerTitleStyle:{
            minWidth:240,
            // backgroundColor:'red',
            fontFamily :'Monoton-Regular',
            fontSize:fontSize,
            fontWeight:Platform.select({android:'200'}),
            letterSpacing:letterSpacing,
            textAlign:'center',
            alignSelf: "center", 
            flexGrow:1,
            color:'rgba(15,101,141,1)',
            textShadowColor: 'rgba(0,0,0, .4)',
            textShadowOffset: {width: 1, height: -0},
            textShadowRadius: 1
        },
        headerRight: (
            <View/>
        ),
        headerLeft: (
            <GoBack navigation = {navigation}/>
        ),
    }
};
