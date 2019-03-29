import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Button, Dimensions, TouchableOpacity, Image} from 'react-native';
import style from '../Styles/Styles'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import CardView from 'react-native-cardview';

const width = Dimensions.get('window').width;

export default class Search extends Component {

    static navigationOptions = ({navigation}) =>  {
        return {
            header: null
  
           
        }
    }
    

  render() {
    return (
      <View style={styles.container}>
         <Button title = 'Go to home'
            onPress = {() => this.props.navigation.navigate('Home')}/>
                <Text>Search</Text>
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
      backgroundColor:'rgba(23,23,23,1)',
    },
    headerSearch : {
        height: 35,
        width: width - 20,
        backgroundColor:'rgba(23,23,23,1)',
        alignSelf: "center", 
        marginLeft: "auto", 
        marginRight: "auto",
        borderRadius:20,
        flexDirection:'row'
    },
    headerSearchIcon : {
        height: 35,
        width:'10%',
        lineHeight:35,
        textAlign:'center',
    },
    headerSearchInput : {
        height: 35,
        width:'90%',
        paddingRight:10,
        color:'rgba(255,255,255,.8)',
        borderRadius:20,
        lineHeight:35,
        fontSize:18,
        fontWeight:Platform.select({android:'200'}),
        letterSpacing:1,
        paddingVertical: 0
    }
  });
  