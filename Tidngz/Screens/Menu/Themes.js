import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Header from '../Headers/FloatHeader'
import style from '../../Styles/Styles'; 
import { connect } from 'react-redux';
import {add_theme_white, add_theme_black} from '../../Store/Actions/index';
import { withNavigation } from 'react-navigation';
import Theme from '../../Components/Themes/Themes';

const state = state => {
  return {
      api             :   state.main.api,
      user_id         :   state.main.user.user_id,
      apiKey          :   state.main.apiKey,
      backgroundMain  :   state.themes.backgroundMain,
  };
};

const dispatch = dispatch => {
  return {
      this_add_theme_white     :   ()   =>  dispatch(add_theme_white()),
      this_add_theme_black     :   ()   =>  dispatch(add_theme_black())
  }
}

class Themes extends Component {




add_theme = (theme) => {

  if(theme == 1){
    this.props.this_add_theme_white()
    this.props.navigation.navigate('Themes',{headerIcon : 'rgba(255,255,255,1)'})
  }else{
    this.props.this_add_theme_black()
    this.props.navigation.navigate('Themes',{headerIcon : 'rgba(23,23,23,.9)'})
  }


  const {apiKey, api, user_id} = this.props
  
    url = `${api}/User/Themes/themes.php?key=${apiKey}&user_id=${user_id}&type=darkTheme&theme=${theme}`;
    
    fetch(url)
    .then((response) => response.json())
    .then((response) => {
      // console.warn(response)
    })
    .catch((error) =>{
      // console.error(error);
    });


}

  render() {

   

  const {backgroundMain, this_add_theme_white, this_add_theme_black} = this.props
  const {add_theme} = this;

    return (
      <View style={[styles.container,  {backgroundColor: backgroundMain}]}>
        <Theme/>

        <View style={[styles.container, style.paddingBackgroundTop, style.paddingBackgroundBottom_2]}>
        
          <View style={styles.header}>
                <View style={[styles.themes, style.displayFlex]}>
                    <TouchableOpacity style={[styles.diamondShield, styles.themeWhite]} onPress={() => add_theme(1)}>
                    </TouchableOpacity>
                </View>

                <View style={[styles.themes, style.displayFlex]}>
                    <TouchableOpacity style={[styles.diamondShield, styles.themeBlack]} onPress={() => add_theme(2)}>
                    </TouchableOpacity>
                </View>
            </View>
       </View>
       
       <Header/>
       
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    header : {
      height : '100%',
      width:'100%',
      flexDirection:'row',
      // backgroundColor:'red',
    },
    themes : {
      height:'100%',
      width:'50%',
    },
    themeWhite : {
      width:70,
      height:70,
      backgroundColor:'white',
      borderTopLeftRadius:20,
      borderBottomLeftRadius:20,
      alignSelf : 'flex-end'
    },

    themeBlack : {
      width:70,
      height:70,
      backgroundColor:'black',
      borderTopRightRadius:20,
      borderBottomRightRadius:20,
      alignSelf : 'flex-start'
    },

  });
  

  export default withNavigation(connect(state, dispatch)(Themes))