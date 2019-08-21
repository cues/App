import React , {Component} from 'react';
import {Platform, Dimensions, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import style from '../../Styles/Styles';
import CardView from 'react-native-cardview';
import Weather from '../Weather/Weather';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { withNavigation } from 'react-navigation';
import ArticleOptions from '../Options/Article_Options/Article_Options';

const width = Dimensions.get('window').width


import { connect } from 'react-redux';
import { home_weather_call } from '../../Store/Actions/index';

const state = state => {
    return {
        homeContainer   :   state.themes.homeContainer,
        weatherDesc     :   state.themes.weatherDesc,
        api             :   state.main.api,
        user_id         :   state.main.user.user_id,
        apiKey          :   state.main.apiKey,
    }
}



class BookmarkTitle extends Component {

 
 

    render (){
        const {stylesProps} = this.props;

        return (
            <View style={stylesProps}>
                <View style={[style.paddingBackgroundTop]}/>
                <View style={{height : 15, width : '100%'}}/>
                <ArticleOptions routeName='bookmark'/>
            </View>

        )
    }
    
   

}


const styles = StyleSheet.create({
    container : {
        marginHorizontal : 10, 
        width:width, 
        // backgroundColor:'red',
        alignItems:'center',
        marginBottom:25,
        marginTop:15,
    },
 
  
});

export default withNavigation(connect(state)(BookmarkTitle));