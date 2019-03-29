import React , {Component}from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import { withNavigation } from 'react-navigation';
import style from '../../Styles/Styles'; 

class User extends Component {

   
    render(){

   
        const {article} = this.props;


        return (
            <View style={styles.container}>
                

                
            </View>
        )
    }
   
}


const styles = StyleSheet.create({
    container : {
        height:44,
        width:'100%',
        // backgroundColor:'red'
    }
});



export default withNavigation(User);
