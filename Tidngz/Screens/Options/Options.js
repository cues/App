import React, {Component} from 'react';
import {Platform, Dimensions, StyleSheet, View, TextInput, Text, TouchableOpacity, ScrollView, Animated} from 'react-native';
import { connect } from 'react-redux';
import style from '../../Styles/Styles'
import BlurView from '../../Components/BlurVIew/BlurVIew';
import Theme from '../../Components/Themes/Themes';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { withNavigation } from 'react-navigation'
const width = Dimensions.get('window').width;
import Header from '../Headers/FloatHeader';


const state = state => {
    return {
        backgroundMain   :   state.themes.backgroundMain,
        headerColor      :   state.themes.headerColor,
        tabBlur          :   state.themes.tabBlur,
        menuIconColor    :   state.themes.menuIconColor,
        menuIconColor2   :   state.themes.menuIconColor2,
    }
}

const dispatch = dispatch => {
    return {
        
    }
}


class Options extends Component {

    
      

    render (){

        const { backgroundMain , headerColor, tabBlur , menuIconColor, menuIconColor2, navigation} = this.props;

        const icon1 = 16
        const icon2 = 18
        const icon3 = 22

        const iconRight = (
            <MaterialIcons style={[styles.eachOptionGo]} name="keyboard-arrow-right" size={22} color={menuIconColor2} />
        )

        const routeName = navigation.getParam('routeName' , '')
        const headerText = navigation.getParam('headerText' , '')
    

        return (
            <View style={[styles.container, {backgroundColor : backgroundMain}]}>

                <Theme/>


                <ScrollView contentContainerStyle={[style.paddingBackgroundTop, style.paddingBackgroundBottom_2]}>

                        <TouchableOpacity style={[styles.eachOption]} onPress={() => navigation.navigate('OptionArticles', {routeName: routeName, headerText:headerText, name : 'ACCIDENT', optionName : 'ACCIDENT', option : 2, type:'options'})}>
                            <FontAwesome5 style={styles.eachOptionIcon} size={icon1} name='ambulance' color={menuIconColor} />
                            <Text style={[styles.eachOptionText, style.ma , {color:menuIconColor}]}>Accident</Text>
                            {iconRight}
                        </TouchableOpacity>

                        <View style={style.line_2}/>

                        <TouchableOpacity style={[styles.eachOption]} onPress={() => navigation.navigate('OptionArticles', {routeName: routeName, headerText:headerText, name : 'BUSINESS', optionName : 'BUSINESS', option : 3, type:'options'})}>
                            <MaterialIcons style={styles.eachOptionIcon} size={icon3} name='business-center' color={menuIconColor} />
                            <Text style={[styles.eachOptionText, style.ma , {color:menuIconColor}]}>Business</Text>
                            {iconRight}
                        </TouchableOpacity>

                        <View style={style.line_2}/>

                        <TouchableOpacity style={[styles.eachOption]} onPress={() => navigation.navigate('OptionArticles', {routeName: routeName, headerText:headerText, name : 'CELEBRITY', optionName : 'CELEBRITY', option : 4, type:'options'})}>
                            {/* <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={7} />  */}
                            <MaterialIcons style={styles.eachOptionIcon} size={icon3} name='face' color={menuIconColor} />
                            <Text style={[styles.eachOptionText, style.ma , {color:menuIconColor}]}>Celebrity</Text> 
                            {iconRight}
                        </TouchableOpacity>

                        <View style={style.line_2}/>

                        <TouchableOpacity style={[styles.eachOption]} onPress={() => navigation.navigate('OptionArticles', {routeName: routeName, headerText:headerText, name : 'CRIME', optionName : 'CRIME', option : 5, type:'options'})}>
                            <FontAwesome5 style={styles.eachOptionIcon} size={icon2} name='bomb' color={menuIconColor} />
                            <Text style={[styles.eachOptionText, style.ma , {color:menuIconColor}]}>Crime</Text>
                            {iconRight}
                        </TouchableOpacity>

                        <View style={style.line_2}/>

                        <TouchableOpacity style={[styles.eachOption]} onPress={() => navigation.navigate('OptionArticles', {routeName: routeName, headerText:headerText, name : 'EDUCATION', optionName : 'EDUCATION', option : 6, type:'options'})}>
                            <MaterialIcons style={styles.eachOptionIcon} size={icon3} name='school' color={menuIconColor} />
                            <Text style={[styles.eachOptionText, style.ma , {color:menuIconColor}]}>Education</Text> 
                            {iconRight}
                        </TouchableOpacity>

                        <View style={style.line_2}/>

                        <TouchableOpacity style={[styles.eachOption]} onPress={() => navigation.navigate('OptionArticles', {routeName: routeName, headerText:headerText, name : 'ENTERTAINMENT', optionName : 'ENVIRONMENT', option : 7, type:'options'})}>
                            {/* <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={7} /> */}
                            <MaterialIcons style={styles.eachOptionIcon} size={icon3} name='speaker' color={menuIconColor} />
                            <Text style={[styles.eachOptionText, style.ma , {color:menuIconColor}]}>Entertainment</Text> 
                            {iconRight}  
                        </TouchableOpacity>

                        <View style={style.line_2}/>

                        <TouchableOpacity style={[styles.eachOption]} onPress={() => navigation.navigate('OptionArticles', {routeName: routeName, headerText:headerText, name : 'ENVIRONMENT', optionName : 'ENVIRONMENT', option : 8, type:'options'})}>
                            {/* <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={7} />  */}
                            <FontAwesome style={styles.eachOptionIcon} size={icon2} name='tree' color={menuIconColor} />
                            <Text style={[styles.eachOptionText, style.ma , {color:menuIconColor}]}>Environment</Text>
                            {iconRight}
                        </TouchableOpacity>

                        <View style={style.line_2}/>

                        <TouchableOpacity style={[styles.eachOption]} onPress={() => navigation.navigate('OptionArticles', {routeName: routeName, headerText:headerText, name : 'FILMS & THEATRE', optionName : 'FILMS & THEATRE', option : 9, type:'options'})}>
                            {/* <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={7} />  */}
                            <FontAwesome style={styles.eachOptionIcon} size={icon2} name='film' color={menuIconColor} />
                            <Text style={[styles.eachOptionText, style.ma , {color:menuIconColor}]}>Films & Theatre</Text>
                            {iconRight}
                        </TouchableOpacity>

                        <View style={style.line_2}/>

                        <TouchableOpacity style={[styles.eachOption]} onPress={() => navigation.navigate('OptionArticles', {routeName: routeName, headerText:headerText, name : 'FOOD & CULINARY', optionName : 'FOOD & CULINARY', option : 10, type:'options'})}>
                            {/* <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={7} />  */}
                            <FontAwesome5 style={styles.eachOptionIcon} size={icon2} name='utensils' color={menuIconColor} />
                            <Text style={[styles.eachOptionText, style.ma , {color:menuIconColor}]}>Food & Culinary</Text>
                            {iconRight}
                        </TouchableOpacity>

                        <View style={style.line_2}/>

                        <TouchableOpacity style={[styles.eachOption]} onPress={() => navigation.navigate('OptionArticles', {routeName: routeName, headerText:headerText, name : 'GAMING', optionName : 'GAMING', option : 11, type:'options'})}>
                            <MaterialIcons style={styles.eachOptionIcon} size={icon3} name='games' color={menuIconColor} />
                            <Text style={[styles.eachOptionText, style.ma , {color:menuIconColor}]}>Gaming</Text> 
                            {iconRight}  
                        </TouchableOpacity>

                        <View style={style.line_2}/>

                        <TouchableOpacity style={[styles.eachOption]} onPress={() => navigation.navigate('OptionArticles', {routeName: routeName, headerText:headerText, name : 'HEALTH', optionName : 'HEALTH', option : 12, type:'options'})}>
                            <FontAwesome5 style={styles.eachOptionIcon} size={icon2} name='heartbeat' color={menuIconColor} />
                            <Text style={[styles.eachOptionText, style.ma , {color:menuIconColor}]}>Health</Text>
                            {iconRight}
                        </TouchableOpacity>

                        <View style={style.line_2}/>

                        <TouchableOpacity style={[styles.eachOption]} onPress={() => navigation.navigate('OptionArticles', {routeName: routeName, headerText:headerText, name : 'MUSIC', optionName : 'MUSIC', option : 13, type:'options'})}>
                            <FontAwesome5 style={styles.eachOptionIcon} size={icon2} name='music' color={menuIconColor} />
                            <Text style={[styles.eachOptionText, style.ma , {color:menuIconColor}]}>Music</Text>
                            {iconRight}
                        </TouchableOpacity>

                        <View style={style.line_2}/>

                        <TouchableOpacity style={[styles.eachOption]} onPress={() => navigation.navigate('OptionArticles', {routeName: routeName, headerText:headerText, name : 'NATURAL DISASTER', optionName : 'NATURAL DISASTER', option : 14, type:'options'})}>
                            <FontAwesome5 style={styles.eachOptionIcon} size={icon2} name='bolt' color={menuIconColor} />
                            <Text style={[styles.eachOptionText, style.ma , {color:menuIconColor}]}>Natural Disaster</Text>
                            {iconRight}
                        </TouchableOpacity>

                        <View style={style.line_2}/>

                        <TouchableOpacity style={[styles.eachOption]} onPress={() => navigation.navigate('OptionArticles', {routeName: routeName, headerText:headerText, name : 'POLITICS', optionName : 'POLITICS', option : 15, type:'options'})}>
                            <MaterialIcons style={styles.eachOptionIcon} size={icon3} name='account-balance' color={menuIconColor} />
                            <Text style={[styles.eachOptionText, style.ma , {color:menuIconColor}]}>Politics</Text> 
                            {iconRight}  
                        </TouchableOpacity>

                        <View style={style.line_2}/>

                        <TouchableOpacity style={[styles.eachOption]} onPress={() => navigation.navigate('OptionArticles', {routeName: routeName, headerText:headerText, name : 'RELIGION', optionName : 'RELIGION', option : 16, type:'options'})}>
                            <FontAwesome5 style={styles.eachOptionIcon} size={icon2} name='cross' color={menuIconColor} />
                            <Text style={[styles.eachOptionText, style.ma , {color:menuIconColor}]}>Religion</Text>
                            {iconRight}
                        </TouchableOpacity>

                        <View style={style.line_2}/>

                        <TouchableOpacity style={[styles.eachOption]} onPress={() => navigation.navigate('OptionArticles', {routeName: routeName, headerText:headerText, name : 'SCIENCE', optionName : 'SCIENCE', option : 17, type:'options'})}>
                            <FontAwesome5 style={styles.eachOptionIcon} size={icon2} name='flask' color={menuIconColor} />
                            <Text style={[styles.eachOptionText, style.ma , {color:menuIconColor}]}>Science</Text>
                            {iconRight}
                        </TouchableOpacity>

                        <View style={style.line_2}/>

                        <TouchableOpacity style={[styles.eachOption]} onPress={() => navigation.navigate('OptionArticles', {routeName: routeName, headerText:headerText, name : 'SPORTS', optionName : 'SPORTS', option : 18, type:'options'})}>
                            <FontAwesome style={styles.eachOptionIcon} size={icon2} name='soccer-ball-o' color={menuIconColor} />
                            <Text style={[styles.eachOptionText, style.ma , {color:menuIconColor}]}>Sports</Text>
                            {iconRight}
                        </TouchableOpacity>

                        <View style={style.line_2}/>

                        <TouchableOpacity style={[styles.eachOption]} onPress={() => navigation.navigate('OptionArticles', {routeName: routeName, headerText:headerText, name : 'TECHNOLOGY', optionName : 'TECHNOLOGY', option : 19, type:'options'})}>
                            <MaterialIcons style={styles.eachOptionIcon} size={icon3} name='memory' color={menuIconColor} />
                            <Text style={[styles.eachOptionText, style.ma , {color:menuIconColor}]}>Technology</Text> 
                            {iconRight}  
                        </TouchableOpacity>

                        <View style={style.line_2}/>

                        <TouchableOpacity style={[styles.eachOption]} onPress={() => navigation.navigate('OptionArticles', {routeName: routeName, headerText:headerText, name : 'TRAVEL & TOURISM', optionName : 'TRAVEL & TOURISM', option : 20, type:'options'})}>
                            <MaterialIcons style={styles.eachOptionIcon} size={icon3} name='flight' color={menuIconColor} />
                            <Text style={[styles.eachOptionText, style.ma , {color:menuIconColor}]}>Travel & Tourism</Text> 
                            {iconRight}  
                        </TouchableOpacity>

                </ScrollView>
                
                <Header/>

            </View> 
        )
    }
}


const styles = StyleSheet.create({
    container : {
    flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    
    eachOption: {
        height : 50,
        width: width - 20,
        marginHorizontal :10,
        marginVertical : 7,
        borderRadius : 7,
        // borderWidth:1,
        // borderColor:'rgba(23,23,23,.1)',
        overflow:'hidden',
        flexDirection:'row'
    },
    eachOptionIcon : {
        height : 50,
        lineHeight : 50,
        width: 50,
        marginHorizontal : 10,
        textAlign:'center'
    },
    eachOptionText : {
        height: 50,
        lineHeight : 50,
        fontSize: 16,
        letterSpacing: 2,
        fontWeight : Platform.select({android:'200', ios:'bold'})
    },
    eachOptionGo : {
        position:'absolute',
        right : 0,
        top:0,
        height : 50,
        lineHeight : 50,
        textAlign:'center',
        width: 50,
    }
})


export default withNavigation(connect(state)(Options));