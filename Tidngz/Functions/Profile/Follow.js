import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions} from 'react-native';
import style from '../../Styles/Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IcoFont from '../../assets/IcoFont/IcoFont';

import { connect } from 'react-redux';

const state = state => {
    return {
        api                     :   state.main.api,
        user_id                 :   state.main.user.user_id,
        apiKey                  :   state.main.apiKey,
        tabBlur             :   state.themes.tabBlur,
        menuIconColor       :   state.themes.menuIconColor,
    }
}

class Follow extends Component {

    state = {
        follow : this.props.user.user_following
    }

    follow = async() => {
        const { api, apiKey, user_id, user, menuIconColor} = this.props;

        const type = this.state.follow ? 2 : 1


        url = `${api}/UserFollow/userFollow.php?key=${apiKey}&user_id=${user_id}&type=${type}&user_id_follow=${user.user_id}`;
  
        await fetch(url)
        .then((response) => response.json())
        .then((response) => {
            
            this.setState(prevState => ({
                follow : !prevState.follow
            }))
        })
        .catch((error) =>{
        });

      
    }

    render() {

        const { user , menuIconColor} = this.props;
        const { follow } = this.state;

        const add = !follow ? <Ionicons style={styles.add} name="ios-add" size={19} color={menuIconColor} /> : null


        const iconColor = !follow ? menuIconColor : 'rgba(15,101,141,1)'
        const icon = (
            user.user_sex == 1  ?  <IcoFont style={styles.icon} name="business-man" size={21} color={iconColor} /> : 
            user.user_sex == 2  ?  <IcoFont style={styles.icon} name="girl-alt" size={21} color={iconColor} /> :
                              <FontAwesome style={styles.icon} name="user-o" size={20} color={iconColor} /> 
        )
      

        return(
            <TouchableOpacity style={[style.absolute, styles.container]} onPress={this.follow}>
                {add}
                {icon}
            </TouchableOpacity>

        )
    }
}


const styles = StyleSheet.create({
    container : {
        // backgroundColor:'blue',
        height : 50,
        width : 50,
    },
    add:{
        height : 25,
        lineHeight : 25,
        textAlign:'center',
        width :25,
        // backgroundColor:'blue',
        position:'absolute',
        top:0,
        right : 0
    },
    icon : {
        height : 50,
        width : 50,
        textAlign:'center',
        lineHeight : 50
    }
})

export default connect(state)(Follow)

