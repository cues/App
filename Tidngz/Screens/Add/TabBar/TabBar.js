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
import Error from  '../../../Components/Error/Error';
import addStyle from '../../../Styles/Add';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { connect } from 'react-redux';
import { error, error_2, headline_active} from '../../../Store/Actions/index';

const state = state => {
  return {
      headerColor       :   state.themes.headerColor,
      tabBlur           :   state.themes.tabBlur,
      selectedArticle   :   state.articles.selectedArticle,
      menuIconColor2          :   state.themes.menuIconColor2,
      headline                :   state.addArticles.add_headline,
      headlineActive          :   state.addArticles.headlineActive,
  };
};

const dispatch = dispatch => {
  return {
      this_error            : text => dispatch(error(text)),
      this_error_2          :  () => dispatch(error_2()),
      this_headline_active  : () => dispatch(headline_active()),
  }
}



class TabBar extends Component  {

  constructor(props){
    super(props)
    this.state = {
      headlineActive      : true,
      placeActive         : false,
      catTagLinkActive    : false,
      LinkArticleActive   : false,
    }
  }



  // headline
    navigateForwardHeadline = () => {

      const { headline , this_error, this_error_2, navigation} = this.props

      headline == null ? this_error('Please write a headline for your article') : navigation.navigate('AddPlace')
      
      setTimeout(() => {
        headline == null ? this_error_2() : null
      },3000)

      if(headline != null){
        this.setState(prevState => ({
          headlineActive : !prevState.headlineActive,
          placeActive    : !prevState.placeActive
        }))
      }
   
    }



  // place

    navigateBackPlace = () => {

      this.props.navigation.navigate('Headline')

        this.setState(prevState => ({
          headlineActive : !prevState.headlineActive,
          placeActive    : !prevState.placeActive
        }))
      

    }

    navigateForwardPlace = () => {

      this.props.navigation.navigate('AddCatTagLink')

      this.setState(prevState => ({
        placeActive       : !prevState.placeActive,
        catTagLinkActive  : !prevState.catTagLinkActive,
      }))
      
    }





    // Category tags link
    navigateBackCatTagLink = () => {

      this.props.navigation.navigate('AddPlace')

      this.setState(prevState => ({
        placeActive       : !prevState.placeActive,
        catTagLinkActive  : !prevState.catTagLinkActive,
      }))

    }

    navigateForwardCatTagLink = () => {

      this.props.navigation.navigate('AddPlace')

      this.setState(prevState => ({
        catTagLinkActive    : !prevState.catTagLinkActive,
        LinkArticleActive   : !prevState.LinkArticleActive,
      }))

    }



  render(){


    const { navigation , headerColor, tabBlur, menuIconColor2 }      = this.props;
    const { routes , index  }  = navigation.state;
    const { headlineActive, placeActive , catTagLinkActive} = this.state;


    const displayHeadline = (
        headlineActive ? 
          <View style={addStyle.bottomBox}>
            <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]}>
              <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='drafts' size={23}/>
            </TouchableOpacity>
            <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]} onPress={this.navigateForwardHeadline}>
              <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='arrow-forward' size={25}/>           
            </TouchableOpacity>
          </View> 
        : null
    )


    const displayPlace  = (
        placeActive ?
            <View style={addStyle.bottomBox}>
              <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]} onPress={this.navigateBackPlace}>
                <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='arrow-back' size={23}/>
              </TouchableOpacity>
              <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]} onPress={this.navigateForwardPlace}>
                <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='arrow-forward' size={25}/>           
              </TouchableOpacity>
            </View> 
            : null

    )


    const displayCatTagLink = (
      catTagLinkActive ? 
        <View style={addStyle.bottomBox}>
          <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]} onPress={this.navigateBackCatTagLink}>
            <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='arrow-back' size={23}/>
          </TouchableOpacity>
          <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]} onPress={this.navigateForwardCatTagLink}>
            <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='arrow-forward' size={25}/>           
          </TouchableOpacity>
        </View> 
        : null
    )


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
        

              {displayHeadline}
              {displayPlace}
              {displayCatTagLink}
             

              <Error/>

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
    // overflow:'hidden', 
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


  export default connect(state, dispatch)(TabBar);
