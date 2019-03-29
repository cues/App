import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';
import style from '../Styles/Styles'; 

export default class Add extends Component {

   
    static navigationOptions = ({navigation}) =>  {
        return {
            // header : null,  
            headerTintColor : 'red',
            headerMode : 'none' ,
            headerTransparent:true          
        }
    }



  render() {
    return (
      <View style={styles.container}>
         <Button title = 'Go to home'
            onPress = {() => this.props.navigation.navigate('Home')}/>
                <Text>Add</Text>
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
      backgroundColor:'rgba(240,240,240,1)',
    },
    headerTitle : {
        height: 50,
        width: 50,
        alignSelf: "center", 
        marginLeft: "auto", 
        marginRight: "auto"
    },
    headerLeft : {
        height: 40,
        width: 40,
        marginLeft: 5,
        lineHeight:30,
    },
    headerRight : {
        height: 40,
        width: 40,
        marginRight: 5,
        lineHeight:30,
        fontWeight:'900'
    },
  });
  