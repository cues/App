import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions} from 'react-native';
import style from '../../Styles/Styles'
import {brand, model, models, models2} from '../../Components/DeviceInfo/DeviceInfo';
import BlurView from '../../Components/BlurVIew/BlurVIew';
import SearchPlaces from './Content/Places';
import SearchUsers from './Content/Users';
import SearchTags from './Content/Tags';

const WIDTH = Dimensions.get('window').width;

import { connect } from 'react-redux';

const state = state => {
    return {
        api                       :   state.main.api,
        user_id                   :   state.main.user.user_id,
        apiKey                    :   state.main.apiKey,
        tabBlur                   :   state.themes.tabBlur,
        backgroundMain            :   state.themes.backgroundMain,
        menuIconColor             :   state.themes.menuIconColor,
        search_value              :   state.search.search_value,
        search_suggestions_count  :   state.search.search_suggestions_count,
        search_suggestions        :   state.search.search_suggestions,
        search_places_1_count     :   state.search.search_places_1_count,
        search_places_1           :   state.search.search_places_1,
        search_places_2_count     :   state.search.search_places_2_count,
        search_places_2           :   state.search.search_places_2,
        search_places_3_count     :   state.search.search_places_3_count,
        search_places_3           :   state.search.search_places_3,
        search_users_1_count      :   state.search.search_users_1_count,
        search_users_1            :   state.search.search_users_1,
        search_users_2_count      :   state.search.search_users_2_count,
        search_users_2            :   state.search.search_users_2,
        search_users_3_count      :   state.search.search_users_3_count,
        search_users_3            :   state.search.search_users_3,
        search_tags_1_count       :   state.search.search_tags_1_count,
        search_tags_1             :   state.search.search_tags_1,
        search_tags_2_count       :   state.search.search_tags_2_count,
        search_tags_2             :   state.search.search_tags_2,
        search_tags_3_count       :   state.search.search_tags_3_count,
        search_tags_3             :   state.search.search_tags_3,
    }
}

class All extends Component {


  // constructor(props){
  //   super(props)

  //   this.state = {
  //     suggestions_count : 0,
  //     suggestions : []
  //   }


  //   const { api, apiKey, user_id } = this.props;

  //   const url = `${api}/Search/search.php?key=${apiKey}&user_id=${user_id}&type=suggestions`;

      
  //   fetch(url)
  //   .then((response) => response.json())
  //   .then((response) => {
      
  //       this.setState({
  //         suggestions_count : response.data.count,
  //         suggestions : response.data.items
  //       })

  //   })

  // }

  



  render() {


    const {backgroundMain, search_value, search_suggestions_count, search_suggestions,
      search_places_1_count, search_places_1, search_places_2_count, search_places_2, search_places_3_count, search_places_3, 
      search_users_1_count, search_users_1, search_users_2_count, search_users_2, search_users_3_count, search_users_3, 
      search_tags_1_count, search_tags_1, search_tags_2_count, search_tags_2, search_tags_3_count, search_tags_3, 
      menuIconColor, tabBlur} = this.props


    const searchSuggestions = search_suggestions.map((search, index) => (
      search.item.key != null ? 
                <View key={search.item.key}>
                {
                            search.type == 'PLACE' ? <SearchPlaces place={search.item}/> : 
                            search.type == 'USER'  ? <SearchUsers user={search.item}/> : 
                            search.type == 'TAG' ? <SearchTags tag={search.item}/> : null
                }
            
                    <View style={[style.line, index + 1 == search_suggestions_count || search.item.key == null ? style.none : null]}/>
                </View>
            : null
    ))



    const searchPlace_1 = search_places_1.map((search, index) => (
      <View key={search.key}>

            <SearchPlaces place={search}/>

                    <View style={[style.line, index + 1 == search_places_1_count && 
                        search_places_2_count == 0 && search_places_3_count == 0 &&
                        search_users_1_count == 0 && search_users_2_count == 0 && search_users_3_count == 0 &&
                        search_tags_1_count == 0 && search_tags_2_count == 0 && search_tags_3_count == 0
                        ? style.none : null]}/>
      </View>
    ))


    const searchPlace_2 = search_places_2.map((search, index) => (
      <View key={search.key}>

            <SearchPlaces place={search}/>

                    <View style={[style.line, index + 1 == search_places_2_count && 
                        search_places_3_count == 0 &&
                        search_users_2_count == 0 && search_users_3_count == 0 &&
                        search_tags_2_count == 0 && search_tags_3_count == 0
                        ? style.none : null]}/>
      </View>
    ))


    const searchPlace_3 = search_places_3.map((search, index) => (
      <View key={search.key}>

            <SearchPlaces place={search}/>

                    <View style={[style.line, index + 1 == search_places_3_count && 
                        search_users_3_count == 0 &&
                        search_tags_3_count == 0
                        ? style.none : null]}/>
      </View>
    ))



    const searchUser_1 = search_users_1.map((search, index) => (
      <View key={search.key}>

            <SearchUsers user={search}/>

            <View style={[style.line, index + 1 == search_users_1_count && 
                        search_users_2_count == 0 && search_users_3_count == 0 &&
                        search_places_2_count == 0 && search_places_3_count == 0 &&
                        search_tags_1_count == 0 && search_tags_2_count == 0 && search_tags_3_count == 0
                        ? style.none : null]}/>
      </View>
    ))


    const searchUser_2 = search_users_2.map((search, index) => (
      <View key={search.key}>

            <SearchUsers user={search}/>

            <View style={[style.line, index + 1 == search_users_2_count && 
                        search_users_3_count == 0 &&
                        search_places_3_count == 0 &&
                        search_tags_2_count == 0 && search_tags_3_count == 0
                        ? style.none : null]}/>
      </View>
    ))


    const searchUser_3 = search_users_3.map((search, index) => (
      <View key={search.key}>

            <SearchUsers user={search}/>

            <View style={[style.line, index + 1 == search_users_3_count && 
                        search_tags_3_count == 0
                        ? style.none : null]}/>
      </View>
    ))


    const searchTag_1 = search_tags_1.map((search, index) => (
      <View key={search.key}>

            <SearchTags tag={search}/>

            <View style={[style.line, index + 1 == search_tags_1_count && 
                        search_tags_2_count == 0 && search_tags_3_count == 0 &&
                        search_places_2_count == 0 && search_places_3_count == 0 &&
                        search_users_2_count == 0 && search_users_3_count == 0
                        ? style.none : null]}/>
      </View>
    ))

    const searchTag_2 = search_tags_2.map((search, index) => (
      <View key={search.key}>

            <SearchTags tag={search}/>

          <View style={[style.line, index + 1 == search_tags_2_count && 
                        search_tags_3_count == 0 &&
                        search_places_3_count == 0 &&
                        search_users_3_count == 0
                        ? style.none : null]}/>
      </View>
    ))

    const searchTag_3 = search_tags_3.map((search, index) => (
      <View key={search.key}>

            <SearchTags tag={search}/>

          <View style={[style.line, index + 1 == search_tags_3_count ? style.none : null]}/>
      </View>
    ))


    const searchCombine = searchPlace_1.concat(searchUser_1, searchTag_1, searchPlace_2, searchUser_2, searchTag_2, searchPlace_3, searchUser_3, searchTag_3)

    const search = (
      search_places_1_count == 0 && search_users_1_count == 0 && search_tags_1_count == 0 ? 

        search_value == '' ?
          <View>
            <Text style={[style.noSearch, {color:menuIconColor}]}>Suggestions</Text>
            <View style={style.line}/>
            { searchSuggestions }
          </View>
         
        :
          <Text style={[style.noSearch, {color:menuIconColor}]}>Nothing found</Text>

      :
        
      <View>
        <Text style={[style.noSearch, {color:menuIconColor}]}>Top results</Text>
        <View style={style.line}/>
        { searchCombine }
      </View>
    )

    return (
      <View style={[styles.container,  {backgroundColor:backgroundMain}]}>
                <ScrollView style={[styles.scrollView]}>

                      <View style={{height: Platform.select({android:50 + 44 , ios : models2.includes(model) ? 88 + 44 : 63 + 44}) }}/>
                      {/* <Text>{search_places_1_count} {search_places_2_count} {search_places_3_count}</Text>
                      <Text>{search_users_1_count} {search_users_2_count} {search_users_3_count}</Text>
                      <Text>{search_tags_1_count} {search_tags_2_count} {search_tags_3_count}</Text> */}
                      {/* <Text>{suggestions_count}</Text> */}
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
  

  export default connect(state)(All);