import React from 'react';
import {Platform, View, Text, StyleSheet, TouchableOpacity, Image , Dimensions } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import CardView from 'react-native-cardview';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import style from '../../Styles/Styles'; 
import Place from './Place'
import BlurView from '../BlurVIew/BlurVIew';
import { createStyles, minWidth } from 'react-native-media-queries';

const width = Dimensions.get('window').width;

const media = props => {
    const {image, video} = props;
    let iconImage = width >= 700 ? 25 : 23
    let iconVideo = width >= 700 ? 24 : 22

    const myImageIcon = (<FontAwesome name="image" size={iconImage} color="rgba(255,255,255,.9)" />)
    const myVideoIcon = (<FontAwesome name="film" size={iconVideo} color="rgba(255,255,255,.9)" />)
    let image_count = null;
    let video_count = null;

    if(image.images_count > 0){
        image_count = (
                        <View style={[styles.articleMedia, styles.articleImageMedia, style.displayFlex]}>
                            <TouchableOpacity style={[styles.articleMediaCount, styles.articleImageCount]}>
                                <BlurView viewRef={1} blurType="dark" blurAmount={5} />
                                <CardView style={[{paddingLeft:5},styles.mediaCountShadow]}
                                    cardElevation={1}
                                    cardMaxElevation={1}
                                    cornerRadius={2}>
                                    <Text style={styles.articleImageCount_icon}>{myImageIcon}</Text>
                                    <Text style={[styles.articleImageCount_text , style.bt]}>{image.images_count}</Text>
                                </CardView>
                            </TouchableOpacity>
                        </View>
                    )
    }

    if(video.videos_count > 0){
        video_count = (
                        <View style={[styles.articleMedia, styles.articleVideoMedia, style.displayFlex]}>
                            <TouchableOpacity style={[styles.articleMediaCount, styles.articleVideoCount]}>
                                <BlurView viewRef={1} blurType="dark" blurAmount={5} />
                                <CardView style={[{paddingRight:5},styles.mediaCountShadow]}
                                    cardElevation={1}
                                    cardMaxElevation={1}
                                    cornerRadius={2}>
                                    <Text style={[styles.articleImageCount_text , style.bt]}>{video.videos_count}</Text>
                                    <Text style={styles.articleImageCount_icon}>{myVideoIcon}</Text>
                                </CardView>
                            </TouchableOpacity>
                        </View>
                    )
    }
    

    return(
        <View style={styles.container}>

            <Image  resizeMode={'cover'} style={styles.articleImage} source={{uri:image.image_thumbnail}} />

            {image_count}

            {video_count}

        </View>
    )
}

const stylesheet = {

    container : {
        width:width,
        // backgroundColor:'red'
    },
    articleImage : {
        height:270,
        width:'100%',
        overflow:'hidden',
    },
    articleMedia : {
        position:'absolute',
        width:70,
        top: 0,
        height:'100%',
    },
    articleImageMedia : {
        right:0,
    },
    articleVideoMedia : {
        left:0,
    },
    articleMediaCount: {
        height:40,
        width:70,
        overflow:'hidden',
        backgroundColor: Platform.select({android : 'rgba(23, 23, 23, 0.8)' , ios :'transparent'}),        
    },
    articleImageCount: {
        right:0,
        borderTopLeftRadius: 5, 
        borderBottomLeftRadius: 5, 
    },
    articleVideoCount: {
        borderTopRightRadius: 5, 
        borderBottomRightRadius: 5, 
    },
    mediaCountShadow :{
        backgroundColor:'transparent',
        flexDirection:'row',
        // backgroundColor:'red'
    },
    articleImageCount_icon:{
        width:35,
        lineHeight: 40,
        textAlign:'center',
        // backgroundColor:'red'
    },
    articleImageCount_text : {
        width:30,
        textAlign:'center',
        lineHeight: 40,
        fontSize: 17,
        letterSpacing:1,
        color: 'rgba(255,255,255,.9)',
        textShadowOffset: { width: 1, height: 1 }, 
        textShadowColor: "rgba(23, 23, 23, 0.8)",
        // backgroundColor:'blue'
    },
};


export default media;