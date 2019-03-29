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

class Tags extends Component {


    render (){
        return (
            <View>
                <Text>Tags</Text>
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


export default connect(state)(Tags);