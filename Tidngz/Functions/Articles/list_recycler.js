import React, {Component} from 'react';
import {Dimensions, FlatList, View, Image, Text, StyleSheet, ActivityIndicator,   ScrollView } from 'react-native';

import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import faker from 'faker';
import Article from './Article';

const SCREEN_WIDTH = Dimensions.get('window').width;
let fakeData = [];

export default class ArticleList extends Component {

    // state = {
    //     dataProviders : new DataProvider((r1, r2) => {
    //         return r1 !== r2;
    //     }),
    //     list:null,
    //     layoutProvider : null
    // }

        constructor(props){
            super(props);

        //     // let dataProvider = new DataProvider((r1, r2) => {
        //     //     return r1 !== r2;
        //     // })


     
        

            this.state = {
                dataProviders : new DataProvider((r1, r2) => { return r1 !== r2 }),
                list:null,
                layoutProvider : null,
                loader :false,
                count: 0,
                start : 0,
                records_per_page:10,
            }

        //     this.getData();

           
        }


        componentWillMount() {
            this.getData();
        }

    
        async getData() {

        let start             = this.state.start;
        let records_per_page  = this.state.records_per_page;

         const url = `https://www.wedngz.com/Tidngz/API/Articles/articles.php?key=1707&user_id=120&type=2&last_articles_id=500&article_source=11&records_per_page=${records_per_page}&start=${start}`;
        
        
        await fetch(url)
          .then((response) => response.json())
          .then((response) => {
            for(a = 0; a < response.data.articles.length; a++){
                article = response.data.articles[a];
                article.image.image_thumbnail = article.articles_type == 2 ? article.video.video_img_thumbnail : article.image.image_thumbnail;

                    fakeData.push({
                        type: 'NORMAL',
                        item: {
                            article : article,
                            // id             :   article.articles_id,
                            // image          :   'http://www.wedngz.com/Tidngz/Article_Images/tidngz-article-498-1-120-standard.png',
                            // name           :   article.articles_title,
                            // description    :   article.articles_content,
                            // image: 'https://www.wedngz.com/Tidngz/Article_Images/tidngz-article-498-1-120-standard.png',
                            // name: article.articles_title,
                            // description: article.articles_content,
                        },
                    });
                }


                
          })
          .catch((error) =>{
            this.setState({error : error})
            console.error(error);
          });
        

                // for(i = 0; i<100; i++){
                //     fakeData.push({
                //         type: 'NORMAL',
                //         item: {
                //         id: i,
                //         image: faker.image.avatar(),
                //         name: faker.name.firstName(),
                //         description: faker.random.words(5),
                //         },
                //     });
                // }

                start = start + records_per_page;
             
                this.setState({
                    count: 1,
                    start:start,
                    loader:false,
                    list: this.state.dataProviders.cloneWithRows(fakeData),
                    layoutProvider : new LayoutProvider ((index) => {
                            return this.state.list.getDataForIndex(index).type;
                        }, (type, dim) => {
                                switch (type) {
                                    case 'NORMAL' :
                                        dim.width  = SCREEN_WIDTH;
                                        dim.height = 100;
                                        break;
                                    default :
                                        dim.width  = 0;
                                        dim.height = 0;
                                };
                            }
                        ),
                })
            
        }









        rowRenderer = (type, data) => {

            const {image, name, description} = data.item;

            return (
                <Article
                    article = {data.item.article}
                    key = {data.item.articles_id}
                />
                
                // <View style={styles.listItem}>
                //     <Image style={styles.image} source={{ uri: image }} />
                //     <View style={styles.body}>
                //         <Text style={styles.name}>{name}</Text>
                //         {/* <Text style={styles.description}>{description}</Text> */}
                //     </View>
                // </View>
            )
        }


        //   scrollToTop = () => {
        //     this.scroller.scrollTo({x: 0, y: 0, animated: true});
        //   };

        onEndReached = () => {
            if(!this.state.loader){
                // setTimeout(() => {
                    this.setState({loader:true});
                    // this.setState({count:0});
                    this.getData();
                // },500)
             }
        }

        renderFooter = () => {

            return this.state.loader
              ? <ActivityIndicator
                  style={{ margin: 10 }}
                  size="large"
                  color={'black'}
                />
              : <View style={{ height: 60 }} />;
          };


          _onScroll = e => {
            var windowHeight = Dimensions.get('window').height,
            height = e.nativeEvent.contentSize.height,
            offset = e.nativeEvent.contentOffset.y;
                if( windowHeight + offset >= height - 1000){
                    if(!this.state.loader){
                        this.setState({loader:true});
                        this.getData();
                    }
                }
        }

        render(){
            return(
                <View style={styles.container}>
             
                {this.state.count > 0 ?
   
                    <RecyclerListView 
                    onScroll={this._onScroll}
                    // scrollEnabled={false}
                        //  ref={(scroller) => {this.scroller = scroller}}
                        //  contentContainerStyle={{ margin: 3 }}
                        style={{flex: 1}}
                        rowRenderer = {this.rowRenderer}
                        dataProvider = {this.state.list}
                        layoutProvider = {this.state.layoutProvider}
                        // onEndReached    = {this.onEndReached}
                        // onEndThreshold={100}
                        // bounces={false}
                        // pagingEnabled={true}
                        
                        // renderAheadOffset = {3}
                        // renderFooter={this.renderFooter}
                    />  : null


                }

                </View>
            )
        }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        // alignItems: 'stretch',
        // justifyContent: 'space-between',
        width:SCREEN_WIDTH
    },
    // body: {
    //     marginLeft: 10,
    //     marginRight: 10,
    //     maxWidth: SCREEN_WIDTH - (80 + 10 + 20),
    //   },
    //   image: {
    //     height: 80,
    //     width: 80,
    //   },
    //   name: {
    //     fontSize: 20,
    //     fontWeight: 'bold',
    //   },
    //   description: {
    //     fontSize: 14,
    //     opacity: 0.5,
    //   },
    //   listItem: {
    //     flexDirection: 'row',
    //     margin: 10,
    //   },
   
  });
  

