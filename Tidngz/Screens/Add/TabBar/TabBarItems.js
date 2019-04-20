import React ,{Component} from 'react';
import { StyleSheet , Text, View, TouchableOpacity } from 'react-native';
import style from '../../../Styles/Styles';


import { connect } from 'react-redux';;

const state = state => {
  return {
      tabIcons         :   state.themes.tabIcons,
      user_sex         :  state.main.user.user_sex,
  };
};


class TabBarItems extends Component  {

    // constructor(props){
    //     super(props)
    //     this.props.navigation.navigate('Article');
    // }

    handlePress = () => {
        this.props.navigation.navigate(this.props.routeName);
    }

    render(){

        const { routeName, isActive ,  tabIcons, user_sex} = this.props

        tintColor = isActive ? 'rgba(15,101,141,1)' : tabIcons

        fontSize = isActive ? 0 : 0

        icon =  routeName == 'Classified' ? <Text style={[style.la, styles.text, {color:tintColor}]}>CLASSIFIED</Text> :
                routeName == 'Article' ?  <Text style={[style.la, styles.text, {color:tintColor}]}>ARTICLE</Text>: 
                routeName == 'Video' ?  <Text style={[style.la, styles.text, {color:tintColor}]}>VIDEO</Text>: null


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
      height:'100%',
      width:'100%'   
    },
    text : {
        fontSize:13,
        letterSpacing:1,
    }
})


export default connect(state)(TabBarItems);
