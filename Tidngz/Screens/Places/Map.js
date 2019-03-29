import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button,Animated} from 'react-native';
import { WebView } from "react-native-webview";
import Header from '../Headers/FloatHeader_2';
import style from '../../Styles/Styles'
import { connect } from 'react-redux';

const state = state => {
  return {
      backgroundMain         :   state.themes.backgroundMain,
    };
};


 class Maps extends Component {

    state = {
        scrollAnim: new Animated.Value(0),
        offsetAnim: new Animated.Value(0),
    }


    handleMomentumScrollBegin = (event) => {
  
        this._previousScrollvalue = event.nativeEvent.contentOffset.y;

    };
        
  
    handleScroll = (event) => {

        this._currentScrollValue = event.nativeEvent.contentOffset.y;

        _handleScroll(this._previousScrollvalue, this._currentScrollValue, HOME_HEADER_MAX_HEIGHT, this.state.offsetAnim)

    };


  render() {
    const {backgroundMain} = this.props
    return (
      <View style={[styles.container, style.paddingBackgroundBottom_2, style.paddingBackgroundTop,  {backgroundColor: backgroundMain}]}>        



<WebView style={[styles.container,{backgroundColor: backgroundMain}]}
        source={{uri: 'http://192.168.0.198:1707/Tidngz/map_reactNative.php'}}
      />

<Header scrollAnim={this.state.scrollAnim} 
                    offsetAnim={this.state.offsetAnim}
                    />
       </View>  
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
    },
   




  });
  
  export default connect(state)(Maps)
