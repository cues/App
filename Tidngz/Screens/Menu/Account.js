import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import Theme from '../../Components/Themes/Themes';
import style from '../../Styles/Styles'; 
import IcoFont from '../../assets/IcoFont/IcoFont';

import Header from '../Headers/FloatHeader'

import { connect } from 'react-redux';

const state = state => {
  return {
      api             :   state.main.api,
      user_id         :   state.main.user.user_id,
      apiKey          :   state.main.apiKey,
      backgroundMain  :   state.themes.backgroundMain,
  };
};


const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;


class Account extends Component {

  state = {
    type : 1
  }


  typeHandler = type => {
    this.setState({
      type : type
    })
  }

  render() {

  const {backgroundMain} = this.props
  const {type} = this.state
  const section_user      = type == 1 ? style.flex : style.none
  const section_password  = type == 2 ? style.flex : style.none
  const section_info      = type == 3 ? style.flex : style.none
  const section_delete    = type == 4 ? style.flex : style.none

    return (
      <View  style={[styles.container,  {backgroundColor: backgroundMain}]}>
        <Theme/>
      
            <View style={[styles.inner, style.paddingBackgroundTop, style.paddingBackgroundBottom_2]}>

              <View style={styles.header}>
                <TouchableOpacity style={style.displayFlex} onPress={() => this.typeHandler(1)}>
                  <IcoFont style={styles.headerIcons} name='users-alt-4' size={25}/>
                </TouchableOpacity>
                <TouchableOpacity style={style.displayFlex} onPress={() => this.typeHandler(2)}>
                  <IcoFont style={styles.headerIcons} name='ui-lock' size={25}/>
                </TouchableOpacity>
                <TouchableOpacity style={style.displayFlex} onPress={() => this.typeHandler(3)}>
                  <IcoFont style={styles.headerIcons} name='info-circle' size={25}/>
                </TouchableOpacity>
                <TouchableOpacity style={style.displayFlex} onPress={() => this.typeHandler(4)}>
                  <IcoFont style={styles.headerIcons} name='ui-delete' size={25}/>
                </TouchableOpacity>
              </View>


              <View style={styles.body}>
                  <View style={[styles.sections, section_user]}><Text>1</Text></View>
                  <View style={[styles.sections, section_password]}><Text>2</Text></View>
                  <View style={[styles.sections, section_info]}><Text>3</Text></View>
                  <View style={[styles.sections, section_delete]}><Text>4</Text></View>
              </View>
                    {/* <Text>Account</Text> */}
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
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor:'rgba(240,240,240,1)',
    },
    inner: {
      flex: 1,
      width:'100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor:'green'
      // backgroundColor:'rgba(240,240,240,1)',
    },
    header:{
      width:100,
      height:400,
      backgroundColor:'red',
    },
    headerIcons:{
      height:80,
      width:80,
      margin:10,
      textAlign:'center',
      lineHeight:80,
      backgroundColor:'yellow',
    },
    body :{
      width:WIDTH - 135,
      height:400,
      backgroundColor:'blue'
    },
    sections : {
      height : '100%',
      width:'100%',
      position:'absolute',
      left:0,
      top:0,
      backgroundColor:'orange'
    }
  });
  

  export default connect(state)(Account)