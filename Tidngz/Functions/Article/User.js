import React , {Component}from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Image} from 'react-native';
import { withNavigation } from 'react-navigation';
import moment from 'moment';
import style from '../../Styles/Styles'; 
import ProfilePic from '../User/ProfilePic';

class User extends Component {

    state = {
        time :  moment(this.props.dates.timestamp).fromNow()
    }

 

    componentWillMount() {
       this.intervalId =  setInterval(() => {
            this.update_date()
           }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    update_date = () => {
            this.setState({
                time  : moment(this.props.dates.timestamp).fromNow()
            })
     }
   
    render(){

   
        const {user, dates} = this.props;
        return (
            
            <View style={styles.container}>

                <ProfilePic styleImage={styles.image} image={user.user_image_2} styleInitial={styles.imageInitial} styleInitialText={styles.imageInitialText} initial={user.user_name_initial}/>
                
                <View style={styles.user}>
                    <Text style={[styles.user_name, style.bt]}>{user.user_name}</Text>
                    <Text style={[styles.username, style.bt]}>{user.username}</Text>
                </View>
                <View style = {styles.date}>
                    <Text style={[styles.time, style.la]}>{this.state.time}</Text>
                </View>
                
            </View>
        )
    }
   
}


const styles = StyleSheet.create({
    container: {
        height: 50,
        marginTop: 0,
        marginBottom: 20,
        width:'100%',
        flexDirection:'row'
    },
    image : {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    imageInitial : {
        height: 50,
        width: 50,
        borderRadius: 25,
        overflow:'hidden'
    },
    imageInitialText : {
        fontSize:30,
        lineHeight:50,
        height: 50,
        width: 50,
        textAlign:'center',
    },
    user : {
        height: 50,
        paddingLeft: 10
    },
    user_name : {
        height: 28,
        lineHeight: 28,
        color: 'rgba(240,240,240, 0.8)',
        fontSize: 15,
        letterSpacing: .8
    },
    username : {
        height: 22,
        lineHeight: 22,
        fontSize: 13,
         color: 'rgba(221,221,221, 0.8)',
         letterSpacing: .7
    },
    date : {
        position:'absolute',
        right:0,
        bottom:0,
        height : 22,
    },
    time : {
        fontSize:12,
         color: 'rgba(221,221,221, 0.8)',
        letterSpacing: .8
    }
});



export default withNavigation(User);
