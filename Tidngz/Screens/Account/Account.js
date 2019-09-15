import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import Theme from '../../Components/Themes/Themes';
import style from '../../Styles/Styles'; 
import IcoFont from '../../assets/IcoFont/IcoFont';
import User from '../../Functions/Account/User/User';
import Password from '../../Functions/Account/Password/Password';
import Info from '../../Functions/Account/Info/Info';
import Delete from '../../Functions/Account/Delete/Delete';

import Error from  '../../Components/Error/Error';
import Success from  '../../Components/Success/Success';


import Header from '../Headers/FloatHeader'

import { connect } from 'react-redux';

const state = state => {
  return {
      api             :   state.main.api,
      user_id         :   state.main.user.user_id,
      apiKey          :   state.main.apiKey,
      backgroundMain  :   state.themes.backgroundMain,
      menuIconColor       :   state.themes.menuIconColor,
      articleItem         :   state.themes.articleItem,
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

  const {backgroundMain, menuIconColor, articleItem} = this.props
  const {type} = this.state

  const section_user      = type == 1 ? 'flex' : 'none'
  const section_password  = type == 2 ? 'flex' : 'none'
  const section_info      = type == 3 ? 'flex' : 'none'
  const section_delete    = type == 4 ? 'flex' : 'none'

  const headerIconUser      = type == 1 ? articleItem : 'transparent'
  const headerIconPassword  = type == 2 ? articleItem : 'transparent'
  const headerIconInfo      = type == 3 ? articleItem : 'transparent'
  const headerIconDelete    = type == 4 ? articleItem : 'transparent'

    return (
      <View  style={[styles.container,  {backgroundColor: backgroundMain}]}>
        <Theme/>
      
            <View style={[styles.inner, style.paddingBackgroundTop, style.paddingBackgroundBottom_2]}>

              <View style={styles.header}>
                <TouchableOpacity style={style.displayFlex} onPress={() => this.typeHandler(1)}>
                  <IcoFont style={[styles.headerIcons, {backgroundColor:headerIconUser}]} color={menuIconColor} name='users-alt-4' size={23}/>
                </TouchableOpacity>
                <TouchableOpacity style={style.displayFlex} onPress={() => this.typeHandler(2)}>
                  <IcoFont style={[styles.headerIcons, {backgroundColor:headerIconPassword}]} color={menuIconColor} name='ui-lock' size={23}/>
                </TouchableOpacity>
                <TouchableOpacity style={style.displayFlex} onPress={() => this.typeHandler(3)}>
                  <IcoFont style={[styles.headerIcons, {backgroundColor:headerIconInfo}]} color={menuIconColor} name='info-circle' size={23}/>
                </TouchableOpacity>
                <TouchableOpacity style={style.displayFlex} onPress={() => this.typeHandler(4)}>
                  <IcoFont style={[styles.headerIcons, {backgroundColor:headerIconDelete}]} color={menuIconColor} name='ui-delete' size={23}/>
                </TouchableOpacity>
              </View>


              <View style={[styles.body, {backgroundColor:articleItem}]}>
                      <User       visible={section_user}/>
                      <Password   visible={section_password}/>
                      <Info       visible={section_info}/>
                      <Delete     visible={section_delete}/>
              </View>

          </View>


          <Header/>

          <Error type={2}/>

          <Success type={2}/>

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
      // backgroundColor:'green'
      // backgroundColor:'rgba(240,240,240,1)',
    },
    header:{
      width:100,
      height:400,
      // backgroundColor:'red',
    },
    headerIcons:{
      height:50,
      lineHeight:50,
      width:50,
      margin:10,
      textAlign:'center',
      borderRadius:10,
    },
    body :{
      width:WIDTH - 135,
      height:400,
      borderRadius: 10
      // backgroundColor:'blue'
    },
    sections : {
      height : '100%',
      width:'100%',
      position:'absolute',
      left:0,
      top:0,
      // backgroundColor:'orange'
    }
  });
  

  export default connect(state)(Account)