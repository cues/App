import React ,{Component} from 'react';
import { Platform, StyleSheet , Text, View, TouchableOpacity , StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import BlurView from '../../../Components/BlurVIew/BlurVIew';
import TabBarItems  from './TabBarItems';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {brand, model, models} from '../../../Components/DeviceInfo/DeviceInfo';
import style from '../../../Styles/Styles'
import Footer from '../../../Functions/Articles/Footer';

import { connect } from 'react-redux';

const state = state => {
  return {
      headerColor       :   state.themes.headerColor,
      tabBlur           :   state.themes.tabBlur,
      selectedArticle   :   state.articles.selectedArticle,
  };
};


class TabBar extends Component  {

  render(){


    const { navigation , headerColor, tabBlur }      = this.props;
    const { routes , index  }  = navigation.state;


    const TabBarItem = (
      routes.map((route, i) => (
          <TabBarItems navigation={navigation} key={route.routeName} {...route} isActive = {index === i}/>
      ))
    )
      return (
        <View  style={[styles.container, {backgroundColor:Platform.select({android : headerColor})}]}>
          

              <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={17} /> 


              <View style={styles.Animatable}>
                      {TabBarItem} 
              </View>
        


        </View>
    
      );
  }

}


const styles = StyleSheet.create({
  container:{
    width:'100%', 
    height: brand === 'Apple' ? models.includes(model) ? 88 : 68 : 50,
    position: 'absolute',
    right: 0,
    left: 0,
    top:0,
    overflow:'hidden', 
    zIndex:100
  },

  Animatable :{ 
    width:'100%',
    height:50,
    position: 'absolute',
    right: 0,
    left: 0,
    bottom:0,   
    flexDirection:'row',
  },

  });


  export default connect(state)(TabBar);
