import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import style from '../../../Styles/Styles';
import addStyle from '../../../Styles/Add';
import {brand, model, models, models2} from '../../../Components/DeviceInfo/DeviceInfo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Add from '../../../Components/TextInput/Add';

import { connect } from 'react-redux';
import { add_headline, add_articles } from '../../../Store/Actions/index';

const state = state => {
  return {
      backgroundMain          :   state.themes.backgroundMain,
      menuText                :   state.themes.menuText,
      menuIconColor2           :   state.themes.menuIconColor2,
      searchBlur              :   state.themes.searchBlur,
      searchColor             :   state.themes.searchColor,
      searchPlaceholderColor  :   state.themes.searchPlaceholderColor,
      headline                :   state.addArticles.headline,
      article                 :   state.addArticles.article,
    };
};

const dispatch = dispatch => {
  return {
      this_add_headline  : text => dispatch(add_headline(text)),
      this_add_article  : text => dispatch(add_articles(text))
  }
}

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const HEIGHT_1 =  Platform.select({android:50 , ios : models2.includes(model) ? 88 : 68})
const HEIGHT_2 = brand === 'Apple' && models.includes(model) ? 73 :  59

 class Headlines extends Component {
  constructor(props){
    super(props)

    this.state = {
      headline : this.props.headline,
      article : this.props.headline,
      headlineActive : false,
      headlineActive_2 : false,
    }
  }

    write = () => {
      this.setState(prevState => ({
        headlineActive : !prevState.headlineActive
      }))
    }

    write_2 = () => {
      this.setState(prevState => ({
        headlineActive_2 : !prevState.headlineActive_2
      }))
    }

    changeText = text => {
      this.props.this_add_headline(text)
    }

    changeText_2 = text => {
      this.props.this_add_article(text)
    }




  render() {
    const {backgroundMain, menuText, menuIconColor2, searchPlaceholderColor, searchColor} = this.props

    return (
        <View style={[styles.container, style.paddingBackgroundTop, style.paddingBackgroundBottom_2, {backgroundColor: backgroundMain}]}>         

          <View style={addStyle.topBox}
            behavior={Platform.OS === "ios" ? "padding" : null}
            keyboardVerticalOffset={Platform.OS === "ios" ? -300 : 0}>

                <TouchableOpacity style={styles.save}>
                  <Text style={[style.ca, styles.saveText, {color:menuIconColor2}]}>SAVE</Text>
                </TouchableOpacity>
                <Text style={[style.ca, addStyle.textCount, {color:menuIconColor2}]}>123</Text>

                  <View style={styles.textInputView}>

                      <TouchableOpacity onPress={this.write}>
                        <Text style={[styles.textInput, style.ca, {color:menuIconColor2}]}>Headline</Text>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={this.write_2}>
                        <Text style={[styles.textInput, style.ca, {color:menuIconColor2}]}>Your article</Text>
                      </TouchableOpacity>

                      <Add  placeholder='Headline' text={this.state.headline} write = {this.write}  active = {this.state.headlineActive} changeText={this.changeText}/>
                      <Add  placeholder='Write your article' text={this.state.article} write = {this.write_2}  active = {this.state.headlineActive_2} changeText={this.changeText_2}/>
      
                  </View >
           
            
          </View>    

          <View style={addStyle.bottomBox}>
            <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]}>
              <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='drafts' size={23}/>
            </TouchableOpacity>
            <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]}>
              <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='arrow-forward' size={25}/>           
            </TouchableOpacity>
          </View> 



       </View> 
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    save: {
      height : 40, 
      width:70, 
      position:'absolute',
      left:10,
      top:10,
    },
    saveText : {
      height : 40,
      width:70, 
      textAlign:'center',
      lineHeight : 40,
      letterSpacing:2,
      fontSize:18,
      color:'rgba(15, 101, 151, 0.7)'
    },
    textInputView:{
      height: HEIGHT - HEIGHT_1 - HEIGHT_2 - 160,
      width:'100%',
      marginTop: 60,
      alignItems:'center',
      justifyContent:'center'
    },
    textInput : {
      width:'100%',
      padding:10,
      textAlign:'center',
      fontSize:29,
      height : 60,
      // lineHeight: 60,
      // backgroundColor:'red',
      fontWeight:Platform.select({android:'200'}),
      letterSpacing:1.3,
      marginVertical : 50
  }
  });
  
  export default connect(state, dispatch)(Headlines)
