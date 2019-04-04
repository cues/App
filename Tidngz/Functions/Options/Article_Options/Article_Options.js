import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Dimensions, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import style from '../../../Styles/Styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import  { withNavigation , DrawerActions} from 'react-navigation'

const state = state => {
    return {
        homeContainer   :   state.themes.homeContainer,
    }
}

const dispatch = dispatch => {
    return {
        
    }
}

const width = Dimensions.get('window').width


class ArticleOptions extends Component {

    
    render (){

    const { homeContainer , navigation  , type} = this.props;
    let {headerText, routeName} = this.props

    const icon1 = 18
    const icon2 = 20
    const icon3 = 25

    const optionName = navigation.getParam('optionName' , '')
    const optionNumber = navigation.getParam('option' , 1)
    const topName = navigation.getParam('top' , '')
    const date_1 = navigation.getParam('date_1' , '')
    const date_2 = navigation.getParam('date_2' , '')

    headerText = navigation.getParam('headerText' , headerText)

    routeName = navigation.getParam('routeName' , routeName)


    const optionStyle = [styles.selectedOption, style.tidngz_color]
                            
    const optionIcon    =   optionNumber ==  2 ? <FontAwesome5 style={optionStyle} size={icon1} name='ambulance' />             : 
                            optionNumber ==  3 ? <MaterialIcons style={optionStyle} size={icon3} name='business-center' />      : 
                            optionNumber ==  4 ? <MaterialIcons style={optionStyle} size={icon3} name='face' />                 : 
                            optionNumber ==  5 ? <FontAwesome5 style={optionStyle} size={icon2} name='bomb'  />                 : 
                            optionNumber ==  6 ? <MaterialIcons style={optionStyle} size={icon3} name='school'  />              : 
                            optionNumber ==  7 ? <MaterialIcons style={optionStyle} size={icon3} name='speaker'  />             : 
                            optionNumber ==  8 ? <FontAwesome style={optionStyle} size={icon2} name='tree'  />                  : 
                            optionNumber ==  9 ? <FontAwesome style={optionStyle} size={icon2} name='film'  />                  : 
                            optionNumber ==  10 ? <FontAwesome5 style={optionStyle} size={icon2} name='utensils'  />            : 
                            optionNumber ==  11 ? <MaterialIcons style={optionStyle} size={icon3} name='games'  />              : 
                            optionNumber ==  12 ? <FontAwesome5 style={optionStyle} size={icon2} name='heartbeat'  />           : 
                            optionNumber ==  13 ? <FontAwesome5 style={optionStyle} size={icon2} name='music'  />               : 
                            optionNumber ==  14 ? <FontAwesome5 style={optionStyle} size={icon2} name='bolt'  />                : 
                            optionNumber ==  15 ? <MaterialIcons style={optionStyle} size={icon3} name='account-balance'  />    : 
                            optionNumber ==  16 ? <FontAwesome5 style={optionStyle} size={icon2} name='cross'  />               : 
                            optionNumber ==  17 ? <FontAwesome5 style={optionStyle} size={icon2} name='flask'  />               : 
                            optionNumber ==  18 ? <FontAwesome style={optionStyle} size={icon2} name='soccer-ball-o'  />        : 
                            optionNumber ==  19 ? <MaterialIcons style={optionStyle} size={icon3} name='memory'  />             : 
                            optionNumber ==  20 ? <MaterialIcons style={optionStyle} size={icon3} name='flight'  />             :      <MaterialIcons style={optionStyle} size={icon3} name='view-comfy' />
        
    const topIcon   =   topName  == '' && date_1 == '' ? 
                             <MaterialIcons style={optionStyle} size={24} name='date-range'/> 
                        : 
                            date_1 == '' ?
                                <Text style={[optionStyle, style.ca,  styles.text]}>{topName}</Text>
                            :
                                date_2 == null ?
                                    <Text style={[optionStyle, style.ca,  styles.text]}>{date_1}</Text>
                                :
                                    <Text style={[optionStyle, style.ca,  styles.text,  styles.text_2]}>{date_1} - {date_2}</Text>
                                    
 
        return (
        
        <View style={[styles.container, {marginBottom : type == 1 ? 15 : 25, borderWidth:type == 1 ? 0 : 1, backgroundColor:type == 1 ? 'transparent' : homeContainer}]}>

                    <TouchableOpacity style={styles.sections} onPress = {() => navigation.navigate('Options',{routeName:routeName, headerText:headerText, name : 'CATEGORIES'})}>
                        {optionIcon}
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sections} onPress={() => navigation.navigate('Calender',{routeName:routeName, headerText:headerText, name : 'CALENDER', optionName : optionName, option : optionNumber})}>
                        {topIcon}
                    </TouchableOpacity>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container : {
        marginHorizontal : 20, 
        width:width - 20, 
        borderRadius:7,
        borderWidth:1,
        borderColor:'rgba(23,23,23,.3)',
        marginTop : 0,
        height: 40,
        flexDirection:'row'
    },
    sections: {
        width:'50%',
    },
    selectedOption : {
        width:'100%',
        textAlign : 'center' ,
        lineHeight : 40
    },
    
    text : {
        lineHeight:40,
        width: '100%',
        fontSize:20,
        letterSpacing:1,
        textAlign:'center',
        textShadowColor: 'rgba(102,102,102, .5)',
        textShadowOffset: {width: 0, height: 1},
        textShadowRadius: 1,
        letterSpacing:1.5,
    },
    text_2 : {
        fontSize:14,
        letterSpacing:.6,
    }
})


export default withNavigation(connect(state)(ArticleOptions));