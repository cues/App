import React from 'react';
import {Dimensions, Platform, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CardView from 'react-native-cardview';
import style from '../../Styles/Styles'; 
import BlurView from '../../Components/BlurVIew/BlurVIew';
import { createStyles, minWidth } from 'react-native-media-queries';

const width = Dimensions.get('window').width;


const category = props => {

    let category = null;

    let iconColor = "rgba(255, 255, 255, 0.9)";

    let icon1 =  20
    let icon2 =  24


    category =  props.category_id == 2      ?    (<FontAwesome5   name="ambulance" size={icon1} color={iconColor} />) :
                props.category_id == 3      ?    (<MaterialIcons name="business-center" size={icon2} color={iconColor} />) : 
                props.category_id == 4      ?    (<MaterialIcons name="face" size={icon2} color={iconColor} />) : 
                props.category_id == 5      ?    (<FontAwesome5   name="bomb" size={icon1} color={iconColor} />) : 
                props.category_id == 6      ?    (<MaterialIcons name="school" size={icon2} color={iconColor} />) : 
                props.category_id == 7      ?    (<MaterialIcons name="speaker" size={icon2} color={iconColor} />) : 
                props.category_id == 8      ?    (<FontAwesome5 name="tree" size={icon1} color={iconColor} />) : 
                props.category_id == 9      ?    (<FontAwesome5 name="film" size={icon1} color={iconColor} />) : 
                props.category_id == 10     ?    (<FontAwesome5 name="utensils" size={icon1} color={iconColor} />) : 
                props.category_id == 11     ?    (<MaterialIcons name="games" size={icon2} color={iconColor} />) : 
                props.category_id == 12     ?    (<FontAwesome5 name="heartbeat" size={icon1} color={iconColor} />) : 
                props.category_id == 13     ?    (<FontAwesome5 name="music" size={icon1} color={iconColor} />) : 
                props.category_id == 14     ?    (<FontAwesome5 name="bolt" size={icon1} color={iconColor} />) : 
                props.category_id == 15     ?    (<MaterialIcons name="account-balance" size={icon2} color={iconColor} />) : 
                props.category_id == 16     ?    (<FontAwesome5 name="cross" size={icon1} color={iconColor} />) : 
                props.category_id == 17     ?    (<FontAwesome5 name="flask" size={icon1} color={iconColor} />) : 
                props.category_id == 18     ?    (<FontAwesome name="soccer-ball-o" size={icon1} color={iconColor} />) : 
                props.category_id == 19     ?    (<MaterialIcons name="memory" size={icon2} color={iconColor} />) : 
                props.category_id == 20     ?    (<MaterialIcons name="flight" size={icon2} color={iconColor} />) : null ;

    return (
       
        <TouchableOpacity style = {[styles.category, style.displayFlex]} >
            <BlurView  viewRef={1} blurType="dark" blurAmount={5}  />

            <CardView style = {[styles.categoryShadow, style.displayFlex]}
            cardElevation={1}
            cardMaxElevation={1}
            cornerRadius={20}>

                       {category}
                            
         </CardView>
         </TouchableOpacity>
        
    )
}


const stylesheet = {
    category : {
        position:'absolute',
        right: 5,
        top:5, 
        width: 45,
        height:45,
        overflow:'hidden',
        borderRadius: 100,
        backgroundColor: Platform.select({android : 'rgba(23, 23, 23, 0.8)' , ios :'transparent'}),
        zIndex:10,
    },
  
    categoryShadow : {
        width: '100%',
        height:'100%',
        backgroundColor:'transparent'
        // borderRadius: 100,

    },
};
const styles = createStyles(
    stylesheet,
    minWidth(700, {
        category : {
            right: 10,
            top:10, 
            width: 55,
            height:55,
        }
    })
)

export default category;