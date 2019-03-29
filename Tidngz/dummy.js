import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import { connect } from 'react-redux';

const state = state => {
    return {

    }
}

const dispatch = dispatch => {
    return {
        
    }
}

class Write extends Component {


    render (){
        return (
            <View>
                <Text>Write</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container : {
        height : 50,
        width: 50,
    }
})


export default connect(state)(Write);