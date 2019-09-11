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

class Delete extends Component {


    render (){
        
        const {visible} = this.props

        return (
            <View style={[styles.container, visible]}>
                <Text>Delete</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container : {
        height : '100%',
        width:'100%',
        position:'absolute',
        left:0,
        top:0,
        backgroundColor:'orange'
    }
})



export default connect(state)(Delete);