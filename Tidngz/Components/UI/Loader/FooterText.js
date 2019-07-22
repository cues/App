import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import style from '../../../Styles/Styles';

import { connect } from 'react-redux';

const state = state => {
  return {

      menuIconColor           :   state.themes.menuIconColor,

  };
};



const FooterText = props => {
    
        const { thatsAllView, thatsAllText, menuIconColor , text } = props

        return (
            <View style={[styles.view, thatsAllView]}>
                <Text style={[style.la, styles.text, thatsAllText, {color:menuIconColor}]}>{text}</Text> 
            </View>
        )
            
}

const styles = StyleSheet.create({
    view : {
        height : 70,
        width: '100%',
        // backgroundColor:'red',
    },
    text : {
        fontSize : 16,
        letterSpacing: .8,
        width: '100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',    
        lineHeight:70,
        textAlign : "center"
    }
})


export default connect(state)(FooterText);
