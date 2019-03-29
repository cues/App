import React from 'react';
import {Platform, } from 'react-native';


const headerStyle = {
                height: Platform.select({android:50, ios:44}),
                backgroundColor:'rgba(255,255,255,1)',
                borderBottomWidth:0,
                borderTopWidth:0,
                borderWidth: 0,
                shadowColor: 'transparent',
                shadowRadius: 0,
                shadowOffset: {
                    height: 0,
                },
                elevation:0,
}

export default headerStyle;