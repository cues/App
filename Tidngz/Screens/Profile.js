import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Text, View, Animated, TouchableOpacity, FlatList, Image, AsyncStorage} from 'react-native';
import style from '../Styles/Styles'; 
import BlurView from '../Components/BlurVIew/BlurVIew';
import Header from './Headers/Header';
// import { BlurView, VibrancyView } from 'react-native-blur';
import {brand, model, models} from '../Components/DeviceInfo/DeviceInfo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import { logout , add_theme_black } from '../Store/Actions/index';

const state = state => {
  return {
      backgroundMain    :   state.themes.backgroundMain,
      user_image        :   state.main.user.user_image,
      username          :   state.main.user.username,
      user_name          :   state.main.user.user_name,
      tabBlur          :   state.themes.tabBlur,
      headerColor          :   state.themes.headerColor
    };
};

const dispatch = dispatch => {
    return {
        this_logout             :   ()   =>  dispatch(logout()),
        this_add_theme_black    :   ()   =>  dispatch(add_theme_black()),
    }
}


HEADER_MAX_HEIGHT = models.includes(model) ? 100 : brand === 'Apple' ? 80 : 70 
HEADER_MIN_HEIGHT = models.includes(model) ? 70 : brand === 'Apple' ? 55 : 40
PROFILE_IMAGE_MAX_HEIGHT = 100
PROFILE_IMAGE_MIN_HEIGHT = 50


const ACCESS_TOKEN = 'access_token';

 class Profile extends Component {

    state = {
        user : [{
            key : '1',
            user_image : this.props.user_image,
            user_name : this.props.user_name
        }],
        scrollY : new Animated.Value(0)
    }
   
    static navigationOptions = ({navigation}) =>  {
        return {
                  headerTransparent : true,
                  header: null,
                //   headerBackgroundTransitionPreset : 'fade', 
          }
      } 
  
  
    logout = () => {
        this.removeToken()
        this.props.this_add_theme_black()
        this.props.this_logout();
    }

    removeToken = async () => {
        try {
            await AsyncStorage.removeItem(ACCESS_TOKEN);
        } catch (error) {
            // console.warn('something went wrong')
        }
    }

    renderItem = ({item}) => {

        const profileImageHeight = this.state.scrollY.interpolate({
            inputRange : [0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
            outputRange : [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
            extrapolate:'clamp'
        })

        const profileImageMarginTop = this.state.scrollY.interpolate({
            inputRange : [0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
            outputRange : [ HEADER_MAX_HEIGHT - (PROFILE_IMAGE_MAX_HEIGHT/2), HEADER_MAX_HEIGHT + 2],
            extrapolate:'clamp'
        })

       

    return (
            <View key ='1'>
                 
                <Animated.View style={[styles.userImageContainer, {height:profileImageHeight, width:profileImageHeight, marginTop:profileImageMarginTop}]}>
                    <Image style={styles.userImage} source={{uri : item.user_image}} />
                </Animated.View>

                <Text style={[style.bt, styles.user_name]}>{item.user_name}</Text>

                <MaterialIcons name='power-settings-new' size={30} color='black' onPress={this.logout}/>

                <View style={{height: 1000, backgroundColor:''}}/>
            </View>
            )
        
    }

    _keyExtractor = (item, index) => item.key;
    



  render() {
    const {backgroundMain, tabBlur, user_name, headerColor} = this.props

    const headerHeight = this.state.scrollY.interpolate({
        inputRange : [0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
        outputRange : [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate:'clamp'
    })

    const header0 = this.state.scrollY.interpolate({
        inputRange : [1,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
        outputRange : [1,0],
        extrapolate:'clamp'
    })

    const header1 = this.state.scrollY.interpolate({
        inputRange : [0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
        outputRange : [0,1],
        extrapolate:'clamp'
    })
   
    const headerTitle = this.state.scrollY.interpolate({
        inputRange : [0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT, 
            HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT+2+PROFILE_IMAGE_MIN_HEIGHT, 
            HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT+2+PROFILE_IMAGE_MIN_HEIGHT+30],
        outputRange : [-30,-30,-30,0],
        extrapolate:'clamp'
    })
                
 

    return (
        <View style={[styles.container, {backgroundColor: backgroundMain}]}>

  
            <Animated.View style={[styles.header, { height:headerHeight, zIndex:header1, opacity:header0,  backgroundColor:Platform.select({android : headerColor , ios :'transparent'}) }]}>
                 <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={17} />      
            </Animated.View>


            <FlatList style={{flex:1}}
                        data = {this.state.user}
                        renderItem = {this.renderItem}
                        keyExtractor={this._keyExtractor}
                        scrollEventThrottle={1}
                        onScroll = {Animated.event(
                            [{nativeEvent : {contentOffset : {y : this.state.scrollY}}}]
                        )}
                       
                    />  

            <Animated.View style= {[styles.headerBlur , {height:headerHeight, opacity:header1,  backgroundColor:Platform.select({android : headerColor , ios :'transparent'}) }]}>
                <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={17} />      
                <Animated.View style={[styles.headerUser_nameContainer, {bottom:headerTitle}]}>
                    <Text style={[style.bt, styles.headerUser_name]}>
                        {user_name} 
                    </Text>
                </Animated.View>  
            </Animated.View>

       </View> 
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
    },
    headerBlur : {
        height: '100%',
        width: '100%',
        position : 'absolute',
        top:0,
        left:0,
        right:0,
        alignItems:'center',
        overflow:'hidden',     
        borderBottomWidth:1,
        borderColor:'rgba(23,23,23,.1)',     
    },
    header: {
        opacity: 1,
          position : 'absolute',
          top:0,
          left:0,
          right:0,
          alignItems:'center',
          borderBottomWidth:1,
          borderColor:'rgba(23,23,23,.1)',
          overflow:'hidden',  
    },
    headerUser_nameContainer : {
        position:'absolute',
    },
    headerUser_name : {
        height: 30,
        lineHeight: 30,
        fontSize : 14,
        color: 'black',
        // backgroundColor:'red',
    },


    userImageContainer : {
          borderRadius : PROFILE_IMAGE_MAX_HEIGHT/2,
        //   borderWidth: 2,
        //   borderColor:'rgba(112,123,123,1)',
          overflow:'hidden',
          marginLeft: 5,
    },
    userImage : {
        flex:1,
        height: null,
        width:null,
    },
    user_name : {
        height : 30,
        lineHeight: 30,
        fontSize : 18,
        color: 'black',
        marginLeft: 5,
    },
 
  });
  


  export default connect(state, dispatch)(Profile);