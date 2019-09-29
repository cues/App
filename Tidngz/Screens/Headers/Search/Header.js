import React, {Component} from 'react';
import {StyleSheet, View,Text ,  Dimensions, Platform, ImageBackground, StatusBar , TextInput, KeyboardAvoidingView} from 'react-native';
import CardView from 'react-native-cardview';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import style from '../../../Styles/Styles'; 
import {brand, model, models} from '../../../Components/DeviceInfo/DeviceInfo';
import BlurView from '../../../Components/BlurVIew/BlurVIew';
import SearchTabBar from './TabBar';
import IcoFont from '../../../assets/IcoFont/IcoFont';
import {search_value, search_suggestions, search_places_1, search_places_2, search_places_3, 
        search_users_1, search_users_2, search_users_3, 
        search_tags_1, search_tags_2, search_tags_3, 
        search_places, search_users, search_tags, place_active} from '../../../Store/Actions/index'
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

const state = state => {
    return {
        api                     :   state.main.api,
        user_id                 :   state.main.user.user_id,
        apiKey                  :   state.main.apiKey,
        tabBlur                 :   state.themes.tabBlur,
        headerIcons             :   state.themes.headerIcons,
        headerColor             :   state.themes.headerColor,
        searchBlur              :   state.themes.searchBlur,
        searchColor             :   state.themes.searchColor,
        searchPlaceholderColor  :   state.themes.searchPlaceholderColor,
        keyboard                :   state.themes.keyboard,
        placeActive             :   state.place.placeActive
    }
}

const dispatch = dispatch => {
    return {
        this_search_value       : (value) => dispatch(search_value(value)),
        this_search_suggestions  : (count, result) => dispatch(search_suggestions(count, result)),
        this_search_places_1   : (count, result) => dispatch(search_places_1(count, result)),
        this_search_places_2   : (count, result) => dispatch(search_places_2(count, result)),
        this_search_places_3   : (count, result) => dispatch(search_places_3(count, result)),
        this_search_users_1   : (count, result) => dispatch(search_users_1(count, result)),
        this_search_users_2   : (count, result) => dispatch(search_users_2(count, result)),
        this_search_users_3   : (count, result) => dispatch(search_users_3(count, result)),
        this_search_tags_1   : (count, result) => dispatch(search_tags_1(count, result)),
        this_search_tags_2   : (count, result) => dispatch(search_tags_2(count, result)),
        this_search_tags_3   : (count, result) => dispatch(search_tags_3(count, result)),
        this_search_places  : (count, result) => dispatch(search_places(count, result)),
        this_search_users   : (count, result) => dispatch(search_users(count, result)),
        this_search_tags    : (count, result) => dispatch(search_tags(count, result)),
        this_place_active   :  ()  => dispatch(place_active())
    }
}

class header extends Component{

    constructor(props){
        super(props)
    
        this.state = {
            all     : true,
            places  : false,
            users   : false,
            tags    : false,
            history : false,
            value   : '',
        }

        this.suggestionHandler()
        
      }


      componentDidUpdate(prevProps) {
        if (this.props.placeActive !== prevProps.placeActive) {
            console.warn('follow');
            this.props.this_place_active();
            this.suggestionHandler()
            this.reset()  
        }
      }
      


    suggestionHandler = () =>{
        const { api, apiKey, user_id , this_search_suggestions} = this.props;

        const url = `${api}/Search/search.php?key=${apiKey}&user_id=${user_id}&type=suggestions`;
          
        rm rffetch(url)
        .then((response) => response.json())
        .then((response) => { 
            // console.warn(response.data.items)
          
            this_search_suggestions(response.data.count, response.data.items)
    
        })
        .catch((error) =>{
            // console.warn(error)
        })
    }


    navigate = (type) => {                  

            if(type == 'S_All'){
                this.setState({
                    all     : true,
                    places  : false,
                    users   : false,
                    tags    : false,
                    history : false,
                })
            }
            if(type == 'S_Places'){
                this.setState({
                    all     : false,
                    places  : true,
                    users   : false,
                    tags    : false,
                    history : false,
                })
            }
            if(type == 'S_Users'){
                this.setState({
                    all     : false,
                    places  : false,
                    users   : true,
                    tags    : false,
                    history : false,
                })
            }
            if(type == 'S_Tags'){
                this.setState({
                    all     : false,
                    places  : false,
                    users   : false,
                    tags    : true,
                    history : false,
                })
            } 
            if(type == 'S_History'){
                this.setState({
                    all     : false,
                    places  : false,
                    users   : false,
                    tags    : false,
                    history : true,
                })
            } 
        

        this.props.navigation.navigate(type)
    }




    searchHandler = async (value) => {

        this.setState({
            value : value
        })

        const { api, apiKey, user_id , this_search_value, this_search_places_1, this_search_places_2, this_search_places_3, this_search_users_1, this_search_users_2, this_search_users_3, this_search_tags_1, this_search_tags_2, this_search_tags_3,
                 this_search_places, this_search_users, this_search_tags }= this.props

        
            
        const url = `${api}/Search/search.php?key=${apiKey}&user_id=${user_id}&type=search&search=${value}`;

        // console.warn(url)
      
        await fetch(url)
        .then((response) => response.json())
        .then((response) => {
  
            this_search_places(response.data.places.count, response.data.places.place)
            this_search_users(response.data.users.count, response.data.users.user)
            this_search_tags(response.data.tags.count, response.data.tags.tag)
            this_search_places_1(response.data.places_1.count, response.data.places_1.place)
            this_search_places_2(response.data.places_2.count, response.data.places_2.place)
            this_search_places_3(response.data.places_3.count, response.data.places_3.place)
            this_search_users_1(response.data.users_1.count, response.data.users_1.user)
            this_search_users_2(response.data.users_2.count, response.data.users_2.user)
            this_search_users_3(response.data.users_3.count, response.data.users_3.user)
            this_search_tags_1(response.data.tags_1.count, response.data.tags_1.tag)
            this_search_tags_2(response.data.tags_2.count, response.data.tags_2.tag)
            this_search_tags_3(response.data.tags_3.count, response.data.tags_3.tag)
            this_search_value(value);
            
        })
        .catch((error) =>{
            // console.warn(error)
        })
        
    }


    reset = () => {

        this.setState({
            value : ''
        })

        const { this_search_value, this_search_places_1, this_search_places_2, this_search_places_3, 
            this_search_users_1, this_search_users_2, this_search_users_3, 
            this_search_tags_1, this_search_tags_2, this_search_tags_3,
            this_search_places, this_search_users, this_search_tags }= this.props

        this_search_places(0, [])
        this_search_users(0, [])
        this_search_tags(0, [])
        this_search_places_1(0, [])
        this_search_places_2(0, [])
        this_search_places_3(0, [])
        this_search_users_1(0, [])
        this_search_users_2(0, [])
        this_search_users_3(0, [])
        this_search_tags_1(0, [])
        this_search_tags_2(0, [])
        this_search_tags_3(0, [])
        this_search_value('');
    }



  



    render(){
        const {searchBlur, tabBlur, headerColor, headerIcons , searchColor , searchPlaceholderColor, keyboard} = this.props


        const historyActive = this.state.history ? 'rgba(15,101,141,1)' : headerIcons 

        return(

            <View style= {[styles.header , {backgroundColor:Platform.select({android:headerColor})}]}>
                <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={17} />  
                
                <CardView style={[styles.headerSearch, {backgroundColor:searchBlur}]}
                                cardElevation={1}
                                cardMaxElevation={1}
                                cornerRadius={17}>

                                
                        <IcoFont style={styles.headerSearchIcon} name="search-alt-1" size={17} color={searchColor} onPress={this.reset}/>

                        <TextInput style={[styles.headerSearchInput, style.ca, {color:searchColor}]} 
                                    placeholder = "Search Tidngz"
                                    value={this.state.value}
                                    placeholderTextColor={searchPlaceholderColor}
                                    keyboardAppearance = {keyboard}
                                    onChangeText = {this.searchHandler}
                                    // autoFocus={true}
                                    />
                        <MaterialIcons style={styles.headerSearchIcon} name="history" size={20} color={historyActive} onPress={() => this.navigate('S_History')}/>
                    </CardView>

                <SearchTabBar navigate = {this.navigate} state = {this.state}/>
            </View>
        


        )
        }
}



const styles = StyleSheet.create({
    header: {
        position : 'absolute',
        top:0,
        left:0,
        right:0,
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'rgba(23,23,23,.1)',
        overflow:'hidden',
        width:'100%' ,
        height:models.includes(model) ? 88 + 44 : brand === 'Apple' ? 64 + 44 : 50 + 44
        
      // backgroundColor:'red',

      // marginTop : getStatusBarHeight(),
  },
    headerSearch : {
        marginTop: models.includes(model) ? 44 : brand === 'Apple' ? 24 : 7,
        height: 34,
      width: '95%',
      backgroundColor:'transparent',
      alignSelf: "center", 
      marginLeft: "auto", 
      marginRight: "auto",
      overflow:'hidden',
      borderRadius:20,
      flexDirection:'row',
    },
  headerSearchIcon : {
      height: 35,
      width:'10%',
      lineHeight:35,
      textAlign:'center',
  },
  headerSearchInput : {
      height: 35,
      width:'80%',
    //   backgroundColor:'red',
      paddingLeft:8,
    //   color:'rgba(255,255,255,.8)',
    //   borderRadius:20,
    //   lineHeight:35,
      fontSize:18,
      fontWeight:Platform.select({android:'200'}),
      letterSpacing:1,
      paddingBottom:Platform.select({android:5}),

  }
  })

  

export default withNavigation(connect(state, dispatch)(header));