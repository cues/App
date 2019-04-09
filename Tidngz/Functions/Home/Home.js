import React, {Component} from 'react';
import {Platform, Dimensions, FlatList, SectionList, View, TouchableOpacity, Image, Text, StyleSheet, Animated,   ScrollView , RefreshControl} from 'react-native';
import {OptimizedFlatList} from 'react-native-optimized-flatlist'
import { connect } from 'react-redux';
import {home_refresh_articles, home_add_article, home_loader, home_all_articles, home_load_articles, home_articleTablet} from '../../Store/Actions/index';
import Article from '../Articles/Article';
import {brand, model, models} from '../../Components/DeviceInfo/DeviceInfo';
import HomeTitle from './HomeTitle';
import style from '../../Styles/Styles'; 
import ArticleTablet from '../../Screens/Article';
import Loader from '../../Components/UI/Loader/Loader';

const WIDTH = Dimensions.get('window').width;


  const state = state => {
    return {
        api                 :   state.main.api,
        user_id             :   state.main.user.user_id,
        apiKey              :   state.main.apiKey,
        menuIconColor       :   state.themes.menuIconColor,
        allArticles         :   state.articles.allArticles,
        loader              :   state.articles.loader,
        start               :   state.articles.start,
        records_per_page    :   state.articles.records_per_page,
        current_page        :   state.articles.current_page,
        number_of_pages     :   state.articles.number_of_pages,
        total_records       :   state.articles.total_records,
        last_articles_id    :   state.articles.last_articles_id,
    };
  };
  
  const dispatch = dispatch => {
    return {
        this_refresh_articles :   ()                                                  =>  dispatch(home_refresh_articles()),
        this_add_article      :   (article)                                           =>  dispatch(home_add_article(article)),
        this_loader           :   ()                                                  =>  dispatch(home_loader()),
        this_all_articles     :   (total_records, last_articles_id, number_of_pages)  =>  dispatch(home_all_articles(total_records, last_articles_id, number_of_pages)),
        this_load_articles    :   (current_page, start)                               =>  dispatch(home_load_articles(current_page, start)),
        this_articleTablet    :   (article)                                           =>  dispatch(home_articleTablet(article)),
    }
  }




class Home extends Component {

    state = {
        home:[
                {
                    key :'0',
                    type : 'home',
                    user : 'Erroll',
                }
        ],
        refreshing : false,
    }
    
    componentWillMount()  {
        this.allArticles();
    }
    


    allArticles = async () => {

        const { api, user_id, apiKey} = this.props
        const source = 11;

      const url = `${api}/Articles/articles.php?key=${apiKey}&user_id=${user_id}&type=1&article_source=${source}`;

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

      let {this_articleTablet, this_load_articles, api, user_id, apiKey, start, records_per_page, number_of_pages, current_page, last_articles_id} = this.props
      const source = 11;
      
      const url = `${api}/Articles/articles.php?key=${apiKey}&user_id=${user_id}&type=2&last_articles_id=${last_articles_id}&article_source=${source}&records_per_page=${records_per_page}&start=${start}`;
    
    
      await fetch(url)
      .then((response) => response.json())
      .then((response) => {

            for(a = 0; a < response.data.articles.length; a++){

                article = response.data.articles[a];

                this.onArticleAdd(article);

                // if(article.articles_id == last_articles_id){
                //     this_articleTablet(last_articles_id)
                // }

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




    renderItem = ({item, index}) => {
        const dis = this.state.refreshing ? style.opacity0 : style.opacity1;

        if(item.type){
            return <HomeTitle  item = {item} stylesProps={dis}/>
        }else{
            if(item.key != 1){
                return <Article article = {item.article} container='home'/>
            }
            
        }
      
    }

    _keyExtractor = (item, index) => item.key + 2;
    
   

    handleRefresh = () => {
            this.setState({
                refreshing : true,
            }, () => {
                this.props.this_refresh_articles()
                this.allArticles();
            })
      
    }

  


    render (){
        const {allArticles, onMomentumScrollBegin, handleScroll} = this.props;
        const {onScroll, renderFooter} = this;
        const {flatlist} = styles;

        

        const flatlistMargin = this.state.refreshing ? styles.flatlistMargin : null;
        
        return( 
    
     
                    <OptimizedFlatList 
                        style={[styles.flatlist, flatlistMargin]}
                        data = {this.state.home.concat(allArticles)}
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
    
    flatlist:{
        width:WIDTH + 20,
        // backgroundColor:'red'
    },
    flatlistMargin : {
        zIndex:500,
        marginTop:100,
    },
    articleReader : {
        // height: height - 121,
        // marginTop : 63,
        // marginBottom : 57,
        // backgroundColor:'blue',
    },
    loader :{
        marginTop: 25, 
        marginBottom: Platform.select({android:108 , ios : models.includes(model) ? 128 : 108})
    }
   
});
  



 // <ScrollView onScroll={onScroll}>
            //     {

            //             allArticles.map((article, i) => (
            //                 // console.log(article.article)
            //                 <Article article = {article.article}/>
                        
            //         ))
            //     }

            // </ScrollView>




  export default connect(state, dispatch)(Home);