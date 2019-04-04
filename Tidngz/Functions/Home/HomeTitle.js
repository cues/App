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
import {add_weather, home_weather_call} from '../../Store/Actions/index';

const state = state => {
    return {
        homeContainer   :   state.themes.homeContainer,
        weatherDesc     :   state.themes.weatherDesc,
        api             :   state.main.api,
        user_id         :   state.main.user.user_id,
        apiKey          :   state.main.apiKey,
        isEmpty         :   state.weather.isEmpty,
        homeWeatherCall :   state.weather.homeWeatherCall
    }
}

const dispatch = dispatch => {
    return {
        this_add_weather        : weather   =>  dispatch(add_weather(weather)),
        this_home_weather_call  : bool      =>  dispatch(home_weather_call(bool))
    }
}

class HomeTitle extends Component {


    state={
        weatherLoader : false
    }


    componentWillMount() {

        !this.props.homeWeatherCall ? this.getWeather(2,1) : null;

        this.props.this_home_weather_call(true)

    }


    getWeather = (where, type) => {

        const {apiKey, api, user_id} = this.props

        if(type == 2){
            this.setState({
                weatherLoader : true
            })
        }
       

         if(where == 1){

         }else{
           
            var lat,lng;
            if (navigator.geolocation) {
    
              navigator.geolocation.getCurrentPosition((position) => {
            
                  lat = position.coords.latitude
                  lng =  position.coords.longitude
         
                    url = `${api}/Weather/User/user.php?&key=${apiKey}&type=${type}&lat=${lat}&long=${lng}&user_id=${user_id}`;
    
          
                    fetch(url)
                    .then((response) => response.json())
                    .then((response) => {
                        
                        this.props.this_add_weather(response)

                        console.log(response)
                        
                        this.setState({
                            weatherLoader : false 
                        })


                    })
                    .catch((error) =>{
                      console.error(error);
                    });
                  
                });
            }

         }
      
     }
     

   

 

    render (){
        const {stylesProps, homeContainer, item, weatherDesc, isEmpty} = this.props;

        const {weatherLoader} = this.state

        const date = new Date();
        const hour = parseInt(date.getHours());

        const welcolm = hour >= 2 && hour < 12 ? `GOOD MORNING ${item.user}`
                    : hour >= 12 && hour < 17 ? `GOOD AFTERNOON ${item.user}`
                    : hour >= 17 && hour < 22 ? `GOOD EVENING ${item.user}`
                    : `Hello ${item.user}`

        const getWeather = (
            isEmpty && !weatherLoader ? 
                <TouchableOpacity style={styles.iconContainer} onPress={() => this.getWeather(2,2)}>
                        <Feather style={styles.icon} name='download-cloud' size={26} color={weatherDesc}/>
                </TouchableOpacity>
            : null
        )

        const weather = (
            !isEmpty ? <Weather/> : null
        )


        const loader = (
            weatherLoader ?  <Loader style={styles.loader}/> : null
        )

        // const containerWeather = !isEmpty ? {marginTop:55} : null;

        return (
            <View style={stylesProps}>
                <View style={[styles.container , style.paddingBackgroundTop]}>
                    <View style={styles.icons}>
                        {/* <TouchableOpacity style={styles.iconContainer} onPress={() => this.props.navigation.navigate('Trending',{name:'TRENDING'})}>
                            <MaterialIcons style={styles.icon} name='trending-up' size={26} color={weatherDesc}/>
                        </TouchableOpacity> */}
                        {getWeather}
                    </View>
                    
                    <View style={[styles.homeContainer, {backgroundColor:homeContainer}]} >
                        <Text style={[styles.homeTitle, style.mo]}>{welcolm}</Text>
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
        letterSpacing:2,
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

export default withNavigation(connect(state, dispatch)(HomeTitle));