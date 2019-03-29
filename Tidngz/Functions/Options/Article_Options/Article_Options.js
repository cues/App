import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Dimensions, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import  { withNavigation , DrawerActions} from 'react-navigation'

const state = state => {
    return {
        homeContainer   :   state.themes.homeContainer,
        option          :   state.articles.option,
        top             :   state.articles.top,
        calender        :   state.articles.calender,
    }
}

const dispatch = dispatch => {
    return {
        
    }
}

const width = Dimensions.get('window').width


class ArticleOptions extends Component {

    
    render (){

    const { homeContainer , option , top , calender , navigation } = this.props;



        


        return (
            <View style={[styles.container, {backgroundColor:homeContainer}]}>

                    <TouchableOpacity style={styles.sections} onPress = {() => navigation.navigate('Options',{name : 'CATEGORIES'})}>
                        <MaterialIcons style={styles.selectedOption} size={27} name='view-comfy' color='rgba(15, 101, 141, 0.8)' />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sections} onPress={() => navigation.navigate('Calender',{name : 'CALENDER'})}>
                        <MaterialIcons style={styles.selectedOption} size={24} name='date-range' color='rgba(15, 101, 141, 0.8)' />
                    </TouchableOpacity>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container : {
        marginHorizontal : 20, 
        width:width - 20, 
        borderRadius:7,
        borderWidth:1,
        borderColor:'rgba(23,23,23,.3)',
        marginTop : 0,
        marginBottom : 25,
        height: 40,
        flexDirection:'row'
    },
    sections: {
        width:'50%',
    },
    selectedOption : {
        width:'100%',
        textAlign : 'center' ,
        lineHeight : 40
    }
})


export default withNavigation(connect(state)(ArticleOptions));