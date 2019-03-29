import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button,Animated} from 'react-native';
import Map from './Places/Map';
import Header from './Headers/FloatHeader_2';
import style from '../Styles/Styles'
import { connect } from 'react-redux';

const state = state => {
  return {
      backgroundMain         :   state.themes.backgroundMain,
    };
};


 class Places extends Component {

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

        <Button title = 'Go to Map'
            onPress = {() => this.props.navigation.navigate('Map')}/>
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
  
  export default connect(state)(Places)
