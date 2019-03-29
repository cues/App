

import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text, Dimensions, ImageBackground} from 'react-native';
import TextsInput from './src/components/TextsInput/TextsInput';
import TextList from './src/components/TextList/TextList';
import TextDetail from './src/components/TextDetail/TextDetail';
import textImage from './src/assets/tidngz-2.png';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


// type Props = {};
export default class App extends Component{
  state = {
    allTexts : [],
    selectedItem: null,
    id : null,
    start : 1
  }
  

  itemDeletedHandler = () => {
    this.setState(prevState => {
      return {
        allTexts : prevState.allTexts.filter(text => {
          return text.key !== prevState.selectedItem.key
        }),
        selectedItem:null
      }
    })
  }

  itemSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedItem: prevState.allTexts.find(text => {
          return text.key === key;
        })
      }
    })
  }

  closeModal = () => {
    this.setState({selectedItem:null})
  }

  onTextSubmit = (textName , textImage) => {
    this.setState(prevState => {
      return {
        allTexts : prevState.allTexts.concat({
          key: Math.random(), 
          name : textName,
          image : { uri: textImage }
        })
      }
    })
  }

  componentDidMount()  {
    
    this.loadArticles();

  }
  
_onScroll = e => {
    var windowHeight = Dimensions.get('window').height,
    height = e.nativeEvent.contentSize.height,
    offset = e.nativeEvent.contentOffset.y;
        if( windowHeight + offset >= height - 1000){
            this.loadArticles(2);
        }
}

loadArticles = () => {

  var start = this.state.start;
  
  const user_id = 120;
  const articles_id = 494;
  const url = `http://www.wedngz.com/Tidngz/API/Articles/articles.php?key=tidngz1707&user_id=${user_id}&type=2&last_articles_id=500&article_source=11&records_per_page=1&start=${start}&screen_size=1`;
  const url_2 = `http://www.wedngz.com/Tidngz/API/Articles/Bookmark/bookmark.php?key=1707&user_id=120&user_id_article=1&articles_id=494&category=6`;

  start++;
  this.setState({start : start})

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      let response = JSON.parse(xhttp.response);
      if(response.data.articles_type == 1 && response.data.image.image_thumbnail != null){
        const title = response.data.articles_title;
        const image = response.data.image.image_thumbnail;
        this.onTextSubmit(title,image)
      }
     
    }
  };
  xhttp.open("GET",  url, true);
  xhttp.send();

    
  return fetch(url)
  .then((response) => response.json())
  .then((response) => {
    if(response.data.articles_type == 1){
      const title = response.data.articles_title;
      const image = response.data.image.image_thumbnail;
      this.onTextSubmit(title,image)
    }
  })
  .catch((error) =>{
    console.error(error);
  });

  }




 

  render() {
    
    const {closeModal, itemDeletedHandler, onTextSubmit, itemSelectedHandler, loadArticles, _onScroll} = this;
    const {selectedItem, allTexts} = this.state;


   
  

    return (


      <ImageBackground source={{uri:'http://www.wedngz.com/Tidngz/Images/tidngz-60.png'}} style={{width: '100%', height: '100%'}}>
          
            <View style={styles.container}>
                  <TextDetail selectedItem={selectedItem} closeModal={closeModal} onItemDeleted = {itemDeletedHandler}/>

                  <TextsInput onTextSubmit={onTextSubmit}/>

                  <TextList allTexts = {allTexts}  onItemSelected = {itemSelectedHandler}   loadArticles = {loadArticles} _onScroll={_onScroll}/>          
            </View>
        
      </ImageBackground>
          

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // width:'100%'
    // backgroundColor: 'red',
    
  },
});
