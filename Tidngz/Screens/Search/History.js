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
import { search_history } from '../../Store/Actions/index'

const state = state => {
    return {
        api                   :   state.main.api,
        user_id               :   state.main.user.user_id,
        apiKey                :   state.main.apiKey,
        tabBlur               :   state.themes.tabBlur,
        backgroundMain        :   state.themes.backgroundMain,
        menuIconColor         :   state.themes.menuIconColor,
        search_history_count  :   state.search.search_history_count,
        search_history        :   state.search.search_history
    }
}

const dispatch = dispatch => {
  return {
      this_search_history  : (count, result) => dispatch(search_history(count, result)),
  }
}


class History extends Component {



  constructor(props){
    super(props)


    const { api, apiKey, user_id , this_search_history} = this.props;

    const url = `${api}/Search/search.php?key=${apiKey}&user_id=${user_id}&type=history`;
      
    fetch(url)
    .then((response) => response.json())
    .then((response) => {
      
      this_search_history(response.data.count, response.data.items)

    })

  }



  render() {


    const {backgroundMain, search_history_count, search_history, menuIconColor, tabBlur} = this.props


    const historyAll = search_history.map((search, index) => (
           
        search.item.key != null ? 
                <View key={search.item.key}>
                {
                            search.type == 'PLACE' ? <SearchPlaces place={search.item}/> : 
                            search.type == 'USER'  ? <SearchUsers user={search.item}/> : 
                            search.type == 'TAG' ? <SearchTags tag={search.item}/> : null
                }
            
                    <View style={[style.line, index + 1 == search_history_count || search.item.key == null ? style.none : null]}/>
                </View>
            : null
  
        
      ))
  



    const search = (
        search_history_count == 0 ? 
         <Text style={[style.noSearch, {color:menuIconColor}]}>No history found</Text>
      :
        <View>
            <Text style={[style.noSearch, {color:menuIconColor}]}>Your search history</Text>
            <View style={style.line}/>
            { historyAll }
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
  

  export default connect(state, dispatch)(History);