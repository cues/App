import React , {Component}from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Image} from 'react-native';
import { withNavigation } from 'react-navigation';
import moment from 'moment';
import style from '../../Styles/Styles'; 
import { createStyles, minWidth } from 'react-native-media-queries';
import ProfilePic from '../User/ProfilePic';

class User extends Component {

    state = {
        time :  null
    }

 

    componentWillMount() {

        this.update_date()

       this.intervalId =  setInterval(() => {
            this.update_date()
           }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    update_date = () => {

        const {fullDate, dates} = this.props;
            if(fullDate){
                this.setState({
                    time  : `on ${dates.fullDate}`
                })
            }else{
                this.setState({
                    time  : moment(dates.timestamp).fromNow()
                })
            }
        
     }
   
    render(){

   
        const {user, dates} = this.props;
        return (
            
            <TouchableOpacity style={styles.container}>
                    <Text style={[styles.username, style.nu]}>Posted by{'\xa0'}</Text>
                    <ProfilePic styleImage={styles.image} image={user.user_image_2} styleInitial={styles.imageInitial} styleInitialText={styles.imageInitialText} initial={user.user_name_initial}/>
                    <Text style={[styles.username, style.nu]}>{'\xa0'}{user.username} {this.state.time}</Text>
            </TouchableOpacity>
        )
    }
   
}


const stylesheet = {
    container: {
        paddingRight: 10,
        marginBottom: 20,
        width:'100%',
        flexDirection:'row',
        // backgroundColor:'red',
        justifyContent:'flex-end'
    },
   
    username : {
        color: 'rgba(127,127,127, 1)',
        fontSize:11,
        letterSpacing :.6,
        height:20,
        lineHeight:20,
        alignItems:'center'
    },
    image : {
        height: 20,
        width: 20,
        borderRadius: 10,
    },
    imageInitial : {
        height: 20,
        width: 20,
        borderRadius: 10,
        overflow:'hidden'
    },
    imageInitialText : {
        fontSize:11,
        lineHeight:20,
        height: 20,
        width: 20,
        textAlign:'center',
    },
};


const styles = createStyles (
    stylesheet , 
    // minWidth(480, {
    //     username : {
    //         height:22,
    //         lineHeight:22,
    //         fontSize:12,
    //         letterSpacing :.7,
    //     },
    //     image : {
    //         height: 16,
    //         width: 16,
    //         borderRadius: 8,
    //     },
    // }),
    // minWidth(768, {
    //     username : {
    //         height:24,
    //         lineHeight:24,
    //         fontSize:13,
    //         letterSpacing :.8,
    //     },
    //     image : {
    //         height: 17,
    //         width: 17,
    //         borderRadius: 9,
    //     },
        
    // })
)


export default withNavigation(User);
