import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import Input from '../../../Components/TextInput/User';
import MaterialIcons from  'react-native-vector-icons/MaterialIcons';
import SaveButton from '../../../Components/Button/Button';
import style from '../../../Styles/Styles';


import { login , error, error_2} from '../../../Store/Actions/index'

const state = state => {
    return {
        api                 :   state.main.api,
        apiKey              :   state.main.apiKey,
        token               :   state.main.user.token,
        user_id             :   state.main.user.user_id,
        username            :   state.main.user.username,
        user_name           :   state.main.user.user_name,
        user_email          :   state.main.user.user_email,
        user_place_id       :   state.main.user.user_place_id,
        user_place          :   state.main.user.user_place,
        menuIconColor       :   state.themes.menuIconColor,
        menuIconColor_2     :   state.themes.menuIconColor_2,
    }
}

const dispatch = dispatch => {
    return {
        this_login               :   userData   =>  dispatch(login(userData)),
        this_error               :   text => dispatch(error(text)),
        this_error_2             :   () => dispatch(error_2())
        
    }
}

class User extends Component {

    constructor(props){
        super(props)
        
        const { username , user_name, user_email, user_place_id , user_place } = this.props

        this.state = {
            username        : username,
            user_name       : user_name,
            user_email      : user_email,
            user_place_id   : user_place_id,
            user_place      : user_place,
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
        const { api, apiKey , token, user_id , this_error, this_error_2, this_login } = this.props;
        const { username, user_name, user_email, user_place_id } = this.state;

        if(user_name == '' || username == ''){

             
            user_name == '' ? this_error('Name cannot be empty') : 
            username == '' ? this_error('Username cannot be empty') : null

            setTimeout(() => {
                this_error_2()
            },2500)

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
                this_login(response);
            }
        
        })
     }



    render (){

        let { username , user_name, user_email, user_place_id , user_place } = this.state

        const { visible , menuIconColor , menuIconColor2} = this.props

        const { changeHandler , save } = this

        const color = user_place_id == "" ? menuIconColor2 : menuIconColor;
        const placeText = user_place_id == "" ? 'Add your location' : user_place
        

        return (
            <View style={[styles.container, visible]}>
                <View style={styles.imageContainer}></View>
                <View style={styles.userContainer}>
                    <Input containerStyles={styles.containerStyles} inputStyles={styles.inputStyles} iconStyle={styles.iconStyle} textContentType = 'name' placeholderValue= {user_name} placeholder = 'NAME' iconName = 'person' maxLength = {30}  handleChange = {changeHandler}/>
                    <Input containerStyles={styles.containerStyles} inputStyles={styles.inputStyles}  iconStyle={styles.iconStyle} textContentType = 'username' placeholderValue = {username} placeholder = 'USERNAME' iconName = 'person-outline' maxLength = {25}  handleChange = {changeHandler}/>
                    {/* <Input containerStyles={styles.containerStyles} inputStyles={styles.inputStyles}  iconStyle={styles.iconStyle} textContentType = 'email' placeholderValue = {user_email} placeholder = 'EMAIL' iconName = 'mail-outline'  handleChange = {changeHandler}/> */}

                    <TouchableOpacity style={styles.placeContainer}>
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
        position:'absolute',
        left:0,
        top:0,
        // backgroundColor:'orange'
    },
    imageContainer : {
        flex :1.4,
        // backgroundColor:'red'
    },




    userContainer : {
        flex :3.6,
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
        width:'85%',
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
        width:'85%',
        paddingHorizontal:10,
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