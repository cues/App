import React , {Component}from 'react';
import {Platform, Dimensions, View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import style from '../../Styles/Styles'; 
import { WebView } from 'react-native-webview';
import HTML from 'react-native-render-html';
import { connect } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import { getParentsTagsRecursively } from 'react-native-render-html/src/HTMLUtils';

const state = state => {
  return {
      articleContent         :   state.themes.articleContent,
  };
};



const content = props => {

    const {article, articleContent} = props;



    const listsPrefixesRenderers = {
        ul: () => {
            return (
                <Text style={styles.content_ul}>
                    <Entypo  size={30} name ="dot-single" color={articleContent}/>
                </Text>
            );
        },
        ol : (htmlAttribs, children, convertedCSSStyles, passProps) => {
            let number = passProps.index + 1
            return (
                console.log(passProps),
                <Text style={[style.bt, styles.content_ol, { color:articleContent}]}>{number}.</Text>
            );
        }
    }




    const alterNode =  (node) => {
        const { name, parent } = node;
        if(name == 'blockquote'){
            node.attribs = { ...(node.attribs || {}), style: `borderLeftWidth : 5 ;  borderLeftColor : 'rgba(15, 101, 141, 0.9)' ;  paddingLeft : 10` };
            return node;
        }
        if(name == 'ol'){
            node.attribs = { ...(node.attribs || {}), style: `marginLeft : -15` };
            return node;
        }
    }

 
    const  tagsStyles= { 
            p: { marginVertical : 20, }, 
            b : {fontWeight:'bold', fontSize:19},
            i : { fontFamily:'Lato-Italic', fontStyle:'italic', color:'red'}
    }



        let styleAb;
        if(article.linked_count == 0){
            styleAb = {
                marginBottom: 92,
            }
        }

        const content = article.articles_content == '' ? '   ' : article.articles_content

      
        return (
            <View>
        
                <HTML  listsPrefixesRenderers = {listsPrefixesRenderers}
                    baseFontStyle = {{  
                                        fontSize: 16,
                                        lineHeight: 30,
                                        letterSpacing: 1, 
                                        fontFamily:'Lato', 
                                        color:articleContent
                                    }}
                    textSelectable = {true}
                    alterNode = {alterNode}
                    html={content} 
                    tagsStyles={tagsStyles} 
                    containerStyle = {[styles.articleContent, styleAb]}
                    />
        
        
            </View>
        )

    
   
}


const styles = StyleSheet.create({
 
    articleContent : {
        width:'100%',
        backgroundColor:'transparent',
        paddingVertical: 25,
        paddingHorizontal: 10,
        marginBottom: 25,
    },

    content_ul : {
        lineHeight: 35, 
        width:30,
    },
    content_ol: {
        lineHeight: 31,
        fontSize: 16,
        width:30, 
         textAlign:'center', 
         fontWeight:'900', 
    }
});



export default connect(state)(content);
