import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import Input from '../../../Components/TextInput/User';
import SaveButton from '../../../Components/Button/Button';
import style from '../../../Styles/Styles'
import MaterialIcons from  'react-native-vector-icons/MaterialIcons';
import BlurView from '../../../Components/BlurVIew/BlurVIew';

import { login , error, error_2 , success, success_2, deleteUserImage , home_refresh , profile_refresh} from '../../../Store/Actions/index'

const state = state => {
    return {
        api             :   state.main.api,
        apiKey          :   state.main.apiKey,
        token           :   state.main.user.token,
        user_id         :  state.main.user.user_id,
        user_facebook   :  state.main.user.user_facebook,
        user_instagram  :  state.main.user.user_instagram,
        user_twitter    :  state.main.user.user_twitter,
        user_youtube    :  state.main.user.user_youtube,
        user_website    :  state.main.user.user_website,
        user_bio        :  state.main.user.user_bio,
        menuIconColor   :  state.themes.menuIconColor,
        menuIconColor_2 :  state.themes.menuIconColor_2,
        accountFloat    :  state.themes.accountFloat,
        tabBlur         :   state.themes.tabBlur,
    }
}

const dispatch = dispatch => {
    return {
        this_login               :   userData    =>  dispatch(login(userData)),
        this_error               :   text        =>  dispatch(error(text)),
        this_error_2             :   ()          =>  dispatch(error_2()),
        this_success             :   text        =>  dispatch(success(text)),
        this_success_2           :   ()          =>  dispatch(success_2()),
        this_deleteUserImage     :   user        =>  dispatch(deleteUserImage(user)),
        this_profile_refresh     :   ()          =>  dispatch(profile_refresh()),
    }
}

class Info extends Component {

    constructor(props){
        super(props)

        const { user_facebook , user_instagram, user_twitter, user_youtube , user_website , user_bio } = this.props


        this.state = {
            facebook     : user_facebook,
            instagram    : user_instagram,
            twitter      : user_twitter,
            youtube      : user_youtube,
            website      : user_website,
            bio          : user_bio,
            bioContainer : false
        }
    }


    changeHandler = (value, type) => {
        if(type == 'FACEBOOK'){
            this.setState({
                facebook  : value,
            })
        }
        if(type == 'INSTAGRAM'){
            this.setState({
                instagram  : value,
            })
        }
        if(type == 'TWITTER'){
            this.setState({
                twitter  : value,
            })
        }
        if(type == 'YOUTUBE'){
            this.setState({
                youtube  : value,
            })
        }
        if(type == 'WEBSITE'){
            this.setState({
                website  : value,
            })
        }
        if(type == 'BIO'){
            this.setState({
                bio  : value,
            })
        }
    }



    save = () => {

        const { api, apiKey , token, user_id , this_error, this_error_2, this_login , this_success, this_success_2, this_profile_refresh } = this.props;
        const { facebook , instagram , twitter , youtube , website , bio } = this.state;


        if(this.props.facebook == facebook && this.props.instagram == instagram && this.props.twitter == twitter && this.props.youtube == youtube && this.props.website == website && this.props.bio == bio ){
            return false;
        }

        const url = `${api}/Account/Info/info.php?key=${apiKey}&token=${token}&user_id=${user_id}&facebook=${facebook}&instagram=${instagram}&twitter=${twitter}&youtube=${youtube}&website=${website}&bio=${bio}`;


        console.warn(url)

        fetch(url)
        .then((response) => response.json())
        .then((response) => {

          console.warn(response)

            if(response.data.error){
                this_error(response.data.errorReason)
                setTimeout(() => {
                    this_error_2()
                },2500)
            }
            else{
                this_profile_refresh()
                this_login(response);
                this_success('Your profile is successfully updated')
                setTimeout(() => {
                    this_success_2()
                },2500)
            }
        
        })
     }




        bioOpen = () => {
            this.setState({
                bioContainer : true
            })
        }


        bioClose = () => {
            this.setState({
                bioContainer : false
            })
        }



    render (){
       

        const { facebook , instagram, twitter, youtube , website , bio , bioContainer} = this.state

        const { changeHandler , save , bioOpen , bioClose} = this

        const { visible , menuIconColor , menuIconColor2 , accountFloat  , tabBlur } = this.props

        // const color = bio == "" ? menuIconColor2 : menuIconColor

        const placeholderFacebook = facebook == null ? "" : facebook
        const placeholderInstagram = instagram == null ? "" : instagram
        const placeholderTwitter = twitter == null ? "" : twitter
        const placeholderYoutube = youtube == null ? '' : youtube
        const placeholderWebsite = website == null ? "" : website
        const placeholderBio = bio == null ? "" : bio


        const absolute = visible == 'flex' ? styles.containerAbsolute : null

        const displayBio = bioContainer ? 'flex' : 'none'
        const absolute_2 = bioContainer ? styles.containerAbsolute : null

        return (
            <View style={[styles.container, absolute, {display : visible}]}>

                    <View style={[styles.bioFloat, absolute_2, {display : displayBio}]}>
                        <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={10} />
                        <MaterialIcons style={styles.bioClose}  name='close' size={30} color={menuIconColor} onPress={bioClose}/>
                        <Input containerStyles={styles.containerStylesBio} inputStyles={styles.inputStylesBio}  textContentType = 'name' multiline={true}  placeholderValue = {placeholderBio}  placeholder = 'BIO'  maxLength = {150}  handleChange = {changeHandler}/>
                    </View>

                    <View style={styles.infoContainer}>   
                        <Input containerStyles={styles.containerStyles} inputStyles={styles.inputStyles} iconStyle={[styles.iconStyle, style.facebook_color]} textContentType = 'name' placeholderValue = {placeholderFacebook} placeholder = 'FACEBOOK' iconName_2 = 'facebook' handleChange = {changeHandler}/>
                        <Input containerStyles={styles.containerStyles} inputStyles={styles.inputStyles} iconStyle={[styles.iconStyle, style.instagram_color]} textContentType = 'name'  placeholderValue = {placeholderInstagram}  placeholder = 'INSTAGRAM' iconName_2 = 'instagram' handleChange = {changeHandler}/>
                        <Input containerStyles={styles.containerStyles} inputStyles={styles.inputStyles} iconStyle={[styles.iconStyle, style.twitter_color]} textContentType = 'name'  placeholderValue = {placeholderTwitter}  placeholder = 'TWITTER' iconName_2 = 'twitter' handleChange = {changeHandler}/>
                        <Input containerStyles={styles.containerStyles} inputStyles={styles.inputStyles} iconStyle={[styles.iconStyle, style.youtube_color]} textContentType = 'name'  placeholderValue = {placeholderYoutube}  placeholder = 'YOUTUBE' iconName_2 = 'youtube' handleChange = {changeHandler}/>
                        <Input containerStyles={styles.containerStyles} inputStyles={styles.inputStyles} iconStyle={styles.iconStyle} textContentType = 'name'  placeholderValue = {placeholderWebsite}  placeholder = 'WEBSITE' iconName = 'link'  handleChange = {changeHandler}/>

                         <TouchableOpacity style={styles.bioContainer} onPress={bioOpen}>
                            <MaterialIcons style={styles.bioIcon} name='info-outline' size={23} color={menuIconColor} />
                            <Text style={[styles.bioText, style.ma, {color:menuIconColor}]}>Update your bio </Text>
                        </TouchableOpacity>

                    </View>

                    <View style={[styles.saveContainer, style.displayFlex]}>
                        <SaveButton text='SAVE' styleProps={styles.button} stylePropsText={styles.buttonText} handler={save}/>
                    </View>
                
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container : {
        height : '100%',
        width:'100%',
        // position:'absolute',
        left:0,
        top:0,
        // backgroundColor:'orange'
    },
    containerAbsolute : {
        position:'absolute',
    },

    bioFloat : {
        top:0,
        left:0,
        bottom:0,
        right:0,
        zIndex:1,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        overflow:'hidden'
    },
    bioClose : {
        height: 40,
        width:40,
        top: 5,
        right:5,
        position:'absolute',
        textAlign:'center',
        lineHeight:40
    },
    sure_text:{
        fontSize:21,
        paddingHorizontal:20,
        fontWeight:'bold',
        textAlign:"center",
        lineHeight:40,
        // backgroundColor:'red',
    },
    sureButtonContainer : {
        flexDirection:'row'
    },
    deleteIcon : {
        // backgroundColor:'red',
        height:80,
        width:80,
        marginHorizontal:20
    },

    infoContainer : {
        flex :5,
        justifyContent:"center",
        alignItems:"center"
        // backgroundColor:'blue'
    },
    containerStylesBio:{
        width:'96%',
    },
    containerStyles:{
        // backgroundColor:'orange',
        width:'90%'
    },
    inputStylesBio : {
        borderBottomWidth : 0,
        width:'100%',
        textAlign:'left',
        // backgroundColor:'blue',
        paddingRight:0,
        height: null,
        lineHeight:27,
    },
    inputStyles : {
        borderBottomWidth : 0,
        width:'82%',
        marginLeft:'3%',
        paddingHorizontal:0,
        textAlign:'left',
    },

    iconStyle :{
        // backgroundColor:'green',
        width:'15%',
        // display:'none'
    },

    bioContainer : {
        marginTop: 20,
        width:'90%',
        flexDirection:'row'
    },
    bioText : {
        height: 35,
        lineHeight : 35,
        width:'82%',
        marginLeft:'3%',
        paddingHorizontal:0,
        fontSize:13,
        fontWeight:Platform.select({android:'200'}),
        letterSpacing:1,
        paddingBottom:Platform.select({android:5}),
    },
    bioIcon : {
        // backgroundColor:'green',
        lineHeight : 35,
        textAlign:'center',
        width:'15%',
    },



    saveContainer : {
        flex :1,
    },
    button:{
        width: '100%',
        marginVertical : null
    },
    buttonText : {
        fontSize:19,
        letterSpacing : 1.8,
    }
})



export default connect(state, dispatch)(Info);