import React from 'react';
import { Platform, View, Text, StyleSheet, TouchableOpacity, Image , Dimensions } from 'react-native';
import style from '../../Styles/Styles'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MyText from 'react-native-letter-spacing';
import { createStyles, minWidth } from 'react-native-media-queries';

const width = Dimensions.get('window').width;

const place = props => {

    const {place} = props
    let landmark = null;

    if(place.landmark_id != 0 ){
    const landmark_name = place.landmark_desc + '   ' + place.landmark_name
        landmark = (
            <TouchableOpacity style={[styles.landmark]}>
                <MyText wordSpacing={4} style={[styles.landmarkName, style.ci]}>
                    {landmark_name}
                </MyText>
            </TouchableOpacity>
        )
    }

    let icon = width >= 700 ? 25 : 23

    return (
        <View style={styles.placeContainer}>

            <View style={styles.placeView}>
                <TouchableOpacity style={[styles.place]}>
                    <Text style={styles.placeIcon}>
                        <MaterialIcons name="place" size={icon} color='rgba(240,240,240, .8)' />
                    </Text>
                    <MyText wordSpacing={5} style={[styles.placeName, style.ci]}>
                        {place.place_name}
                    </MyText>
                </TouchableOpacity>
                
                {landmark}
            </View>

        </View>

    )
}

const stylesheet = {
    placeContainer : {
        width:'100%',
        marginTop:10
    },
    placeView : {
        width:'100%',
        padding:5
    },
    place : {
        flexDirection:'row',
        alignItems:'center'
    },
    placeIcon : {
        height: 30,
        width: 20,
        fontSize: 20,
        marginRight: 7,
        // marginLeft:-5,
        marginTop:-2,
        lineHeight:30,
    },
    placeName :{
        color :'rgba(240,240,240, .8)',
        fontSize:16,
        lineHeight:24,
        letterSpacing:1.2,
        fontWeight:Platform.select({ios : 'bold' , android : '400'})
    },
    landmark: {
        marginTop:10,
        marginLeft:5
    },
    landmarkName : {
        color :'rgba(240,240,240, 0.6)',
        fontSize : 13,
        lineHeight:20,
        letterSpacing:1,
        fontWeight:Platform.select({ios : 'bold' , android : '400'})
    }
};


const styles = createStyles(
    stylesheet,
 
    minWidth(700, {
        placeIcon :{
            height: 37,
            lineHeight:37,
            width: 25,
        },
        placeName :{
            fontSize:18,
            lineHeight:27,
            letterSpacing:1.5,
        },
        landmarkName : {
            fontSize : 15,
            lineHeight:24,
            letterSpacing:1,
        },
        
    })
)


export default place;