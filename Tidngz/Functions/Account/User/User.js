import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, TouchableOpacity, Image, Keyboard} from 'react-native';
import Input from '../../../Components/TextInput/User';
import MaterialIcons from  'react-native-vector-icons/MaterialIcons';
import SaveButton from '../../../Components/Button/Button';
import style from '../../../Styles/Styles';
import Places from './Places';

import { connect } from 'react-redux';
import { login , error, error_2 , success, success_2, deleteUserImage , home_refresh , profile_refresh} from '../../../Store/Actions/index'

const state = state => {
    return {
        api                 :   state.main.api,
        apiKey              :   state.main.apiKey,
        token               :   state.main.user.token,
        user                :   state.main.user,
        user_id             :   state.main.user.user_id,
        username            :   state.main.user.username,
        user_name           :   state.main.user.user_name,
        user_email          :   state.main.user.user_email,
        user_place_id       :   state.main.user.user_place_id,
        user_place          :   state.main.user.user_place,
        user_image_2        :   state.main.user.user_image_2,
        menuIconColor       :   state.themes.menuIconColor,
        menuIconColor_2     :   state.themes.menuIconColor_2,
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
        this_home_refresh        :   ()          =>  dispatch(home_refresh()),
        this_profile_refresh     :   ()          =>  dispatch(profile_refresh()),
    }
}

class User extends Component {

    constructor(props){
        super(props)
        


        const { user, username , user_name, user_email, user_place_id , user_place } = this.props

        this.state = {
            user            : user,
            username        : username,
            user_name       : user_name,
            user_email      : user_email,
            user_place_id   : user_place_id,
            user_place      : user_place,
            placesContainer : false
        }
    }

    

    changeHandler = (value, type) => {
        if(type == 'NAME'){
            this.setState({
                user_name  : value,
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
        if(type == 'PLACE'){
            this.setState({
                place  : value,
            })
        }
     }


     save = () => {

        const { api, apiKey , token, user_id , this_error, this_error_2, this_success, this_success_2, this_login , this_home_refresh , this_profile_refresh } = this.props;
        const { username, user_name, user_email, user_place_id } = this.state;

        if(user_name == '' || username == ''){

            user_name == '' ? this_error('Name cannot be empty') : 
            username == '' ? this_error('Username cannot be empty') : null

            setTimeout(() => {
                this_error_2()
            },2500)

            return false;
        }

        if(this.props.username == username && this.props.user_name == user_name && this.props.user_place_id == user_place_id){
            return false;
        }

        const url = `${api}/Account/User/user.php?key=${apiKey}&token=${token}&user_id=${user_id}&username=${username}&name=${user_name}&email=${user_email}&place=${user_place_id}`;


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
                this_home_refresh()
                this_profile_refresh()
                this_login(response);
                this_success('Your profile is successfully updated')
                setTimeout(() => {
                    this_success_2()
                },2500)
            }
        
        })
     }


     updateUser = user => {
        user.user_image = '';
        user.user_image_2 = '';
        user.user_image_3 = '';
        return user;
      }

     deleteImage = () => {

            user = this.props.user
            user = this.updateUser(user)

            this.props.this_home_refresh()
            this.props.this_profile_refresh()
            this.props.this_deleteUserImage(user);

            this.setState({
                user  : user,
            })
     }


     placesOpen = () => {
        this.setState({
            placesContainer : true
        })
    }


    placesClose = () => {
        this.setState({
            placesContainer : false
        })
    }
    

    selectedPlaceHandler = ( place_id , place_name ) => {

        this.setState({
            user_place_id   : place_id,
            user_place      : place_name,
        })

        this.placesClose()
    }

    render (){

        let { username , user_name, user_email, user_place_id , user_place , user , placesContainer} = this.state

        const { visible , menuIconColor , menuIconColor2  } = this.props

        const { changeHandler , save , deleteImage , placesOpen , placesClose , selectedPlaceHandler } = this

        const color = user_place_id == "" ? menuIconColor2 : menuIconColor;
        const placeText = user_place_id == "" ? 'Add your location' : user_place
    

        const image = (
            user.user_image == '' ? 
                                <Text style={[styles.userImage, styles.userImageText, style.bt]}>{user.user_name_initial}</Text>
                            :
                                <Image style={styles.userImage} source={{uri : user.user_image_2}} /> 
        )

        
        const absolute = visible == 'flex' ? styles.containerAbsolute : null

        const displayPlaces = placesContainer ? 'flex' : 'none'
        const absolute_2    = placesContainer ? styles.containerAbsolute : null

        return (
            <View style={[styles.container, absolute, {display : visible}]}>

                <Places absolute={absolute_2} display={displayPlaces} placesClose={placesClose} selectedPlaceHandler={selectedPlaceHandler} placesContainer={placesContainer}/>

                <View style={styles.imageContainer}>
                    <TouchableOpacity style={styles.imageBox}>
                        {image}
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.deleteBox} onPress={deleteImage}>
                        <MaterialIcons style={styles.deleteIcon} name='delete' size={23} color={menuIconColor} />
                    </TouchableOpacity>
                </View>


                <View style={styles.userContainer}>
                    <Input containerStyles={styles.containerStyles} inputStyles={styles.inputStyles} iconStyle={styles.iconStyle} textContentType = 'name' placeholderValue= {user_name} placeholder = 'NAME' iconName = 'person' maxLength = {30}  handleChange = {changeHandler}/>
                    <Input containerStyles={styles.containerStyles} inputStyles={styles.inputStyles}  iconStyle={styles.iconStyle} textContentType = 'username' placeholderValue = {username} placeholder = 'USERNAME' iconName = 'person-outline' maxLength = {25}  handleChange = {changeHandler}/>
                    {/* <Input containerStyles={styles.containerStyles} inputStyles={styles.inputStyles}  iconStyle={styles.iconStyle} textContentType = 'email' placeholderValue = {user_email} placeholder = 'EMAIL' iconName = 'mail-outline'  handleChange = {changeHandler}/> */}

                    <TouchableOpacity style={styles.placeContainer} onPress={placesOpen}>
                        <MaterialIcons style={styles.placeIcon} name='place' size={23} color={menuIconColor} />
                        <Text style={[styles.placeText, style.ma, {color:color}]}>{placeText}</Text>
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
    imageContainer : {
        flex :2,
        justifyContent:"center",
        alignItems:"flex-end",
        // backgroundColor:'green',
        flexDirection:'row',
        // paddingTop:10,
    },
    imageBox : {
        height: 100,
        width:100,
        borderRadius : 50,
        backgroundColor:'white'
    },
    userImage :{
        height: '100%',
        width:'100%',
        borderRadius : 50,
    },
    userImageText : {
        backgroundColor:'rgba(15,101,141,.9)',
        lineHeight:100,
        textAlign:'center',
        fontSize : 50,
        fontWeight: 'bold'
    },
    deleteBox:{
        marginLeft :15,
        height: 100,
        width:30,
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor:'red',
    },
    deleteIcon : {
        height: 30,
        width:30,
        lineHeight:30,
        textAlign:'center',
        // backgroundColor:'blue'
    },


    userContainer : {
        flex :3,
        // marginHorizontal: 10,
        // backgroundColor:'blue',
        justifyContent:"center",
        alignItems:"center"
    },
    containerStyles:{
        // backgroundColor:'orange',
        width:'90%'
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
    },
   
    placeContainer : {
        marginTop: 20,
        width:'90%',
        // backgroundColor:'red',
        flexDirection:'row'
    },
    placeText : {
        height: 35,
        lineHeight : 35,
        // backgroundColor:'orange',
        width:'82%',
        marginLeft:'3%',
        paddingHorizontal:0,
        // marginHorizontal:'10%',
        fontSize:13,
        fontWeight:Platform.select({android:'200'}),
        letterSpacing:1,
        // borderBottomWidth : 1,
        // borderBottomColor:'rgba(123,123,123,.6)',
        // textAlign:'center',
        paddingBottom:Platform.select({android:5}),
    },
    placeIcon : {
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


export default connect(state, dispatch)(User);