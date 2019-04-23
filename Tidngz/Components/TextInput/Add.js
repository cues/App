import React, {Component} from 'react';
import {Platform, StyleSheet, View, TextInput, Text, KeyboardAvoidingView, Modal, Keyboard,  TouchableOpacity, Image} from 'react-native';
import style from '../../Styles/Styles'
import { connect } from 'react-redux';
import BlurView from '../BlurVIew/BlurVIew';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { headline } from '../../Store/Actions/index'
import {withNavigation} from 'react-navigation'

const state = state => {
    return {
        api                :  state.main.api,
        apiKey             :  state.main.apiKey,
        user_id            :  state.main.user.user_id,
        tabBlur            :  state.themes.tabBlur,
        commentWrite       :  state.themes.commentWrite,
        placeholderColor   :  state.themes.placeholderColor,
        keyboard           :  state.themes.keyboard,
        userImage          :  state.main.user.user_image,
        headerColor        :  state.themes.headerColor,
        allArticles        :  state.articles.allArticles,
        allComments        :  state.comments.allComments,
    }
}

const dispatch = dispatch => {
    return {
        this_headline  : text => dispatch(headline(text))
    }
}

let commentKeyboard; 

class Add extends Component {



    state = {
        focus : true,
        text : this.props.text,
    }

    
    componentDidMount() {
        commentKeyboard = setInterval(() => {
            this.setState({
                focus : false
            })
            this.setState({
                focus : true
            })
        },1000)
    }

    componentWillUnmount(){
        clearInterval(commentKeyboard)
    }

    onChangeText = value => {
       value = value == '' ? null : value
       this.props.changeText(value);
       this.setState({
            text : value
        })
    }

    closeWrite = () => {
        Keyboard.dismiss()
        setTimeout(() => {
            this.props.write()
        },100)
    }




    render (){

      
        const {active, placeholder, tabBlur, placeholderColor, commentWrite, keyboard, userImage, headerColor} = this.props;

        const writeViewStyle = Platform.select({
                ios     : styles.container,
                android : null
            }) 

        const fontFamily = this.state.text == null ? style.ca : style.la
        const fontSize   = this.state.text == null ? 19 : 16
        // const fontWeight = this.state.comment == null ? Platform.select({android:'200' , ios : null}) : 'bold']

        const placeholderTxt = this.props.text == null ? placeholder : ''

       const writeView = (
            <KeyboardAvoidingView style={[writeViewStyle, {backgroundColor:Platform.select({android : headerColor , ios :'transparent'})}]}  behavior='position'   >

                <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={5}/>

                <View style={styles.writeComment}>


                    <TextInput
                        blurOnSubmit={false}
                        autoFocus={this.state.focus}
                        style={[fontFamily,  styles.input, {fontSize:fontSize ,  color:commentWrite}]}
                        placeholder = {placeholder}
                        placeholderTextColor={placeholderColor}
                        underlineColorAndroid='transparent'
                        multiline = {true}
                        keyboardAppearance = {keyboard}
                        onChangeText = {this.onChangeText}
                        value = {this.state.text}
                        enablesReturnKeyAutomatically = {true}
                    />

                
                </View>
                
            </KeyboardAvoidingView>
        )



        const writeContainer = Platform.select({
                ios     :  writeView,
                android : <View style={styles.container}>{writeView}</View>
            }) 

 
            

        return (
                <Modal visible={active} transparent={true} animationType="fade">
                            <TouchableOpacity style={styles.touch} onPress={this.closeWrite} />

                            {writeContainer}
                </Modal>
        )
    }
}


const styles = StyleSheet.create({
    container : {
        // backgroundColor: 'green',
        position: 'absolute',
        width:'100%',
        bottom:0,
        minHeight:50,
        bottom : Platform.select({android:50, ios: 0 }),
        // minHeight:70,
        // maxHeight:200,
        
    },
    writeComment : {
        backgroundColor: 'transparent',
        height : '100%',
        width: '100%',
        borderTopWidth: 1,
        borderTopColor:'rgba(23,23,23,.1)',
        flexDirection:'row',
        // backgroundColor: 'green',
    },
    userImageContainer : {
        flex:1,
        alignItems : 'flex-end',
        // backgroundColor: 'red',
    },
    userImage : {
        height : 44,
        width: 44,
        marginVertical :13,
        borderRadius : 22,
        // marginLeft:5,
        // backgroundColor: 'green',
    },
    input: {
        flex:5,
        backgroundColor: 'transparent',
        minHeight:50,
        maxHeight:200,
        margin :10,
        // fontSize : 15,
        lineHeight : 22,
        letterSpacing :.6,
        fontWeight : Platform.select({android:'200' , ios : 'bold'})
    },
    commentSend : {
        flex:1,
        // backgroundColor: 'green',
    },
    commentSendInner : {
        height: 70,
        width:  '100%',
        position:'absolute',
        bottom:0,
        // backgroundColor:'blue'
    },
    commentSendIcon : {
        flex:1,
        height: 70,
        lineHeight : 70,
        textAlign : 'center',
        // backgroundColor:'red'
    },
    touch : {
          height:'100%',
          width:'100%',
        //   backgroundColor:'blue'
    }
})


export default withNavigation(connect(state, dispatch)(Add));

// keyboardVerticalOffset={Platform.select({ios : 670})}