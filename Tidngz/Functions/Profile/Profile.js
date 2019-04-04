import React, {Component} from 'react';
import {Platform, StyleSheet, View, Animated, Dimensions, RefreshControl} from 'react-native';
import ProfileTitle from './ProfileTitle';
import {OptimizedFlatList} from 'react-native-optimized-flatlist'
import Loader from '../../Components/UI/Loader/Loader';
import Article from '../Articles/Article';
import {profile_refresh_articles, profile_add_article, profile_loader, profile_all_articles, profile_load_articles} from '../../Store/Actions/index';
import {brand, model, models} from '../../Components/DeviceInfo/DeviceInfo';
import style from '../../Styles/Styles';

import { connect } from 'react-redux';

const state = state => {
    return {
        api                 :   state.main.api,
        apiKey              :   state.main.apiKey,
        user                :   state.main.user,
        user_id             :   state.main.user.user_id,
        menuIconColor       :   state.themes.menuIconColor,
        allArticles         :   state.profileArticles.allArticles,
        loader              :   state.profileArticles.loader,
        start               :   state.profileArticles.start,
        records_per_page    :   state.profileArticles.records_per_page,
        current_page        :   state.profileArticles.current_page,
        number_of_pages     :   state.profileArticles.number_of_pages,
        total_records       :   state.profileArticles.total_records,
        last_articles_id    :   state.profileArticles.last_articles_id,
    };
  };
  

const dispatch = dispatch => {
    return {
        this_refresh_articles :   ()                                                  =>  dispatch(profile_refresh_articles()),
        this_add_article      :   article                                             =>  dispatch(profile_add_article(article)),
        this_loader           :   ()                                                  =>  dispatch(profile_loader()),
        this_all_articles     :   (total_records, last_articles_id, number_of_pages)  =>  dispatch(profile_all_articles(total_records, last_articles_id, number_of_pages)),
        this_load_articles    :   (current_page, start)                               =>  dispatch(profile_load_articles(current_page, start)),
    }
  }


const WIDTH = Dimensions.get('window').width;

class Profile extends Component {
    
    state = {
        user : [{
            key : '0',
            type : 'profile',
            user: this.props.user,
        }],
        refreshing : false,
    }
    
    componentWillMount()  {
        this.allArticles();
    }
    
 
   

    allArticles = async () => {

        const {api, user_id, apiKey} = this.props
        const source = 11;

      const url = `${api}/Articles/articles.php?key=${apiKey}&user_id=${user_id}&type=1&article_source=${source}`;

    // console.log(url)
    
      await fetch(url)
      .then((response) => response.json())
      .then((response) => {


            total_records     =  response.data.total_records
            last_articles_id  =  response.data.last_articles_id
            number_of_pages   =  Math.ceil(total_records / this.props.records_per_page);

            this.props.this_all_articles(total_records, last_articles_id, number_of_pages)
         
         
            this.loadArticles();            
                 
      })

    }
    
    

    loadArticles = async () => {

        let {this_load_articles, api, user_id, apiKey, start, records_per_page, number_of_pages, current_page, last_articles_id} = this.props
        const source = 11;
        
        const url = `${api}/Articles/articles.php?key=${apiKey}&user_id=${user_id}&type=2&last_articles_id=${last_articles_id}&article_source=${source}&records_per_page=${records_per_page}&start=${start}`;
      
      
        await fetch(url)
        .then((response) => response.json())
        .then((response) => {

  
              for(a = 0; a < response.data.articles.length; a++){
  
                  article = response.data.articles[a];
  
                  this.onArticleAdd(article);
  
                  this.setState({
                      refreshing : false,
                  })

         
  
              }

        })
        .catch((error) =>{
          this.setState({
              refreshing : false,
          })
        });
      
        
        current_page++;
        start = start + records_per_page;
          
        this_load_articles(current_page, start)
      
      }
    
      

      onArticleAdd = (article) => {
        article.image.image_thumbnail = article.articles_type == 2 ? article.video.video_img_thumbnail : article.image.image_thumbnail;
        this.props.this_add_article(article);    
    }


    onScroll = () => {
        if(!this.props.loader){
            this.props.this_loader();
            this.loadArticles();
        }
    }


 

    renderFooter = () => {
      const loader =  !this.state.refreshing ? <Loader style={styles.loader}/> : null
            return loader    
    };




 

    renderItem = ({item}) => {
        const dis = this.state.refreshing ? style.opacity0 : style.opacity1;

        if(item.type){
            return <ProfileTitle scrollY={this.props.scrollY} item={item} refresh={this.handleRefresh} stylesProps={dis}/> 
        }else{
            if(item.key != 1){
                return <Article article = {item.article} container='profile'/>        
            }
        }

      
        
    }

    _keyExtractor = (item, index) => item.key + 3 ;


    handleRefresh = type => {
        if(type == 1){
            this.props.this_refresh_articles()
            this.allArticles();
        }
        else if(type == 2){
            this.props.this_refresh_articles()
        
        }else{
            this.setState({
                refreshing : true,
            }, () => {
                this.props.this_refresh_articles()
                this.allArticles();
            })
        }
           
       
    }



 

    render (){

        const flatlistMargin = this.state.refreshing ? styles.flatlistMargin : null;


        return (
            <OptimizedFlatList 
                        style={[styles.flatlist, flatlistMargin]}

                        data = {this.state.user.concat(this.props.allArticles)}
                        // data = {this.state.user}
                        maxToRenderPerBatch={3}
                        updateCellsBatchingPeriod={100}
                        windowSize={3}
                        initialNumToRender={3}


                        renderItem = {this.renderItem}
                        keyExtractor={this._keyExtractor}

                        onEndReached={this.onScroll}
                        onEndReachedThreshold={.5}
                        ListFooterComponent={this.renderFooter}
                        scrollEventThrottle={16}

                        onScroll = {Animated.event(
                            [{nativeEvent : {contentOffset : {y : this.props.scrollY}}}]
                        )}  
                        
                        refreshControl = {
                            <RefreshControl 
                                tintColor = {this.props.menuIconColor}
                                refreshing = {this.state.refreshing}
                                onRefresh = {() => this.handleRefresh(0)}
                                // title = 'Refreshing...'
                            />
                        }
                />  
        )
    }
}


const styles = StyleSheet.create({
    
    flatlist:{
        width:WIDTH + 20,
        marginHorizontal : -10,
    },
    flatlistMargin : {
        zIndex:-1,
        marginTop:120,
    },
    loader :{
        marginTop: 25, 
        marginBottom: Platform.select({android:108 , ios : models.includes(model) ? 128 : 108})
    }
});

export default connect(state, dispatch)(Profile);