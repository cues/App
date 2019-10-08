import React, {Component} from 'react';
import {Platform, Dimensions, FlatList, SectionList, View, TouchableOpacity, Image, Text, StyleSheet, Animated,   ScrollView , RefreshControl} from 'react-native';
import {OptimizedFlatList} from 'react-native-optimized-flatlist'
import Article from './Article';
import {brand, model, models} from '../../Components/DeviceInfo/DeviceInfo';
import style from '../../Styles/Styles'; 
import Loader from '../../Components/UI/Loader/Loader';
import FooterText from '../../Components/UI/Loader/FooterText';
import HomeTitle from '../Home/HomeTitle';
import BookmarkTitle from '../Bookmark/BookmarkTitle';
import ProfileTitle from '../Profile/ProfileTitle';
import PlaceTitle from '../Place/PlaceTitle';
import { withNavigation } from 'react-navigation';
import moment from 'moment';


const WIDTH = Dimensions.get('window').width;

import { connect } from 'react-redux';

  const state = state => {
    return {
        api                 :   state.main.api,
        user_id             :   state.main.user.user_id,
        apiKey              :   state.main.apiKey,
        menuIconColor       :   state.themes.menuIconColor,
        user                :   state.main.user,
        selectedUser        :   state.main.selectedUser,
        selectedPlace       :   state.place.place.id,
        selectedPlaceLocal  :   state.main.selectedPlaceLocal,
        selectedHashtag     :   state.main.selectedHashtag,
        selectedLinked      :   state.main.selectedLinked,
    };
  };
  



class Articles extends Component {

    constructor(props){
        super(props)


        this.state = {
            home:[{
                key :'0',
                type : 'home',
                user: this.props.user.user_name,
            }],
            user : [{
                key : '0',
                type : 'profile',
                user: this.props.user,
            }],

            allArticles : [{
                key : 1,
                article : {
                    articles_id: 1,
                    type:'inital'
                }
            }],
            selectedArticle : null,
            articleTablet:1,
            refreshing : false,
            loader:false,
            article_ids:null,
            start : 0,
            records_per_page:3,
            current_page : 1,
            number_of_pages: null,
            total_records:null,
            last_articles_id:null,
            option : 1,
            top : 0,
            calender : 0,


            isEmptyWeather : true,
            homeWeather : null,
            weatherLoader : false
        }


        this.getWeather(2,1)
        this.allArticles();


    }



    getWeather = (where, type) => {

        const {apiKey, api, user_id} = this.props

        if(type == 2){
            this.setState({
                weatherLoader : true
            })
        }
       

         if(where == 1){

         }else{
           
            var lat,lng;
            if (navigator.geolocation) {
    
              navigator.geolocation.getCurrentPosition((position) => {
            
                  lat = position.coords.latitude
                  lng =  position.coords.longitude
         
                //   console.warn(lat)
                //   console.warn(lng)

                    url = `${api}/Weather/User/user.php?&key=${apiKey}&type=${type}&lat=${lat}&long=${lng}&user_id=${user_id}`;
    
          
                    fetch(url)
                    .then((response) => response.json())
                    .then((response) => {


                        // console.warn(response)

                        // this.props.this_home_weather_call()
                        
                        this.setState({
                            isEmptyWeather : response.data.isEmpty,
                            homeWeather    : response,
                            weatherLoader  : false 
                        })


                    })
                    .catch((error) =>{
                      console.error(error);
                    });
                  
                });
            }

         }
      
     }
     






    source = () => {
        let {type, navigation} = this.props
        const routeName = navigation.getParam('routeName' , '')


        const source    =   type == 'home'          ?   11 : 
                            type == 'place'         ?   21 :
                            type == 'placeLocal'    ?   11 :
                            type == 'hashtag'       ?   11 :
                            type == 'Bookmark'      ?   51 :
                            type == 'linked'        ?   11 :
                            type == 'profile'       ?   71 :
                            type == 'Trending'      ?   81 :
                            type == 'options'       ?   routeName == 'home'             ?   12  :
                                                        routeName == 'place'            ?   22  :
                                                        routeName == 'placeLocal'       ?   12  :
                                                        routeName == 'hashtag'          ?   12  :
                                                        routeName == 'Bookmark'         ?   52  :
                                                        routeName == 'linked'           ?   12  :
                                                        routeName == 'profile'          ?   72  :
                                                        routeName == 'trending'         ?   12  :   12  :
                            type == 'top'           ?   routeName == 'home'             ?   13  :
                                                        routeName == 'place'            ?   23  :
                                                        routeName == 'placeLocal'       ?   13  :
                                                        routeName == 'hashtag'          ?   13  :
                                                        routeName == 'Bookmark'         ?   53  :
                                                        routeName == 'linked'           ?   13  :
                                                        routeName == 'profile'          ?   73  :
                                                        routeName == 'trending'         ?   13  :   13  :
                            type == 'calender'      ?   routeName == 'home'             ?   14  :
                                                        routeName == 'place'            ?   24  :
                                                        routeName == 'placeLocal'       ?   14  :
                                                        routeName == 'hashtag'          ?   14  :
                                                        routeName == 'Bookmark'         ?   54  :
                                                        routeName == 'linked'           ?   14  :
                                                        routeName == 'profile'          ?   74  :
                                                        routeName == 'trending'         ?   14  :   14  :   11


          return source
      }


    allArticles = async () => {

        const {type, api, user_id, apiKey, navigation, selectedPlace, selectedPlaceLocal, selectedHashtag, selectedLinked} = this.props
        let { selectedUser } = this.props
        selectedUser = selectedUser == '' ? user_id : selectedUser
        const option = navigation.getParam('option', 1)
        const top = navigation.getParam('top', '')
        let date_1 = navigation.getParam('date_1', '')
        let date_2 = navigation.getParam('date_2', '')
        date_1 = date_1 != null ? moment(date_1).format('YYYY-MM-DD') : '' 
        date_2 = date_2 != null ? moment(date_2).format('YYYY-MM-DD') : '' 
        date_1 = date_1 == 'Invalid date' ? '' : date_1
        date_2 = date_2 == 'Invalid date' ? date_1 : date_2

        const source = this.source()

        // console.warn(source)
        // console.warn(selectedPlace)
        // console.warn(date_1)
        // console.warn(date_2)
        
        const url = `${api}/Articles/articles.php?key=${apiKey}&user_id=${user_id}&user_1=${selectedUser}&place_id=${selectedPlace}&type=1&article_source=${source}&options_id=${option}&top=${top}&date_1=${date_1}&date_2=${date_2}`;

        await fetch(url)
        .then((response) => response.json())
        .then((response) => {

            // console.warn(response)

                total_records     =  response.data.total_records
                last_articles_id  =  response.data.last_articles_id
                number_of_pages   =  Math.ceil(total_records / this.state.records_per_page);
                article_ids       =  response.data.article_ids


                this.setState({
                    total_records:total_records,
                    last_articles_id:last_articles_id,
                    number_of_pages: number_of_pages,
                    article_ids : article_ids
                }, () => {
                    this.loadArticles();            
                })

                
        })

    }



    
    
    loadArticles = async () => {

        const {api, user_id, apiKey } = this.props

        let {start, current_page, article_ids, records_per_page} = this.state

 
      const url = `${api}/Articles/articles.php?key=${apiKey}&user_id=${user_id}&type=2&article_ids=${article_ids}&records_per_page=${records_per_page}&start=${start}`;    

      await fetch(url)
      .then((response) => response.json())
      .then((response) => {

            for(a = 0; a < response.data.articles.length; a++){

                article = response.data.articles[a];

                this.onArticleAdd(article);

            }

      })
      .catch((error) =>{
        this.setState({
            refreshing : false,
        })
      });
    
      

      current_page++;
      start = start + records_per_page;
        
      this.setState({
        start : start,
        current_page : current_page,
      })

    
    }
    
    
    onArticleAdd = article => {
        article.image.image_thumbnail = article.articles_type == 2 ? article.video.video_img_thumbnail : article.image.image_thumbnail;
        
        this.setState({
            allArticles : this.state.allArticles.concat({ 
                key           :   `${article.articles_id}`, 
                article       :   article
            }),
            loader:false,
            refreshing : false,
        })
    }


    onScroll = () => {
        if(!this.state.loader && this.state.start != 0){
            this.setState({
                loader : true,
            })
            this.loadArticles();
        }
    }


 

    renderFooter = () => {
        const { refreshing , loader , start, current_page, number_of_pages } = this.state
    
        // console.warn(current_page);
        // console.warn(number_of_pages);

        const footer = (
            current_page <= number_of_pages ?  
                !refreshing ? 
                    <Loader style={styles.loader}/> 
                :   null 
            : 
                start != 0 ?
                    <FooterText style={styles.loader} text='Thats All!'/> 
                :   null 

        )

        // const loader =  !this.state.refreshing ? <Loader style={styles.loader}/> : null
     
        return footer    
    };




    renderItem = ({item, index}) => {
        const dis = this.state.refreshing ? style.opacity0 : style.opacity1;

        const fullDate = this.props.type == 'calender' ? true : false

        const {weatherLoader, homeWeather, isEmptyWeather} = this.state;


        if(item.type){
            if(this.props.type == 'home'){
                return <HomeTitle  item = {item} stylesProps={dis} getWeather={this.getWeather} weatherLoader={weatherLoader} homeWeather={homeWeather} isEmpty={isEmptyWeather}/>
            }
            else if(this.props.type == 'profile'){
              return <ProfileTitle scrollY={this.props.scrollAnim} item={item} refresh={this.handleRefresh} stylesProps={dis}/> 
            }
            else if(this.props.type == 'place'){
                return <PlaceTitle scrollY={this.props.scrollAnim} item={item} refresh={this.handleRefresh} stylesProps={dis}/> 
            }
            else if(this.props.type == 'options' || this.props.type == 'top' || this.props.type == 'calender' ){
                return (
                    <View style={[style.paddingBackgroundTop,  dis]}>
                        <View style={{height : 75, width : '100%'}}/>
                    </View>
                );
            }
            else{
                return (
                    <View style={[style.paddingBackgroundTop,  dis]}>
                        <View style={{height : 15, width : '100%'}}/>
                    </View>
                );
            }
        }else{
            if(item.key != 1){
                return <Article article ={item.article} fullDate={fullDate} container='home'/>
            }
        }
      
    }

    _keyExtractor = (item, index) => item.key + 1;
    
   

    handleRefresh = () => {
            this.setState({
                refreshing : true,
                allArticles : [{
                    key : 1,
                    article : {
                        articles_id: 1,
                        type:'inital'
                    }
                }],
                selectedArticle : null,
                articleTablet:1,
                loader:false,
                start : 0,
                records_per_page:3,
                current_page : 1,
                number_of_pages: null,
                total_records:null,
                last_articles_id:null,
                option : 1,
                top : 0,
                calender : 0,
            }, () => {
                this.allArticles();
            })
      
    }

  


    render (){
        const {onMomentumScrollBegin, handleScroll, type} = this.props;
        const {onScroll, renderFooter} = this;
        const {allArticles, home, user} = this.state;
        
        const title = type == 'home' ? home :
                        type == 'profile' ? user : home

        const flatlist  =   type == 'home' ||  type == 'options' || type == 'top' || type == 'calender' || type == 'Trending'  || type == 'Bookmark' ? styles1.flatlist : 
                            type == 'place' || type == 'profile' ? styles2.flatlist : null 

        const flatlistMargin = this.state.refreshing ? 
                                    type == 'home'  ? styles1.flatlistMargin : 
                                    type == 'profile' ? styles2.flatlistMargin : 
                                    type == 'Trending' ? styles2.flatlistMargin : 
                                    type == 'Bookmark' ? styles2.flatlistMargin : 
                                    type == 'options'  ? styles3.flatlistMargin : 
                                    type == 'top'  ? styles3.flatlistMargin : 
                                    type == 'calender'  ? styles3.flatlistMargin : null 
                                    : null

        return( 
    
     
                    <OptimizedFlatList 
                        style={[flatlist, flatlistMargin]}
                        data = {title.concat(allArticles)}
                        maxToRenderPerBatch={3}
                        updateCellsBatchingPeriod={100}
                        windowSize={3}
                        initialNumToRender={3}
                        renderItem = {this.renderItem}
                        keyExtractor={this._keyExtractor}
                        onEndReached={onScroll}
                        onEndReachedThreshold={.5}
                        ListFooterComponent={renderFooter}
                        scrollEventThrottle={16}
                        onScroll = {Animated.event(
                            [{nativeEvent : {contentOffset : {y : this.props.scrollAnim}}}],
                            {
                                listener : (event) => {
                                    handleScroll(event)
                                }
                            }
                        )}
                        onMomentumScrollBegin={onMomentumScrollBegin}
                        refreshControl = {
                            <RefreshControl 
                                tintColor = {this.props.menuIconColor}
                                refreshing = {this.state.refreshing}
                                onRefresh = {this.handleRefresh.bind(this)}
                                // title = 'Refreshing...'
                            />
                        }
                        
                    />  
             
        )
    }

 
}

const styles = StyleSheet.create({
    loader :{
        marginTop: 25, 
        marginBottom: Platform.select({android:108 , ios : models.includes(model) ? 128 : 108})
    }
})


const styles1 = StyleSheet.create({
    
    flatlist:{
            marginHorizontal : -10,
            width:WIDTH + 20,
    },
    flatlistMargin : {
        marginTop:0,
        // marginTop:105,
    },
   
});
  

const styles2 = StyleSheet.create({
    
    flatlist:{
            width:WIDTH + 20,
            marginHorizontal : -10,
            // backgroundColor:'red'
    },
    flatlistMargin : {
        marginTop:0,
        // marginTop:120,
    },
   
});


const styles3 = StyleSheet.create({
    
    flatlistMargin : {
        marginTop:160,
    },
   
});


 // <ScrollView onScroll={onScroll}>
            //     {

            //             allArticles.map((article, i) => (
            //                 // console.log(article.article)
            //                 <Article article = {article.article}/>
                        
            //         ))
            //     }

            // </ScrollView>




  export default withNavigation(connect(state)(Articles));