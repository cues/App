import React , {Component} from 'react';
import { Dimensions, View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { withNavigation } from 'react-navigation';
import CardView from 'react-native-cardview';
import More from './More';
import User from '../../Components/UI/User/User';
import Content from './Content';
import Footer from './Footer';

import { connect } from 'react-redux';

const state = state => {
  return {
      articleItem         :   state.themes.articleItem,
  };
};

const dispatch = dispatch => {
    return {
        // this_articleTablet     :   (article)   =>  dispatch(articleTablet(article)),
    }
}


const width = Dimensions.get('window').width;



class Comment extends Component {
   




    render (){

    const {comment, articleItem, update} = this.props;




        return(
                <View style={styles.eachComment} >

                        <CardView 
                                style={[styles.commentShadow]} 
                                cardElevation={1}
                                cardMaxElevation={1}
                                cornerRadius={1}>

                                <View style={[styles.commentItem, {backgroundColor:articleItem}]} >


                                    <User user={comment.user}/> 

                                    <Content comment={comment}/>

                                    <Footer comment={comment} likeComment={update}/>

                                    <More comment={comment} dates={comment.dates} deleteItem={update}/> 

                                 
                                </View>

                        </CardView>
                </View>
        )  
    }
};


const styles = StyleSheet.create({
    eachComment : {
        width:'100%', 
        alignItems:'center',
    },
    commentShadow : {
        width:'95%',
        // maxWidth:380,
        marginVertical:15,
        backgroundColor:'transparent',
    },
    commentItem : {
        borderRadius:5, 
        paddingHorizontal:10,
        paddingVertical:10,
        overflow: 'hidden',
    },
});

export default withNavigation(connect(state, dispatch)(Comment));
