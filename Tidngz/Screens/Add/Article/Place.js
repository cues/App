import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import style from '../../../Styles/Styles';
import addStyle from '../../../Styles/Add';
import {brand, model, models, models2} from '../../../Components/DeviceInfo/DeviceInfo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Add from '../../../Components/TextInput/Add';




import { connect } from 'react-redux';
import { add_headline, add_articles , error, error_2} from '../../../Store/Actions/index';

const state = state => {
  return {
      backgroundMain          :   state.themes.backgroundMain,
      menuText                :   state.themes.menuText,
      menuIconColor2           :   state.themes.menuIconColor2,
      headline                :   state.addArticles.headline,
      article                 :   state.addArticles.article,
    };
};

const dispatch = dispatch => {
  return {
      this_add_headline  : text => dispatch(add_headline(text)),
      this_add_article  : text => dispatch(add_articles(text)),
      this_error        : text => dispatch(error(text)),
      this_error_2      :  () => dispatch(error_2())
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
    }
  }





 

  render() {
    const {backgroundMain, menuIconColor2 } = this.props



    return (
        <View style={[styles.container, style.paddingBackgroundTop, style.paddingBackgroundBottom_2, {backgroundColor: backgroundMain}]}>         



          <View style={addStyle.topBox}>

                  <View style={styles.textInputView}>

                      <TouchableOpacity onPress={this.write}>
                        <Text style={[styles.textInput, style.ca, {color:menuIconColor2}]}>Add a place</Text>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={this.write_2}>
                        <Text style={[styles.textInput, style.ca, {color:menuIconColor2}]}>Add a landmark</Text>
                      </TouchableOpacity>
      
                  </View >
            
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
