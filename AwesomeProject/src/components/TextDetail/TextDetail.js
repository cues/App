   import React from 'react';
   import {Platform, Modal, View, Image, Text, Button, StyleSheet} from 'react-native';


   const textDetail = props => {


      let modalContent = null;
      if(props.selectedItem){
         modalContent = (
            <View style={style.modalContent}>
               <Image resizeMode= 'contain' style={style.listImage} source ={props.selectedItem.image}/>
               <Text style={{color:'rgb(15,101,141)'}}>{props.selectedItem.name}</Text>
            </View>
         )
      }

      return (
         <Modal onRequestClose={props.closeModal} visible={props.selectedItem !== null} animationType="fade" >
            <View style={style.modals}>
               {modalContent}
               <View>
                  <Button title='Delete' color='red' onPress={props.onItemDeleted}/>
                  <Button title='Close' color='white' onPress={props.closeModal}/>
               </View>
            </View>
         </Modal>
      )
   };


   const style = StyleSheet.create({
      modals: {
         backgroundColor:'black',
         height:'100%',
         opacity:1,
         ...Platform.select({
            ios: {
              paddingTop: 30
            },
            android: {
            }
          })
      },
      modalContent : {
         width:'100%',
         // backgroundColor:'rgba(255, 255, 255, 1.0)', b
         justifyContent:'center',
         alignItems:'center',
         padding: 20,
         opacity:1
      },
      listImage :{
         height:200,
         width:200,
         
         marginBottom:20
     }
   })

   export default textDetail;