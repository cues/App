import {StyleSheet, Platform, Dimensions} from 'react-native';
import {brand, model, models, models2} from '../Components/DeviceInfo/DeviceInfo';
const width = Dimensions.get('window').width;

export default StyleSheet.create({
    displayFlex : {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center',
    },

    flex :{
        display:'flex'
    },
    none :{
        display:'none'
    },

    opacity0 :{
        opacity : 0
    },
    opacity1 :{
        opacity : 1
    },

    line : {
        height:2,
        borderRadius:100,
        margin:10,
        backgroundColor:'rgba(123,123,123, 0.4)'
    },
    line_2:{
        height:2, 
        width:width - 40, 
        borderRadius:100,
        marginHorizontal:20,
        backgroundColor:'rgba(123,123,123,.2)'
    },

    line_3:{
        height:2, 
        width:150, 
        borderRadius:100,
        marginHorizontal:15,
        backgroundColor:'rgba(123,123,123,.2)'
    },

    absolute : {
        position:'absolute',
        top:0,
        right:0,
        bottom:0,
        left:0
    },

    bt: {
        fontFamily:'Bitter-Regular',
    },
    btb: {
        fontFamily:'Bitter-Bold',
    },
    ca: {
        fontFamily:'CaveatBrush-Regular',
    },
    ch: {
        fontFamily:'Charmonman-Regular',
    },
    cu: {
        fontFamily:'CormorantUpright-Regular',
    },
    cub: {
        fontFamily:'CormorantUpright-Bold',
    },
    ci: {
        fontFamily:'Cinzel-Regular',
    },
    cib: {
        fontFamily:'Cinzel-Bold',
    },
    cibl: {
        fontFamily:'Cinzel-Black',
    },
    cdi: {
        fontFamily:'CinzelDecorative-Regular',
    },
    cdib: {
        fontFamily:'CinzelDecorative-Bold',
    },
    cdibl: {
        fontFamily:'CinzelDecorative-Black',
    },
    ku: {
        fontFamily:'KumarOneOutline-Regular',
    },
    la: {
        fontFamily:'Lato-Regular',
    },
    ma: {
        fontFamily:'Mali-Regular',
    },
    me: {
        fontFamily:'Merienda-Regular',
    },
    mo : {
        fontFamily:'Monoton-Regular',
    },
    mon : {
        fontFamily:'Montez-Regular',
    },
    nu : {
        fontFamily:'Nunito-Regular',
    },
    sa: {
        fontFamily:'Sacramento-Regular',
    },


    paddingBackgroundTop : {
      paddingTop: Platform.select({android:50 , ios : models2.includes(model) ? 88 : 63}),
    },
    paddingBackgroundTop_Search : {
        paddingTop: Platform.select({android:50 + 44 , ios : models2.includes(model) ? 88 + 44 : 63 + 44}),
      },
    paddingBackgroundBottom : {
        paddingBottom: 20,
    },
    paddingBackgroundBottom_2 : {
        paddingBottom: brand === 'Apple' && models.includes(model) ? 73 :  59
    },
 


    textShadow0 : {
        ...Platform.select({
            ios : {
                textShadowColor: 'rgba(0,0,0, .7)',
                textShadowOffset: {width: 1, height: -0},
                textShadowRadius: 1
            },
        })
    },


    textShadow23 : {
        ...Platform.select({
            ios : {
                textShadowColor: 'rgba(23,23,23, .7)',
                textShadowOffset: {width: 1, height: -0},
                textShadowRadius: 1
            },
        })
    },



    noSearch : {
        height: 50,
        lineHeight :50,
        fontSize : 23,
        letterSpacing:.8,
        paddingLeft:15,
        // marginBottom:10,
        fontFamily:'CaveatBrush-Regular',
      },









    tidngz_color : {
        color: 'rgba(15,101,141,1)'
    },
    tidngz_color_light : {
        color: 'rgba(15,101,141,.8)'
    },
    gamengz_color : {
        color: 'rgba(15,101,141,.9)'
    },
    facebook_color : {
        color: 'rgba(59,89,152,1)'
    },
    facebook_color_light : {
        color: 'rgba(59,89,152,.8)'
    },
    messenger_color : {
        color: 'rgba(0, 132, 255, 1)'
    },
    whatsapp_color : {
        color: 'rgba(37, 211, 102, 1)'
    },
    twitter_color : {
        color: 'rgba(85,172,238,1)'
    },
    twitter_color_light : {
        color: 'rgba(85,172,238,.8)'
    },
    youtube_color : {
        color: 'rgba(205,32,31,1)'
    },
    youtube_color_light : {
        color: 'rgba(205,32,31,.8)'
    },
    instagram_color : {
        color: 'rgba(245,96,64,1)'
    },
    google_color : {
        color: 'rgba(234,67,53,1)'
    },
    google_color_light : {
        color: 'rgba(234,67,53,.8)'
    },




    itemsHeader :{
        fontSize:18,
        lineHeight:31,
        letterSpacing:1.2,
        marginBottom:5,
        marginTop:0,
        fontWeight:'bold'
      },
      itemsBody :{
        fontSize:15,
        lineHeight:26,
        letterSpacing:1,
        marginVertical:5,
      },
      itemsList :{
        fontSize:14,
        lineHeight:25,
        letterSpacing:.7
      }
});



