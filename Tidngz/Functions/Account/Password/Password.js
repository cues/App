import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import { connect } from 'react-redux';
import Input from '../../../Components/TextInput/User';
import SaveButton from '../../../Components/Button/Button';
import style from '../../../Styles/Styles'


const state = state => {
    return {

    }
}

const dispatch = dispatch => {
    return {
        
    }
}

class Password extends Component {


    constructor(props){
        super(props)
        

        this.state = {
            old_password       : null,
            new_password       : null,
            confiem_password   : null,
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
                confiem_password  : value,
            })
        }
     }

     save = () => {

     }


    render (){

        const {visible} = this.props

        const { changeHandler , save} = this

        return (
            <View style={[styles.container, visible]}>
                <View style={styles.passwordContainer}>
                    <Input containerStyles={styles.containerStyles} inputStyles={styles.inputStyles} iconStyle={styles.iconStyle} textContentType = 'password' placeholder = 'OLD PASSWORD' iconName = 'lock-outline'  handleChange = {changeHandler}/>
                    <Input containerStyles={styles.containerStyles} inputStyles={styles.inputStyles} iconStyle={styles.iconStyle} textContentType = 'password' placeholder = 'NEW PASSWORD' iconName = 'lock-outline'  handleChange = {changeHandler}/>
                    <Input containerStyles={styles.containerStyles} inputStyles={styles.inputStyles} iconStyle={styles.iconStyle} textContentType = 'password' placeholder = 'CONFIRM PASSWORD' iconName = 'lock-outline'  handleChange = {changeHandler}/>
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
        textAlign:'left',
        width:'85%',
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


export default connect(state)(Password);