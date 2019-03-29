import React, {Component} from 'react';
import {StatusBar, Platform, StyleSheet, Text, View} from 'react-native';
import Header from '../Headers/FloatHeader';
import CommentList from '../../Functions/Comment/Comment_List'
import Write from '../../Functions/Comment/Write';
import { tabBarType_Article } from '../../Components/TabBar/TabBar'

import { connect } from 'react-redux';
import { tabBarType, selected_article } from '../../Store/Actions/index';

const state = state => {
  return {
      backgroundMain         :   state.themes.backgroundMain,
      allArticles            :   state.articles.allArticles,
    };
};

const dispatch = dispatch => {
  return {
      this_selectedArticle   :  article   =>  dispatch(selected_article(article)),
  }
}


class Comments extends Component {


  state = {
      userComment : null,
      writeComment : false
  }

   componentWillMount(){
      
      const article = this.props.navigation.getParam('article')

      this.props.this_selectedArticle(article)
 
   }

  componentDidMount(){

    const article = this.props.navigation.getParam('article')
    const thisArticle = this.props.allArticles.find(item => item.article.articles_id === article.articles_id)

    this.userComment(thisArticle.article.this_commented);


    setTimeout(() => {
        tabBarType_Article()
    },300)
  }


  componentWillUnmount(){
    this.props.navigation.state.params.onNavigationBack()
  }


  userComment = (num) => {
    // alert(num)
    this.setState({
      userComment : num
    })
  }

  write = () => {
      this.setState(prevState => ({
        writeComment : !prevState.writeComment
      }))
  }



 render() {
    const {backgroundMain} = this.props


    return (
  
      <View style={[styles.container, {backgroundColor: backgroundMain}]}>
        
          <CommentList write = {this.write} userComment={this.state.userComment} this_comment={this.userComment}/>
          <Write write = {this.write}  writeComment = {this.state.writeComment} this_comment={this.userComment}/>
          <Header/>

      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width:'100%',
  },
});

export default connect(state, dispatch)(Comments)