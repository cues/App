import React , {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import style from '../../Styles/Styles';
import IcoFont from '../../assets/IcoFont/IcoFont';
import { withNavigation } from 'react-navigation';


import { connect } from 'react-redux';

const state = state => {
  return {
      api      : state.main.api,
      apiKey   : state.main.apiKey,
      user_id  :  state.main.user.user_id,
      allComments :  state.comments.allComments,
  };
};



class Footer extends Component {

    state = 
        {
            repliesCount : 0
        }
    
  
    componentWillMount() {

        const {comment} = this.props

        comment.comment_replies > 0 ? this.setState ({ repliesCount : 1 }) : null
                                    
    }


    getReplies = () => {

        this.props.navigation.navigate('Replies',{name:'Replies', comment:comment})
    }



    likeComment = () => {
        const {api, apiKey, user_id, comment} = this.props

        const comments_id = comment.comment_id;

        url = `${api}/Articles/Comment/Comment/Misc/misc.php?key=${apiKey}&user_id=${user_id}&type=like&comments_id=${comments_id}`

        this.props.likeComment('like', url, comments_id)
    }


    render (){


        const {comment} = this.props

        const  {repliesCount} = this.state

        const likeColor = comment.this_likes == 1 ? 'rgba(15, 101, 141, .8)' : 'rgba(123,123,123, .8)';

        const commentLikes = comment.comment_likes > 0 ? <Text style={[style.bt, styles.commentLikes, {color:likeColor}]}>{comment.comment_likes}</Text> : null

        const replies = (

            repliesCount ? comment.comment_replies == 1 ? `View 1 reply` : `View all ${comment.comment_replies} replies` : null

        )

        const repliesContainer = (
            repliesCount ? 
                    <View style={styles.replies}>
                        <TouchableOpacity style={{flexDirection:'row'}} onPress={this.getReplies}>
                            <Text style={[style.bt,  styles.reply, styles.repliesText]}>{replies}</Text>
                            <MaterialIcons style={styles.repliesIcon} size={28} name='arrow-drop-up' color = 'rgba(123,123,123, .8)' />
                        </TouchableOpacity>
                    </View>
                    : null
        )


        const likeContainer = (
            this.props.user_id != comment.user.user_id ? 
                    <TouchableOpacity style={styles.likes} onPress={this.likeComment}>
                        <IcoFont style={styles.likesIcon} name = 'thumbs-up' size= {17} color={likeColor} />
                        {commentLikes}                        
                    </TouchableOpacity>
                    :null
        )

        return (
            <View style={styles.container}>

                    <View style={styles.footer}>

                        {likeContainer}

                        <TouchableOpacity  onPress={this.getReplies}>
                            <Text style={[style.bt,  styles.reply]}>REPLY </Text>
                        </TouchableOpacity>

                    </View>

                    {repliesContainer}

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container : {
        width:'100%',
        marginTop : 5, 
    },
    footer : {
        height: 20,
        flexDirection:'row'
    },
    likes : {
        flexDirection:'row',
        marginRight : 10,
        height : 30,
        lineHeight: 30,
        // width:30,
        marginTop: -5,
    },
    likesIcon : {
        height : 30,
        lineHeight: 30,
        width:30,
        textAlign:'center'
    },
    commentLikes : {
        height : 30,
        lineHeight: 30,
        fontSize:13,
        marginLeft : 5,
        marginRight : 5,
        // backgroundColor:'green',
    },
    reply : {
        height : 20,
        lineHeight: 20,
        fontSize:13,
        paddingHorizontal : 5,
        letterSpacing: 1,
        color : 'rgba(123,123,123, .8)'
    },

    replies : {
        height: 20,
        marginTop : 10,
        flexDirection:'row',
        // backgroundColor:'green',
    },
    repliesText : {
        marginLeft: 0,
        marginRight : 3,
        // backgroundColor:'red',
        paddingHorizontal : 0,
    },
    repliesIcon : {
        transform: [{ rotate: '90deg'}],
        height: 20,
        width: 20,
        textAlign:'center',
        lineHeight: 24,
        marginTop:-3,
        // backgroundColor:'blue',
    }
})

export default withNavigation(connect(state)(Footer));