import React, {Component} from 'react';
import {Platform, StyleSheet, View, TextInput, Text, KeyboardAvoidingView, Modal, Keyboard,  TouchableOpacity, Image} from 'react-native';
import style from '../../Styles/Styles'
import { connect } from 'react-redux';
import { maxHeight } from 'react-native-media-queries';
import {brand, model, models, models2} from '../../Components/DeviceInfo/DeviceInfo';
import BlurView from '../../Components/BlurVIew/BlurVIew';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {  post_comments, update_comment, update_article } from '../../Store/Actions/index'
import {withNavigation} from 'react-navigation'

const state = state => {
    return {
        api                :  state.main.api,
        apiKey             :  state.main.apiKey,
        user_id            :  state.main.user.user_id,
        tabBlur            :  state.themes.tabBlur,
        commentWrite       :  state.themes.commentWrite,
        placeholderColor   :  state.themes.placeholderColor,
        keyboard           :  state.themes.keyboard,
        userImage          :  state.main.user.user_image,
        headerColor        :  state.themes.headerColor,
        allArticles        :  state.articles.allArticles,
        allComments        :  state.comments.allComments,
    }
}

const dispatch = dispatch => {
    return {
        this_post_comments      :   comment         =>    dispatch(post_comments(comment)),
        this_update_comment     :   allComments     =>    dispatch(update_comment(allComments)),
        this_update_article     :   allArticles     =>    dispatch(update_article(allArticles)),
    }
}

let commentKeyboard; 

class Write extends Component {

    state = {
        focus : true,
        comment : null
    }

    
    componentDidMount() {
        commentKeyboard = setInterval(() => {
            this.setState({
                focus : false
            })
            this.setState({
                focus : true
            })
        },1000)
    }

    componentWillUnmount(){
        clearInterval(commentKeyboard)
    }

    onChangeText = value => {
       value = value == '' ? null : value
        this.setState({
            comment : value
        })
    }

    closeWrite = () => {
        Keyboard.dismiss()
        setTimeout(() => {
            this.props.write()
        },100)
    }


    updateArticle = (article, data) => {
        article.article.articles_comments       = data.articles_comments;
        article.article.articles_comments_data  = data.articles_comments_data;
        article.article.this_commented = 1;
        return article;
    }
      

    postComment = async() => {

        const {api, apiKey, user_id, navigation, this_update_article, this_update_comment, this_post_comments} = this.props
        const {updateArticle, closeWrite, onChangeText} = this

        const comment = encodeURI(this.state.comment)
        const article = navigation.getParam('article')
        const articles_id = article.articles_id;

        const url = `${api}/Articles/Comment/Comment/Post/comment.php?key=${apiKey}&user_id=${user_id}&articles_id=${articles_id}&comment=${comment}`;

  
        await fetch(url)
        .then((response) => response.json())
        .then((response) => {
        

                if(response.data.articles_comments != null){

                    const index = this.props.allArticles.findIndex(article => article.article.articles_id === articles_id)
                    allArticles = [...this.props.allArticles]
                    allArticles[index] = updateArticle(allArticles[index],  response.data)
                    this_update_article(allArticles);

                   
                    const allComments = [...this.props.allComments];
                    allComments.splice( 1 , 0 , {
                        key           :   `${response.data.comment.comment_id}`, 
                        comment       :   response.data.comment
                    })
                    this_update_comment(allComments);

                    closeWrite()
                    onChangeText(null)
                    this.props.this_comment(1);


                }

        })
        .catch((error) => {
        console.error(error);
        });
    }



    render (){

      
        const {writeComment, tabBlur, placeholderColor, commentWrite, keyboard, userImage, headerColor} = this.props;

        const writeViewStyle = Platform.select({
                ios     : styles.container,
                android : null
            }) 

        const fontFamily = this.state.comment == null ? style.ca : style.la
        const fontSize   = this.state.comment == null ? 19 : 16
        // const fontWeight = this.state.comment == null ? Platform.select({android:'200' , ios : null}) : 'bold'

        const send = (
                this.state.comment != null ? 
                    <TouchableOpacity style={styles.commentSendInner} onPress={this.postComment}>
                        <Ionicons style={styles.commentSendIcon} name='ios-send' size={35} color='rgba(15,101,141,1)'/>
                    </TouchableOpacity>
                : null
            )


       const writeView = (
            <KeyboardAvoidingView style={[writeViewStyle, {backgroundColor:Platform.select({android : headerColor , ios :'transparent'})}]}  behavior='position'   >

                <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={5}/>

                <View style={styles.writeComment}>

                    <View style={styles.userImageContainer}>
                        <Image style={styles.userImage} source ={{uri : userImage}}/>
                    </View>


                    <TextInput
                        blurOnSubmit={false}
                        autoFocus={this.state.focus}
                        style={[fontFamily,  styles.input, {fontSize:fontSize ,  color:commentWrite}]}
                        placeholder = 'Add a comment'
                        placeholderTextColor={placeholderColor}
                        underlineColorAndroid='transparent'
                        multiline = {true}
                        keyboardAppearance = {keyboard}
                        onChangeText = {this.onChangeText}
                        value = {this.state.comment}
                        enablesReturnKeyAutomatically = {true}
                    />

                    <View style={styles.commentSend}>
                        {send}
                    </View>

                </View>
                
            </KeyboardAvoidingView>
        )



        const writeContainer = Platform.select({
                ios     :  writeView,
                android : <View style={styles.container}>{writeView}</View>
            }) 

 
            

        return (
                <Modal visible={writeComment} transparent={true} animationType="fade">
                            <TouchableOpacity style={styles.touch} onPress={this.closeWrite} />

                            {writeContainer}
                </Modal>
        )
    }
}


const styles = StyleSheet.create({
    container : {
        // backgroundColor: 'green',
        position: 'absolute',
        width:'100%',
        bottom:0,
        minHeight:50,
        bottom : Platform.select({android:50, ios: 0 }),
        // minHeight:70,
        // maxHeight:200,
        
    },
    writeComment : {
        backgroundColor: 'transparent',
        height : '100%',
        width: '100%',
        borderTopWidth: 1,
        borderTopColor:'rgba(23,23,23,.1)',
        flexDirection:'row',
        // backgroundColor: 'green',
    },
    userImageContainer : {
        flex:1,
        alignItems : 'flex-end',
        // backgroundColor: 'red',
    },
    userImage : {
        height : 44,
        width: 44,
        marginVertical :13,
        borderRadius : 22,
        // marginLeft:5,
        // backgroundColor: 'green',
    },
    input: {
        flex:5,
        backgroundColor: 'transparent',
        minHeight:50,
        maxHeight:200,
        margin :10,
        // fontSize : 15,
        lineHeight : 22,
        letterSpacing :.6,
        fontWeight : Platform.select({android:'200' , ios : 'bold'})
    },
    commentSend : {
        flex:1,
        // backgroundColor: 'green',
    },
    commentSendInner : {
        height: 70,
        width:  '100%',
        position:'absolute',
        bottom:0,
        // backgroundColor:'blue'
    },
    commentSendIcon : {
        flex:1,
        height: 70,
        lineHeight : 70,
        textAlign : 'center',
        // backgroundColor:'red'
    },
    touch : {
          height:'100%',
          width:'100%',
        //   backgroundColor:'blue'
    }
})


export default withNavigation(connect(state, dispatch)(Write));

// keyboardVerticalOffset={Platform.select({ios : 670})}