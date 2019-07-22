import React from 'react';
import { Dimensions, Platform, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import style from '../../Styles/Styles'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MyText from 'react-native-letter-spacing';
import BlurView from '../../Components/BlurVIew/BlurVIew';
import { createStyles, minWidth } from 'react-native-media-queries';


const width = Dimensions.get('window').width;


const place = props => {

    const {place} = props
    let landmark = null;
    
    if(place.landmark_id != 0 ){
    const landmark_name = place.landmark_desc + '   ' + place.landmark_name
        landmark = (
            <View style={[styles.landmark]}>
                <MyText wordSpacing={4} style={[styles.landmarkName, style.ci]}>
                    {landmark_name}
                </MyText>
            </View>
        )
    }

    // let icon = width >= 700 ? 23 : 21

    return (
        <View style={styles.placeContainer}>

            <BlurView  viewRef={1} blurType="dark" blurAmount={5} />

            <View style={styles.placeView}>
                <View style={[styles.place]}>
                    <Text style={styles.placeIcon}>
                        <MaterialIcons name="place" size={21} color='rgba(255, 255, 255, 0.9)' />
                    </Text>
                    <MyText wordSpacing={5} style={[styles.placeName, style.ci]}>
                        {place.place_name}
                    </MyText>
                </View>
                
                {landmark}
            </View>

        </View>

    )
}

const stylesheet = {
    placeContainer : {
        width:'100%',
        position:'absolute',
        bottom:0,
        backgroundColor: Platform.select({android : 'rgba(23, 23, 23, 0.8)' , ios :'transparent'}),
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
        marginRight: 5,
        // marginLeft:-5,
        marginTop:-1,
        lineHeight:30,
    },
    placeName :{
        color :'rgba(255, 255, 255, 0.9)',
        fontSize:14,
        lineHeight:21,
        letterSpacing:1,
    },
    landmark: {
        marginTop:5,
        marginLeft:5
    },
    landmarkName : {
        color :'rgba(255, 255, 255, 0.9)',
        fontSize : 11,
        lineHeight:18,
        letterSpacing:.7,
    },
    
};



const styles = createStyles(
    stylesheet,
 
    // minWidth(700, {
    //     placeIcon :{
    //         height: 37,
    //         lineHeight:37,
    //         width: 25,
    //     },
    //     placeName :{
    //         fontSize:16,
    //         lineHeight:24,
    //         letterSpacing:1.2,
    //     },
    //     landmarkName : {
    //         fontSize : 13,
    //         lineHeight:21,
    //         letterSpacing:.9,
    //     },
        
    // })
)
export default place;