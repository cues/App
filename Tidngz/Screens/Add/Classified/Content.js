import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import style from '../../../Styles/Styles';
import addStyle from '../../../Styles/Add';
import {brand, model, models, models2} from '../../../Components/DeviceInfo/DeviceInfo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Add from '../../../Components/TextInput/Add';
import Button from '../Button';



import { connect } from 'react-redux';
import { add_classified_content , error, error_2} from '../../../Store/Actions/index';

const state = state => {
  return {
      backgroundMain          :   state.themes.backgroundMain,
      menuIconColor2          :   state.themes.menuIconColor2,
      content                 :   state.addClassified.add_classified,
    };
};

const dispatch = dispatch => {
  return {
      this_add_classified_content    : text => dispatch(add_classified_content(text)),
      this_error                     : text => dispatch(error(text)),
      this_error_2                   :  () => dispatch(error_2())
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
      content : this.props.content,
      contentActive : false,
      contentCount : 300
    }
  }

    write = () => {
      this.setState(prevState => ({
        contentActive : !prevState.contentActive
      }))
    }


    changeText = text => {
      if(text != null){
        const maxLength = 300;
        let length = text.length;
        length = maxLength-length;
        this.setState({
            contentCount : length
        })
      }else{
        this.setState({
            contentCount : 300
        })
      }
     
      this.props.this_add_classified_content(text)
    }






  render() {
    const {backgroundMain, menuIconColor2} = this.props


    const contentCount = this.state.contentCount

    return (
        <View style={[styles.container, style.paddingBackgroundTop,  style.paddingBackgroundBottom_2, {backgroundColor: backgroundMain}]}>         


          <View style={addStyle.topBox}>

                <Text style={[style.ca, addStyle.textCount, {color:menuIconColor2}]}>{contentCount}</Text>

                  <View style={addStyle.textInputView}>

                      <Button write= {this.write} text='Write your classified Ad'/>

                      <Add  placeholder='Write your classified Ad' text={this.state.content} write = {this.write}  active = {this.state.contentActive} changeText={this.changeText} maxLength={150} blurOnSubmit={true}/>
      
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
  });
  
  export default connect(state, dispatch)(Headlines)
