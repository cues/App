import React from 'react';
import {Platform, View, StyleSheet} from 'react-native';
import {brand, model, models} from '../../DeviceInfo/DeviceInfo';

const headerBottomFlatlist = props => {
    return (
        <View style={styles.container} {...props}/>
    )
}

const styles = StyleSheet.create({
    container : {
        height: Platform.select({android:54 , ios : models.includes(model) ? 87 : 63}), 
        width :'100%' , 
        // backgroundColor:'blue'
    }
})


export default headerBottomFlatlist;



