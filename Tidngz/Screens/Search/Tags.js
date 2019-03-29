import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions} from 'react-native';
import style from '../../Styles/Styles'
import {brand, model, models, models2} from '../../Components/DeviceInfo/DeviceInfo';
import BlurView from '../../Components/BlurVIew/BlurVIew';
import SearchTags from './Content/Tags';

const WIDTH = Dimensions.get('window').width;

import { connect } from 'react-redux';

const state = state => {
    return {
        tabBlur             :   state.themes.tabBlur,
        backgroundMain      :   state.themes.backgroundMain,
        menuIconColor       :   state.themes.menuIconColor,
        search_value        :   state.search.search_value,
        search_tags_count   :   state.search.search_tags_count,
        search_tags         :   state.search.search_tags
    }
}

class Tags extends Component {


  render() {
    const {backgroundMain, search_value, search_tags_count, search_tags, menuIconColor, tabBlur} = this.props




    const searchTag = search_tags.map((search, index) => (
      <View key={search.key}>

            <SearchTags tag={search}/>

          <View style={[style.line, index + 1 == search_tags_count ? style.none : null]}/>
      </View>
    ))


    const search = (
         search_tags_count == 0 ? 
            search_value == '' ?
              <Text style={[style.noSearch, {color:menuIconColor}]}>Search for a tag</Text>
            :
              <Text style={[style.noSearch, {color:menuIconColor}]}>No tags found</Text>
         :
          <View>
            <Text style={[style.noSearch, {color:menuIconColor}]}>Tags</Text>
            <View style={style.line}/>
            { searchTag }
          </View>
    )

    return (
      <View style={[styles.container,  {backgroundColor:backgroundMain}]}>
                <ScrollView style={[styles.scrollView]}>

                      <View style={{height: Platform.select({android:50 + 44 , ios : models2.includes(model) ? 88 + 44 : 63 + 44}) }}/>
                      {search}
                      <View style={{height: brand === 'Apple' && models.includes(model) ? 73 :  59 }}/>
                </ScrollView>
       </View> 
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor:'rgba(23,23,23,1)',
    },
    scrollView : {
      width:'100%',
      marginVertical: 10,
    },
 
  });
  

  export default connect(state)(Tags);