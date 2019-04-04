import React, {Component} from 'react';
import {StatusBar, Platform, StyleSheet, Text, View, TouchableOpacity, FlatList, Image} from 'react-native';
import { get_comments, refresh_comments, load_comments, update_comment, report_modal_comment ,  update_article } from '../../Store/Actions/index'
import {withNavigation} from 'react-navigation'
import {OptimizedFlatList} from 'react-native-optimized-flatlist';
import Comment from './Comment';
import Report from './Report';
import Loader from '../../Components/UI/Loader/Loader';
import HeaderBottomFlatlist from '../../Components/UI/HeaderBottomFlatlist/HeaderBottomFlatlist';
import style from '../../Styles/Styles'

import { connect } from 'react-redux';
const state = state => {
  return {
      backgroundMain     :  state.themes.backgroundMain,
      api                :  state.main.api,
      user_id            :  state.main.user.user_id,
      apiKey             :  state.main.apiKey,
      allArticles        :  state.articles.allArticles,
      allArticlesProfile :  state.profileArticles.allArticles,
      allComments        :  state.comments.allComments,
      newComment         :  state.comments.newComment,
      initial            :  state.comments.initial,
      records_per_page   :  state.comments.records_per_page,
      start              :  state.comments.start,
      current_page       :  state.comments.current_page,
      articles_id        :  state.comments.articles_id,
      selectedComment    :  state.comments.selectedComment,
      headerIcons        :  state.themes.headerIcons,
      userImage          :  state.main.user.user_image,
    };
};


const dispatch = dispatch => {
  return {
      this_get_comments           : (comment, articles_id)                    =>    dispatch(get_comments(comment, articles_id)),
      this_refresh_comments       : ()                                        =>    dispatch(refresh_comments()),
      this_load_comments          : (current_page, start)                     =>    dispatch(load_comments(current_page, start)),
      this_update_comment         : allComments                               =>    dispatch(update_comment(allComments)),
      this_report_modal_comment   : id                                        =>    dispatch(report_modal_comment(id)),
      this_update_article         : allArticles                               =>    dispatch(update_article(allArticles)),
    };
};


class CommentList extends Component {



  componentWillMount(){

      const article = this.props.navigation.getParam('article')
      const articles_id = article.articles_id;

      articles_id != this.props.articles_id ? this.props.this_refresh_comments() : null ;

      // Platform.OS == 'ios' ?  StatusBar.setHidden(false, 'slide') : null ;

      setTimeout(() => {
        this.getComments()
      },100)
  }



  
  getComments = async () => {
    let {navigation, current_page, records_per_page, start, this_get_comments, this_load_comments, apiKey, api, user_id, this_refresh_comments} = this.props;

    const article = navigation.getParam('article')
    const articles_id = article.articles_id;
    const last_comment_id = article.articles_comments_data.last_comment_id;
  


    url = `${api}/Articles/Comment/Comment/Get/comment.php?key=${apiKey}&user_id=${user_id}&articles_id=${articles_id}&last_comment_id=${last_comment_id}&records_per_page=${records_per_page}&start=${start}`;

    await fetch(url)
    .then((response) => response.json())
    .then((response) => {

      
          for(c = 0; c < response.data.comments.length; c++){

              comment = response.data.comments[c];

              this_get_comments(comment, articles_id);

          }
     
    })
    .catch((error) =>{
      console.error(error);
    });

    current_page++;
    start = start + records_per_page;
      
    this_load_comments(current_page, start)
  
  }






// like, delete, report

closeModal = () => {
  const {this_report_modal_comment} = this.props;
  let id = null;

  this_report_modal_comment(id)
}


reportCommentUpdate = comment => {
  comment.comment.this_reported = 1
  return comment;
}

likeCommentUpdate = (comment, like, count) => {
  comment.comment.this_likes =  like
  comment.comment.comment_likes = count
  return comment; 
}

updateArticle = (article, count) => {
  article.article.articles_comments = count;
  article.article.this_commented = 0;
  return article;
}


misc = async (type, url, id) => {

  const {this_update_comment, this_update_article} = this.props
  const {likeCommentUpdate, reportCommentUpdate, closeModal, updateArticle} = this

  await fetch(url)
        .then((response) => response.json())
        .then((response) => {

          console.log(response);

            if(type == 'report' && response.data == 1){
                const index = this.props.allComments.findIndex(comment => comment.comment.comment_id === id)
                allComments = [...this.props.allComments];
                allComments[index] = reportCommentUpdate(allComments[index])
                this_update_comment(allComments)
                closeModal()
            }

 
            if(type == 'delete' && response.data.delete == 1){
                allComments = [...this.props.allComments];
                allComments = allComments.filter(comment => {return comment.comment.comment_id !== id})
                this_update_comment(allComments)

                const index = this.props.allArticles.findIndex(article => article.article.articles_id === response.data.articles_id)
                allArticles = [...this.props.allArticles]
                allArticles[index] = updateArticle(allArticles[index],  response.data.comments_count_2)
                this_update_article(allArticles);

                this.props.this_comment(0);
                this.props.navigation.goBack();
            }


            if(type == 'like'){
              const index = this.props.allComments.findIndex(comment => comment.comment.comment_id === id)
              allComments = [...this.props.allComments];
              allComments[index] = likeCommentUpdate(allComments[index], response.data.like, response.data.like_count)
              this_update_comment(allComments)
            }


        
        })
        .catch((error) => {
           console.error(error);
        });

}

// 






// render comments

renderItem = ({item}) => {

    let add = (
        this.props.userComment == 0 ? 
            <TouchableOpacity style={styles.addContainer} onPress={this.props.write}>
                        <View style={styles.addUserImageContainer}>
                            <Image style={styles.addUserImage} source ={{uri : this.props.userImage}}/>
                        </View>
                        <Text style={[style.ca, styles.add, {color:this.props.headerIcons}]}>Add a comment </Text>
            </TouchableOpacity>
        : <View style={{height:15}}/>
    )
    

  if(item.key == 1){

      return (
            <View key={item.key}>
                <HeaderBottomFlatlist/>
                {add}
            </View>
      )

  }
  else{
        // console.log(item)

      return <Comment key={item.key} comment = {item.comment} update={this.misc}/>

  }

}


renderFooter = () => {
    const article = this.props.navigation.getParam('article')
    const type   = this.props.navigation.getParam('type')

    const allArticles = type == 'profile' ? this.props.allArticlesProfile :
                        type == 'home' ? this.props.allArticlesProfile : null
          

    const thisArticle = allArticles.find(item => item.article.articles_id === article.articles_id)
    const total_records = thisArticle.article.articles_comments_data.total_records;
   
  const loader = total_records > 0 ? <Loader style={{marginTop: 35}}/> : <Text>Nothing Found</Text>
     
  return loader
};


// _keyExtractor = (item, index) => item.key;


// 



  render() {

    const {articles_id, allComments, initial, newComment, current_page, start, backgroundMain , selectedComment} = this.props

    const {closeModal, misc} = this

    const report = (
      selectedComment != null ?  <Report report={misc} closeModal={closeModal}/> : null
    )

    return (
        <View style = {styles.flatlist}>

        
          {report}

                 <FlatList 
                        style = {styles.flatlist}
                        data = {allComments}
                        maxToRenderPerBatch={3}
                        updateCellsBatchingPeriod={100}
                        windowSize={3}
                        initialNumToRender={3}
                        renderItem = {this.renderItem}
                        // keyExtractor={this._keyExtractor}
                        // onEndReached={onScroll}
                        // onEndReachedThreshold={.5}
                        ListFooterComponent={this.renderFooter}
                    />  
       </View> 
    );
  }
}

const styles = StyleSheet.create({
    flatlist : {
      width : '100%',
    },
    addContainer:{
        height : 50,
        width:'100%',
        marginTop:20,
        marginBottom : 5,
        // backgroundColor:'red',
        flexDirection : 'row'
    },
    addUserImageContainer : {
        flex:1,
        alignItems : 'center',
        // backgroundColor: 'red',
    },
    addUserImage : {
        height : 44,
        width: 44,
        marginVertical : 3,
        borderRadius : 22,
    },
    add :{
        flex:5,
        height : 45,
        // marginBottom:15,
        fontSize:19,
        letterSpacing: .5,
        lineHeight: 45,
        // textAlign:'center',
    }
});
  

export default withNavigation(connect(state, dispatch)(CommentList))