
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions, Animated} from 'react-native';
import style from '../../Styles/Styles';
import BlurView from '../../Components/BlurVIew/BlurVIew';

import { connect } from 'react-redux';
import { place_follow } from '../../Store/Actions/index';

const state = state => {
    return {
        tabBlur             :   state.themes.tabBlur,
        menuIconColor       :   state.themes.menuIconColor,
        api                 :   state.main.api,
        user_id             :   state.main.user.user_id,
        apiKey              :   state.main.apiKey,
    }
}

const dispatch = dispatch => {
    return {
        this_place_follow : place => dispatch(place_follow(place))
    }
}

class Follow extends Component {


    state = {
        follow : this.props.place.place_following
    }


    
    follow = async () => {

        const { api , user_id , apiKey , this_place_follow} = this.props;
        let { place } = this.props
        const place_id = place.id;

        const url = `${api}/Places/Follow/follow.php?key=${apiKey}&user_id=${user_id}&place_id=${place_id}`;

        await fetch(url)
        .then((response) => response.json())
        .then((response) => {

            this.setState({
                follow : response.data.follow
            })

            place = this.props.place
            place = this.placeFollowUpdate(place, response.data.follow, response.data.followers)
            this_place_follow(place)

        })

        // this.setState(prevState => ({
        //     follow : !prevState.follow
        // })) 
    }


    placeFollowUpdate = (place, follow, count) => {
        place.place_followers = count
        place.place_following = follow
        return place; 
      }

      

    render() {

        const { place , menuIconColor, tabBlur, height = 30, fontSize = 13, padding = 10} = this.props;
        const { follow } = this.state;

        const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

        return(
        <AnimatedTouchableOpacity style={ [styles.placeFollow , {height:height}]} onPress={this.follow}>
              <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={7} />  
              <Animated.Text style={[style.bt,styles.placeFollowText, {paddingHorizontal:padding, fontSize:fontSize, lineHeight: height, color:follow ? 'rgba(15,101,141,1)': menuIconColor}]}>
                {follow ? 'Following' : 'Follow'}
              </Animated.Text>
        </AnimatedTouchableOpacity>

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

export default connect(state, dispatch)(Follow)

