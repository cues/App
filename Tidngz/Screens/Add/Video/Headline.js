import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import style from '../../../Styles/Styles';
import addStyle from '../../../Styles/Add';
import {brand, model, models, models2} from '../../../Components/DeviceInfo/DeviceInfo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Add from '../../../Components/TextInput/Add';
import Button from '../Button';



import { connect } from 'react-redux';
import { video_add_headline, video_add_content , error, error_2} from '../../../Store/Actions/index';

const state = state => {
  return {
      backgroundMain          :   state.themes.backgroundMain,
      menuIconColor2          :   state.themes.menuIconColor2,
      headline                :   state.addArticles.video_add_headline,
      content                 :   state.addArticles.video_add_content,
    };
};

const dispatch = dispatch => {
  return {
      this_video_add_headline   : text => dispatch(video_add_headline(text)),
      this_video_add_content    : text => dispatch(video_add_content(text)),
      this_error                : text => dispatch(error(text)),
      this_error_2              :  () => dispatch(error_2())
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
      headlineCount : 150
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
      if(text != null){
        const maxLength = 150;
        let length = text.length;
        length = maxLength-length;
        this.setState({
          headlineCount : length
        })
      }else{
        this.setState({
          headlineCount : 150
        })
      }
     
      this.props.this_video_add_headline(text)
    }

    changeText_2 = text => {
      this.props.this_video_add_content(text)
    }






  render() {
    const {backgroundMain, menuIconColor2} = this.props


    const headlineCount = this.state.headlineCount

    return (
        <View style={[styles.container, style.paddingBackgroundTop,  style.paddingBackgroundBottom_2, {backgroundColor: backgroundMain}]}>         



          <View style={addStyle.topBox}>

                <Text style={[style.ca, addStyle.textCount, {color:menuIconColor2}]}>{headlineCount}</Text>

                  <View style={addStyle.textInputView}>

                      <Button write= {this.write} text='Headline'/>
                      <Button write= {this.write_2} text='Your article'/>

                      <Add  placeholder='Headline' text={this.state.headline} write = {this.write}  active = {this.state.headlineActive} changeText={this.changeText} maxLength={150} blurOnSubmit={true}/>
                      <Add  placeholder='Write your article' text={this.state.article} write = {this.write_2}  active = {this.state.headlineActive_2} changeText={this.changeText_2} blurOnSubmit={false}/>
      
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
