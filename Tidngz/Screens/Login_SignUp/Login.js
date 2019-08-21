import React, {Component} from 'react';
import {Platform,StatusBar, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Header from './Header';
import Footer from './Footer';
import Box from './Box';
import LoginButton from '../../Components/Button/Button';
import Input from '../../Components/TextInput/Login';
import FontAwesome from  'react-native-vector-icons/FontAwesome';
import BlurView from '../../Components/BlurVIew/BlurVIew';
import style from '../../Styles/Styles';
import { withNavigation } from 'react-navigation';
import {timezone} from '../../Components/Timezone/Timezone';

import {connect} from 'react-redux'
import { login , add_theme_white, add_theme_black, loginRoute, loginError } from '../../Store/Actions/index'

const state = state => {
    return {
        api               :   state.main.api,
        apiKey            :   state.main.apiKey,
        backgroundMain    :   state.themes.backgroundMain,
        menuIconColor     :   state.themes.menuIconColor,      
        menuIconColor2    :   state.themes.menuIconColor2,      
        tabBlur           :   state.themes.tabBlur,
    }
}

const dispatch = dispatch => {
    return {
        this_login               :   userData   =>  dispatch(login(userData)),
        this_add_theme_black     :   ()         =>   dispatch(add_theme_black()),
        this_add_theme_white     :   ()         =>  dispatch(add_theme_white()),
        this_login_route         :   route      =>  dispatch(loginRoute(route)),
        this_loginError          :   error      =>  dispatch(loginError(error))
    }
}

const ACCESS_TOKEN = 'access_token';


class Login extends Component {

    // static navigationOptions = () =>  {
    //     return {
    //         header: <Header/>
    //     }
    // }
  
    state = {
        username : null,
        password : null
    }


    navigate = (route) => {
        this.props.this_login_route(route)
        this.props.navigation.navigate(route)
    }


    changeHandler = (value, type) => {
        if(type == 'USERNAME'){
            this.setState({
                username  : value,
            })
        }
        if(type == 'PASSWORD'){
            this.setState({
                password  : value,
            })
        }
     }


    login = async () => {


        await fetch('https://api.ipify.org/?format=json')
        .then((response) => response.json())
        .then((response) => {

                const { api, apiKey } = this.props;
                const { username, password } = this.state;

                const url = `${api}/LoginSignUp/Login/login.php?key=${apiKey}&type=login&username=${username}&password=${password}&ip=${response.ip}&timezone=${timezone()}`;

                console.warn(url)
        
                fetch(url)
                .then((response) => response.json())
                .then((response) => {



                    if(response.data.error){
                        this.props.this_loginError('Please check your username or password')
                    }
                    else{

                        accessToken = response.data.user.token
                        this.storeToken(accessToken)
                        response.data.user.user_dark_mode || !response.data.user.user_active ? this.props.this_add_theme_black() : this.props.this_add_theme_white()
                        this.props.this_login(response);
                    }
                
                })

        })



    }

    storeToken = async (accessToken) => {
        try {
            await AsyncStorage.setItem(ACCESS_TOKEN , accessToken);
        } catch (error) {
            // console.warn('something went wrong')
        }
    }

  

    
  render() {
    const { backgroundMain, tabBlur, menuIconColor2, navigation } = this.props
    const { changeHandler } = this;

    statusBar   =  navigation.getParam('statusBar', true)
    statusBar ? StatusBar.setHidden(false) : StatusBar.setHidden(true)

    return (
   
      <View style={[styles.container, {backgroundColor: backgroundMain}]}>
          
            <Box theme='login'>

                <Text style={[styles.socialLoginText, style.ma]}>LOGIN WITH</Text>

                <View style={styles.socialLogin}>
                    <TouchableOpacity><FontAwesome name='google' size={26} style={[styles.icon, style.google_color_light]}/></TouchableOpacity>
                    <TouchableOpacity><FontAwesome name='facebook' size={26} style={[styles.icon, style.facebook_color]}/></TouchableOpacity>
                    <TouchableOpacity><FontAwesome name='twitter' size={26} style={[styles.icon, style.twitter_color_light]}/></TouchableOpacity>
                </View>

                <View style={styles.or}>
                    <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={1} />                  
                    <Text style={[styles.orText, style.ch]}>OR</Text>
                </View>

                <Input textContentType = 'username' placeholder = 'USERNAME' iconName = 'person-outline' maxLength = {25}  handleChange = {changeHandler}/>
                
                <Input textContentType = 'password' secureTextEntry = {true} placeholder = 'PASSWORD' iconName = 'lock-outline'  handleChange = {changeHandler}/>

                <LoginButton text='LOGIN' styleProps={styles.button} handler={this.login}/>

                <View style={style.line_3}/>

                <TouchableOpacity style={styles.options} onPress={() => this.navigate('ForgotPassword')}>
                    <Text style={[styles.optionsText, style.ci, {color:menuIconColor2}]}>Forgot Password</Text>
                </TouchableOpacity>

                <View style={style.line_3}/>

                <TouchableOpacity style={styles.options} onPress={() => this.navigate('SignUp')}>
                    <Text style={[styles.optionsText, style.ci, {color:menuIconColor2}]}>Dont have an account ? <Text style={[style.tidngz_color, style.cib]}> SIGN UP</Text></Text>
                </TouchableOpacity>



            </Box>

            <Footer/>

       </View> 
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    options : {
       height : 30,
        width : 300,
        marginVertical : 15
    },
    optionsText : {
        lineHeight:30,
        width : 300,
        fontSize: 12,
        textAlign:'center',
        letterSpacing:1
    },
    socialLoginText :{
        color: 'rgba(15, 101, 141, 1)',
        height :35, 
        lineHeight : 35,
        width: 300,
        fontSize:13, 
        letterSpacing:2,
        textAlign:'center',
      fontWeight:Platform.select({android: '400', ios:'bold'}),
      textShadowColor: 'rgba(0,0,0, 0.7)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius:1        
    }, 
    socialLogin: {
        height : 50,
        width : 300,
        // backgroundColor:'white',
        marginVertical:10,
        justifyContent:'space-around',
        flexDirection:'row'
    },
    iconContainer : {
        // height : 40,
        // width:40,
        // backgroundColor:'red'
    },
    icon : {
        lineHeight: 50,
        width:50,
        textAlign:'center',
        textShadowColor: 'rgba(0,0,0, 0.7)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius:1        
        // backgroundColor:'red'
    },
    or : {
        height : 20,
        width: '100%',
        // backgroundColor:'rgba(255,255,255,.6)',
        marginVertical : 10,
    },
    orText : {
        color: 'rgba(14, 101, 141, 1)',
        fontSize: 12,
        lineHeight : 21,
        textAlign:'center',
        width: '100%',
        letterSpacing:2,
        fontWeight:Platform.select({android: '400', ios:'bold'}),
    },

});
  

  export default withNavigation(connect(state, dispatch)(Login))