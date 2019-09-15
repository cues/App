import React, {Component} from 'react'
import {Platform, StyleSheet, View, TextInput, Text, TouchableOpacity, Image, Keyboard, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import MaterialIcons from  'react-native-vector-icons/MaterialIcons';
import BlurView from '../../../Components/BlurVIew/BlurVIew';
import CardView from 'react-native-cardview';
import IcoFont from '../../../assets/IcoFont/IcoFont';
import {brand, model, models, models2} from '../../../Components/DeviceInfo/DeviceInfo';
import style from '../../../Styles/Styles';
import SearchPlaces from './Content/Places';

import {  error, error_2 , success, success_2, search_places} from '../../../Store/Actions/index'




const state = state => {
    return {
        api                 :   state.main.api,
        apiKey              :   state.main.apiKey,
        token               :   state.main.user.token,
        user                :   state.main.user,
        user_id             :   state.main.user.user_id,
        user_place_id       :   state.main.user.user_place_id,
        user_place          :   state.main.user.user_place,
        menuIconColor       :   state.themes.menuIconColor,
        menuIconColor_2     :   state.themes.menuIconColor_2,
        accountFloat        :   state.themes.accountFloat,
        tabBlur             :   state.themes.tabBlur,
        searchBlur              :   state.themes.searchBlur,
        searchColor             :   state.themes.searchColor,
        searchPlaceholderColor  :   state.themes.searchPlaceholderColor,
        keyboard                :  state.themes.keyboard,

        search_places_count :   state.search.search_places_count,
        search_places       :   state.search.search_places
    }
}

const dispatch = dispatch => {
    return {
        this_error               :   text           =>  dispatch(error(text)),
        this_error_2             :   ()             =>  dispatch(error_2()),
        this_success             :   text           =>  dispatch(success(text)),
        this_success_2           :   ()             =>  dispatch(success_2()),
        this_search_places       : (count, result)  =>  dispatch(search_places(count, result)),
    }
}



class Places extends Component {

    constructor(props){
        super(props)



        this.state = {
            value   : '',
        }
    }



    componentDidUpdate(prevProps) {

        const { placesContainer , this_search_places } = this.props

        if(placesContainer != prevProps.placesContainer){

            this_search_places(0, [])

            this.setState({
                value : ''
            })
        }

    }



    searchHandler = async (value) => {

        const { api , apiKey , user_id , this_search_places} = this.props

     
            
        const url = `${api}/Search/search.php?key=${apiKey}&user_id=${user_id}&type=search&search=${value}`;

        await fetch(url)
        .then((response) => response.json())
        .then((response) => {
            this_search_places(response.data.places.count, response.data.places.place)

            this.setState({
                value : value
            })  
        })
    }


    reset = () => {

        const { this_search_places } = this.props

        this.setState({
            value : ''
        })

        this_search_places(0, [])
    }
 


    
    render(){

        const { absolute, display, placesClose, accountFloat , menuIconColor, tabBlur, searchBlur, searchColor , searchPlaceholderColor, keyboard , search_places_count, search_places , selectedPlaceHandler} = this.props

        const { value } = this.state

        const { searchHandler , reset } = this



        const searchPlace = search_places.map((search, index) => (
            <View key={search.key}>
      
                  <SearchPlaces place={search} selectedPlaceHandler={selectedPlaceHandler}/>
      
                <View style={[style.line, index + 1 == search_places_count ? style.none : null]}/>
            </View>
          ))
      
          const search = (
            search_places_count == 0 ? 
                value == '' ?
                    <Text style={[styles.noSearch, {color:menuIconColor}]}>Search for a place</Text>
                :
                    <Text style={[styles.noSearch, {color:menuIconColor}]}>No places found</Text>
            :
              <View>
                { searchPlace }
              </View>
          )


        return(
            <View style={[styles.placesFloat, absolute , {display : display}]}>

                <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={10} />
                
                <MaterialIcons style={styles.placesClose}  name='close' size={27} color={menuIconColor} onPress={placesClose}/>

                <CardView style={[styles.headerSearch, {backgroundColor:searchBlur}]}
                                cardElevation={1}
                                cardMaxElevation={1}
                                cornerRadius={17}>

                                
                        <IcoFont style={styles.headerSearchIcon} name="search-alt-1" size={15} color={searchColor} onPress={reset}/>

                        <TextInput style={[styles.headerSearchInput, style.ca, {color:searchColor}]} 
                                    placeholder = "Search Places"
                                    value={value}
                                    placeholderTextColor={searchPlaceholderColor}
                                    keyboardAppearance = {keyboard}
                                    autofocus={true}
                                    onChangeText = {searchHandler} />
                </CardView>

                <ScrollView style={[styles.scrollView]}>
                      {search}
                </ScrollView>

            </View>
        )
    }
}


const styles = StyleSheet.create({

    placesFloat : {
        top:0,
        left:0,
        bottom:0,
        right:0,
        zIndex:1,
        borderRadius:10,
        overflow:'hidden'
    },
    placesClose : {
        height: 35,
        width:35,
        top: 5,
        right:5,
        position:'absolute',
        textAlign:'center',
        lineHeight:35,
        // backgroundColor:'red'
    },

    noSearch : {
        height: 50,
        lineHeight :50,
        fontSize : 19,
        letterSpacing:.7,
        paddingLeft:15,
        // marginBottom:10,
        fontFamily:'CaveatBrush-Regular',
      },

    scrollView : {
        width:'100%',
        marginVertical: 10,
      },

    headerSearch : {
        marginTop: 7.5,
        marginLeft:5,
        height: 30,
      width: '80%',
      backgroundColor:'transparent',
      overflow:'hidden',
      borderRadius:20,
      flexDirection:'row',
    },
  headerSearchIcon : {
      height: 30,
      width:'10%',
      lineHeight:30,
      marginLeft:10,
      textAlign:'center',
    //   backgroundColor:'red'
    },
  headerSearchInput : {
      height: 30,
      width:'80%',
      paddingLeft:5,
      fontSize:16,
      fontWeight:Platform.select({android:'200'}),
      letterSpacing:1,
      paddingBottom:Platform.select({android:5}),

  }
})

export default connect(state, dispatch)(Places)