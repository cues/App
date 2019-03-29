import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image , Dimensions } from 'react-native';

const listItem = props => {
    let deviceWidth = Dimensions.get('window').width
    return(
        <TouchableOpacity style={{alignItems:'center', justifyContent:'flex-start'}} onPress={props.onItemPressed}>
        <View style={style.listshadow}>
            <View style={style.listItem} >
                <Image  style={style.listImage} source={props.textImage}></Image>
                <Text>{props.textName} </Text>
                <Text>{deviceWidth}</Text>
            </View>
        </View>
        
        </TouchableOpacity>
    )  
   
};


const style = StyleSheet.create({
    listshadow:{
        shadowOffset: { width: 0, height: 10 }, 
        shadowColor: "black", 
        shadowOpacity: .4, 
        shadowRadius: 10,
    },
    listItem : {
        width:340,
        backgroundColor:'#eee',
        padding:10,
        paddingTop:0,
        marginVertical:25,
        alignItems:'center',
        justifyContent:'flex-start',
        borderRadius:10,
      
       overflow: 'hidden',
    },
    listImage :{
        height:270,
        width:340,
        marginBottom:10,
    }
});

export default listItem;