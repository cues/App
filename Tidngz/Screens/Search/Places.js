import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions} from 'react-native';
import style from '../../Styles/Styles'
import {brand, model, models, models2} from '../../Components/DeviceInfo/DeviceInfo';
import BlurView from '../../Components/BlurVIew/BlurVIew';
import SearchPlaces from './Content/Places';

const WIDTH = Dimensions.get('window').width;

import { connect } from 'react-redux';

const state = state => {
    return {
        tabBlur             :   state.themes.tabBlur,
        backgroundMain      :   state.themes.backgroundMain,
        menuIconColor       :   state.themes.menuIconColor,
        search_value        :   state.search.search_value,
        search_places_count :   state.search.search_places_count,
        search_places       :   state.search.search_places
    }
}

class Places extends Component {



  render() {
    const {backgroundMain, search_value, search_places_count, search_places, menuIconColor, tabBlur} = this.props



    // const searchSuggestions = search_suggestions.map((search, index) => (
    //   search.item.key != null && search.type == 'PLACE' ? 
    //             <View key={search.item.key}>
                
    //                 <SearchPlaces place={search.item}/> 
                
    //                 <View style={[style.line, index + 1 == search_suggestions_count || search.item.key == null ? style.none : null]}/>

    //             </View>
    //         : null
    // ))


    const searchPlace = search_places.map((search, index) => (
      <View key={search.key}>

            <SearchPlaces place={search}/>

          <View style={[style.line, index + 1 == search_places_count ? style.none : null]}/>
      </View>
    ))

    const search = (
      search_places_count == 0 ? 
          search_value == '' ?
              <Text style={[style.noSearch, {color:menuIconColor}]}>Search for a place</Text>
          :
            <Text style={[style.noSearch, {color:menuIconColor}]}>No places found</Text>
      :
        <View>
          <Text style={[style.noSearch, {color:menuIconColor}]}>Places</Text>
          <View style={style.line}/>
          { searchPlace }
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
  

  export default connect(state)(Places);