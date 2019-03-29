import React, {Component} from 'react';
import {Platform,StatusBar, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import style from '../../Styles/Styles'; 
import { withNavigation } from 'react-navigation';
import { showStatusBar, hideStatusBar , tabBarType_Article , tabBarType_Normal} from '../../Components/TabBar/TabBar'

import DeviceInfo from 'react-native-device-info';
const brand = DeviceInfo.getBrand();    
const model = DeviceInfo.getModel();   
const models = ['iPhone X', 'iPhone XS', 'iPhone XS Max', 'iPhone XR']


import { connect } from 'react-redux';


const state = state => {
  return {
      footerColor      :   state.themes.footerColor,
      tabIcons         :   state.themes.tabIcons,
  };
};





class footer extends Component {

    navBack = () => {

        if(this.props.type == 'article'){
            hideStatusBar()
        }
        else{
            tabBarType_Normal();
        }
    }
  
    
    getComments = () => {
        const {from, type, navigation } = this.props;


        // if(from == 'all' ){
            setTimeout(() => {
                showStatusBar()
            },300)
            this.props.navigation.navigate('Comments',{name:'COMMENTS',  article:this.props.article, onNavigationBack: this.navBack})
        // }
    }



    render() {

    const {article, footerColor, tabIcons, type} = this.props;

    let styleAb;
    if(type === 'article'){
        styleAb  = {
            position        :   'absolute',
            bottom          :   brand === 'Apple' && models.includes(model) ? 15 : 5,
            left            :   5,
            right           :   5,
        }
    }

    const this_commented = article.this_commented == 1 ? 'rgba(15, 101, 141, 1)' : type == 'all' ? footerColor : tabIcons
    const this_liked     = article.this_liked == 1 ? 'rgba(255,0,0,1)' : type == 'all' ? footerColor : tabIcons

    return(
         <View style={[styles.articleFooter, styleAb]}>

            <View style={[styles.footerItems]}>
                <TouchableOpacity>
                    <Feather style={[styles.footerIcon, styles.likeIcon]}  name="heart" size={26} color={this_liked} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.footerCount, {color:this_liked}, style.bt]}>{article.articles_likes}</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={[styles.articleShare]}>
                <Feather style={[styles.footerIcon]}  name="share-2" size={22} color={tabIcons} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.footerItems]} onPress={this.getComments}>
                <Text style={[styles.footerCount, {color:this_commented}, style.bt]}>{article.articles_comments}</Text>
                <Feather  style={[styles.footerIcon, styles.commentIcon]} name="message-square" size={27} color={this_commented} />
            </TouchableOpacity>

           
           
         </View>
    )
    }

}

const styles = StyleSheet.create({
    articleFooter : {
        height: 40,
        margin: 5,
        paddingHorizontal : 5,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    articleShare : {
        height:40,
        width:40,
    },  
    footerItems : {
        flexDirection:'row'
    },
    footerCount : {
        height: 40,
        lineHeight:40,
        marginHorizontal:5,
        fontSize:18,
    },
    footerIcon : {
        width:40,
        height: 40,
        lineHeight:40,
        textAlign:'center',
    },
    likeIcon :{
        alignSelf:'flex-start'
    },
    commentIcon :{
        alignSelf:'flex-end',
    }
});

export default withNavigation(connect(state)(footer));