import React, {Component} from 'react';
import {View, Text, Dimensions, ScrollView, Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import style from '../../Styles/Styles'
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';
import ImageSlider from 'react-native-image-slider';
import Modal from '../../Components/UI/Modal/Modal';    



class Images extends Component {

  state = {
      dataSource: [],
  };

  

  componentWillMount() {
     const { image } = this.props;

     for(i = 0 ; i < image.images.length; i++){
        this.dataSource(image.images[i])
     }
  }
  
  dataSource = image => {
    this.setState(prevState => {
      return {
         dataSource : prevState.dataSource.concat({
           id      : image.image_id,
           image   : image.image,
           caption : image.caption,
         })
      }
    })
  }



  render() {

    const {closeModal} = this.props;

      const images = this.state.dataSource.map((image, index) => (
        <TouchableWithoutFeedback style={styles.heightWidth100}  key={index} onLongPress={closeModal}>
            <View style={styles.heightWidth100}>
            <Image resizeMode='contain' style={styles.heightWidth100} source={{uri : image.image}}/>  
                      <Text style={[style.bt, styles.caption]}>{image.caption}</Text>     
            </View>
  
        </TouchableWithoutFeedback>
      ))


      const dot = <View style={{backgroundColor:'rgba(102, 102, 102, 0.4)', width: 7, height: 7, transform: [{ rotate: '45deg'}], borderTopRightRadius: 3, borderBottomLeftRadius:3, marginHorizontal:10}} />

      const activeDot = <View style={{backgroundColor:'#0f658d', width: 9, height: 9, transform: [{ rotate: '45deg'}], borderTopRightRadius: 3, borderBottomLeftRadius:3, marginHorizontal:10}} />
     
      
      return (
       
          <Modal closeModal={closeModal}>
                      <Swiper 
                          dot = {dot}  
                          activeDot = {activeDot}>

                      {images}

                    </Swiper>


            </Modal>
        
     
        )

      }


}

const styles = StyleSheet.create({
      
  heightWidth100 : {
    height:'100%', 
    width:'100%'
  },
  caption:{
    color: 'rgba(255,255,255,.7)',
    letterSpacing: .8,
    lineHeight: 21,
    fontSize: 14,
    bottom:40,
    position:'absolute',
    left:0,
    right:0,
    padding:10,
    textAlign:'center'
  }

})




export default Images;
