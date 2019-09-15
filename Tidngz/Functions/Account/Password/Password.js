import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import { connect } from 'react-redux';
import Input from '../../../Components/TextInput/User';
import SaveButton from '../../../Components/Button/Button';
import style from '../../../Styles/Styles'

import { login , error, error_2, success, success_2} from '../../../Store/Actions/index'

const state = state => {
    return {
        api                 :   state.main.api,
        apiKey              :   state.main.apiKey,
        token               :   state.main.user.token,
        user_id             :   state.main.user.user_id,
    }
}

const dispatch = dispatch => {
    return {
        this_error               :   text => dispatch(error(text)),
        this_error_2             :   () => dispatch(error_2()),
        this_success             :   text        =>  dispatch(success(text)),
        this_success_2           :   ()          =>  dispatch(success_2()),
    }
}

class Password extends Component {


    constructor(props){
        super(props)
        

        this.state = {
            old_password       : '',
            new_password       : '',
            confirm_password   : '',
            changed            : false
        }
    }


    changeHandler = (value, type) => {
        if(type == 'OLD PASSWORD'){
            this.setState({
                old_password  : value,
            })
        }
        if(type == 'NEW PASSWORD'){
            this.setState({
                new_password  : value,
            })
        }
        if(type == 'CONFIRM PASSWORD'){
            this.setState({
                confirm_password  : value,
            })
        }
     }




     save = () => {
            const { api, apiKey , token, user_id , this_error, this_error_2 , this_success, this_success_2} = this.props;
            const { old_password , new_password , confirm_password } = this.state;

            // alert(token)
            // return false;

            if(old_password == '' || new_password == '' || confirm_password == ''){

                
                old_password == '' ? this_error('Please type your old password') : 
                new_password == '' ? this_error('Please type your new password') : 
                confirm_password == '' ? this_error('Please confirm your new password') : null

                setTimeout(() => {
                    this_error_2()
                },2500)

                return false;
            }

            if(new_password != confirm_password){

                this_error('Passwords do not match')

                setTimeout(() => {
                    this_error_2()
                },2500)

                return false;
            } 


            const url = `${api}/Account/Password/password.php?key=${apiKey}&token=${token}&user_id=${user_id}&password=${old_password}&new_password=${new_password}&confirm_password=${confirm_password}`;


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

                    this.setState({
                        old_password       : '',
                        new_password       : '',
                        confirm_password   : '',
                        changed            : true
                    })
                    
                    this_success('Your password has been changed successfully')
                    setTimeout(() => {
                        this_success_2()
                    },2500)
                }
            
            })
     }


     changedBack = () => {
        this.setState({
            changed : false
        })
     }


    render (){

        const {visible} = this.props

        const { changeHandler , save , changedBack} = this

        const { changed } = this.state

        const absolute = visible == 'flex' ? styles.containerAbsolute : null

        return (
            <View style={[styles.container, absolute, {display : visible}]}>
                <View style={styles.passwordContainer}>
                    <Input containerStyles={styles.containerStyles} inputStyles={styles.inputStyles} iconStyle={styles.iconStyle} textContentType = 'password' placeholder = 'OLD PASSWORD' iconName = 'lock-outline'  handleChange = {changeHandler} changed={changed} changedBack={changedBack}/>
                    <Input containerStyles={styles.containerStyles} inputStyles={styles.inputStyles} iconStyle={styles.iconStyle} textContentType = 'password' placeholder = 'NEW PASSWORD' iconName = 'lock-outline'  handleChange = {changeHandler} changed={changed} changedBack={changedBack}/>
                    <Input containerStyles={styles.containerStyles} inputStyles={styles.inputStyles} iconStyle={styles.iconStyle} textContentType = 'password' placeholder = 'CONFIRM PASSWORD' iconName = 'lock-outline'  handleChange = {changeHandler} changed={changed} changedBack={changedBack}/>
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
    passwordContainer : {
        flex :5,
        // backgroundColor:'blue',
        justifyContent:"center",
        alignItems:"center"
    },
    containerStyles:{
        // backgroundColor:'orange',
        marginTop: 35,
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


export default connect(state, dispatch)(Password);