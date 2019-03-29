import React ,  {Component} from 'react';
import {Platform,  View, StyleSheet, TextInput, Button } from 'react-native';

export default class TextsInput extends Component {
    state = {
        textName : '',
      }
    
      textNameChangedHandler = value => {
          this.setState({
            textName : value
          })
      }
    
      textSubmitHandler = () => {
        if(this.state.textName.trim() === ""){
          return;
        }
        
        this.props.onTextSubmit(this.state.textName)
        this.setState({
          textName : '',
        })
      }

      
    render(){
        return(
            <View style = {styles.inputContainer}>

                  <TextInput 
                      style = {styles.textInput}
                      value = {this.state.textName} 
                      placeholder = "Type here"
                      onChangeText = {this.textNameChangedHandler}
                  />
                  <Button 
                      color="#841584" 
                      title = 'OK'
                      onPress = {this.textSubmitHandler}
                  />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer:{
      width:"100%",
      height:80,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      backgroundColor:'white',
      ...Platform.select({
        ios: {
          paddingTop: 30
        },
        android: {
        }
      })
    },
    textInput: {
      width:"70%",
      height:50,
      paddingHorizontal:10, 
      shadowOffset: { width: 0, height: 2 }, 
      shadowColor: "black", 
      shadowOpacity: 1, 
      shadowRadius: 3,
    },
  
  });
  

