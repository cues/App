import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import { connect } from 'react-redux';
import Header from '../Headers/FloatHeader';

const state = state => {
    return {

    }
}

const dispatch = dispatch => {
    return {
        
    }
}

class Places extends Component {


    render (){
        return (
            <View>
                <Text>Places</Text>

                <Header/>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
        },
        
})


export default connect(state)(Places);