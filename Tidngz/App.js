import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, Platform, ImageBackground, StatusBar , TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {SafeAreaView, createSwitchNavigator, createDrawerNavigator, createStackNavigator, createAppContainer , createBottomTabNavigator, createMaterialTopTabNavigator} from "react-navigation";
import { fromLeft , fromTop , fromRight , fromBottom , fadeIn , fadeOut , zoomIn , zoomOut , flipY , flipX } from 'react-navigation-transitions';
import {timezone} from './Components/Timezone/Timezone';
import SplashScreen from 'react-native-splash-screen'
import Activate from './Screens/Login_SignUp/Activate';
import Home from './Screens/Home';
import SearchHeader from './Screens/Headers/Search/Header';
import SearchAll from './Screens/Search/All';
import SearchPlaces from './Screens/Search/Places';
import SearchUsers from './Screens/Search/Users';
import SearchTags from './Screens/Search/Tags';
import SearchHistory from './Screens/Search/History';
import Options from './Screens/Options/Options';
import Calender from './Screens/Options/Calender';
import OptionsArticles from './Screens/Options/OptionsArticles';
import CalenderArticles from './Screens/Options/CalenderArticles';
import Places from './Screens/Places';
import Place from './Screens/Place/Place';
import UsersTitle from './Screens/Users/Title';
import TagsTitle from './Screens/Tags/Title';
import Maps from './Screens/Places/Map';
import Profile from './Screens/Profile';
import Article from './Screens/Article';
import Bookmark from './Screens/Menu/Bookmark';
import Setting from './Screens/Menu/Setting';
import Themes from './Screens/Menu/Themes';
import Trending from './Screens/Menu/Trending';
import Account from './Screens/Account/Account';
import Terms from './Screens/Menu/Terms';
import Privacy from './Screens/Menu/Privacy';
import Help from './Screens/Menu/Help';
import GeneralHelp from './Screens/Menu/HelpSections/General';
import AccountHelp from './Screens/Menu/HelpSections/Account';
import ArticleHelp from './Screens/Menu/HelpSections/Article';
import BookmarkHelp from './Screens/Menu/HelpSections/Bookmark';
import ClassifiedHelp from './Screens/Menu/HelpSections/Classified';
import HomeHelp from './Screens/Menu/HelpSections/Home';
import MapHelp from './Screens/Menu/HelpSections/Map';
import MenuHelp from './Screens/Menu/HelpSections/Menu';
import NotificationHelp from './Screens/Menu/HelpSections/Notification';
import PlaceHelp from './Screens/Menu/HelpSections/Place';
import ProfileHelp from './Screens/Menu/HelpSections/Profile';
import SearchHelp from './Screens/Menu/HelpSections/Search';
import SettingHelp from './Screens/Menu/HelpSections/Setting';
import ThemesHelp from './Screens/Menu/HelpSections/Themes';
import Contact from './Screens/Menu/Contact';
import About from './Screens/Menu/About';
import Ads from './Screens/Menu/Ads';
import Menu from './Screens/Menu/Menu';
import Comments from './Screens/Comments/Comments';
import Replies from './Screens/Comments/Replies';
import Notifications from './Screens/Notifications/Notifications';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import AccountTabBar from './Screens/Account/TabBar/TabBar';


import AddTabBar from './Screens/Add/TabBar/TabBar';

import ClassifiedAddContent from './Screens/Add/Classified/Content';
import ClassifiedAddPLace from './Screens/Add/Classified/Place';

import AddHeadline from './Screens/Add/Article/Headline';
import AddAddPlace from './Screens/Add/Article/Place';
import AddCatTagLink from './Screens/Add/Article/CatTagLink';
import AddLinked from './Screens/Add/Article/Linked';
import AddMedia from './Screens/Add/Article/Media';

import VideoAddVideoLink from './Screens/Add/Video/VideoLink';
import VideoAddHeadline from './Screens/Add/Video/Headline';
import VideoAddPlace from './Screens/Add/Video/Place';
import VideoAddCatTagLink from './Screens/Add/Video/CatTagLink';
import VideoAddLinked from './Screens/Add/Video/Linked';



import TabBar from './Screens/TabBar/TabBar';
import Login from './Screens/Login_SignUp/Login';
import SignUp from './Screens/Login_SignUp/SignUp';
import ForgotPassword from './Screens/Login_SignUp/ForgotPassword';
import LoginHeader from './Screens/Login_SignUp/Header';
import TermsLogin from './Screens/Login_SignUp/Terms';
import PrivacyLogin from './Screens/Login_SignUp/Privacy';
import BlurView from './Components/BlurVIew/BlurVIew';
import NavigationBar from 'react-native-navbar-color'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
// import SearchTabBar from './Screens/Headers/Search/TabBar';

import DeviceInfo from 'react-native-device-info';
const brand = DeviceInfo.getBrand();    
const model = DeviceInfo.getModel();   
const models = ['iPhone X', 'iPhone XS', 'iPhone XS Max', 'iPhone XR']

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


// const MenuStack = createStackNavigator({

// },{
//   cardShadowEnabled : false,
//   navigationOptions : {
//     header : null,
//     headerStyle:headerStyle,
//   }
// })


// const Option = createDrawerNavigator ({
//     Options : Options
// })


// const AccountStack = createMaterialTopTabNavigator({
//   User      :  UserStack,
//   Password  :  PasswordStack,
//   Info      :  InfoTop,
//   Delete    :  DeleteStack,
// },
// {
//   // tabBarComponent:props => <AccountTabBar {...props}/>,
//   tabBarComponent:null,
//   initialRouteName:'User',            
//   animationEnabled : false,
//   swipeEnabled : false,
  
// })

const handleCustomTransition = ({ scenes }) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];

  // Custom transitions go there
  if (prevScene
    && prevScene.route.routeName === 'Home'
    && nextScene.route.routeName === 'Article') {
    return zoomIn();
  } else if (prevScene
    && prevScene.route.routeName === 'Article'
    && nextScene.route.routeName === 'Comments') {
    return zoomOut();
  }
  return fromRight();
}



const HomeStack = createStackNavigator({
  Home                :   Home,
  Article             :   Article,
  Comments            :   Comments,
  Replies             :   Replies,
  Options             :   Options,
  OptionsArticles     :   OptionsArticles,
  Calender            :   Calender,
  CalenderArticles    :   CalenderArticles,
  Menu                :   Menu,
  Bookmark            :   Bookmark,
  Setting             :   Setting,
  Themes              :   Themes,
  Account             :   Account,
  Trending            :   Trending,
  Terms               :   Terms,
  Privacy             :   Privacy,
  Help                :   Help,
  GeneralHelp         :   GeneralHelp,
  AccountHelp         :   AccountHelp,
  ArticleHelp         :   ArticleHelp,
  BookmarkHelp        :   BookmarkHelp,
  ClassifiedHelp      :   ClassifiedHelp,
  HomeHelp            :   HomeHelp,
  MapHelp             :   MapHelp,
  MenuHelp            :   MenuHelp,
  NotificationHelp    :   NotificationHelp,
  PlaceHelp           :   PlaceHelp,
  ProfileHelp         :   ProfileHelp,
  SearchHelp          :   SearchHelp,
  SettingHelp         :   SettingHelp,
  ThemesHelp          :   ThemesHelp,
  About               :   About,
  Contact             :   Contact,
  Ads                 :   Ads,
  Notifications       :   Notifications
},{   
  transitionConfig: (nav) => handleCustomTransition(nav),
  // transitionConfig: () => fadeIn(),       
  cardStyle:{
    backgroundColor:'transparent'
  },
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
    
  // transparentCard: true,
  cardShadowEnabled : false,
});

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible;
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      if (route.routeName === "Options" || route.routeName === "Calender" || route.routeName === "Menu" || route.routeName === "Article") {
        // tabBarVisible = false;
      } else {
        // tabBarVisible = true;
      }
    });
  }
  return {
    tabBarVisible
  };
};












const SearchTop = createMaterialTopTabNavigator({
  S_All     : SearchAll,
  S_Places  : SearchPlaces,
  S_Users   : SearchUsers,
  S_Tags    : SearchTags,
  S_History : SearchHistory,
},{
  initialRouteName:'S_All',    
  tabBarComponent:null,
  swipeEnabled : false,
  animationEnabled:false
  // tabBarComponent :props => <SearchTabBar {...props}/>,
  // lazy:true,
  // tabBarOptions:{
  //   showIcon: true,
  //   showLabel : false,
  //   upperCaseLabel : true,
  //   activeTintColor:'rgba(15,101,141,1)',
  //   inactiveTintColor : 'rgba(123,123,123, 1 )',
  //   labelStyle :{
  //     fontSize:13,
  //     letterSpacing:1,
  //     fontFamily:'Lato-Regular',
  //   },
  //   indicatorStyle : {
  //     backgroundColor:'rgba(15,101,141,.5)',
  //     height:0,
  //     shadowColor:'transparent'
  //   },
  //   style: headerStyle
  // },
});

const SearchStack = createStackNavigator({
  // Search   :   Search,
  SearchTop : {
    screen : SearchTop,
    navigationOptions : () => ({
      header: <SearchHeader/>
    }),
  },
  Place       : Place,
  Article             :   Article,
  Comments            :   Comments,
  Replies             :   Replies,
  Options             :   Options,
  OptionsArticles     :   OptionsArticles,
  Calender            :   Calender,
  CalenderArticles    :   CalenderArticles,
  UsersTitle  : UsersTitle,
  TagsTitle   : TagsTitle,
},{
  transitionConfig: () => fromRight(),       
  initialRouteName:'SearchTop',    
  cardShadowEnabled : false,
});









const AddArticle = createMaterialTopTabNavigator({
    Headline      : AddHeadline,
    AddPlace      : AddAddPlace,
    CatTagLink    : AddCatTagLink,
    LinkArticle   : AddLinked,
    MediaArticle  : AddMedia
  },
  {
    tabBarComponent:null,
    initialRouteName:'Headline',
    headerMode: 'none',
    cardShadowEnabled : false,
    swipeEnabled : false,
  }
);

const AddVideo = createMaterialTopTabNavigator({
    VideoLink        : VideoAddVideoLink,
    VideoHeadline    : VideoAddHeadline,
    VideoAddPlace    : VideoAddPlace,
    VideoCatTagLink  : VideoAddCatTagLink,
    VideoLinkArticle : VideoAddLinked,
  },
  {
    tabBarComponent:null,
    initialRouteName:'VideoLink',
    headerMode: 'none',
    cardShadowEnabled : false,
    swipeEnabled : false,
  }
);

const AddClassified = createMaterialTopTabNavigator({
  ClassifiedAddContent : ClassifiedAddContent,
  ClassifiedAddPLace  : ClassifiedAddPLace
},
{
  tabBarComponent:null,
  initialRouteName:'ClassifiedAddContent',
  headerMode: 'none',
  cardShadowEnabled : false,
  swipeEnabled : false,
}
);


const AddTop = createBottomTabNavigator({
  Article    : AddArticle,
  Video      : AddVideo ,   
  Classified : AddClassified,
},{
  transitionConfig: () => fromRight(),       
  tabBarComponent:props => <AddTabBar {...props}/>,
  initialRouteName:'Classified',            
  swipeEnabled:false,
  lazy:true,

  // tabBarOptions:{
  //   activeBackgroundColor : 'transparent',
  //   inactiveTintColor:'rgba(47, 47, 47, .6 )',
  //   activeTintColor:'rgba(15,101,141,1)',
  //   showIcon: true,
  //   showLabel : false,
  //   style:{
  //     backgroundColor:'transparent',
  //   },
  // },
  
  // tabBarOptions:{
  //   upperCaseLabel : true,
  //   activeTintColor:'rgba(15,101,141,1)',
  //   inactiveTintColor : 'rgba(47, 47, 47, .9 )',
  //   labelStyle :{
  //     fontSize:13,
  //     letterSpacing:1,
  //     fontFamily:'Lato-Regular',
  //   },
  //   indicatorStyle : {
  //     backgroundColor:'rgba(15,101,141,.5)',
  //     height:1,
  //   },
  //   style:{
  //     backgroundColor:'white',
  //     height: brand === 'Apple' && models.includes(model) ? 88 : 68,
  //     height: Platform.select({android:50}),
  //     paddingTop: brand === 'Apple' && models.includes(model) ? 40 : 
  //                 brand === 'Apple' ? 20 : 5,
  //   }
  // },

 })

const AddStack = createStackNavigator({
  // Add   :   Add,
  AddTop : AddTop

},{
  // initialRouteName:'AddTop',
  headerMode: 'none',
}

);










const PlacesStack = createStackNavigator({
  Places   :   Places,
  Map : Maps
},{
  transitionConfig: () => fromRight(),       
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
  cardShadowEnabled : false,
});


const ProfileStack = createStackNavigator({
  Profile             :   Profile,
  Comments            :   Comments,
  Replies             :   Replies,
  Options             :   Options,
  OptionsArticles     :   OptionsArticles,
  Calender            :   Calender,
  CalenderArticles    :   CalenderArticles,
  Article             :   Article,
  Account             :   Account,
},{
  transitionConfig: () => fromRight(),       
  cardStyle:{
    backgroundColor:'transparent'
  },
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
    
  cardShadowEnabled : false,
});












const Tab = createBottomTabNavigator({
    Home    :  HomeStack,
    Search  :  SearchStack,
    Add     :  AddTop,
    Places  :  PlacesStack,
    Profile :  ProfileStack,
  },
  {
    tabBarComponent:props => <TabBar {...props}/>,
    initialRouteName:'Home',            
    animationEnabled : true,
    // tabBarOptions:{
    //   activeBackgroundColor : 'transparent',
    //   inactiveTintColor:'rgba(47, 47, 47, .6 )',
    //   activeTintColor:'rgba(15,101,141,1)',
    //   showIcon: true,
    //   showLabel : false,
    //   style:{
    //     backgroundColor:'transparent',
    //   //   position: 'absolute',
    //   //   right: 0,
    //   //   left: 0,
    //   //   bottom:0
    //   },
    // },
   
    
})








const LoginSignUp = createBottomTabNavigator({
  Login           :  Login,
  SignUp          :  SignUp,
  ForgotPassword  :  ForgotPassword,
  Terms           :  TermsLogin,
  Privacy         :  PrivacyLogin
},{
  tabBarComponent:props => <LoginHeader {...props}/>,
  lazy :false,
});




const ActivateStack = createBottomTabNavigator({
  Activate :  Activate
},{
  tabBarComponent:props => <LoginHeader {...props}/>,
  lazy :false,
});
// const switchNav = createSwitchNavigator({
//   LoginSignUp : LoginSignUp,
//   Tab : Tab,
// })

// const switchNav = createSwitchNavigator({
//   Tab:Tab,
//   Menu :  MenuStack
// }, {
//  initialRouteName: 'Tab',
// });
// forceInset={{ bottom: 'never'}}

const AppContainer = createAppContainer(Tab);
const LoginContainer = createAppContainer(LoginSignUp);
const ActivateContainer = createAppContainer(ActivateStack);




import { connect } from 'react-redux';
import {login, add_theme_white, add_theme_black} from './Store/Actions/index';

const state = state => {
  return {
    api               :   state.main.api,
    apiKey            :   state.main.apiKey,
    theme             :   state.themes.theme,
    LoggedIn          :   state.main.LoggedIn,
    user              :   state.main.user,
    headerColor       :   state.themes.headerColor
  };
};

const dispatch = dispatch => {
  return {
    this_login               :  response    =>  dispatch(login(response)),
    this_add_theme_white     :  ()          =>  dispatch(add_theme_white()),
    this_add_theme_black     :  ()          =>  dispatch(add_theme_black()),
  }
}

const ACCESS_TOKEN = 'access_token';

class App extends Component {

  constructor(props){
    super(props)

    this.props.LoggedIn ? this.props.this_add_theme_white() : this.props.this_add_theme_black()
    
}


  statusBar = (value) => {
    StatusBar.setHidden(false);

    if(value == 0){
      
      Platform.OS == 'android' ? StatusBar.setBackgroundColor('rgba(23,23,23,1)', true) : null
      StatusBar.setBarStyle('light-content')
      NavigationBar.setColor('#171717')
    }else{
      Platform.OS == 'android' ? StatusBar.setBackgroundColor('rgba(255,255,255,1)', true) : null
      StatusBar.setBarStyle('dark-content')
      NavigationBar.setColor('#FFFFFF')
    }
  }


  componentDidMount() {

    this.getToken();

  }

  // componentDidMount() {
  //   this.getToken();
  // }

  getToken = async () => {
    try {
       let token =  await AsyncStorage.getItem(ACCESS_TOKEN);

        if(token){

          await fetch('https://api.ipify.org/?format=json')
            .then((response) => response.json())
            .then((response) => {

                const { api, apiKey } = this.props;
                const url = `${api}/LoginSignUp/Login/login.php?key=${apiKey}&type=relogin&token=${token}&ip=${response.ip}&timezone=${timezone()}`;
                fetch(url)
                .then((response) => response.json())
                .then((response) => {

                  if(!response.data.error){

                      response.data.user.user_dark_mode || !response.data.user.user_active ? this.props.this_add_theme_black() : this.props.this_add_theme_white()
                      this.props.this_login(response);
                      SplashScreen.hide();

                  }
              
                })
          })

       }else{
        SplashScreen.hide();
       }
      } 
      catch (error) {
        console.warn('something went wrong get')
      }
}




  render() {  

    const {LoggedIn, user} = this.props



    value = this.props.theme == 'white' ? 1 : 0
    this.statusBar(value)

    
    let newApp ;
    newApp = LoggedIn ? user.user_active ? <AppContainer /> : <ActivateContainer/> : <LoginContainer />
    // newApp =  LoggedIn ? <AppContainer /> : null

      return (
        // <ImageBackground  style={styles.container} source={{uri:'http://www.wedngz.com/Tidngz/Images/tidngz-106.png'}} style={{flex: 1, width: '100%', height:'100%'}}>
      
            <View style={styles.container} >
            {/* <View style={styles.container_2} > */}
              {newApp}
            {/* </View>
            <View style={styles.container_2} >
              {newApp}
            </View> */}
          </View>
        // </ImageBackground>
      );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection:'row'
    // backgroundColor:'blue',
  },
  container_2 : {
    width:'50%'
  },

});

export default connect(state, dispatch)(App);

// const MaterialTab =  createMaterialBottomTabNavigator({
//   Home : {
//     screen : HomeStack,
//     navigationOptions : {
//         title : '',
//         tabBarColor : 'red',
//         tabBarIcon: ({tintColor}) => {
//           return  <Octicons name="home" size={26} color={tintColor} />
//         }
//     }
//   },
//   Search : {
//     screen : SearchStack,
//     navigationOptions : {
//         title : '',
//         tabBarColor : 'blue',
//         tabBarIcon: ({tintColor}) => {
//           return  <Octicons name="search" size={23} color={tintColor} />
//         }
//     }
//   },
//   Add : {
//     screen : AddStack,
//     navigationOptions : {
//         title : '',
//         tabBarColor : 'orange',
//         tabBarIcon: ({tintColor}) => {
//           return  <EvilIcons name="pencil" size={35} color={tintColor} />
//         }
//     }
//   },
//   Places : {
//     screen : PlacesStack,
//     navigationOptions : {
//         title : '',
//         tabBarColor : 'green',
//         tabBarIcon: ({tintColor}) => {
//           return  <Ionicons name="md-globe" size={27} color={tintColor} />
//         }
//     }
//   },
//   Profile : {
//     screen : ProfileStack,
//     navigationOptions : {
//         title : '',
//         tabBarColor : 'yellow',
//         tabBarIcon: ({tintColor}) => {
//           return  <FontAwesome name="user-o" size={22} color={tintColor} />
//         }
//     }
//   },
// },
// {
//   initialRouteName:'Home',  
//   inactiveColor: 'rgba(47, 47, 47, .6 )',
//   activeColor:'rgba(15,101,141,1)',
//   labeled:false,
//   barStyle: { backgroundColor: 'white' },
// }

// )

// export default createAppContainer(MaterialTab);