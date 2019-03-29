import React, {Component} from 'react';
import {Dimensions, Platform, View, Text, StyleSheet, TouchableOpacity, Image  } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import CardView from 'react-native-cardview';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import style from '../../Styles/Styles'; 
import Place from './Place'
import BlurView from '../../Components/BlurVIew/BlurVIew';
import { createStyles, minWidth } from 'react-native-media-queries';
import Images from '../Images/Images';

const width = Dimensions.get('window').width;



class Media extends Component {

    state = {
        imageActive : false
    }

    imageOpen = () => {
        this.setState(prevState => ({
            imageActive:!prevState.imageActive
        }))
    }
    
    render(){
    const {image, video, type, place} = this.props;
    const {imageActive} = this.state

    // let iconImage = width >= 700 ? 25 : 23
    // let iconVideo = width >= 700 ? 24 : 22

    const myImageIcon = (<FontAwesome name="image" size={23} color="rgba(255,255,255,.9)" />)
    const myVideoIcon = (<FontAwesome name="film" size={22} color="rgba(255,255,255,.9)" />)
    let image_count = null;
    let video_count = null;


    if(image.images_count > 0){
        image_count = (
                        <View style={[styles.articleMedia, styles.articleImageMedia, style.displayFlex]}>
                            <TouchableOpacity style={[styles.articleMediaCount, styles.articleImageCount]} onPress={this.imageOpen}>
                                <BlurView viewRef={1} blurType="dark" blurAmount={5} />
                                <CardView style={[styles.mediaCountShadow]}
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
                                <CardView style={[styles.mediaCountShadow]}
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


    let places;
        if(type == 1){
            places = (
                 <Place place={place} />
            )
        }
   
    let articleImage;
    if(width >= 600 && type == 2){
        articleImage = (
            <Image resizeMode={'cover'} style={[styles.articleImageSingle] } source={{uri:image.image_thumbnail}} />
        )
    }else{
        articleImage = (
            <Image resizeMode={'cover'} style={styles.articleImage } source={{uri:image.image_thumbnail}} />
        )
    }

    const images = imageActive ? <Images  image = {image} closeModal={this.imageOpen}/> : null

    return(
        <View >
            
            {images}

            {articleImage}
            
            {places}

            {image_count}

            {video_count}

        </View>
    )
}
}






  
const stylesheet = {

    articleImage : {
        height:270,
        width:'100%',
        overflow:'hidden'
    },
    articleImageSingle : {
        height:300,
        width:'100%',
        overflow:'hidden'
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
        width:40,
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


const styles = createStyles(
    stylesheet,
    minWidth(400, {
        articleImage :{
            height: 300
        },
        articleImageSingle : {
            height: 330
        },
        articleMedia : {
            width:72,
        },
        articleMediaCount: {
            height:42,
            width:72,
        },
        articleImageCount_icon:{
            lineHeight: 42,
            width:41,
        },
        articleImageCount_text:{
            lineHeight: 42,
            width:31,
        }
    }),
    // minWidth(500, {
    //     articleImage :{
    //         height: 330
    //     },
    //     articleImageSingle : {
    //         height: 370
    //     },
    //     articleMedia : {
    //         width:74,
    //     },
    //     articleMediaCount: {
    //         height:44,
    //         width:74,
    //     },
    //     articleImageCount_icon:{
    //         lineHeight: 44,
    //         width:42,
    //     },
    //     articleImageCount_text:{
    //         lineHeight: 44,
    //         width:32,
    //     }
    // }),
    // minWidth(600, {
    //     articleImage :{
    //         height: 360
    //     },
    //     articleImageSingle : {
    //         height: 420
    //     },
    //     articleMedia : {
    //         width:76,
    //     },
    //     articleMediaCount: {
    //         height:46,
    //         width:76,
    //     },
    //     articleImageCount_icon:{
    //         lineHeight: 46,
    //         width:43,
    //     },
    //     articleImageCount_text : {
    //         fontSize : 19,
    //         letterSpacing:1.1,
    //         lineHeight: 46,
    //         width:33,
    //     }
    // }),
    // minWidth(700, {
    //     articleImage :{
    //         height: 400
    //     },
    //     articleImageSingle : {
    //         height: 450
    //     },
    //     articleMedia : {
    //         width:78,
    //     },
    //     articleMediaCount: {
    //         height:48,
    //         width:78,
    //     },
    //     articleImageCount_icon:{
    //         lineHeight: 48,
    //         width:44,
    //     },
    //     articleImageCount_text : {
    //         fontSize : 20,
    //         letterSpacing:1.2,
    //         lineHeight: 48,
    //         width:34,
    //     }
    // }),
    // minWidth(900, {
    //     articleImage :{
    //         height: 300
    //     },
    //     articleImageSingle : {
    //         height: 330
    //     },
    //     articleMedia : {
    //         width:72,
    //     },
    //     articleMediaCount: {
    //         height:42,
    //         width:72,
    //     },
    //     articleImageCount_icon:{
    //         lineHeight: 42,
    //         width:41,
    //     },
    //     articleImageCount_text:{
    //         lineHeight: 42,
    //         width:31,
    //     }
    // })
);
export default Media;