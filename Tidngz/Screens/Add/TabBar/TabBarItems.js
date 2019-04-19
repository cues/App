import React ,{Component} from 'react';
import { StyleSheet , Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import IcoFont from '../../../assets/IcoFont/IcoFont';
import Ripple from 'react-native-material-ripple';


import {brand, model, models} from '../../Components/DeviceInfo/DeviceInfo';


import { connect } from 'react-redux';
import {home_weather_call} from '../../Store/Actions/index';

const state = state => {
  return {
      tabIcons         :   state.themes.tabIcons,
      user_sex         :  state.main.user.user_sex,
  };
};

const dispatch = dispatch => {
    return {
        this_home_weather_call  : bool      => dispatch(home_weather_call(bool))
    }
}

class TabBarItems extends Component  {



    handlePress = () => {
        this.props.navigation.navigate(this.props.routeName);
        this.props.this_home_weather_call(false);

        if(this.props.routeName == 'Home'){
    
        }
    }


    render(){

        const { routeName, isActive ,  tabIcons, user_sex} = this.props

        tintColor = isActive ? 'rgba(15,101,141,1)' : tabIcons

        fontSize = isActive ? 0 : 0

        let userIcon ;

        if(routeName == 'Profile' && user_sex == 'male'){
            userIcon = <IcoFont style={styles.icon1} name="boy" size={21} color={tintColor} /> 
        }

        // userIcon = user_sex == 'female'     ?   <IcoFont style={styles.icon1} name="girl-alt" size={21} color={tintColor} /> : null
        // userIcon = user_sex == 'business'   ?   <Ionicons style={styles.icon1} name="ios-business" size={21} color={tintColor} /> : null

        icon =  routeName == 'Home' ? <Octicons style={styles.icon1} name="home" size={26 + fontSize} color={tintColor} /> :
                routeName == 'Search' ? <IcoFont style={styles.icon2} name="search-alt-1" size={21 + fontSize} color={tintColor} /> : 
                routeName == 'Add' ? <EvilIcons style={styles.icon3} name="pencil" size={38 + fontSize} color={tintColor} /> : 
                routeName == 'Places' ? <Ionicons style={styles.icon2} name="md-globe" size={26 + fontSize} color={tintColor} /> : 
                routeName == 'Profile' ? 
                            user_sex == 1  ?  <IcoFont style={styles.icon1} name="business-man" size={21 + fontSize} color={tintColor} /> : 
                            user_sex == 2  ?  <IcoFont style={styles.icon1} name="girl-alt" size={21 + fontSize} color={tintColor} /> :
                                              <FontAwesome style={styles.icon1} name="user-o" size={20 + fontSize} color={tintColor} /> : null


        return(
            <TouchableOpacity  onPress = {this.handlePress} style={styles.container}>
                    {icon}
             </TouchableOpacity>

        )
    }

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'transparent',
      paddingBottom: brand === 'Apple' && models.includes(model) ? 0 :  0
    },
    icon1:{
        marginTop:brand === 'Apple' && models.includes(model) ? 8 : 0,
    },
    icon2:{
        marginTop:brand === 'Apple' && models.includes(model) ? -8 : 2
    },
    icon3:{
        marginTop:brand === 'Apple' && models.includes(model) ? -24 : 0
    }
    // icon2:{
    //     paddingTop:-5
    // }
})


export default connect(state, dispatch)(TabBarItems);
