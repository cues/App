import React, {Component} from 'react';
import {StyleSheet, Platform, Animated, Image, Text, View, TouchableOpacity} from 'react-native';
import BlurView from '../../Components/BlurVIew/BlurVIew';
import {brand, model, models} from '../../Components/DeviceInfo/DeviceInfo';
import style from '../../Styles/Styles';
import MaterialIcons from  'react-native-vector-icons/MaterialIcons';
import { withNavigation } from 'react-navigation';

import { connect } from 'react-redux';

const state = state => {
    return {
        headerColor       :   state.themes.headerColor,
        menuIconColor     :   state.themes.menuIconColor,   
    }
}



FOOTER_HEIGHT = brand === 'Apple' && models.includes(model) ? 63 :  49 

export const footer = props =>  {

        const { headerColor, menuIconColor , navigation, loginRoute} = props



        return (

                <View style= {[styles.footer , { backgroundColor:Platform.select({android:headerColor}) }]}>

                    <TouchableOpacity style={styles.footerItems} onPress={() => navigation.navigate('Terms',{statusBar : false})}>
                        <Text style={[style.bt, styles.footerItemsText, {color:menuIconColor}]}>Terms</Text>
                    </TouchableOpacity>

                    <View style={styles.footerItems_2}>
                        <Text style={[style.bt, styles.footerItemsText, styles.footerItemsText_2, {color:menuIconColor}]}>TIDNGZ</Text>
                        <MaterialIcons style={styles.copyrightIcon} name="copyright" size={17} color={menuIconColor} />     
                        <Text style={[style.bt, styles.footerItemsText, styles.footerItemsText_2, {color:menuIconColor}]}>2019</Text>
                    </View>

                    <TouchableOpacity style={styles.footerItems} onPress={() => navigation.navigate('Privacy',{statusBar : false})}>
                        <Text style={[style.bt, styles.footerItemsText, {color:menuIconColor}]}>Privacy</Text>
                    </TouchableOpacity>
                </View>

        )
    
}


const styles = StyleSheet.create({
    footer:{
        position : 'absolute',
        bottom:0,
        left:0,
        right:0,
        height : FOOTER_HEIGHT ,
        alignItems:'center',
        overflow:'hidden',
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    footerItems:{
        height : '100%',
        width:'25%',
        // backgroundColor:'blue'
    },
    footerItems_2:{
        height : '100%',
        width:'40%',
        marginTop: models.includes(model) ? -10 : 0,
        flexDirection:'row',
        justifyContent:'center'
        // backgroundColor:'blue'
    },
    footerItemsText : {
        lineHeight: FOOTER_HEIGHT,
        // width:'100%',
        textAlign:'center',
        fontSize: 12,
        letterSpacing : 1
    },
    footerItemsText_2 :{
        fontSize: 13,
    },
    copyrightIcon:{
        lineHeight:FOOTER_HEIGHT,
        marginHorizontal:5
    }
})


export default withNavigation(connect(state)(footer));