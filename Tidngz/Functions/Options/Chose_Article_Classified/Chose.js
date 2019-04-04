import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Dimensions, TouchableOpacity, Animated} from 'react-native';
import { connect } from 'react-redux';
import style from '../../../Styles/Styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import  { withNavigation , DrawerActions} from 'react-navigation'

const state = state => {
    return {
        homeContainer   :   state.themes.homeContainer,
        menuIconColor   :   state.themes.menuIconColor,
        option          :   state.articles.option,
        top             :   state.articles.top,
        calender        :   state.articles.calender,
    }
}

const dispatch = dispatch => {
    return {
        
    }
}

const width = Dimensions.get('window').width



class Chose extends Component {


    state = {
        articles: true,
        classified : false,
        animateArticles : new Animated.Value(1),
        animateClassified : new Animated.Value(0),
    }


    chose = type => {

        this.props.refresh(type)

        if(type == 1){

            Animated.timing(this.state.animateArticles, {
                toValue: 1,
                duration: 200,
            }).start();

            Animated.timing(this.state.animateClassified, {
                toValue: 0,
                duration: 200,
            }).start();

            this.setState({
                articles: true,
                classified : false  
            })
        }else{

            Animated.timing(this.state.animateArticles, {
                toValue: 0,
                duration: 200,
            }).start();

            Animated.timing(this.state.animateClassified, {
                toValue: 1,
                duration: 200,
            }).start();

            this.setState({
                articles: false,
                classified : true  
            })
        }
    }
    
    render (){

    const { homeContainer , option , top , calender , navigation , menuIconColor } = this.props;


    const articlesHeight = this.state.animateArticles.interpolate({
        inputRange : [0,1],
        outputRange : [30, 40],
        extrapolate:'clamp'
    })

    const articlesColor = this.state.animateArticles.interpolate({
        inputRange : [0,1],
        outputRange : [menuIconColor, 'rgba(15, 101, 141, 1)'],
        extrapolate:'clamp'
    })

    const articlesFont = this.state.animateArticles.interpolate({
        inputRange : [0,1],
        outputRange : [13, 15],
        extrapolate:'clamp'
    })

    const articlesLetterSpacing = this.state.animateArticles.interpolate({
        inputRange : [0,1],
        outputRange : [1.5, 1.6],
        extrapolate:'clamp'
    })



    const classifiedHeight = this.state.animateClassified.interpolate({
        inputRange : [0,1],
        outputRange : [30, 40],
        extrapolate:'clamp'
    })

    const classifiedColor = this.state.animateClassified.interpolate({
        inputRange : [0,1],
        outputRange : [menuIconColor, 'rgba(15, 101, 141, 1)'],
        extrapolate:'clamp'
    })

    const classifiedFont = this.state.animateClassified.interpolate({
        inputRange : [0,1],
        outputRange : [13, 15],
        extrapolate:'clamp'
    })

    const classifiedLetterSpacing = this.state.animateClassified.interpolate({
        inputRange : [0,1],
        outputRange : [1.5, 1.6],
        extrapolate:'clamp'
    })



    const Touch = Animated.createAnimatedComponent(TouchableOpacity)

        return (
            <View style={[styles.container]}>

                    <Touch style={[styles.sections, { height : articlesHeight, backgroundColor:homeContainer}]} onPress={() => this.chose(1)}>
                        <Animated.Text style={[style.mo, styles.text,  {color:articlesColor, lineHeight : articlesHeight, fontSize:articlesFont, letterSpacing:articlesLetterSpacing}]}>ARTICLES</Animated.Text>
                    </Touch>

                    <Touch style={[styles.sections, {height : classifiedHeight, backgroundColor:homeContainer}]} onPress={() => this.chose(2)}>
                        <Animated.Text style={[style.mo, styles.text, {color:classifiedColor,  lineHeight : classifiedHeight, fontSize:classifiedFont, letterSpacing:classifiedLetterSpacing}]}>CLASSIFIED</Animated.Text>
                    </Touch>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container : {
        marginHorizontal : 20, 
        width:width - 20, 
        marginTop : 0,
        marginBottom : 25,
        height: 40,
        flexDirection:'row',
        alignItems:'center'
    },
    sections: {
        // height : 30,
        width:'42%',
        marginHorizontal : '4%',
        borderRadius:5,
        overflow:'hidden',
        borderRadius:7,
        borderWidth:1,
        borderColor:'rgba(23,23,23,.3)',
    },
    text:{
        width:'100%',
        lineHeight:30,
        textAlign:'center',
        fontSize : 13,
        letterSpacing : 1.5
    },
    selectedText : {
        // color:'rgba(15, 101, 141, 0.8)',
        // textShadowColor: 'rgba(77,77,77,1)',
        // textShadowOffset: {width: 1, height: 1},
        // textShadowRadius:1        
    }
})


export default withNavigation(connect(state)(Chose));