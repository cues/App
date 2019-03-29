import React , {Component}from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Image} from 'react-native';
import style from '../../../Styles/Styles'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const deleteButton = props => {
 
    const {deleteItem, deleteClose} = props;

     return (
        <View style={styles.deleteContainer}>
            <Text style= {[style.bt, styles.deleteText]}>Are you sure ?</Text>
            <View style={styles.deleteContainerIcons}>
                <TouchableOpacity style={styles.deleteContainerIcon} onPress={deleteItem}>
                        <MaterialIcons style={styles.deleteEach} size={27} name='check' color='rgba(23, 23, 23, 0.8)'/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteContainerIcon} onPress={deleteClose}>
                    <MaterialIcons style={styles.deleteEach} size={27} name='close' color='rgba(23, 23, 23, 0.8)'/>
                </TouchableOpacity>
            </View>
        </View>
     )
}



const styles = StyleSheet.create({
    deleteContainer : {
        height : 70,
        width  :  150,
        backgroundColor : 'white',
        position:'absolute',
        top:0,
        right:0,
        borderLeftWidth : 1,
        borderBottomWidth : 1,
        borderLeftColor : 'rgba(123,123,123,.6)',
        borderBottomColor : 'rgba(123,123,123,.6)',
        zIndex:11,
        borderBottomLeftRadius : 3,
    },
    deleteText : {
        height : 32,
        lineHeight:32,
        width: '100%',
        color:'rgba(23, 23, 23, 0.8)',
        fontSize : 16,
        letterSpacing : 1,
        textAlign : 'center'
    },
    deleteContainerIcons : {
        height : 38,
        width: '100%',
        flexDirection : 'row'
    },
    deleteContainerIcon : {
        height : 38,
        width: '50%',
        // backgroundColor:'red',
    },
    deleteEach: {
        height : 38,
        width:'100%',
        lineHeight: 38,
        textAlign : 'center',
    },
});


export default deleteButton;
