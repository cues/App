import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, View, Text, Animated, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import style from '../../Styles/Styles'; 
import BlurView from '../../Components/BlurVIew/BlurVIew';
import {brand, model, models} from '../../Components/DeviceInfo/DeviceInfo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CardView from 'react-native-cardview';
import ArticleOptions from '../Options/Article_Options/Article_Options';
import Chose from '../Options/Chose_Article_Classified/Chose';
import { withNavigation } from 'react-navigation'

import { connect } from 'react-redux';
import { logout , add_theme_black } from '../../Store/Actions/index';

const state = state => {
    return {
        user            :   state.main.user,
        menuIconColor   :   state.themes.menuIconColor,
        menuIconColor_2   :   state.themes.menuIconColor_2,
        headerColor     :   state.themes.headerColor,
        tabBlur         :   state.themes.tabBlur,
    }
}


const dispatch = dispatch => {
    return {
        this_logout             :   ()   =>  dispatch(logout()),
        this_add_theme_black    :   ()   =>  dispatch(add_theme_black()),
    }
}


const ACCESS_TOKEN = 'access_token';


const HEADER_MAX_HEIGHT = models.includes(model) ? 100 : brand === 'Apple' ? 80 : 70 
const HEADER_MIN_HEIGHT = models.includes(model) ? 70 : brand === 'Apple' ? 55 : 40
const PROFILE_IMAGE_MAX_HEIGHT = 100
const PROFILE_IMAGE_MIN_HEIGHT = 50
const WIDTH = Dimensions.get('window').width;


class ProfileTitle extends Component {


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




    render (){

        const { scrollY, item , menuIconColor , menuIconColor_2, headerColor , tabBlur , refresh, stylesProps, navigation} = this.props;
        const user = item.user;


        const profileImageHeight = scrollY.interpolate({
            inputRange : [0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
            outputRange : [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
            extrapolate:'clamp'
        })

        const profileImageMarginTop = scrollY.interpolate({
            inputRange : [0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT],
            outputRange : [ HEADER_MAX_HEIGHT - (PROFILE_IMAGE_MAX_HEIGHT/2), HEADER_MAX_HEIGHT + 2],
            extrapolate:'clamp'
        })


        const userPlace = (
            user.user_place_id != null || user.user_place_id != '' ?
                <TouchableOpacity style={styles.profilePlace}>
                    <MaterialIcons style={styles.profilePlaceIcon} name='place' size={20} color={menuIconColor} />
                    <Text style={[style.ca, styles.profilePlaceText, {color:menuIconColor}]}>{user.user_place}</Text>
                </TouchableOpacity>
            : null
        )


        const userBio = (
            user.user_bio != null || user.user_bio != '' ?
                <Text style={[style.ca, styles.profile, styles.profileBio, {color:menuIconColor}]}>{user.user_bio}</Text>
            : null
        )

        const userWebsite = (
            user.user_website != null || user.user_website != '' ?
                <TouchableOpacity style={styles.profileWebsite}>
                    <Text style={[style.ca, styles.profile, styles.profileWebsiteText, {color:menuIconColor}]}>{user.user_website}</Text>
                </TouchableOpacity>
            : null
        )

            const CreatedView = Platform.OS == 'ios' ? CardView : View;
        return (
            <View style={stylesProps}>
                <View style={styles.container}>
                    <Animated.View style={[styles.userImageContainer, {height:profileImageHeight, width:profileImageHeight, marginTop:profileImageMarginTop}]}>
                        <Image style={styles.userImage} source={{uri : user.user_image}} />
                    </Animated.View>

                    <View style={styles.profileBox}>

                        <Text style={[style.ca, styles.profile, styles.profileName, {color:menuIconColor}]}>{user.user_name}</Text>
                        <Text style={[style.ca, styles.profile, styles.profileUsername, {color:menuIconColor}]}>{user.username}</Text>
                        {userBio}
                        {userWebsite}
                        {userPlace}


                        <View  style={styles.profileSocial}>
                            <TouchableOpacity><FontAwesome name='facebook' size={19} style={[styles.profileSocial_Each, style.facebook_color]}/></TouchableOpacity>
                            <TouchableOpacity><FontAwesome name='instagram' size={19} style={[styles.profileSocial_Each, style.instagram_color]}/></TouchableOpacity>
                            <TouchableOpacity><FontAwesome name='twitter' size={19} style={[styles.profileSocial_Each, style.twitter_color]}/></TouchableOpacity>
                            <TouchableOpacity><FontAwesome name='youtube' size={19} style={[styles.profileSocial_Each, style.youtube_color]}/></TouchableOpacity>
                        </View>


                        <View  style={styles.profileSide}>
                    
                                    <CreatedView  style={[styles.profileSide_Each, {backgroundColor:Platform.select({android:headerColor})}]} cardElevation={1} cardMaxElevation={1} cornerRadius={0}>
                                        <TouchableOpacity style={[styles.profileSide_EachOverflow, ]} onPress={this.logout}>
                                                    <BlurView viewRef={1}  blurType={tabBlur} blurAmount={1} />   
                                                    <MaterialIcons style={[styles.profileSide_Each_Text]} name='power-settings-new' size={25} color={menuIconColor} />
                                        </TouchableOpacity>
                                    </CreatedView>

                                    <CreatedView  style={[styles.profileSide_Each, {backgroundColor:Platform.select({android:headerColor})}]} cardElevation={1} cardMaxElevation={1} cornerRadius={0}>
                                        <TouchableOpacity style={styles.profileSide_EachOverflow} onPress={() => navigation.navigate('Account', {name:'ACCOUNT'})}>
                                                    <BlurView viewRef={1}  blurType={tabBlur} blurAmount={1} />   
                                                    <MaterialIcons style={[styles.profileSide_Each_Text]} name='edit' size={21} color={menuIconColor}/>
                                        </TouchableOpacity>
                                    </CreatedView>
                        </View>

                    </View>
                </View>
               

                <Chose refresh={refresh}/>

                <ArticleOptions routeName='profile' headerText={user.user_name}/>

            </View>
        )
    }
}



const styles = StyleSheet.create({
    container : {
        marginHorizontal : 10, 
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
    profileBox : {
        margin:10,
        marginBottom:25,
        width : WIDTH  - 20
    },
  
    profileSocial : {
        height : 50,
        width : WIDTH - 165,
        position : 'absolute',
        right : 50 , 
        top : -60,
        // backgroundColor:'blue',
        flexDirection:'row',
        alignItems : 'center',
        justifyContent : 'space-evenly'
    },
    profileSocial_Each : {
        height : 30,
        lineHeight : 30,
        textAlign:'center',
        width: 30,

        // backgroundColor:'green',
    },
  
    profileSide : {
        height : 80,
        width : 50,
        position : 'absolute',
        right : -10 , 
        top : -52,
        // backgroundColor:'red',
        alignItems:'flex-end',
        justifyContent:'space-between'
    },
  
    profileSide_Each : {
        width : 45,
        height : 35,
   
        borderWidth : Platform.select({android : 1 , ios :0}),
        borderColor: 'rgba(23,23,23,.1)',
        borderTopLeftRadius : 5,
        borderBottomLeftRadius : 5,
        // borderRadius: 10,
    },
    profileSide_EachOverflow : {
        overflow:'hidden',
        borderTopLeftRadius : 3,
        borderBottomLeftRadius : 3,
    },
    profileSide_Each_Text : {
        lineHeight : 35,
        width: 45,
        textAlign:'center',
        // backgroundColor:'green',
    },
    profile : {
        lineHeight : 22,
        width : '100%',
        // backgroundColor:'red',
        marginTop: 5,
        letterSpacing: 1,
    },
    profileName:{
        fontSize:19,
        textTransform : 'uppercase'
    },
    profileUsername : {
        fontSize:17,
        textTransform : 'lowercase'
    },
    profilePlace : {
        height : 22,
        width : '100%',
        marginTop: 10,
        flexDirection : 'row' ,   
    },
    profilePlaceIcon : {
        lineHeight : 22,
        width: 22,
        textAlign:'center'
    },
    profilePlaceText : {
        lineHeight : 22,
        fontSize:19,
        letterSpacing: 1, 
        marginLeft: 2   
    },
    profileBio : {
        marginTop: 10,
        fontSize:16,
        lineHeight : 20,
        letterSpacing: .6, 
    },
    profileWebsite : {
        marginTop: 10,
    },
    profileWebsiteText : {
        marginTop:0,
        fontSize:17,
    }
    
})

export default withNavigation(connect(state, dispatch)(ProfileTitle));