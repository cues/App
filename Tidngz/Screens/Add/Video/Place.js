import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import style from '../../../Styles/Styles';
import addStyle from '../../../Styles/Add';
import {brand, model, models, models2} from '../../../Components/DeviceInfo/DeviceInfo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Add from '../../../Components/TextInput/Add';
import Button from '../Button';




import { connect } from 'react-redux';
import { video_add_headline, video_add_articles , error, error_2} from '../../../Store/Actions/index';

const state = state => {
  return {
      backgroundMain          :   state.themes.backgroundMain,
      menuText                :   state.themes.menuText,
      menuIconColor2          :   state.themes.menuIconColor2,
      place                   :   state.addArticles.video_add_place,
      landmark                :   state.addArticles.video_add_landmark,
      landmarkDesc            :   state.addArticles.video_add_landmarkDesc,
    };
};

const dispatch = dispatch => {
  return {
      this_video_add_headline  : text => dispatch(video_add_headline(text)),
      this_video_add_article  : text => dispatch(video_add_articles(text)),
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
      place         : this.props.place,
      landmark      : this.props.landmark,
      landmarkDesc  : this.props.landmarkDesc,
    }
  }





 

  render() {
    const {backgroundMain, menuIconColor2 } = this.props



    return (
        <View style={[styles.container, style.paddingBackgroundTop, style.paddingBackgroundBottom_2, {backgroundColor: backgroundMain}]}>         

          <View style={addStyle.topBox}>

                  <View style={addStyle.textInputView}>

                      <Button write= {this.write} text='Add a place'/>
                      <Button write= {this.write} text='Add a landmark'/>
      
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
