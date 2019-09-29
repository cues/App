import React , {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import style from '../../Styles/Styles';
import moment from 'moment';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DeleteButton from '../../Components/UI/Delete/Delete';
import {report_modal_comment} from '../../Store/Actions/index'


import { connect } from 'react-redux';

const state = state => {
  return {
      api      : state.main.api,
      apiKey   : state.main.apiKey,
      user_id  :  state.main.user.user_id,
      allComments :  state.comments.allComments,
  };
};

const dispatch = dispatch => {
    return {
          this_report_modal_comment : id => dispatch(report_modal_comment(id)) 
    };
};

  

class More extends Component {

    state = {
        time :  moment(this.props.dates.timestamp).fromNow(),
        deleteActive : false,
        reportActive : false
    }


    componentDidMount() {
       this.intervalId =  setInterval(() => {
            this.update_date()
           }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    update_date = () => {
            this.setState({
                time  : moment(this.props.dates.timestamp).fromNow()
            })
     }



    deleteOpen = () => {
        this.setState(prevState => ({
            deleteActive: !prevState.deleteActive
        }));
    }


    reportOpen = () => {

        const {this_report_modal_comment, comment} = this.props

        this_report_modal_comment(comment.comment_id)
    }
 


    deleteComment = () => {

        const {api, apiKey, user_id, comment} = this.props

        const comments_id = comment.comment_id;

        url = `${api}/Articles/Comment/Comment/Misc/misc.php?key=${apiKey}&user_id=${user_id}&type=delete&comments_id=${comments_id}`

        this.props.deleteItem('delete', url, comments_id)
    }
    

     render () {


        const {user_id, comment} = this.props;

        const  {deleteActive, reportActive}  = this.state

        const {deleteOpen, reportOpen, deleteComment} = this

        let more ;
        let deleteButton; 

        if(user_id == comment.user.user_id){
             more = (
                 <TouchableOpacity style={styles.delete} onPress={deleteOpen}>
                    <MaterialIcons style={styles.deleteIcon} size={17} name='delete-forever' color='rgba(123,123,123, .8)'/>
                 </TouchableOpacity>      
             )
             deleteButton = deleteActive ?  <DeleteButton deleteClose = {deleteOpen} deleteItem={deleteComment}/> : null
            
        }else{
            if(user_id == comment.user.user_id_article){

                more = (
                    comment.this_reported == 0 ?
                            <TouchableOpacity style={styles.delete} onPress={reportOpen}>
                                <MaterialIcons style={styles.deleteIcon} size={17} name='report' color='rgba(123,123,123, .8)'/>
                            </TouchableOpacity>  
                        :  
                            <View style={styles.delete}>
                            <MaterialIcons style={styles.deleteIcon} size={17} name='report' color='rgba(255, 0, 0, 0.7)'/>
                            </View>  
                )
            }
        }


        return (
            <View style={styles.container}>

                    {deleteButton}

                    <View style={styles.inner}>
                                
                        <View style = {styles.more}>
                        {more}
                        </View>

                        <View style = {styles.date}>
                            <Text style={[styles.time, style.la]}>{this.state.time}</Text>
                        </View>

                    </View>

            </View>
           
        )
     }

}

const styles = StyleSheet.create({
    container : {
        position: 'absolute',
        height: 70,
        width:150,
        // backgroundColor:'orange',
        right:0,
        top:0,
        zIndex:10,
    },
    inner : {
        position: 'absolute',
        height: 40,
        width:100,
        // backgroundColor:'red',
        right:10,
        top:10,
    },
    more :{
        height : 22,
        width:'100%',
        // backgroundColor:'green'
    },
    delete : {
        height:22,
        width:22,
        alignSelf:'flex-end',
        // backgroundColor:'blue',
        zIndex : 10
    },
    deleteIcon: {
        height:22,
        width:22,
        lineHeight:22,
        textAlign:'center',
    },
    date : {
        height : 18,
        width:'100%',
        // backgroundColor:'blue'
    },
    time : {
        fontSize:10,
         color:'rgba(123,123,123, .8)',
        letterSpacing: .8,
        textAlign:'right',
        lineHeight:18,
    }
})

export default connect(state, dispatch)(More);