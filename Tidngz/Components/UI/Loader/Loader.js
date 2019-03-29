import React from 'react';
import {Platform, View, StyleSheet, ActivityIndicator} from 'react-native';
import {brand, model, models} from '../../DeviceInfo/DeviceInfo';

const Loader = props => {
 

        return (
            <ActivityIndicator
                            style={[styles.loader, props.style]}
                            size="small"
                            color={'rgba(102,102,102,.7)'}
                        />
        )
            
}

const styles = StyleSheet.create({
    loader : {
        height:40, 
        width: '100%'
    },
    loaderDummy : {
        height:40, 
        marginVertical: 25
    }
})


export default Loader;
