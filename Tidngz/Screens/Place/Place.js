import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import Header from '../Headers/Places/Header';

import { connect } from 'react-redux';
import { get_place } from '../../Store/Actions/index';

const state = state => {
    return {
        backgroundMain      :   state.themes.backgroundMain,
        api                 :   state.main.api,
        user_id             :   state.main.user.user_id,
        apiKey              :   state.main.apiKey,
        place               :   state.place.place,
      };
  };
  

const dispatch = dispatch => {
    return {
        this_get_place : response => dispatch(get_place(response))
    }
}

class Place extends Component {

    static navigationOptions = ({navigation}) =>  {
        return {
                  headerTransparent : true,
                  header: null,
          }
      } 

    constructor(props){
        super(props)

        this.placeHandler();
    }

    placeHandler = async () => {

        const { api , user_id , apiKey , navigation , this_get_place } = this.props

        const place_id = navigation.getParam('place_id' , '')

        const url = `${api}/Places/places.php?key=${apiKey}&user_id=${user_id}&place_id=${place_id}`;

        await fetch(url)
        .then((response) => response.json())
        .then((response) => {

            // console.warn(response);
            this_get_place(response)
        })
    }


    render (){
        const { backgroundMain , place} = this.props 

        return (
            <View style={[styles.container, {backgroundColor: backgroundMain}]}>
    
                <Header/>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width:'100%',
    },
})


export default connect(state, dispatch)(Place);