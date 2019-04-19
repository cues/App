import {StyleSheet, Platform, Dimensions} from 'react-native';
import {brand, model, models, models2} from '../Components/DeviceInfo/DeviceInfo';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const HEIGHT_1 =  Platform.select({android:50 , ios : models2.includes(model) ? 88 : 68})
const HEIGHT_2 = brand === 'Apple' && models.includes(model) ? 73 :  59

export default StyleSheet.create({

    topBox : {
        height : HEIGHT - 100 - HEIGHT_1 - HEIGHT_2 , 
        width: WIDTH,
        // backgroundColor:'blue'
      },
      bottomBox : {
        height : 100, 
        width: WIDTH,
        position:'absolute',
        bottom: brand === 'Apple' && models.includes(model) ? 73 :  59,
        alignItems:'center',
        justifyContent : 'space-around',
        flexDirection:'row'
      },

      bottomButton : {
        height : 44,
        width: 44,
        borderRadius : 22,
        borderWidth : 2,
      },
      navigationButtons : {
        lineHeight : 40,
        textAlign:'center'
      },


      textCount : {
        height : 40,
        lineHeight : 40,
        position:'absolute',
        right:10,
        top:10,
        letterSpacing:2.5,
        fontSize:20,
        color:'rgba(15, 101, 151, 0.7)'
      }
})