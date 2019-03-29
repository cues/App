import React, {Component} from 'react';
import {Platform, View, Image, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from '../../Components/UI/Modal/Modal';
import style from '../../Styles/Styles';

import { connect } from 'react-redux';

const state = state => {
    return {
        allComments         :   state.comments.allComments,
        selectedComment     :   state.comments.selectedComment,
        api                 :   state.main.api,
        apiKey              :   state.main.apiKey,
        user_id             :   state.main.user.user_id
    };
};

  
const dispatch = dispatch => {
  return {
  };
};


class report extends Component {

   
   

    report = async (report_number) => {
        const {this_report_comment, selectedComment, api, apiKey, user_id } = this.props

     
        url = `${api}/Articles/Comment/Comment/Misc/misc.php?key=${apiKey}&user_id=${user_id}&type=report&comments_id=${selectedComment}&report_number=${report_number}`


        this.props.report('report', url, selectedComment)

    }




    render(){

        const {selectedComment, closeModal} = this.props
        
        
        return (
            <Modal closeModal={closeModal} selectedItem={selectedComment}>

               <View style={styles.report}>

                    <TouchableOpacity style={styles.reportItems} onPress={() => this.report(1)}>  
                        <Text style={[style.bt, styles.reportItemsText]}>Spam</Text>                
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.reportItems} onPress={() => this.report(2)}>  
                        <Text style={[style.bt, styles.reportItemsText]}>Sexual Content</Text>     
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.reportItems} onPress={() => this.report(3)}>  
                        <Text style={[style.bt, styles.reportItemsText]}>Racism</Text>              
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.reportItems} onPress={() => this.report(4)}>  
                        <Text style={[style.bt, styles.reportItemsText]}>Discrimination</Text>      
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.reportItems} onPress={() => this.report(5)}>  
                        <Text style={[style.bt, styles.reportItemsText]}>Harassment</Text>         
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.reportItems} onPress={() => this.report(6)}>  
                        <Text style={[style.bt, styles.reportItemsText]}>Self Harm</Text>           
                    </TouchableOpacity>

               </View>

            </Modal>
         )
    }
  
};


const styles = StyleSheet.create({
   report : {
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
      padding: 20,
    //   backgroundColor:'red'
   },
   reportItems : {
        height:40,
        margin : 10,
        width: '100%',
    },
   reportItemsText : {
       height:40,
       lineHeight:40,
       width: '100%',
    //    backgroundColor:'blue',
       fontSize:16,
       letterSpacing:1,
       textAlign:'center',
       color:'rgba(255,255,255,.8)'
   }
})

export default connect(state, dispatch)(report);