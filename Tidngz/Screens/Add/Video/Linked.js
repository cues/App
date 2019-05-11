import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import style from '../../../Styles/Styles';
import addStyle from '../../../Styles/Add';
import {brand, model, models, models2} from '../../../Components/DeviceInfo/DeviceInfo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Add from '../../../Components/TextInput/Add';
import Button from '../Button';




import { connect } from 'react-redux';
import { error, error_2} from '../../../Store/Actions/index';

const state = state => {
  return {
      backgroundMain          :   state.themes.backgroundMain,
      menuIconColor2          :   state.themes.menuIconColor2,
      link                    :   state.addArticles.video_add_link,
    };
};

const dispatch = dispatch => {
  return {
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
      link : this.props.link,
      linkActive : false
    }
  }

  write = () => {
    this.setState(prevState => ({
      linkActive : !prevState.linkActive
    }))
  }
   

    changeText = text => {
      this.props.this_add_link(text)
    }


  render() {
    const {backgroundMain, menuIconColor2} = this.props



    return (
        <View style={[styles.container, style.paddingBackgroundTop, style.paddingBackgroundBottom_2, {backgroundColor: backgroundMain}]}>         



          <View style={addStyle.topBox}>

                  <View style={addStyle.textInputView}>

                      <Button write= {this.write} text='Link to a previous article'/>
                      
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
  });
  
  export default connect(state, dispatch)(Headlines)
