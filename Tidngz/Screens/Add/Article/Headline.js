import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import style from '../../../Styles/Styles';
import addStyle from '../../../Styles/Add';
import {brand, model, models, models2} from '../../../Components/DeviceInfo/DeviceInfo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Add from '../../../Components/TextInput/Add';




import { connect } from 'react-redux';
import { add_headline, add_content , error, error_2} from '../../../Store/Actions/index';

const state = state => {
  return {
      backgroundMain          :   state.themes.backgroundMain,
      menuIconColor2          :   state.themes.menuIconColor2,
      headline                :   state.addArticles.add_headline,
      content                 :   state.addArticles.add_content,
    };
};

const dispatch = dispatch => {
  return {
      this_add_headline   : text => dispatch(add_headline(text)),
      this_add_content    : text => dispatch(add_content(text)),
      this_error          : text => dispatch(error(text)),
      this_error_2        :  () => dispatch(error_2())
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
     
      this.props.this_add_headline(text)
    }

    changeText_2 = text => {
      this.props.this_add_content(text)
    }



    // navigateForward = () => {

    //   this.props.headline == null ? this.props.this_error('Please write a headline for your article') : this.props.navigation.navigate('AddPlace')
      
    //   setTimeout(() => {
    //     this.props.headline == null ? this.props.this_error_2() : null
    //   },3000)
    // }



  render() {
    const {backgroundMain, menuIconColor2} = this.props


    const headlineCount = this.state.headlineCount

    return (
        <View style={[styles.container, style.paddingBackgroundTop, style.paddingBackgroundBottom_2, {backgroundColor: backgroundMain}]}>         



          <View style={addStyle.topBox}>

                <TouchableOpacity style={styles.save}>
                  <Text style={[style.ca, styles.saveText, {color:menuIconColor2}]}>SAVE</Text>
                </TouchableOpacity>
                <Text style={[style.ca, addStyle.textCount, {color:menuIconColor2}]}>{headlineCount}</Text>

                  <View style={styles.textInputView}>

                      <TouchableOpacity onPress={this.write}>
                        <Text style={[styles.textInput, style.ca, {color:menuIconColor2}]}>Headline</Text>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={this.write_2}>
                        <Text style={[styles.textInput, style.ca, {color:menuIconColor2}]}>Your article</Text>
                      </TouchableOpacity>

                      <Add  placeholder='Headline' text={this.state.headline} write = {this.write}  active = {this.state.headlineActive} changeText={this.changeText} maxLength={150} blurOnSubmit={true}/>
                      <Add  placeholder='Write your article' text={this.state.article} write = {this.write_2}  active = {this.state.headlineActive_2} changeText={this.changeText_2} blurOnSubmit={false}/>
      
                  </View >
           
          </View>    



          {/* <View style={addStyle.bottomBox}>
            <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]}>
              <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='drafts' size={23}/>
            </TouchableOpacity>
            <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]} onPress={this.navigateForward}>
              <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='arrow-forward' size={25}/>           
            </TouchableOpacity>
          </View>  */}



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
