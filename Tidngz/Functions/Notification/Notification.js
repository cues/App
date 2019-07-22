import React , {Component} from 'react';
import { Dimensions, View, Text, StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';
import { withNavigation } from 'react-navigation';
import CardView from 'react-native-cardview';
import style from '../../Styles/Styles';
import moment from 'moment';
import Follow from '../Profile/Follow';

import { connect } from 'react-redux';

const state = state => {
  return {
      articleItem         :   state.themes.articleItem,
      articleContent         :   state.themes.articleContent,
  };
};



const WIDTH = Dimensions.get('window').width;



class Notification extends Component {
   
    state = {
        time :  moment(this.props.item.notification.notification_date_iso).fromNow()
    }


    componentDidMount() {
       this.intervalId =  setInterval(() => {
            this.update_date()
           }, 1000);
    }

    componentDidMount() {
        clearInterval(this.intervalId);
    }

    update_date = () => {
            this.setState({
                time  : moment(this.props.item.notification.notification_date_iso).fromNow()
            })
     }


     notificationNavigate = () => {

        const { item  } = this.props

        const notification = item.notification

        if(notification.followers != 1){
            alert(notification.articles_id)

            this.props.navigation.navigate('Article',{articles_id:notification.articles_id})

        }else{
            // this.props.navigation.navigate('Article',{articles_id:this.props.article.articles_id})
        }

    }


    render (){

        const { item ,  articleItem , articleContent } = this.props


        const notification = item.notification

        let text = null;
        let noti = null;
        let data = null;
        let userFollow = null;

        if(notification.likes == 1){

            noti = notification.likes_data
            text = <Text><Text style={{color:'rgba(15, 101, 141, .9)'}}>likes</Text><Text> your article </Text></Text>

        }

        if(notification.comment == 1){

            noti = notification.comment_data
            text = <Text><Text style={{color:'rgba(15, 101, 141, .9)'}}>commented</Text><Text> on your article </Text></Text>

        }

        if(notification.comment_likes == 1){

            noti = notification.comment_likes_data   
            text = <Text><Text style={{color:'rgba(15, 101, 141, .9)'}}>liked</Text><Text> your comment </Text></Text>

        }
      
        if(notification.comment_reply == 1){

            noti = notification.comment_reply_data   
            text = <Text><Text style={{color:'rgba(15, 101, 141, .9)'}}>replied</Text><Text> on your comment </Text></Text>

        }

        if(notification.reply_likes == 1){

            noti = notification.reply_likes_data   
            text = <Text><Text style={{color:'rgba(15, 101, 141, .9)'}}>likes</Text><Text> your reply </Text></Text>

        }


        if(notification.followers != 1){
            const userData = noti.count == 0 || noti.count == 1 ? `${noti.user.user_name}` :
                                            noti.count == 2 ? `${noti.user.user_name} and 1 another user` :
                                                              `${noti.user.user_name} and ${noti.count} other users` 

             data   =  <Text style={[style.la , styles.text, {color:articleContent}]}>{userData} {text} <Text style={{color:'rgba(15, 101, 141, .9)'}}>{noti.headline}{notification.notifications_id}</Text></Text>

        }
            else
        {

            noti = notification.followers_data   

            text = <Text><Text> started </Text><Text style={{color:'rgba(15, 101, 141, .9)'}}>following</Text><Text> you </Text></Text>
            data   =  <Text style={[style.la , styles.text, styles.text_follower, {color:articleContent}]}>{noti.user.user_name}{text}{notification.notifications_id}</Text>

            userFollow = (  <View style={styles.followButton}>
                                <Follow  user={noti.user}/>
                            </View>  )

        }

 
     
    
     


          return (
                    <View key={item.key} style={styles.eachNotification} >
                      <CardView style={[styles.notificationShadow]} 
                                 cardElevation={1}
                                 cardMaxElevation={1}
                                 cornerRadius={1}>

                           <TouchableWithoutFeedback onPress = {() => this.props.navigation.navigate('Article',{articles_id:500})}>

                                <View style={[styles.notificationItem, {backgroundColor:articleItem}]}>
                                    <View style={styles.item}>
                                        <Image style={styles.image} source={{uri : noti.user.user_image_2}}/>
                                        {data}
                                        {userFollow}
                                    </View>
                                    <View style = {styles.date}>
                                        <Text style={[styles.time, style.la]}>{this.state.time}</Text>
                                    </View>
                                </View>

                          </TouchableWithoutFeedback>

                      </CardView>
                    </View>
              )
    }
};


const styles = StyleSheet.create({
    eachNotification : {
        width:'100%', 
        alignItems:'center',
    },
  
    notificationShadow : {
      width:'95%',
      // maxWidth:380,
      marginVertical:10,
      backgroundColor:'transparent',
    },
 
    notificationItem : {
        borderRadius:5, 
        padding:10,
        overflow: 'hidden',
    },
    item : {
        flexDirection: 'row'
    },
    image : {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginRight:10
    },
    text : {
      letterSpacing : 1.1,
      lineHeight : 26,
      fontSize:14,
      fontWeight:'bold', 
    //   backgroundColor:'red',
      width : WIDTH - 90
    },
    text_follower : {
        width : WIDTH - 150
    },
    followButton : {
        position:'absolute',
        right : 0, 
        height : 50,
        width:60,
        paddingRight:10,
        // backgroundColor:'red'
    },
    date : {
        height : 18,
        width:'100%',
        // backgroundColor:'blue'
    },
    time : {
        marginTop:5,
        fontSize:10,
         color:'rgba(123,123,123, .8)',
        letterSpacing: .8,
        textAlign:'right',
        lineHeight:18,
    },
  
});

export default withNavigation(connect(state)(Notification));
