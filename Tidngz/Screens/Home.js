import React, {Component} from 'react';
import {Platform, StyleSheet, View, TouchableOpacity, Image, Text, ImageBackground, Button, Animated} from 'react-native';
import Articles from '../Functions/Articles/ArticleList';
import style from '../Styles/Styles'; 
import Theme from '../Components/Themes/Themes';
import {brand, model, models} from '../Components/DeviceInfo/DeviceInfo';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Header from './Headers/Home/Header';
import BlurView from '../Components/BlurVIew/BlurVIew';
import { _handleScroll } from '../Components/HeaderScroll/HeaderScroll'



import { connect } from 'react-redux';

const state = state => {
  return {
      backgroundMain         :   state.themes.backgroundMain,
    };
};

HOME_HEADER_MAX_HEIGHT = models.includes(model) ? 96 : brand === 'Apple' ? 70 : 50 
HOME_HEADER_MIN_HEIGHT = models.includes(model) ? 45 : brand === 'Apple' ? 42 : 50



class Home extends Component {

    state = {
        scrollAnim: new Animated.Value(0),
        offsetAnim: new Animated.Value(0),
    }


    // static navigationOptions = ({navigation}) =>  {
    //   return {
    //       header: null,
    //       headerTransparent : true,

    //             // headerTransparent : true,
    //             // headerBackground : <Header/>,
    //             // headerBackgroundTransitionPreset : 'fade', 
    //             // headerTitle: (
    //             //     <Image style={styles.headerTitle} resizeMode={'cover'} source = {{uri : 'https://www.wedngz.com/Tidngz/User_Images/tidngz.png'}}/>
    //             // ),
    //             // headerLeft: (
    //             //     <HeaderIcons type='Home' position='Left' navigation={navigation}/>  
    //             // ),
    //             // headerRight: (
    //             //     <HeaderIcons type='Home' position='Right' navigation={navigation}/>   
    //             // )
    //     }
    // } 


    handleMomentumScrollBegin = (event) => {
      
        this._previousScrollvalue = event.nativeEvent.contentOffset.y;

    };
        
  
    handleScroll = (event) => {

        this._currentScrollValue = event.nativeEvent.contentOffset.y;

        _handleScroll(this._previousScrollvalue, this._currentScrollValue, HOME_HEADER_MAX_HEIGHT, this.state.offsetAnim)

    };


  render() {


    const {backgroundMain} = this.props

  

    return (
   
      <View style={[styles.container, {backgroundColor: backgroundMain}]}>
        <Theme/>
       
        <Articles 
            type = 'home'
            scrollAnim = {this.state.scrollAnim}
            handleScroll = {this.handleScroll}
            onMomentumScrollBegin = {this.handleMomentumScrollBegin}
        />

        <Header scrollAnim={this.state.scrollAnim} 
             offsetAnim={this.state.offsetAnim}
             />

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
      width:'100%',
    },
  });



  export default connect(state)(Home);
  