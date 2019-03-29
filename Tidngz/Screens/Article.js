import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, ScrollView, Text, TouchableOpacity, View, StatusBar, Image} from 'react-native';
import BlurView from '../Components/BlurVIew/BlurVIew';
import GoBack from './Headers/goBack';
import headerStyle from './Headers/HeaderStyles';
import More from '../Functions/Article/More';
import User from '../Functions/Article/User';
import Place from '../Functions/Article/Place';
import Title from '../Functions/Article/Title';
import Content from '../Functions/Article/Content';
import Media from '../Functions/Articles/Media';
import Linked from '../Functions/Articles/Linked';
import {brand, model, models, models2} from '../Components/DeviceInfo/DeviceInfo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { withNavigation } from 'react-navigation';
import style from '../Styles/Styles'; 

import Images from '../Functions/Images/Images';

import { showStatusBar, hideStatusBar , tabBarType_Article , tabBarType_Normal} from '../Components/TabBar/TabBar'
// import { ScrollView } from 'react-native-gesture-handler';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

import { connect } from 'react-redux';
import { tabBarVisible , tabBarAnimation, tabBarType } from '../Store/Actions/index';

const state = state => {
  return {
      allArticles          :   state.articles.allArticles,
      selectedArticle      :   state.articles.selectedArticle,
      articleTablet        :   state.articles.articleTablet,
      last_articles_id     :   state.articles.last_articles_id,
      imageActive          :   state.articles.imageActive,
      backgroundMain       :   state.themes.backgroundMain,
      tabBlur              :   state.themes.tabBlur,
      headerColor          :   state.themes.headerColor,
      footerColor          :   state.themes.footerColor,
  };
};

const dispatch = dispatch => {
    return {
      this_tabBarVisible    : ()    =>  dispatch(tabBarVisible()),
      this_tabBarAnimation  : ()    =>  dispatch(tabBarAnimation()),
      this_tabBarType       : type  =>  dispatch(tabBarType(type))    
    }
}

  


class Article extends Component {

    static navigationOptions = ({navigation}) =>  {
        return {
                   header:null,
                   headerStyle:headerStyle,
           }
    }




    componentDidMount() {
        setTimeout(() => {
            hideStatusBar();
            tabBarType_Article();
        },300)
    }

    componentWillUnmount() {
        showStatusBar()
        tabBarType_Normal();
     }


  

    // getComments = () => {
    //     setTimeout(() => {
    //         this.showStatusBar()
    //         this.tabBarType_Normal();
    //     },500)å
    //     this.props.navigation.navigate('Comments',{name:'COMMENTS', article:article, onNavigationBack: this.navBack})
    // }
  

  render() {
    const {headerColor, tabBlur, footerColor, backgroundMain, navigation, allArticles, articleTablet, selectedArticle, last_articles_id} = this.props;

    const {getComments} = this
    // let articles_id;
    // if(width >= 768){
    //       articles_id = articleTablet
    // }else{
    //      articles_id   =  navigation.getParam('articles_id')
    // // }

    article = selectedArticle

    // this_article = allArticles.filter(obj => {
    //     return obj.article.articles_id === selectedArticle
    // })

    // article = this_article[0].article 


    let last;
    // let last2;
    // let bottom;

    // if(width >= 900){
    //     bottom = {
    //         position : 'relative'
    //     }

    //     last2 = (

    //         <View  style={[styles.bottom, bottom]}>
                            
    //                 <View style={[styles.articleLine , styles.articleLine2]}/>

    //                 <Footer article = {article} type='article' back={() => {}}/>

    //         </View>
    //     )
    // }else{
    //     bottom = {
    //         position : 'absolute',
    //         left:0,
    //         right:0,
    //         bottom:0,
    //     }
    // <Footer article = {article}  back={this.hideStatusBar}/>

    // const this_commented = article.this_commented == 1 ? 'rgba(15, 101, 141, 0.8)' : footerColor

    //     last = (
    //         <View style={[styles.bottom,  {backgroundColor:Platform.select({android : headerColor , ios :'transparent'})}]}>
    //             <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={5}>
                                
    //                     <View style={[styles.articleLine , styles.articleLine2]}/>


    //                     <View style={[styles.articleFooter]}>

    //                         <View style={[styles.footerItems]}>
    //                             <TouchableOpacity>
    //                                 <MaterialCommunityIcons style={[styles.footerIcon, styles.likeIcon]}  name="heart-multiple-outline" size={27} color={footerColor} />
    //                             </TouchableOpacity>
    //                             <TouchableOpacity>
    //                                 <Text style={[styles.footerCount, {color:footerColor}, style.bt]}>{article.articles_likes}</Text>
    //                             </TouchableOpacity>
    //                         </View>

    //                         <TouchableOpacity style={[styles.articleShare]}>
    //                             <AntDesign style={[styles.footerIcon]}  name="sharealt" size={21} color={footerColor} />
    //                         </TouchableOpacity>

    //                         <TouchableOpacity style={[styles.footerItems]} onPress={getComments}>
    //                             <Text style={[styles.footerCount, {color:this_commented}, style.bt]}>{article.articles_comments}</Text>
    //                             <MaterialCommunityIcons  style={[styles.footerIcon, styles.commentIcon]} name="comment-multiple-outline" size={27} color={this_commented} />
    //                         </TouchableOpacity>
  
    //                     </View>

    //             </BlurView>
    //         </View>
        // )
    // }
   
    // console.log(this_article[0].article);
        //   return <View><Text>{articleTablet} {last_articles_id}</Text></View>


    if(article.articles_id == 1){
        return <View><Text>first page</Text></View>
    }
    else{

        return (
                <View style={[styles.container, {backgroundColor:backgroundMain}]}>
                
                    <ScrollView alwaysBounceVertical={true} style={styles.scroll}>

                            <View style={styles.scrollInnerTop}>

                                    <Image resizeMode={'cover'} style={styles.image} source={{uri:article.image.image_thumbnail}} />

                                    <BlurView  viewRef={1}  blurType="dark" blurAmount={50} style={styles.top}>

                                            <More article = {article}/>


                                            <User user = {article.user} dates = {article.dates}/>

                                            <View style={styles.articleLine}/>
                                            
                                            <Place place = {article.place}/>

                                            <Title article = {article}/>

                                    </BlurView>

                            </View>
                            

                            <View style={styles.scrollInner}>

                                    <Media type={2}  image = {article.image} video ={article.video}/>

                                    <View style={styles.scrollInner2}>
                                            
                                            <Content article = {article}/>

                                            <Linked article = {article} type='article'/>

                                    </View>

                            </View>

                            {/* {last2} */}
                        
                    </ScrollView>

                

                    {/* {last} */}
                 
                
            </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      height:'100%',
    },
    scroll : {
        height: height - 83,
    },
    scrollInnerTop : {
        zIndex : 2,
        overflow:'hidden',
    },
    scrollInner : {
        zIndex : 1,
    },
    scrollInner2 : {
        paddingHorizontal:10,
    },

    top:{
        paddingHorizontal:10,
        // height:104, 
        ...Platform.select({
            android : {
                backgroundColor: 'rgba(23,23,23,.9)',
            },
        }),
    },
    image: {
        height:'150%',
        width:'100%',
        position:'absolute',
        display:Platform.select({android : 'none'})
    },
    bottom:{
        position: 'absolute',
        right: 0,
        left: 0,
        bottom:0,
        flexDirection:'row', 
        flex:1,
        width:'100%', 
        height:brand === 'Apple' && models.includes(model) ? 73 :  59 , 
        borderTopWidth  :   1,
        borderColor     :   'rgba(23,23,23,.1)',
    },

    headerLeft:{
        height: 40,
        width: 40,
        marginLeft: 5,
        lineHeight:30,
        fontWeight:'bold'
    },
    articleLine : {
        height:2,
        borderRadius:100,
        marginHorizontal:20,
        backgroundColor:'rgba(102, 102, 102, 0.2)'
    },
    articleLine2 : {
        backgroundColor :'rgba(23, 23, 23, 0.1)',
        height          :   1,
        marginHorizontal:   0,
        position        :   'absolute',
        bottom          :   brand === 'Apple' && models.includes(model) ? 82 :  58 , 
        left            :   0,
        right           :   0
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
  


  export default withNavigation(connect(state, dispatch)(Article));