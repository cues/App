import React , {Component} from 'react';
import { Dimensions, View, Text, StyleSheet, TouchableWithoutFeedback, Animated, Modal, Image} from 'react-native';
import { withNavigation } from 'react-navigation';
import CardView from 'react-native-cardview';
import Media from './Media';
import Category from './Category';
import Title from './Title';
import Footer from './Footer';
import Linked from './Linked';
import User from './User';
import * as Animatable from 'react-native-animatable';


import { connect } from 'react-redux';
import {articleTablet, selected_article, tabBarType} from '../../Store/Actions/index';

const state = state => {
  return {
      articleItem         :   state.themes.articleItem,
  };
};

const dispatch = dispatch => {
    return {
        this_articleTablet     :  article   =>  dispatch(articleTablet(article)),
        this_selectedArticle   :  article   =>  dispatch(selected_article(article)),       
    }
}



const width = Dimensions.get('window').width;



class Article extends Component {
   

   state = {
       articleLoaded : false,
       viewWidth : null,
       ImagesActive : false,
    }

    layout = event => {
        var {x, y, width, height} = event.nativeEvent.layout;
        this.setState({
            viewWidth : width
        })
    }

    handleViewRef = ref => this.view = ref;



    articleNavigate = () => {

        // this.view.pulse(1000)

    //   if(width >= 900){å
    //         this.props.this_articleTablet(this.props.article.articles_id)
    //     }else{
            this.props.this_selectedArticle(this.props.article)
            this.props.navigation.navigate('Article',{articles_id:this.props.article.articles_id})
    //   }
    }


    // articleLoaded = () => {

    // }

    // articleOpen = (key) => {
    //     alert(key)
    //     this.setState(prevState => ({
    //         articleLoaded : !prevState.articleLoaded
    //     })),
    //     Animated.timing(this.state.addAnimate, {
    //         toValue : 1,
    //         duration : 500,
    //         useNativeDriver : true
    //     }).start(() => {
    //         this.articleLoaded()
    //     });
       
    // }

    render (){

    const {article , articleItem} = this.props;
    const { viewWidth , ImagesActive} = this.state;
    const { layout } = this;

    // const dis =  this.state.articleLoaded ? 'flex' : 'none'

    // const content = (
    //         <Animated.View style={[styles.openArticle, { 
    //                                 display:dis,
    //                                 opacity : this.state.addAnimate, 
    //                                 transform : [
    //                                         {
    //                                             scale : this.state.addAnimate.interpolate({
    //                                                 inputRange:[0, 1],
    //                                                 outputRange: [0,10] 
    //                                             })
    //                                         }
    //                                     ]
    //                                 }]}>
    //         </Animated.View>
           
    //     // : null
    // )

    //   const myFancyAnimation = {
    //         from: {
    //             opacity: 0,
    //           },
    //           to: {
    //             opacity: 1,
    //           },
    //     }



        return(
                <View   style={styles.eachArticle} >

                        <CardView 
                                
                                style={[styles.articleShadow]} 
                                cardElevation={7}
                                cardMaxElevation={7}
                                cornerRadius={10}>

                                <View onLayout = {layout} style={[styles.articleItem, {backgroundColor:articleItem}]} >



                                    <TouchableWithoutFeedback onPress = {this.articleNavigate}>

                                        <View>
                                            
                                            <Category category_id = {article.option.category_id}/>

                                            <Media type={1} place = {article.place} image = {article.image} video = {article.video}/>

                                            <Title article = {article}/>

                                            <Linked article = {article} type='all'/>

                                            <User user = {article.user} dates = {article.dates}/>

                                        </View>

                                    </TouchableWithoutFeedback>

                                        <View style={styles.articleLine}></View>

                                        <Footer article = {article} type='all' from='all'/>

                                </View>

                        </CardView>
                </View>
        )  
    }
};


const styles = StyleSheet.create({
    openArticle : {
        backgroundColor:'red',
        height : '10%',
        width:'100%',
        zIndex:2,
    },
    eachArticle : {
        width:'100%', 
        alignItems:'center',
        zIndex:1,
    },

    articleShadow : {
        width:width - 40,
        maxWidth:380,
        marginVertical:25,
        backgroundColor:'transparent',
    },
    articleItem : {
        borderRadius:10, 
        overflow: 'hidden',
    },
    articleLine : {
        height:2,
        borderRadius:100,
        marginHorizontal:10,
        backgroundColor:'rgba(102, 102, 102, 0.2)'
    },
});

export default withNavigation(connect(state, dispatch)(Article));
