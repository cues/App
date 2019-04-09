import React, {Component} from 'react';
import {Platform, StatusBar, StyleSheet, Text, View, TouchableOpacity, AsyncStorage} from 'react-native';
import { WebView } from "react-native-webview";
import Header from './Header';
import Footer from './Footer';
import Box from './Box';
import LoginButton from '../../Components/Button/Button';
import Timezone from '../../Components/Timezone/Timezone';
import Input from '../../Components/TextInput/Login';
import FontAwesome from  'react-native-vector-icons/FontAwesome';
import IcoFont from '../../assets/IcoFont/IcoFont';
import BlurView from '../../Components/BlurVIew/BlurVIew';
import style from '../../Styles/Styles';
import { withNavigation } from 'react-navigation';
import {timezone} from '../../Components/Timezone/Timezone';

import ReCaptcha from 'react-native-recaptcha-v3';


import {connect} from 'react-redux'
import { login ,  loginRoute, loginError } from '../../Store/Actions/index'

const state = state => {
    return {
        api               :   state.main.api,
        apiKey            :   state.main.apiKey,
        LoggedIn          :   state.main.LoggedIn,
        backgroundMain    :   state.themes.backgroundMain,
        menuIconColor     :   state.themes.menuIconColor,      
        menuIconColor2    :   state.themes.menuIconColor2,      
        tabBlur           :   state.themes.tabBlur,
    }
}

const dispatch = dispatch => {
    return {
        this_login               :  response    =>   dispatch(login(response)),
        this_login_route         :  route       =>   dispatch(loginRoute(route)),
        this_loginError          :  error       =>   dispatch(loginError(error))
    }
}

const ACCESS_TOKEN = 'access_token';


class SignUp extends Component {

    constructor(props){
        super(props)


        this.state = {
            name     : null,
            username : null,
            email    : null,
            password : null,
            gender   : null,
            ip       : null,
            captcha  : null,
            timezone : timezone()
        }


        fetch('https://api.ipify.org/?format=json')
        .then((response) => response.json())
        .then((response) => {

            this.setState({
               ip :  response.ip
            })
        })

    }



    navigate = (route) => {
        this.props.this_login_route(route)
        this.props.navigation.navigate(route)
    }

    sexHandler = type => {
        this.setState({
            gender   : type,
        })
    }
   
    changeHandler = (value, type) => {
        if(type == 'NAME'){
            this.setState({
                name  : value,
            })
        }
        if(type == 'USERNAME'){
            this.setState({
                username  : value,
            })
        }
        if(type == 'EMAIL'){
            this.setState({
                email  : value,
            })
        }
        if(type == 'PASSWORD'){
            this.setState({
                password  : value,
            })
        }
    }

      
  
    signUp = async () => {


        const { api, apiKey } = this.props;
        let { name, username, email, password, gender, captcha, ip, timezone } = this.state;


        let isfalse = true;

            name     == null ? this.props.this_loginError('Please enter your name')
        :   username == null ? this.props.this_loginError('Please enter a username')
        :   email    == null ? this.props.this_loginError('Please enter an email')
        :   password == null ? this.props.this_loginError('Please enter a password') 
        :   gender   == null ? this.props.this_loginError('Please select your gender') 
        :   isfalse = false;
        
        if(!isfalse){

            const url = `${api}/LoginSignUp/SignUp/signUp.php?key=${apiKey}&type=app&name=${name}&username=${username}&email=${email}&password=${password}&gender=${gender}&captcha=${captcha}&timezone=${timezone}&ip=${ip}`;

            await fetch(url)
            .then((response) => response.json())
            .then((response) => {
                console.warn(response)
    
                if(response.data.error){
                    this.props.this_loginError(response.data.errorReason)
                }
                else if(response.data.success){

                    accessToken = response.data.user.token
                    this.storeToken(accessToken)
                    this.props.this_login(response);
                    
                }
            
            })

        }

    }



    storeToken = async (accessToken) => {
        try {
            await AsyncStorage.setItem(ACCESS_TOKEN , accessToken);
        } catch (error) {
            // console.warn('something went wrong')
        }
    }






    captureResponseToken = value => {
        this.setState({
            captcha  : value,
        })
      }



    

  render() {

   


    const {backgroundMain, tabBlur, menuIconColor, menuIconColor2, navigation} = this.props

    const { gender , captcha , timezone } = this.state;


    const { signUp, sexHandler, changeHandler } = this;

    const maleColor = gender == 1 ? 'rgba(15,101,141,1)' : menuIconColor;
    const femaleColor = gender == 2 ? 'rgba(15,101,141,1)' : menuIconColor;
    const businessColor = gender == 3 ? 'rgba(15,101,141,1)' : menuIconColor;

    statusBar   =  navigation.getParam('statusBar', true)
    statusBar ? StatusBar.setHidden(false) : StatusBar.setHidden(true)

    return (
   
      <View style={[styles.container, {backgroundColor: backgroundMain}]}>


        <ReCaptcha containerStyle={{height: 0, width: 0, display:'none'}}
          siteKey="6LdIbHoUAAAAAIxRboHzAh1OIH8wlp-a1V5c53JV"
          url={'https://www.tidngz.com/'}
          action='signup'
          onExecute={this.captureResponseToken.bind(this)}
        />


            <Box theme='signUp'>


                <Input textContentType = 'name' placeholder = 'NAME' iconName = 'person' maxLength = {30} handleChange = {changeHandler}/>

                <Input textContentType = 'username' placeholder = 'USERNAME' iconName = 'person-outline' maxLength = {25} handleChange = {changeHandler}/>
                
                <Input textContentType = 'name' placeholder = 'EMAIL' iconName = 'mail-outline' handleChange = {changeHandler} />

                <Input textContentType = 'password' secureTextEntry = {true} placeholder = 'PASSWORD' iconName = 'lock-outline' handleChange = {changeHandler} />

                <View style={styles.choseSex}>
                    <TouchableOpacity style={styles.eachChoseSex} onPress={() => sexHandler(1)}>
                        <Text style={[styles.text, style.ci, {color:maleColor}]}>Male</Text>
                        <IcoFont style={styles.icon1} name="business-man" size={21} style={[styles.icon]} color={maleColor} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.eachChoseSex} onPress={() => sexHandler(2)}>
                        <Text style={[styles.text, style.ci, {color:femaleColor}]}>Female</Text>
                        <IcoFont style={styles.icon1} name="girl-alt" size={21} style={[styles.icon]} color={femaleColor} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.eachChoseSex} onPress={() => sexHandler(3)}>
                        <Text style={[styles.text, style.ci, {color:businessColor}]}>Business</Text>
                        <FontAwesome style={styles.icon1} name="user-o" size={20} style={[styles.icon]} color={businessColor} />
                    </TouchableOpacity>
                </View>

                <LoginButton text='SIGNUP' styleProps={styles.button} handler={signUp}/>
                <Text style={[styles.buttonBottom, style.ci, {color:menuIconColor2}]}>By signing up, you accept to our terms.</Text>

                <View style={style.line_3}/>

                <TouchableOpacity style={styles.options} onPress={() => this.navigate('Login')}>
                    <Text style={[styles.optionsText, style.ci, {color:menuIconColor2}]}>Already have an account ? <Text style={[style.tidngz_color, style.cib]}> LOGIN</Text></Text>
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
    button:{
        marginBottom: 0,
    },
    buttonBottom : {
        lineHeight:20,
        width : 300,
        fontSize: 10,
        textAlign:'center',
        letterSpacing:.7,
        marginBottom: 20,
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
 

    choseSex: {
        width : 300,
        // backgroundColor:'white',
        marginTop:30,
        justifyContent:'space-around',
        flexDirection:'row'
    },
    eachChoseSex :{
        height : 55,
        width:70,
    },
    text :{
        lineHeight:15,
        width:70,
        fontSize:12,
        letterSpacing:1,
        textAlign:'center',
        textShadowColor: 'rgba(0,0,0, 0.3)',
        textShadowOffset: {width: 1, height: 1},
        // backgroundColor:'red'
    },
    icon : {
        lineHeight: 40,
        width:70,
        textAlign:'center',
        textShadowColor: 'rgba(0,0,0, 0.3)',
        textShadowOffset: {width: 1, height: 1},
        // backgroundColor:'red'
    },

});
  

  export default withNavigation(connect(state, dispatch)(SignUp))