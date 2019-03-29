import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions} from 'react-native';
import style from '../../Styles/Styles';
import BlurView from '../../Components/BlurVIew/BlurVIew';

import { connect } from 'react-redux';

const state = state => {
    return {
        tabBlur             :   state.themes.tabBlur,
        menuIconColor       :   state.themes.menuIconColor,
    }
}

class Follow extends Component {


    state = {
        follow : this.props.place.place_following
    }

    follow = () => {
        this.setState(prevState => ({
            follow : !prevState.follow
        }))
    }

    render() {

        const { place , menuIconColor, tabBlur} = this.props;
        const { follow } = this.state;



        return(
        <TouchableOpacity style={ styles.placeFollow } onPress={this.follow}>
              <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={7} />  
              <Text style={[style.bt,styles.placeFollowText, {color:follow ? 'rgba(15,101,141,1)': menuIconColor}]}>
                {follow ? 'Following' : 'Follow'}
              </Text>
        </TouchableOpacity>

        )
    }
}


const styles = StyleSheet.create({

    placeFollow : {
        // backgroundColor:'blue',
        height:30,
        borderWidth:1,
        borderColor:'rgba(123,123,123,1)',
        borderRadius:3,
        overflow:'hidden'
      },
      placeFollowText:{
        fontSize:13,
        letterSpacing:.5,
        lineHeight:30,
        paddingHorizontal : 10,
      }

    
})

export default connect(state)(Follow)

