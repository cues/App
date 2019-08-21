import React, {Component} from 'react';
  import {Platform, StyleSheet, Text, View, Animated} from 'react-native';
  import Articles from '../../Functions/Articles/ArticleList';
  import { _handleScroll } from '../../Components/HeaderScroll/HeaderScroll'
  import Theme from '../../Components/Themes/Themes';
  
  import Header from '../Headers/FloatHeader_3'
  
  import { connect } from 'react-redux';
  
  const state = state => {
    return {
        api             :   state.main.api,
        user_id         :   state.main.user.user_id,
        apiKey          :   state.main.apiKey,
        backgroundMain  :   state.themes.backgroundMain,
    };
  };
  
  
  class Trending extends Component {
  
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
  
    <View style={[styles.container, {backgroundColor: backgroundMain}]}>
      <Theme/>
     
      <Articles 
          type = 'Bookmark'
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgba(240,240,240,1)',
      },
     
    });
    
  
  
    export default connect(state)(Trending)
  