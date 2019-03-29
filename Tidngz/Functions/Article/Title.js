import React , {Component}from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import { withNavigation } from 'react-navigation';
import style from '../../Styles/Styles'; 
import { createStyles, minWidth } from 'react-native-media-queries';

class Title extends Component {


    render(){

    const {article} = this.props;

   
        return (
            <View >
        
                    <Text style={[styles.articleTitle, style.cub]}>{article.articles_title}</Text>
                
            </View>
        )
    }
   
}


const stylesheet = {

    articleTitle : {
        width:'100%',
        // height:100,
        textAlign: 'center', 
        paddingVertical: 25,
        paddingHorizontal: 10,
        fontSize: 26,
        lineHeight: 42,
        letterSpacing: 1.7,
        // fontWeight: '900',
        color: 'rgba(250,250,250,.9)',
    },
  
}

const styles = createStyles(
    stylesheet,

    minWidth(500, {
        articleTitle :{
            fontSize: 28,
            lineHeight: 44,
            letterSpacing: 1.8,
        }
    }),
    minWidth(700, {
        articleTitle :{
            fontSize: 33,
            lineHeight: 52,
            letterSpacing: 2,
        }
    })
);

export default withNavigation(Title);
