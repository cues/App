import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Animated} from 'react-native';
// import Header from '../Headers/FloatHeader'
import Header from '../Headers/FloatHeader_3';
import NotificationsList from '../../Functions/Notification/Notification_List'
import { _handleScroll } from '../../Components/HeaderScroll/HeaderScroll'
import {brand, model, models} from '../../Components/DeviceInfo/DeviceInfo';

import { connect } from 'react-redux';

const state = state => {
  return {
      backgroundMain          :   state.themes.backgroundMain,
  };
};


class Notifications extends Component {

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
          <View style={[styles.container,  {backgroundColor: backgroundMain}]}>

          <NotificationsList 
                      type = 'home'
                      scrollAnim = {this.state.scrollAnim}
                      handleScroll = {this.handleScroll}
                      onMomentumScrollBegin = {this.handleMomentumScrollBegin}
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
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width:'100%',
    },
  });




  export default connect(state)(Notifications);
  