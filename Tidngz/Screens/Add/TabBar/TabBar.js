import React ,{Component} from 'react';
import { Platform, StyleSheet , Text, View, TouchableOpacity , StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import BlurView from '../../../Components/BlurVIew/BlurVIew';
import TabBarItems  from './TabBarItems';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {brand, model, models} from '../../../Components/DeviceInfo/DeviceInfo';
import style from '../../../Styles/Styles'
import Footer from '../../../Functions/Articles/Footer';
import Error from  '../../../Components/Error/Error';
import SideBar from '../../../Components/SideBar/SideBar';
import addStyle from '../../../Styles/Add';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { connect } from 'react-redux';
import { error, error_2, headline_active} from '../../../Store/Actions/index';
import { IGNORED_TAGS } from 'react-native-render-html/src/HTMLUtils';

const state = state => {
  return {
      headerColor       :   state.themes.headerColor,
      tabBlur           :   state.themes.tabBlur,
      selectedArticle   :   state.articles.selectedArticle,
      menuIconColor2          :   state.themes.menuIconColor2,
      
      headline                :   state.addArticles.add_headline,
      place                   :   state.addArticles.add_place,
      landmark                :   state.addArticles.add_landmark,
      landmarkDesc            :   state.addArticles.add_landmarkDesc,

      video_add_video_link    :   state.addVideos.video_add_video_link,
      video_add_headline      :   state.addVideos.video_add_headline,
      video_add_place         :   state.addVideos.add_video_add_place,
      video_add_landmark      :   state.addVideos.add_video_add_landmark,
      video_add_landmarkDesc  :   state.addVideos.add_video_add_landmarkDesc,

      content                 :   state.addClassified.add_classified,
  };
};

const dispatch = dispatch => {
  return {
      this_error            : text => dispatch(error(text)),
      this_error_2          :  () => dispatch(error_2()),
  }
}



class TabBar extends Component  {

  constructor(props){
    super(props)
    this.state = {
      headlineActive      : true,
      placeActive         : false,
      catTagLinkActive    : false,
      linkedActive        : false,
      mediaActive         : false,

      videoLinkActive       : true,
      videoHeadlineActive   : false,
      videoPlaceActive      : false,
      videoCatTagLinkActive : false,
      videoLinkedActive     : false,

      classifiedContentActive : true,
      classifiedPlaceActive : false
    }

    const { navigation } = this.props
    const { routes , index  }  = navigation.state;

    // console.warn(routes)
  }










// CLASSIFIED

  // content
  navigateForwardClassifiedContent = () => {

    const { content , this_error, this_error_2, navigation} = this.props


    let length = content != null ? content.length : 500;


    if(content == null){
      this_error('Please write your classified Ad')
    }
    else if(length < 10 ){
      this_error('Your Ad is too short, minimum of 20 characters')
    }
    else{
      navigation.navigate('ClassifiedAddPLace')
    }

    
    setTimeout(() => {
      content == null || length < 20 ? this_error_2() : null
    },3000)

    if(content != null && length > 19 && length < 301 ){
      this.setState(prevState => ({
        classifiedContentActive : !prevState.classifiedContentActive,
        classifiedPlaceActive    : !prevState.classifiedPlaceActive
      }))
    }
 
  }





// place

navigateBackClassifiedPlace = () => {

  this.props.navigation.navigate('ClassifiedAddContent')

    this.setState(prevState => ({
      classifiedContentActive : !prevState.classifiedContentActive,
      classifiedPlaceActive   : !prevState.classifiedPlaceActive
    }))
  

}




navigateForwardClassifiedPlace = () => {

  alert('ok')

  // const { place , landmark, landmarkDesc, this_error, this_error_2, navigation} = this.props

  // if(place == null){
  //   this_error('Please add a place')
  // }
  // else if(landmark != null && landmarkDesc == null ){
  //   this_error('Please choose a landmark title')
  // }
  // else{
  //   navigation.navigate('CatTagLink')
  // }
  
  // setTimeout(() => {
  //   place == null ? this_error_2() : null
  // },3000)

  // if(place != null ){
  //     this.setState(prevState => ({
  //     placeActive       : !prevState.placeActive,
  //     catTagLinkActive  : !prevState.catTagLinkActive,
  //   }))
  // }
  
}













// ARTICLE

  // headline
    navigateForwardHeadline = () => {

      const { headline , this_error, this_error_2, navigation} = this.props


      let length = headline != null ? headline.length : 500;


      if(headline == null){
        this_error('Please write a headline for your article')
      }
      else if(length < 10 ){
        this_error('Your headline is too short, minimum of 10 characters')
      }
      else{
        navigation.navigate('AddPlace')
      }

      
      setTimeout(() => {
        headline == null || length < 10 ? this_error_2() : null
      },3000)

      if(headline != null && length > 9 && length < 301 ){
        this.setState(prevState => ({
          headlineActive : !prevState.headlineActive,
          placeActive    : !prevState.placeActive
        }))
      }
   
    }



  // place

    navigateBackPlace = () => {

      this.props.navigation.navigate('Headline')

        this.setState(prevState => ({
          headlineActive : !prevState.headlineActive,
          placeActive    : !prevState.placeActive
        }))
      

    }




    navigateForwardPlace = () => {

      const { place , landmark, landmarkDesc, this_error, this_error_2, navigation} = this.props

      if(place == null){
        this_error('Please add a place')
      }
      else if(landmark != null && landmarkDesc == null ){
        this_error('Please choose a landmark title')
      }
      else{
        navigation.navigate('CatTagLink')
      }
      
      setTimeout(() => {
        place == null ? this_error_2() : null
      },3000)

      if(place != null ){
          this.setState(prevState => ({
          placeActive       : !prevState.placeActive,
          catTagLinkActive  : !prevState.catTagLinkActive,
        }))
      }
      
    }





    // Category tags link
    navigateBackCatTagLink = () => {

      this.props.navigation.navigate('AddPlace')

      this.setState(prevState => ({
        placeActive       : !prevState.placeActive,
        catTagLinkActive  : !prevState.catTagLinkActive,
      }))

    }

    navigateForwardCatTagLink = () => {

      this.props.navigation.navigate('LinkArticle')

      this.setState(prevState => ({
        catTagLinkActive    : !prevState.catTagLinkActive,
        linkedActive   : !prevState.linkedActive,
      }))

    }




    // linked
    navigateBackLinked = () => {

      this.props.navigation.navigate('CatTagLink')

      this.setState(prevState => ({
        catTagLinkActive  : !prevState.catTagLinkActive,
        linkedActive : !prevState.linkedActive,
      }))

    }


    navigateForwardLinked = () => {

      this.props.navigation.navigate('MediaArticle')

      this.setState(prevState => ({
        linkedActive   : !prevState.linkedActive,
        mediaActive         : !prevState.mediaActive,
      }))

    }

    


      // media
      navigateBackMedia = () => {

      this.props.navigation.navigate('Linked')

      this.setState(prevState => ({
        linkedActive   : !prevState.linkedActive,
        mediaActive         : !prevState.mediaActive,
      }))

    }
  
















  // VIDEO

  // videoLink


  videoNavigateForwardVideoLink = () => {

    const { video_add_video_link , this_error, this_error_2, navigation} = this.props

    if(video_add_video_link == null){
      this_error('Please add a youtube video link')
    }
    else{
      navigation.navigate('VideoHeadline')
    }
    
    setTimeout(() => {
      video_add_video_link == null ? this_error_2() : null
    },3000)

    if(video_add_video_link != null){
      this.setState(prevState => ({
        videoLinkActive     : !prevState.videoLinkActive,
        videoHeadlineActive : !prevState.videoHeadlineActive,
      }))
    }
 
  }


    // headline

    videoNavigateBackHeadline = () => {

      this.props.navigation.navigate('VideoLink')

        this.setState(prevState => ({
          videoLinkActive     : !prevState.videoLinkActive,
          videoHeadlineActive : !prevState.videoHeadlineActive,
        }))
      

    }



    videoNavigateForwardHeadline = () => {

      const { video_add_headline , this_error, this_error_2, navigation} = this.props


      let length = video_add_headline != null ? video_add_headline.length : 500;


      if(video_add_headline == null){
        this_error('Please write a headline for your article')
      }
      else if(length < 10 ){
        this_error('Your headline is too short, minimum of 10 characters')
      }
      else{
        navigation.navigate('VideoAddPlace')
      }
      
      setTimeout(() => {
        video_add_headline == null || length < 10 ? this_error_2() : null
      },3000)

      if(video_add_headline  != null && length > 9 && length < 301 ){
        this.setState(prevState => ({
          videoHeadlineActive : !prevState.videoHeadlineActive,
          videoPlaceActive    : !prevState.videoPlaceActive
        }))
      }
   
    }



  // place

    videoNavigateBackPlace = () => {

      this.props.navigation.navigate('VideoHeadline')

        this.setState(prevState => ({
          videoHeadlineActive : !prevState.videoHeadlineActive,
          videoPlaceActive    : !prevState.videoPlaceActive
        }))
      

    }




    videoNavigateForwardPlace = () => {

      const { video_add_place , video_add_landmark, video_add_landmarkDesc, this_error, this_error_2, navigation} = this.props

      if(video_add_place == null){
        this_error('Please add a place')
      }
      else if(video_add_landmark != null && video_add_landmarkDesc == null ){
        this_error('Please choose a landmark title')
      }
      else{
        navigation.navigate('VideoCatTagLink')
      }
      
      setTimeout(() => {
        video_add_place == null ? this_error_2() : null
      },3000)

      if(video_add_place  != null ){
          this.setState(prevState => ({
          videoPlaceActive       : !prevState.videoPlaceActive,
          videoCatTagLinkActive  : !prevState.videocatTagLinkActive,
        }))
      }
      
    }





    // Category tags link
    videoNavigateBackCatTagLink = () => {

      this.props.navigation.navigate('VideoAddPlace')

      this.setState(prevState => ({
        videoPlaceActive       : !prevState.videoPlaceActive,
        videoCatTagLinkActive  : !prevState.videocatTagLinkActive,
      }))

    }

    videoNavigateForwardCatTagLink = () => {

      this.props.navigation.navigate('VideoLinkArticle')

      this.setState(prevState => ({
        videoCatTagLinkActive  : !prevState.videoCatTagLinkActive,
        videoLinkedActive      : !prevState.videoLinkedActive,
      }))

    }




    // linked
    videoNavigateBackLinked = () => {

      this.props.navigation.navigate('VideoCatTagLink')

      this.setState(prevState => ({
        videoCatTagLinkActive  : !prevState.videoCatTagLinkActive,
        videoLinkedActive      : !prevState.videoLinkedActive,
      }))

    }







    routeFinder = (navigationState) => {
      if (!navigationState) return;
    
      const x = [navigationState.routeName];
      while (navigationState.routes) {
        const route = navigationState.routes[navigationState.index];
        x.push(route.routeName);
        navigationState = route;
      }
    
      return x;
    }
    


  render(){


    const { navigation , headerColor, tabBlur, menuIconColor2 }      = this.props;
    const { routes , index , routeName }  = navigation.state;
    const { headlineActive , placeActive , catTagLinkActive , linkedActive , mediaActive} = this.state;
    const { videoLinkActive , videoHeadlineActive , videoPlaceActive , videoCatTagLinkActive , videoLinkedActive} = this.state;
    const { classifiedContentActive , classifiedPlaceActive } = this.state;

    let route =  this.routeFinder(this.props.navigation.state) 
    route = route[1]

    // console.warn(route)


// VIDEO
    const videoDisplayVideoLink = (
      videoLinkActive && route == 'Video' ? 
        <View style={addStyle.bottomBox}>
          {/* <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]}>
            <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='drafts' size={23}/>
          </TouchableOpacity> */}
          <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]} onPress={this.videoNavigateForwardVideoLink}>
            <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='arrow-forward' size={25}/>           
          </TouchableOpacity>
        </View> 
      : null
  )


    const videoDisplayHeadline = (
      videoHeadlineActive && route == 'Video' ? 
        <View style={addStyle.bottomBox}>
          <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]} onPress={this.videoNavigateBackHeadline}>
              <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='arrow-back' size={23}/>
          </TouchableOpacity>
          <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]} onPress={this.videoNavigateForwardHeadline}>
            <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='arrow-forward' size={25}/>           
          </TouchableOpacity>
        </View> 
      : null
  )


  const videoDisplayPlace  = (
      videoPlaceActive && route == 'Video' ?
          <View style={addStyle.bottomBox}>
            <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]} onPress={this.videoNavigateBackPlace}>
              <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='arrow-back' size={23}/>
            </TouchableOpacity>
            <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]} onPress={this.videoNavigateForwardPlace}>
              <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='arrow-forward' size={25}/>           
            </TouchableOpacity>
          </View> 
          : null

  )


  const videoDisplayCatTagLink = (
    videoCatTagLinkActive && route == 'Video' ? 
      <View style={addStyle.bottomBox}>
        <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]} onPress={this.videoNavigateBackCatTagLink}>
          <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='arrow-back' size={23}/>
        </TouchableOpacity>
        <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]} onPress={this.videoNavigateForwardCatTagLink}>
          <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='arrow-forward' size={25}/>           
        </TouchableOpacity>
      </View> 
      : null
  )



  const videoDisplayLinked = (
    videoLinkedActive && route == 'Video' ? 
      <View style={addStyle.bottomBox}>
        <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]} onPress={this.videoNavigateBackLinked}>
          <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='arrow-back' size={23}/>
        </TouchableOpacity>
        {/* <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]} onPress={this.navigateForwardLinked}>
          <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='arrow-forward' size={25}/>           
        </TouchableOpacity> */}
      </View> 
      : null
  )









// ARTICLE

    const articleDisplayHeadline = (
        headlineActive && route == 'Article' ? 
          <View style={addStyle.bottomBox}>
            <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]}>
              <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='drafts' size={23}/>
            </TouchableOpacity>
            <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]} onPress={this.navigateForwardHeadline}>
              <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='arrow-forward' size={25}/>           
            </TouchableOpacity>
          </View> 
        : null
    )


    const articleDisplayPlace  = (
        placeActive && route == 'Article' ?
            <View style={addStyle.bottomBox}>
              <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]} onPress={this.navigateBackPlace}>
                <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='arrow-back' size={23}/>
              </TouchableOpacity>
              <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]} onPress={this.navigateForwardPlace}>
                <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='arrow-forward' size={25}/>           
              </TouchableOpacity>
            </View> 
            : null

    )


    const articleDisplayCatTagLink = (
      catTagLinkActive && route == 'Article' ? 
        <View style={addStyle.bottomBox}>
          <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]} onPress={this.navigateBackCatTagLink}>
            <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='arrow-back' size={23}/>
          </TouchableOpacity>
          <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]} onPress={this.navigateForwardCatTagLink}>
            <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='arrow-forward' size={25}/>           
          </TouchableOpacity>
        </View> 
        : null
    )



    const articleDisplayLinked = (
      linkedActive && route == 'Article' ? 
        <View style={addStyle.bottomBox}>
          <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]} onPress={this.navigateBackLinked}>
            <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='arrow-back' size={23}/>
          </TouchableOpacity>
          <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]} onPress={this.navigateForwardLinked}>
            <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='arrow-forward' size={25}/>           
          </TouchableOpacity>
        </View> 
        : null
    )


    const articleDisplayMedia = (
      mediaActive && route == 'Article' ? 
        <View style={addStyle.bottomBox}>
          <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]} onPress={this.navigateBackMedia}>
            <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='arrow-back' size={23}/>
          </TouchableOpacity>
          <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]} onPress={this.navigateForwardMedia}>
            <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='arrow-forward' size={25}/>           
          </TouchableOpacity>
        </View> 
        : null
    )








// CLASSIFIED

const classifiedDisplayContent = (
  classifiedContentActive && route == 'Classified' ? 
    <View style={addStyle.bottomBox}>
      <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]} onPress={this.navigateForwardClassifiedContent}>
        <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='arrow-forward' size={25}/>           
      </TouchableOpacity>
    </View> 
  : null
)



const classifiedDisplayPlace  = (
  classifiedPlaceActive && route == 'Classified' ?
      <View style={addStyle.bottomBox}>
        <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]} onPress={this.navigateBackClassifiedPlace}>
          <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='arrow-back' size={23}/>
        </TouchableOpacity>
        <TouchableOpacity style={[addStyle.bottomButton, {borderColor:menuIconColor2}]} onPress={this.navigateForwardClassifiedPLace}>
          <MaterialIcons style={[style.displayFlex, addStyle.navigationButtons]} color={menuIconColor2} name='arrow-forward' size={25}/>           
        </TouchableOpacity>
      </View> 
      : null

)









    const TabBarItem = (
      routes.map((route, i) => (
          <TabBarItems navigation={navigation} key={route.routeName} {...route} isActive = {index === i}/>
      ))
    )




      return (
        <View  style={[styles.container, {backgroundColor:Platform.select({android : headerColor, ios:'transparent'})}]}>
      

              <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={17} />  


              <View style={styles.Animatable}>
                      {TabBarItem} 
              </View>
        

              {articleDisplayHeadline}
              {articleDisplayPlace}
              {articleDisplayCatTagLink}
              {articleDisplayLinked}
              {articleDisplayMedia}

              {videoDisplayVideoLink}
              {videoDisplayHeadline}
              {videoDisplayPlace}
              {videoDisplayCatTagLink}
              {videoDisplayLinked}
              
              {classifiedDisplayContent}
              {classifiedDisplayPlace}


              <Error/>

              <SideBar/>

        </View>
    
      );
  }

}


const styles = StyleSheet.create({
  container:{
    width:'100%', 
    height: brand === 'Apple' ? models.includes(model) ? 88 : 68 : 50,
    position: 'absolute',
    right: 0,
    left: 0,
    top:0,
    // overflow:'hidden', 
    zIndex:100,
    // backgroundColor:'red'
  },

  Animatable :{ 
    width:'100%',
    height:50,
    position: 'absolute',
    right: 0,
    left: 0,
    bottom:0,   
    flexDirection:'row',
  },

  });


  export default connect(state, dispatch)(TabBar);
