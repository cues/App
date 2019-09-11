import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import Input from '../../../Components/TextInput/User';
import SaveButton from '../../../Components/Button/Button';
import style from '../../../Styles/Styles'
import MaterialIcons from  'react-native-vector-icons/MaterialIcons';


const state = state => {
    return {
        user_id         :  state.main.user.user_id,
        user_facebook   :  state.main.user.user_facebook,
        user_instagram  :  state.main.user.user_instagram,
        user_twitter    :  state.main.user.user_twitter,
        user_youtube    :  state.main.user.user_youtube,
        user_website    :  state.main.user.user_website,
        user_bio        :  state.main.user.user_bio,
        menuIconColor   :  state.themes.menuIconColor,
        menuIconColor_2 :  state.themes.menuIconColor_2,
    }
}

const dispatch = dispatch => {
    return {
        
    }
}

class Info extends Component {

    constructor(props){
        super(props)

        const { user_facebook , user_instagram, user_twitter, user_youtube , user_website , user_bio } = this.props


        this.state = {
            facebook    : user_facebook,
            instagram   : user_instagram,
            twitter     : user_twitter,
            youtube     : user_youtube,
            website     : user_website,
            bio         : user_bio,
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

    }




    render (){
       

        const { facebook , instagram, twitter, youtube , website , bio } = this.state

        const { changeHandler , save } = this

        const { visible , menuIconColor , menuIconColor2 } = this.props

        // const color = bio == "" ? menuIconColor2 : menuIconColor

        const placeholderFacebook = facebook == null ? "" : facebook
        const placeholderInstagram = instagram == null ? "" : instagram
        const placeholderTwitter = twitter == null ? "" : twitter
        const placeholderYoutube = youtube == null ? '' : youtube
        const placeholderWebsite = website == null ? "" : website


        return (
            <View style={[styles.container, visible]}>

                    <View style={styles.infoContainer}>   
                        <Input containerStyles={styles.containerStyles} inputStyles={styles.inputStyles} iconStyle={[styles.iconStyle, style.facebook_color]} textContentType = 'name' placeholderValue = {placeholderFacebook} placeholder = 'FACEBOOK' iconName_2 = 'facebook' handleChange = {changeHandler}/>
                        <Input containerStyles={styles.containerStyles} inputStyles={styles.inputStyles} iconStyle={[styles.iconStyle, style.instagram_color]} textContentType = 'name'  placeholderValue = {placeholderInstagram}  placeholder = 'INSTAGRAM' iconName_2 = 'instagram' handleChange = {changeHandler}/>
                        <Input containerStyles={styles.containerStyles} inputStyles={styles.inputStyles} iconStyle={[styles.iconStyle, style.twitter_color]} textContentType = 'name'  placeholderValue = {placeholderTwitter}  placeholder = 'TWITTER' iconName_2 = 'twitter' handleChange = {changeHandler}/>
                        <Input containerStyles={styles.containerStyles} inputStyles={styles.inputStyles} iconStyle={[styles.iconStyle, style.youtube_color]} textContentType = 'name'  placeholderValue = {placeholderYoutube}  placeholder = 'YOUTUBE' iconName_2 = 'youtube' handleChange = {changeHandler}/>
                        <Input containerStyles={styles.containerStyles} inputStyles={styles.inputStyles} iconStyle={styles.iconStyle} textContentType = 'name'  placeholderValue = {placeholderWebsite}  placeholder = 'WEBSITE' iconName = 'link'  handleChange = {changeHandler}/>

                         <TouchableOpacity style={styles.bioContainer}>
                            <MaterialIcons style={styles.bioIcon} name='info-outline' size={23} color={menuIconColor} />
                            <Text style={[styles.bioText, style.ma, {color:menuIconColor}]}>Update your bio</Text>
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
        position:'absolute',
        left:0,
        top:0,
        // backgroundColor:'orange'
    },
    infoContainer : {
        flex :4,
        justifyContent:"center",
        alignItems:"center"
        // backgroundColor:'blue'
    },
    containerStyles:{
        // backgroundColor:'orange',
        width:'96%'
    },
    inputStyles : {
        borderBottomWidth : 0,
        textAlign:'left',
        width:'85%',
        // backgroundColor:'blue'
    },
    iconStyle :{
        // backgroundColor:'green',
        width:'15%',
        // display:'none'
    },

    bioContainer : {
        marginTop: 20,
        width:'96%',
        flexDirection:'row'
    },
    bioText : {
        height: 35,
        lineHeight : 35,
        width:'85%',
        paddingHorizontal:10,
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
        flex :1.5,
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



export default connect(state)(Info);