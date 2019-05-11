import {StyleSheet, Platform, Dimensions} from 'react-native';
import {brand, model, models, models2} from '../Components/DeviceInfo/DeviceInfo';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const HEIGHT_1 =  Platform.select({android:50 , ios : models2.includes(model) ? 88 : 68})
const HEIGHT_2 = brand === 'Apple' && models.includes(model) ? 73 :  59
const HEIGHT_3 = brand === 'Apple' && models.includes(model) ? 170 :  59

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
        top : HEIGHT - HEIGHT_3,
        // bottom: brand === 'Apple' && models.includes(model) ? 73 :  59,
        alignItems:'center',
        justifyContent : 'space-around',
        flexDirection:'row',
        // backgroundColor:'red'
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
        letterSpacing:2,
        fontSize:18,
        color:'rgba(15, 101, 151, 0.7)'
      },



      textInputView:{
        height: HEIGHT - HEIGHT_1 - HEIGHT_2 - 160,
        width:'100%',
        marginTop: 60,
        alignItems:'center',
        justifyContent:'center'
      },
      textInput : {
        width:'100%',
        padding:10,
        textAlign:'center',
        fontSize:29,
        height : 60,
        // lineHeight: 60,
        // backgroundColor:'red',
        fontWeight:Platform.select({android:'200'}),
        letterSpacing:1.3,
        marginVertical : 50
    }
})