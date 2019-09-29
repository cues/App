import React from 'react';
import {Platform, View, StyleSheet, ActivityIndicator} from 'react-native';
import {brand, model, models} from '../../DeviceInfo/DeviceInfo';

const Loader = props => {
 

        return (
            <ActivityIndicator
                            style={[styles.loader, props.style]}
                            size="large"
                            color={'rgba(102,102,102,.7)'}
                        />
        )
            
}

const styles = StyleSheet.create({
    loader : {
        height:40, 
        width: '100%',
        zIndex:10000
    },
    loaderDummy : {
        height:40, 
        marginVertical: 25
    }
})


export default Loader;
