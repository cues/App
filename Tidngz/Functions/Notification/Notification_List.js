import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, Text, View, FlatList, Animated} from 'react-native';
import {OptimizedFlatList} from 'react-native-optimized-flatlist'
import HeaderBottomFlatlist from '../../Components/UI/HeaderBottomFlatlist/HeaderBottomFlatlist';
import Loader from '../../Components/UI/Loader/Loader';
import FooterText from '../../Components/UI/Loader/FooterText';

import Notification from './Notification';
import {brand, model, models} from '../../Components/DeviceInfo/DeviceInfo';
      
import { connect } from 'react-redux';
import { get_notifications, load_notifications, count_notifications } from '../../Store/Actions/notifications'

const state = state => {
  return {
      api                     :   state.main.api,
      user_id                 :   state.main.user.user_id,
      apiKey                  :   state.main.apiKey,
      backgroundMain          :   state.themes.backgroundMain,
      menuIconColor           :   state.themes.menuIconColor,
      menuIconColor2          :   state.themes.menuIconColor2,
      menuText                :   state.themes.menuText,
      allNotifications        :   state.notifications.allNotifications,
      records_per_page        :   state.notifications.records_per_page,
      number_of_pages         :   state.notifications.number_of_pages,
      start                   :   state.notifications.start,
      current_page            :   state.notifications.current_page,
      notification_ids        :   state.notifications.notification_ids,
      loader                  :   state.notifications.loader,
      selectedNotification    :   state.notifications.selectedNotification,
  };
};

const dispatch = dispatch => {
  return {
    this_get_notifications    : notification                                            => dispatch(get_notifications(notification)),
    this_load_notifications   : (current_page, start)                                   => dispatch(load_notifications(current_page, start)),
    this_count_notifications  : (total_records, notification_ids,  number_of_pages)     => dispatch(count_notifications(total_records, notification_ids,  number_of_pages)),
  }
}

class NotificationsList extends Component {


  constructor(props){
    super(props)

    this.state = {
      loader     : true,
      refreshing : false
    }
   
  }


  componentDidMount(){

    const { number_of_pages , start , current_page} = this.props
    
    setTimeout(() => {

        if(start != 0 && current_page == number_of_pages ){
            this.setState({
                loader : false
            })
        }


        const { loader } = this.state

        if(loader){
            if(start == 0 && number_of_pages == null){
                this.loadNotifications();
            }else{
                if(current_page <= number_of_pages){
                    this.getNotifications();
                }
            }
        }

    //    console.warn(loader)
    //    console.warn(start)
    //    console.warn(current_page)
    //    console.warn(number_of_pages)

    },100)

  }


  loadNotifications = async () => {
    const { api, user_id, apiKey , records_per_page, this_count_notifications } = this.props
    url = `${api}/Notifications/notification.php?key=${apiKey}&user_id=${user_id}&type=1`;

    await fetch(url)
    .then((response) => response.json())
    .then((response) => {

        total_records     =  response.data.total_records
        number_of_pages   =  Math.ceil(total_records / records_per_page);
        notification_ids  =  response.data.notification_ids
        // console.warn(total_records)
        // console.warn(number_of_pages)

        this_count_notifications(total_records, notification_ids,  number_of_pages)
        setTimeout(() => {
            this.getNotifications();
        },100)
    })
    .catch((error) =>{
    });

      
  }


  getNotifications = async () => {
    const { api, user_id, apiKey , this_get_notifications , this_load_notifications , notification_ids} = this.props
    let { records_per_page , current_page , start } = this.props

    url = `${api}/Notifications/notification.php?key=${apiKey}&user_id=${user_id}&type=2&records_per_page=${records_per_page}&start=${start}&notification_ids=${notification_ids}`;

    await fetch(url)
    .then((response) => response.json())
    .then((response) => {

          for(n = 0; n < response.data.notifications.length; n++){

              notification = response.data.notifications[n];
            //   console.warn(notification)
            
              this_get_notifications(notification)

              this.setState({
                loader     : false,
                refreshing : false,
              })
          
          }
     
    })
    .catch((error) =>{
      this.setState({
          loader : false,
          refreshing : false,
      })
    });


    current_page++;
    start = start + records_per_page;
      
    this_load_notifications(current_page, start)
      
  }



  onScroll = () => {
    const { number_of_pages , current_page , start } = this.props
    const { loader } = this.state

    // console.warn(current_page)
    // console.warn(number_of_pages)

    if(!loader && start != 0 && current_page <= number_of_pages){
            this.setState({
                loader : true,
            })
          this.getNotifications();
    }
}

renderFooter = () => {
    const { start, current_page, number_of_pages } = this.props
    const { refreshing, loader } = this.state

    const footer = current_page <= number_of_pages ? !refreshing && loader ? <Loader style={styles.loader}/> : null : start != 0 ? <FooterText text='Thats All!' thatsAllView={styles.loader}/> : null 
     
    return footer    
         
}




renderItem = ({item}) => {

    if(item.key == 1){

        return (
              <View key={item.key}>
                  <HeaderBottomFlatlist/>
              </View>
        )

    }
    else{

      return <Notification item={item}/>


    }

}








    render() {
      
      const { allNotifications, onMomentumScrollBegin, handleScroll, type} = this.props;

      // console.warn(allNotifications)

      return (
        <View style = {styles.flatlist}>

                    <OptimizedFlatList 
                         style = {styles.flatlist}
                        data = {allNotifications}
                        maxToRenderPerBatch={3}
                        updateCellsBatchingPeriod={100}
                        windowSize={3}
                        initialNumToRender={3}
                        renderItem = {this.renderItem}
                        keyExtractor={this._keyExtractor}
                        onEndReached={this.onScroll}
                        onEndReachedThreshold={.5}
                        scrollEventThrottle={16}
                        onScroll = {Animated.event(
                            [{nativeEvent : {contentOffset : {y : this.props.scrollAnim}}}],
                            {
                                listener : (event) => {
                                    handleScroll(event)
                                }
                            },
                            
                        )}
                        onMomentumScrollBegin={onMomentumScrollBegin}
                        ListFooterComponent={this.renderFooter}
                    />  
          
          </View>

        );
    }
}

const styles = StyleSheet.create({
  flatlist : {
    marginVertical:5,
    width : '100%',
    minHeight : '100%'
  },
  loader :{
      marginTop: 25, 
      marginBottom: Platform.select({android:108 , ios : models.includes(model) ? 128 : 108})
  },
  loader_2 :{
      marginTop: 0, 
      marginBottom: Platform.select({android:108 , ios : models.includes(model) ? 128 : 108})
  }
  });




  export default connect(state, dispatch)(NotificationsList);
  