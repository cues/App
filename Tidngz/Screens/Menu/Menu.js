import React, {Component} from 'react';
import {Platform, Dimensions, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import float from '../Headers/Float';
import style from '../../Styles/Styles'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from '../Headers/FloatHeader'
import { tabBarType_Normal , tabBarType_Menu} from '../../Components/TabBar/TabBar'
import Theme from '../../Components/Themes/Themes';



import { connect } from 'react-redux';

const state = state => {
  return {
      backgroundMain         :   state.themes.backgroundMain,
      menuIconColor          :   state.themes.menuIconColor,
      menuIconColor2         :   state.themes.menuIconColor2,
      menuText               :   state.themes.menuText,
  };
};



const width = Dimensions.get('window').width;

class Menu extends Component {


    static navigationOptions = float

 

    // componentDidMount() {
    //     setTimeout(() => {
    //         tabBarType_Menu();
    //     },300)
    // }

    // componentWillUnmount() {
    //     tabBarType_Normal()
    //  }

    
  render() {

    const {backgroundMain, menuIconColor, menuIconColor2, menuText} = this.props

    const iconRight = (
        <MaterialIcons style={[styles.itemsIcon, styles.iconRight]} name="keyboard-arrow-right" size={22} color={menuIconColor2} />
    )

    const iconRight2 = (
        <MaterialIcons style={[styles.itemsIcon, styles.iconRight2]} name="keyboard-arrow-right" size={16} color={menuIconColor2} />
    )


    return (
      <View style={[styles.container,  {backgroundColor: backgroundMain}]}>
        <Theme/>

            <View style={[styles.container, style.paddingBackgroundTop, style.paddingBackgroundBottom_2]}>


                <TouchableOpacity style={styles.items} onPress = {() => this.props.navigation.navigate('Trending',{name:'TRENDING'})}>
                    <MaterialIcons style={styles.itemsIcon} name="trending-up" size={22} color={menuIconColor} />
                    <Text style={[styles.itemsText, {color:menuText} , style.ma]}>TREDNDING</Text>
                    {iconRight}
                </TouchableOpacity>

                <View style={styles.line}/>

                <TouchableOpacity style={styles.items} onPress = {() => this.props.navigation.navigate('Bookmark',{name:'BOOKMARKS'})}>
                    <MaterialIcons style={styles.itemsIcon} name="bookmark" size={22} color={menuIconColor} />
                    <Text style={[styles.itemsText, {color:menuText} , style.ma]}>BOOKMARKS</Text>
                    {iconRight}
                </TouchableOpacity>

                <View style={styles.line}/>

                <TouchableOpacity style={styles.items} onPress = {() => this.props.navigation.navigate('Themes',{name:'THEMES'})}>
                    <MaterialIcons style={styles.itemsIcon} name="filter-hdr" size={22} color={menuIconColor} />
                    <Text style={[styles.itemsText, {color:menuText} , style.ma]}>THEMES</Text>
                    {iconRight}
                </TouchableOpacity>

                <View style={styles.line}/>

                <TouchableOpacity style={styles.items} onPress = {() => this.props.navigation.navigate('Account',{name:'ACCOUNT'})}>
                    <MaterialIcons style={styles.itemsIcon} name="person" size={22} color={menuIconColor} />
                    <Text style={[styles.itemsText, {color:menuText} , style.ma]}>ACCOUNT</Text>
                    {iconRight}
                </TouchableOpacity>

                <View style={styles.line}/>

                <TouchableOpacity style={styles.items} onPress = {() => this.props.navigation.navigate('Setting',{name:'SETTINGS'})}>
                    <MaterialIcons style={styles.itemsIcon} name="settings" size={22} color={menuIconColor} />
                    <Text style={[styles.itemsText, {color:menuText} , style.ma]}>SETTINGS</Text>
                    {iconRight}
                </TouchableOpacity>


                <View style={styles.line}/>


                <TouchableOpacity style={[styles.items, styles.items2]} onPress = {() => this.props.navigation.navigate('Terms',{name:'TERMS'})}>
                    <Text style={[styles.itemsText, {color:menuText}, styles.itemsText2 , style.ma]}>TERMS</Text>
                    {iconRight2}
                </TouchableOpacity>

                <View style={styles.line2}/>

                <TouchableOpacity style={[styles.items, styles.items2]} onPress = {() => this.props.navigation.navigate('Privacy',{name:'PRIVACY'})}>
                    <Text style={[styles.itemsText, {color:menuText}, styles.itemsText2 , style.ma]}>PRIVACY</Text>
                    {iconRight2}
                </TouchableOpacity>

                <View style={styles.line2}/>

                <TouchableOpacity style={[styles.items, styles.items2]} onPress = {() => this.props.navigation.navigate('About',{name:'ABOUT US'})}>
                    <Text style={[styles.itemsText, {color:menuText}, styles.itemsText2 , style.ma]}>ABOUT US</Text>
                    {iconRight2}
                </TouchableOpacity>

                <View style={styles.line2}/>

                <TouchableOpacity style={[styles.items, styles.items2]} onPress = {() => this.props.navigation.navigate('Help',{name:'HELP'})}>
                    <Text style={[styles.itemsText, {color:menuText}, styles.itemsText2 , style.ma]}>HELP</Text>
                    {iconRight2}
                </TouchableOpacity>

                <View style={styles.line2}/>

                <TouchableOpacity style={[styles.items, styles.items2]} onPress = {() => this.props.navigation.navigate('Contact',{name:'CONTACT US'})}>
                    <Text style={[styles.itemsText, {color:menuText}, styles.itemsText2 , style.ma]}>CONTACT US</Text>
                    {iconRight2}
                </TouchableOpacity>

                <View style={styles.line2}/>

                <TouchableOpacity style={[styles.items, styles.items2]} onPress = {() => this.props.navigation.navigate('Ads',{name:'ADVERTISMENTS'})}>
                    <Text style={[styles.itemsText, {color:menuText}, styles.itemsText2 , style.ma]}>ADS</Text>
                    {iconRight2}
                </TouchableOpacity>

                <View style={styles.line2}/>

                <View style={[styles.items , styles.tidngz]}>
                    <Text style={[styles.tidngzText, style.bt]}>TIDNGZ</Text> 
                    <MaterialIcons style={styles.copyrightIcon} name="copyright" size={18} color='rgba(15,101,141,.9)' />                    
                    <Text style={[styles.tidngzText, style.bt]}>2019</Text>
                </View>

            </View> 

        <Header/>

       </View> 
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
      paddingVertical:20,
      alignItems: 'center',
    //   backgroundColor:'red' 
    },
    line :{
        height:1, 
        width:width - 40, 
        backgroundColor:'rgba(123,123,123,.4)'
    },
    line2 :{
        height:1, 
        width:width - 40,  
        backgroundColor:'rgba(123,123,123,.2)'
    },
    items : {
        height: 35,
        width: width,
        marginVertical: 12,
        paddingHorizontal:10,
        flexDirection:'row',
        // backgroundColor:'red'
        // marginVertical:2,
        // backgroundColor:'rgba(255,255,255,1)',
    },
    items2 : {
        height: 17,
        lineHeight:17,
        paddingHorizontal:30,
    },
    itemsIcon:{
        height: 35,
        lineHeight:35,
        width:35,
        textAlign:'center',
        // backgroundColor:'red',
        marginRight:10
    },
    iconRight:{
        position:'absolute',
        right:0,
    },
    iconRight2 : {
        position:'absolute',
        right:0,
        height: 17,
        lineHeight:17,
    },
    itemsText:{
        lineHeight:35,
        letterSpacing: 2,
        fontSize: 16,
        fontWeight:Platform.select({android:'400'}),
    },
    itemsText2:{
        lineHeight:17,
        fontSize: 10,
        letterSpacing: 1,
    },
    tidngz : {
        marginTop:10,
        height:40,
        justifyContent:'center',
        alignItems:'center'
    },
    tidngzText:{
        fontSize: 14,
        color:'rgba(15,101,141,.9)',
        letterSpacing: 1,
        fontWeight:Platform.select({android:'400'}),
        height:40,
        lineHeight:40,
    },
    copyrightIcon:{
        height:40,
        lineHeight:40,
        marginHorizontal:5
    }
  });
  

  export default connect(state)(Menu);
