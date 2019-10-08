import React , {Component} from 'react';
import {Platform, Dimensions, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import style from '../../Styles/Styles';
import CardView from 'react-native-cardview';
import Weather from '../Weather/Weather';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { withNavigation } from 'react-navigation';
import Loader from '../../Components/UI/Loader/Loader';
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
        theme           :   state.themes.theme,
    }
}



class HomeTitle extends Component {

 
 

    render (){
        const {theme, stylesProps, homeContainer, item, weatherDesc, getWeather, weatherLoader, homeWeather, isEmpty} = this.props;

        // const {weatherLoader, homeWeather, isEmpty} = this.state

                        // console.warn(isEmpty)


        const date = new Date();
        const hour = parseInt(date.getHours());

        const user = item.user.split(' ')[0];

        const welcolm = hour >= 2 && hour < 12 ? `GOOD MORNING ${user}`
                    : hour >= 12 && hour < 17 ? `GOOD AFTERNOON ${user}`
                    : hour >= 17 && hour < 22 ? `GOOD EVENING ${user}`
                    : `Hello ${user}`

        const fetchWeather = (
            isEmpty && !weatherLoader ? 
                    <TouchableOpacity style={styles.iconContainer} onPress={() => getWeather(2,2)}>
                            <Feather style={styles.icon} name='download-cloud' size={26} color={weatherDesc}/>
                    </TouchableOpacity>      
            : 
                isEmpty ?
                 <View style={styles.iconContainer} ></View>      
                : null
        )

        const weather = (
            !isEmpty ? <Weather weather={homeWeather}/> : null
        )


        const loader = (
            weatherLoader ?  <Loader style={styles.loader}/> : null
        )

        const containerWeather = !isEmpty ? {marginTop:45} : null;

        const shadow = theme == 'white' ? style.shadowLight : style.shadowDark

        return (
            <View style={stylesProps}>
                <View style={[styles.container , containerWeather, style.paddingBackgroundTop]}>
                    <View style={styles.icons}>
                        {/* <TouchableOpacity style={styles.iconContainer} onPress={() => this.props.navigation.navigate('Trending',{name:'TRENDING'})}>
                            <MaterialIcons style={styles.icon} name='trending-up' size={26} color={weatherDesc}/>
                        </TouchableOpacity> */}
                        {fetchWeather}
                    </View>
                    
                    <View style={[styles.homeContainer, {backgroundColor:homeContainer}]} >
                        <Text style={[styles.homeTitle, style.mo, shadow]}>{welcolm}</Text>
                        {loader}
                        {weather}
                    </View>
                </View>

                
                
                <ArticleOptions routeName='home'/>
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

    homeContainer : {
        width:'95%',
        padding : 10,
        borderRadius:7,
        borderWidth:1,
        borderColor:'rgba(23,23,23,.3)',
        marginTop: 5,
    },
    icons:{
        // height:30,
        width:'100%',
        flexDirection : 'row',
    },
    iconContainer : {
        // backgroundColor:'red',
        marginLeft:10,
        width:35,
        height:30,
    },
    icon : {
        width:35,
        height:30,
        lineHeight:30,
        textAlign:'center',
        // textShadowColor: 'rgba(0,0,0, .7)',
        // textShadowOffset: {width: 1, height: -0},
        // textShadowRadius: 1
    },
    homeTitle : {
        lineHeight:45,
        width:'100%',
        // height:200,
        textAlign: 'center', 
        fontSize:25,
        letterSpacing:2.5,
        ...Platform.select({
            ios: {
                color:'rgba(15, 101, 141, .8);',
                textShadowColor: 'rgba(0,0,0, .7)',
                textShadowOffset: {width: 1, height: -0},
                textShadowRadius: 1
            },
            android : {
                color:'rgba(15, 101, 141, 1);',
            },
        }),
 
    },
    
    loader : {
        marginVertical : 20
    }
  
});

export default withNavigation(connect(state)(HomeTitle));