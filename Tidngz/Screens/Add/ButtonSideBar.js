import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import style from '../../Styles/Styles';
import addStyle from '../../Styles/Add';

import { sideBar } from '../../Store/Actions/index';


const state = state => {
    return {
        menuIconColor2          :   state.themes.menuIconColor2,
    }
}

const dispatch = dispatch => {
    return {
        this_sideBar            : () => dispatch(sideBar()),
    }
  }

  
class Button extends Component {

    sideBarHandler = () => {
        this.props.this_sideBar();
    }

    render(){
        const { menuIconColor2 , text } = this.props;

        return (
            <TouchableOpacity onPress={this.sideBarHandler}>
                <Text style={[addStyle.textInput, style.ca, {color:menuIconColor2}]}>{text}</Text>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
})


export default connect(state, dispatch)(Button);