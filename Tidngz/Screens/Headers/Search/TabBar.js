import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, Platform, ImageBackground, StatusBar , TextInput, TouchableOpacity} from 'react-native';
import {brand, model, models} from '../../../Components/DeviceInfo/DeviceInfo';
import BlurView from '../../../Components/BlurVIew/BlurVIew';
import { connect } from 'react-redux';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const state = state => {
    return {
        tabBlur       :   state.themes.tabBlur,
        headerColor   :   state.themes.headerColor,
        headerIcons   :   state.themes.headerIcons,
    }
}

class SearchTabBar extends Component {


    render(){
        const {headerColor, headerIcons, tabBlur, navigate, state} = this.props;
        const {all, places, users, tags} = state;
        const allActive = all ? 'rgba(15,101,141,1)' : headerIcons 
        const placesActive = places ? 'rgba(15,101,141,1)' : headerIcons 
        const usersActive = users ? 'rgba(15,101,141,1)' : headerIcons 
        const tagsActive = tags ? 'rgba(15,101,141,1)' : headerIcons 

        return(
            <View style= {[styles.container]}>
                    <TouchableOpacity style={styles.tabItems} onPress={() => navigate('S_All')}>
                            <MaterialIcons style={styles.tabIcons} name="view-comfy" size={26} color={allActive} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItems} onPress={() => navigate('S_Places')}>
                            <MaterialIcons style={styles.tabIcons} name="place" size={26} color={placesActive} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItems} onPress={() => navigate('S_Users')}>
                            <MaterialIcons style={styles.tabIcons} name="person" size={26} color={usersActive} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItems} onPress={() => navigate('S_Tags')}>
                            <FontAwesome5 style={[styles.tabIcons, styles.tabTag]} name="slack-hash" size={21} color={tagsActive} />
                    </TouchableOpacity>
            </View>
        )
    }
        // marginTop:models.includes(model) ? 88 : brand === 'Apple' ? 64 : 50,
        // backgroundColor:
}

const styles = StyleSheet.create({
    container:{
      width:'100%', 
      height:44,
      marginTop:10,
      flexDirection:'row',
      overflow:'hidden'
    },
    tabItems : {
        width:'25%',
        height:'100%'
    },
    tabIcons : {
        width:'100%',
        height:'100%',
        textAlign:'center',
        lineHeight:44,
    },
    tabTag :{
        transform: [{ rotate: '25deg'}]
    }
})

export default connect(state)(SearchTabBar);