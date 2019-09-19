import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import { connect } from 'react-redux';

const state = state => {
    return {

    }
}

const dispatch = dispatch => {
    return {
        
    }
}

class Images extends Component {


    render (){

        const { user } = this.props

        const image = (
            user.user_image == '' ? 
                                <Text style={[styles.userImage, styles.userImageText, style.bt]}>{user.user_name_initial}</Text>
                            :
                                <Image style={styles.userImage} source={{uri : user.user_image}} /> 
        )


        return (
            <TouchableOpacity style={styles.imageBox}>
                {image}
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    container : {
        height : 50,
        width: 50,
    }
})


export default connect(state)(Images);