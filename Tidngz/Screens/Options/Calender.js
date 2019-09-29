import React, {Component} from 'react';
import {Platform, StyleSheet, View, TextInput, Text, ScrollView, DatePickerIOS, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import Header from '../Headers/FloatHeader'
import style from '../../Styles/Styles'
import BlurView from '../../Components/BlurVIew/BlurVIew';
import Theme from '../../Components/Themes/Themes';
import DateTimePicker from 'react-native-modal-datetime-picker';
import DatePicker from 'react-native-datepicker'
import moment from 'moment';
const state = state => {
  return {
      backgroundMain   :   state.themes.backgroundMain,
      headerColor      :   state.themes.headerColor,
      tabBlur          :   state.themes.tabBlur,
      menuIconColor    :   state.themes.menuIconColor,
      menuIconColor2   :   state.themes.menuIconColor2,
  }
}

const dispatch = dispatch => {
    return {
        
    }
}

class Calender extends Component {


  static navigationOptions = ({navigation}) =>  {
    return {
        header: null,
        headerTransparent : true,
        }
    } 

    

  constructor(props) {
    super(props);

    this.state = {
      // isDateTimePickerVisible: false,
      date_1:null,
      date_2:null,
      minDate:'17-07-2017',
      maxDate:new Date(),
    };
  
  }




  addDate1 = (date) => {

    const { date_2 } = this.state

    date_1_com = moment(date, ["DD-MM-YYYY", "YYYY-MM-DD"]);
    date_2_com = moment(date_2, ["DD-MM-YYYY", "YYYY-MM-DD"]);

    moment(date_1_com).isSame(date_2_com) == false ? 
    this.setState({date_1: date}) : null

  }


  addDate2 = (date) => {

    const { date_1 } = this.state

    date_1_com = moment(date_1, ["DD-MM-YYYY", "YYYY-MM-DD"]);
    date_2_com = moment(date, ["DD-MM-YYYY", "YYYY-MM-DD"]);

    moment(date_1_com).isSame(date_2_com) == false ? 
    this.setState({date_2: date}) : null

  }
   
  render() {

    const { backgroundMain , headerColor, tabBlur , menuIconColor, menuIconColor2, navigation} = this.props;

    const { date_1, date_2 , minDate, maxDate} = this.state


    date_1_com = moment(date_1, ["DD-MM-YYYY", "YYYY-MM-DD"]);
    date_2_com = moment(date_2, ["DD-MM-YYYY", "YYYY-MM-DD"]);
    
    // const date2Dis        =   date_1 != null && moment(date_1_com).isSame(date_2_com) == false ? 'flex' : 'none';
    const dis = date_1 != null ? 'flex' : 'none';

    const flexDirection = moment(date_1_com).isAfter(date_2_com) ? 'row-reverse' : 'row'

    const selectedDates = date_1 != null && date_2 != null ? 'Selected Dates Between' : date_1 != null ? 'Selected Date' : null

    const selectedDatesDis = date_1 != null && date_2 != null ? 'flex' : 'none';

   

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let date_1_text = new Date(date_1_com);
    let day = date_1_text.getDate();
    let year = date_1_text.getFullYear();
    let month = months[date_1_text.getMonth()];
    if(day == 1 || day == 21 || day == 31){
      day = day + "st";
    }
    else if(day == 2 || day == 22 ){
      day = day + "nd";
    }
    else if(day == 3 || day == 23 ){
      day = day + "rd";
    }
    else
    {
      day = day + "th";
    }


    var date_2_text = new Date(date_2_com);
    var day_2 = date_2_text.getDate();
    var year_2 = date_2_text.getFullYear();
    var month_2 = months[date_2_text.getMonth()];
    if(day_2 == 1 || day_2 == 21 || day_2 == 31){
      day_2 = day_2 + "st";
    }
    else if(day_2 == 2 || day_2 == 22 ){
      day_2 = day_2 + "nd";
    }
    else if(day_2 == 3 || day_2 == 23 ){
      day_2 = day_2 + "rd";
    }
    else
    {
      day_2 = day_2 + "th";
    }


    date_1_text = date_1 == null ? date_1 : `${day} ${month} ${year}`
    date_2_text = date_2 == null ? date_2 : `${day_2} ${month_2} ${year_2}`


    const optionName = navigation.getParam('optionName' , '')
    const optionNumber = navigation.getParam('option' , 1)
    const routeName = navigation.getParam('routeName' , '')
    const headerText = navigation.getParam('headerText' , '')


    const date1Route = moment(date_1_com).isAfter(date_2_com) ? date_2_text : date_1_text
    const date2Route = moment(date_1_com).isAfter(date_2_com) ? date_1_text : date_2_text

    const date_1_query =  moment(date_1_com).isAfter(date_2_com) ? date_2_com : date_1_com
    const date_2_query =  moment(date_1_com).isAfter(date_2_com) ? date_1_com : date_2_com


    return (
      <View style={[styles.container, {backgroundColor : backgroundMain}]}>

      <Theme/>

            <View style={[styles.container, style.paddingBackgroundTop, style.paddingBackgroundBottom_2]}>

                  <Text style={[style.bt, styles.calenderSummary, {color:menuIconColor, marginTop:0}]}>
                      Get top news for the last 24 hours, 48 hours, 1 week or 1 month.
                  </Text>

                  <View style={styles.calenderOptions}>
                    <TouchableOpacity style={[styles.calenderOptionsEach, {backgroundColor:Platform.select({android:headerColor})}]} onPress={() => navigation.navigate('CalenderArticles', {routeName: routeName, headerText:headerText, name : optionName, top : 1, optionName : optionName, option : optionNumber, type:'top'})}>
                        <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={7} />  
                        <Text style={[style.ca, styles.calenderOptionsText, {color:menuIconColor}]}>24H</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.calenderOptionsEach, {backgroundColor:Platform.select({android:headerColor})}]} onPress={() => navigation.navigate('CalenderArticles', {routeName: routeName, headerText:headerText, name : optionName, top : 2, optionName : optionName, option : optionNumber, type:'top'})}>
                        <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={7} />  
                        <Text style={[style.ca, styles.calenderOptionsText, {color:menuIconColor}]}>48H</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.calenderOptionsEach, {backgroundColor:Platform.select({android:headerColor})}]} onPress={() => navigation.navigate('CalenderArticles', {routeName: routeName, headerText:headerText, name : optionName, top : 3, optionName : optionName, option : optionNumber, type:'top'})}>
                        <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={7} />  
                        <Text style={[style.ca, styles.calenderOptionsText, {color:menuIconColor}]}>1W</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.calenderOptionsEach, {backgroundColor:Platform.select({android:headerColor})}]} onPress={() => navigation.navigate('CalenderArticles', {routeName: routeName, headerText:headerText, name : optionName, top : 4, optionName : optionName, option : optionNumber, type:'top'})}>
                        <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={7} />  
                        <Text style={[style.ca, styles.calenderOptionsText, {color:menuIconColor}]}>1M</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={[styles.line, style.line]}></View>

                  <Text style={[style.bt, styles.calenderSummary, {color:menuIconColor}]}>
                      Select a date or a date range below to get articles from our archieved library. Please Note, our archive library stores news according to GMT+0.
                  </Text>

                  <View style={[styles.datesHeader, {display:dis}]}>
                      <View style={styles.datesHeaderSection}>
                        <Text style={[style.ci, styles.datesHeaderSectionText, {color:menuIconColor}]}>{selectedDates}</Text>
                      </View>
                      <View style={[styles.datesHeaderSection, {display:selectedDatesDis}]}>
                        <Text style={[style.ci, styles.datesHeaderSectionText2, {color:menuIconColor2}]}>Start Date</Text>
                        <Text style={[style.ci, styles.datesHeaderSectionText2, {color:menuIconColor2}]}>End Date</Text>
                      </View>
                  </View>

                  <View style={[styles.calenderOptions2, {flexDirection:flexDirection}]}>

                        <DatePicker
                              style={{width: '50%'}}
                              date={date_1}
                              dateText={date_1_text}
                              mode="date"
                              format="DD-MM-YYYY"
                              placeholder="Select a date"
                              blurType={tabBlur}
                              minDate={minDate}
                              maxDate={maxDate}
                              confirmBtnText="CONFIRM"
                              cancelBtnText="CANCEL"
                              TouchableComponent = {TouchableOpacity}
                              showIcon = {false}
                              customStyles={{
                                dateInput: style.ca,
                                dateText: [style.ca, styles.dateText, {color : menuIconColor}],
                                placeholderText: [style.ca, styles.dateText, {color : menuIconColor}],
                                btnTextConfirm : [style.ca, styles.confirmTextStyle],
                                btnTextCancel : [style.ca, styles.confirmTextStyle],

                              }}
                              onDateChange={(date) => {this.addDate1(date)}}
                          />



                          <DatePicker
                              style={{width: '50%', display:dis}}
                              date={date_2}
                              dateText={date_2_text}
                              mode="date"
                              format="DD-MM-YYYY"
                              placeholder="Select another date"
                              blurType={tabBlur}
                              minDate={minDate}
                              maxDate={maxDate}
                              confirmBtnText="CONFIRM"
                              cancelBtnText="CANCEL"
                              TouchableComponent = {TouchableOpacity}
                              showIcon = {false}
                              customStyles={{
                                dateInput: style.ca,
                                dateText: [style.ca, styles.dateText, {color : menuIconColor}],
                                placeholderText: [style.ca, styles.dateText, {color : menuIconColor}],
                                btnTextConfirm : [style.ca, styles.confirmTextStyle],
                                btnTextCancel : [style.ca, styles.confirmTextStyle],

                              }}
                              onDateChange={(date) => {this.addDate2(date)}}
                          />


                            
                  </View>          

                  <TouchableOpacity style={[styles.viewArticles, {display:dis}]}  onPress={() => navigation.navigate('CalenderArticles', {routeName: routeName, headerText:headerText, name : optionName,  date_1 : date_1_query, date_2 : date_2_query, date_1_name : date1Route, date_2_name : date2Route, optionName : optionName, option : optionNumber, type:'calender'})}>
                              <Text style={[style.ci, styles.viewArticlesText]}>View Articles</Text>
                  </TouchableOpacity>  
        
            
                  <Header/>

                

            </View> 
       </View> 
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor:'blue',
    },
    line : {
      width: '90%',
    },
    calenderSummary : {
      fontSize: 12,
      letterSpacing : .8,
      lineHeight: 22,
      textAlign:'center',
      marginHorizontal : 10,
      marginVertical : 40,
    },
    calenderOptions: {
      height : 40,
      flexDirection:'row',
      marginBottom:40,
    },
    calenderOptionsEach:{
      height : 40,
      width: '20%',
      marginHorizontal: '2.5%',
      borderRadius:5,
      borderWidth:1,
      overflow:'hidden',
      borderColor:'rgba(23,23,23,.2)'
    },
    calenderOptionsText : {
      lineHeight:40,
      width: '100%',
      fontSize:20,
      letterSpacing:1,
      textAlign:'center',
      textShadowColor: 'rgba(102,102,102, .5)',
      textShadowOffset: {width: 0, height: 1},
      textShadowRadius: 1,
      letterSpacing:1.5,
    },

    calenderOptions2:{
      height : 40,
      marginBottom : 30,
      width:'100%',
      justifyContent:'flex-start',
      // backgroundColor:'red'
    },
    datePicker: {
      // backgroundColor:'red',
    },
    confirmTextStyle : {
      color: 'rgba(15,101,141,1)',
      letterSpacing:1,
      fontSize:18
    },
    dateText : {
      color:'rgba(15,101,141,1)',
      fontWeight:'400',
      // textShadowColor: 'rgba(0,0,0, .8)',
      // textShadowOffset: {width: 1, height: -0},
      // textShadowRadius: 1,
      letterSpacing:.7,
      fontSize:17
    },
    datesHeader : {
      width:'100%',
      // height: 70,
    },
    datesHeaderSection : {
      width:'100%',
      height: 25,
      marginBottom:10,
      flexDirection:'row',
      justifyContent:'center',
    },
    datesHeaderSectionText:{
      width:'100%',
      lineHeight:25,
      height:25,
      textAlign:'center',
      letterSpacing:1,
      fontSize:15,
    },
    datesHeaderSectionText2:{
      width:'50%',
      lineHeight:40,
      textAlign:'center',
      letterSpacing:.8,
      fontSize:13,
    },
    viewArticles:{
      height: 40,
      width:'100%',
    },
    viewArticlesText:{
      lineHeight : 40,
      textAlign:'center',
      fontSize:20,
      letterSpacing:1,
      color:'rgba(15,101,141,1)',
      fontWeight:Platform.select({android: '400', ios:'bold'}),
      textShadowColor: 'rgba(0,0,0, .8)',
      textShadowOffset: {width: 1, height: -0},
      textShadowRadius: 1,
    }
  });
  


export default connect(state)(Calender);