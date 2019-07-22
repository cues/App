import React, {Component} from 'react';
import {Platform, Modal, View, TouchableOpacity, StyleSheet, StatusBar} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {brand, model, models, models2} from '../../DeviceInfo/DeviceInfo'
import style from '../../../Styles/Styles'
import BlurView from '../..//BlurVIew/BlurVIew';
class Modals extends Component {

    componentDidMount() {
        Platform.OS == 'ios' ?  StatusBar.setHidden(true, 'fade') : null ;
    }

    componentWillUnmount() {
        Platform.OS == 'ios' ?  StatusBar.setHidden(false, 'fade') : null ;
    }

    render(){
        const {selectedItem, closeModal} = this.props

        return (
            <Modal onRequestClose={closeModal} visible={selectedItem !== null} transparent ={true} animationType="fade" >
               <View style={[style.displayFlex, styles.modals]}>
               <BlurView  viewRef={1}  blurType="dark" blurAmount={25}/>

                  {this.props.children}
                  <TouchableOpacity style={styles.modalClose} onPress = {closeModal}>
                        <MaterialIcons style={styles.modalCloseIcon} name='close' size={30} color='rgba(255,255,255,.8)'/>
                  </TouchableOpacity>
               </View>
            </Modal>
         )
    }
        
    
  
};


const styles = StyleSheet.create({
   modals: {
      backgroundColor:Platform.select({android:'rgba(0,0,0,.9)', ios:'rgba(0,0,0,.8)'}),
      height:'100%',
      opacity:1,
      zIndex:100,
    //   ...Platform.select({
    //      ios: {
    //        paddingTop: models.includes(model) ? 80 : 50
    //      },
    //      android: {
    //          paddingTop : 50
    //      }
    //    })
   },
   modalClose : {
       height : 50,
       width:50,
       position:'absolute',
       right:10,
       top: 10
   },
   modalCloseIcon : {
       height: 50, 
       width: 50,
       lineHeight: 50,
       textAlign:'center',
       fontWeight:'bold'
   }
})

export default Modals;