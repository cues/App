import React, {Component} from 'react';
import {Platform, StyleSheet, View, TextInput, Text, KeyboardAvoidingView} from 'react-native';
import style from '../../Styles/Styles';
import MaterialIcons from  'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';

const state = state => {
    return {
        menuIconColor     :   state.themes.menuIconColor,
        menuIconColor2    :   state.themes.menuIconColor2,
        keyboard          :  state.themes.keyboard,
    }
}



class Input extends Component {

    constructor(props){
        super(props)


        this.state = {
            value : this.props.placeholder,
            editing : false
        }
    }

    change = () => {
        value = this.state.value

        if(value == this.props.placeholder){
            this.setState({
                value : '',
                editing : true
            })
        }
    }

    change_2 = () => {
        value = this.state.value

        if(value == ''){
            this.setState({
                value : this.props.placeholder,
                editing : false
            })
        }
    }

    changeText =  (value) => {

        this.setState({
            value : value,
            editing : true,
        })

        this.props.handleChange(value, this.props.placeholder);
        
    }

    render (){

     const {    
                placeholder,
                menuIconColor, 
                menuIconColor2, 
                keyboard, 
                iconName = '', 
                textContentType, 
                maxLength = 1000    } = this.props

     let { secureTextEntry = false } = this.props

     const { value } = this.state;
     const { changeText } = this;

     
     secureTextEntry = placeholder == 'PASSWORD' ? value == 'PASSWORD' ? false : true : false

     const icon = (
         iconName != '' ?
            <MaterialIcons style={styles.icons} name={iconName} size={23} color={menuIconColor} />
         : null
     )

    const color = placeholder == value ? menuIconColor2 : menuIconColor;

        return (
            
            <View style={styles.container} >
                {icon}
                <TextInput 
                    style = {[styles.input, style.ma, {color:color}]} 
                    value = {value}
                    keyboardAppearance = {keyboard}
                    onChangeText = {changeText}
                    maxLength = {maxLength}
                    textContentType = {textContentType}
                    secureTextEntry={secureTextEntry}
                    onFocus={this.change}
                    onEndEditing={this.change_2}
                    multiline={false}
                    numberOfLines={1}
                />
            </View>

        )
    }
}


const styles = StyleSheet.create({
    container : {
        marginTop: 20,
        width: '80%',
        // backgroundColor:'red',
        flexDirection:'row'
    },
    input : {
        height: 35,
        // backgroundColor:'blue',
        width:'80%',
        paddingHorizontal:10,
        // marginHorizontal:'10%',
        fontSize:13,
        fontWeight:Platform.select({android:'200'}),
        letterSpacing:1,
        borderBottomWidth : 1,
        borderBottomColor:'rgba(123,123,123,.6)',
        textAlign:'center',
        paddingBottom:Platform.select({android:5}),
    },
    icons : {
        // backgroundColor:'green',
        lineHeight : 35,
        textAlign:'center',
        width:'10%',
    }
})


export default connect(state)(Input);