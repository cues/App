import React ,{Component} from 'react';
import { Platform, StyleSheet , Text, View, TouchableOpacity , StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import BlurView from '../../Components/BlurVIew/BlurVIew';
import TabBarItems  from './TabBarItems';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {brand, model, models} from '../../Components/DeviceInfo/DeviceInfo';
import style from '../../Styles/Styles'
import Footer from '../../Functions/Articles/Footer';

import { connect } from 'react-redux';

const state = state => {
  return {
      headerColor       :   state.themes.headerColor,
      tabBlur           :   state.themes.tabBlur,
      tabBarVisible     :   state.main.tabBarVisible,
      tabBarAnimation   :   state.main.tabBarAnimation,
      tabBarType        :   state.main.tabBarType,
      tabIcons          :   state.themes.tabIcons,
      selectedArticle   :   state.articles.selectedArticle,
  };
};



class TabBar extends Component  {





render(){



  // const {tabBlur, tabBarVisible} = this.props 

  const { navigation , headerColor, tabBlur , tabBarType, tabIcons, selectedArticle}      = this.props;
  const { routes , index  }  = navigation.state;


  const TabBarItem = (
    routes.map((route, i) => (
        <TabBarItems navigation={navigation} key={route.routeName} {...route} isActive = {index === i}/>
    ))
  )

  let zoom, zoom_2;
  let zIndex_Normal, zIndex_Article;

  if(tabBarType == 'normal'){
    zoom           = 'zoomIn' 
    zoom_2         = 'zoomOut'
    zoom_menu      = 'zoomIn'

    zIndex_Normal  = 10
    zIndex_Article = 0
  }
  else if(tabBarType == 'article'){
    zoom           = 'zoomOut'
    zoom_2         = 'zoomIn'
    zoom_menu      = 'zoomIn'

    zIndex_Normal  = 0
    zIndex_Article = 10
  }
  else if(tabBarType == 'menu'){
    // zoom            = 'zoomOut'
    // zoom_2          = 'zoomOut'
    zoom_menu       = 'zoomOut'
  }

             
  const footer = selectedArticle != null ? <Footer article = {article} type='article' from={routes[index].key}/> : null

    return (
      <Animatable.View animation={zoom_menu} duration={500}  style={[styles.container, {backgroundColor:Platform.select({android : headerColor})}]}>
        

             <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={17} />


            <View style={[style.absolute, {zIndex : zIndex_Normal}]}>
                <Animatable.View animation={zoom} duration={500} style={[styles.Animatable]}>
                    {TabBarItem} 
                </Animatable.View>
            </View>
      


            <View style={[style.absolute, {zIndex : zIndex_Article}]}>
                <Animatable.View animation={zoom_2} duration={500} style={[styles.Animatable]}>
                    {footer}
                </Animatable.View>
            </View>   


      </Animatable.View>
  
    );
}

}


const styles = StyleSheet.create({
  container:{
    width:'100%', 
    height:brand === 'Apple' && models.includes(model) ? 73 :  59 , 
    position: 'absolute',
    right: 0,
    left: 0,
    bottom:0,
    borderTopWidth:1,
    borderColor:'rgba(23,23,23,.1)',
    overflow:'hidden'
  },

  Animatable :{
    height:'100%', 
    width:'100%',
    // position: 'absolute',
    // right: 0,
    // left: 0,
    // bottom:0,
    // top:0,     
    flexDirection:'row',
  },
    bottomTabBar: {
      backgroundColor: 'transparent',
    },


    articleFooter : {
      height: 40,
      margin: 5,
      paddingHorizontal : 5,
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    articleShare : {
        height:40,
        width:40,
    },  
    footerItems : {
        height: 40,
        flexDirection:'row',
        // backgroundColor:'blue'
    },
    footerCount : {
        height: 40,
        lineHeight:40,
        marginHorizontal:5,
        fontSize:18,
    },
    footerIcon : {
        width:40,
        height: 40,
        lineHeight:40,
        textAlign:'center',
        // backgroundColor:'red'
    },
    likeIcon :{
        alignSelf:'flex-start'
    },
    commentIcon :{
        alignSelf:'flex-end',
    }
  });


  export default connect(state)(TabBar);
