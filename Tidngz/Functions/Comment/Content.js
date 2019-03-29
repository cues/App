import React, {Component} from 'react';
import {Platform, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import style from '../../Styles/Styles';
import { connect } from 'react-redux';

const state = state => {
  return {
      articleContent         :   state.themes.articleContent,
      commentViewMore         :   state.themes.commentViewMore,
      
  };
};


class content extends Component {

    state = {
        viewDimensions  : true,
        viewMore        : false,
        containerActive : null,
        readMore        : false
    }


    find_dimesions(layout){
        const {height} = layout;
        height > 75 && this.state.viewDimensions ? 
                this.setState({
                    viewDimensions  : false,
                    containerActive :55,
                    viewMore        : true
                }) 
            : null
        
    }

    viewMore = () => {
        this.setState({
            containerActive : null,
            readMore        : true
        }) 
    }
 
    viewLess = () => {
        this.setState({
            containerActive :55,
            readMore        : false
        }) 
    }

    render(){

        const {comment, articleContent, commentViewMore} = this.props;
        const {viewMore,  containerActive, readMore} = this.state;


        const viewMoreButton = (
            viewMore ?
                readMore ?  
                    <TouchableOpacity style={styles.commentViewMore} onPress={this.viewLess}>
                        <Text style={[style.bt, styles.commentViewMoreText, {color:commentViewMore}]}>Read Less</Text>
                    </TouchableOpacity>
                :
                    <TouchableOpacity style={styles.commentViewMore} onPress={this.viewMore}>
                        <Text style={[style.bt, styles.commentViewMoreText, {color:commentViewMore}]}>Read More</Text>
                    </TouchableOpacity>
            : null
        )

        return (
            <View>
                <View style = {[styles.container, {height:containerActive}]}
                                onLayout={(event) => { this.find_dimesions(event.nativeEvent.layout)}}>

                    <Text style={[style.la, style.textShadow23, styles.commentContent, {color:articleContent}]}>{comment.comment}</Text>
                </View>
                {viewMoreButton}

            </View>
           
        )
    }
    
}

const styles = StyleSheet.create({
    container : {
        marginTop : 15,
        marginBottom : 10,
        // backgroundColor:'blue',
        // zIndex:0,
    },
    commentContent: {
        fontSize : 16,
        lineHeight : 27,
        letterSpacing : 1.2,
        fontWeight:'bold',    
    },
    commentViewMore : {
        height : 20,
        // backgroundColor:'red',
        marginBottom:10,
        marginTop: -7
    },
    commentViewMoreText : {
        fontSize:12,
        letterSpacing: .7,
        lineHeight:20,
    }
})

export default connect(state)(content);