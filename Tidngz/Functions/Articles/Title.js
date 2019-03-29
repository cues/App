import React , {Component}from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import style from '../../Styles/Styles'; 
import { createStyles, minWidth } from 'react-native-media-queries';


import { connect } from 'react-redux';

const state = state => {
  return {
      articleTitle         :   state.themes.articleTitle,
  };
};


const title = props => {

        const {article, articleTitle} = props;

        return (
            <View>
        
                    <Text style={[styles.articleTitle, {color:articleTitle}, style.cub]}>{article.articles_title}</Text>
                
                
            </View>
        )
    
   
}


const stylesheet = {
    articleTitle : {
        width:'100%',
        // height:100,
        textAlign: 'center', 
        paddingVertical: 25,
        paddingHorizontal: 10,
        fontSize: 24,
        lineHeight: 39,
        letterSpacing: 1.6,
        // fontWeight: '900',
        color: 'rgba(240,240,240,.9)',
    }
};

const styles = createStyles(
    stylesheet,

    // minWidth(500, {
    //     articleTitle :{
    //         fontSize: 26,
    //         lineHeight: 42,
    //         letterSpacing: 1.7,
    //     }
    // }),
    // minWidth(700, {
    //     articleTitle :{
    //         fontSize: 28,
    //         lineHeight: 45,
    //         letterSpacing: 1.8,
    //     }
    // })
);

export default connect(state)(title);
