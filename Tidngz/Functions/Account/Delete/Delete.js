import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text , TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import style from '../../../Styles/Styles';
import DeleteButton from '../../../Components/Button/Button';
import MaterialIcons from  'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';
import BlurView from '../../../Components/BlurVIew/BlurVIew';


import { logout, add_theme_black, error, error_2 } from '../../../Store/Actions/index'

const state = state => {
    return {
        api             :   state.main.api,
        apiKey          :   state.main.apiKey,
        token           :   state.main.user.token,
        user_id         :  state.main.user.user_id,
        menuIconColor   :  state.themes.menuIconColor,
        menuIconColor_2 :  state.themes.menuIconColor_2,
        accountFloat    :  state.themes.accountFloat,
        tabBlur         :   state.themes.tabBlur,
    }
}

const dispatch = dispatch => {
    return {
        this_logout              :   ()         =>  dispatch(logout()),
        this_add_theme_black     :   ()         =>  dispatch(add_theme_black()),
        this_error               :   text       =>  dispatch(error(text)),
        this_error_2             :   ()         =>  dispatch(error_2()),
    }
}

const ACCESS_TOKEN = 'access_token';

class Delete extends Component {


    constructor(props){
        super(props)

        this.state = {
            deleteSure : false
        }
    }


    deleteOpen = () => {
        this.setState({
            deleteSure : true
        })
    }


    deleteClose = () => {
        this.setState({
            deleteSure : false
        })
    }


    logout = () => {
        this.removeToken()
        this.props.this_add_theme_black()
        this.props.this_logout();
    }

    removeToken = async () => {
        try {
            await AsyncStorage.removeItem(ACCESS_TOKEN);
        } catch (error) {
            // console.warn('something went wrong')
        }
    }



    deleteHandler = () => {

            const { api, apiKey , token, user_id , this_error, this_error_2 } = this.props;
    
    
            const url = `${api}/Account/Delete/delete.php?key=${apiKey}&token=${token}&user_id=${user_id}&delete=1`;
    
    
            fetch(url)
            .then((response) => response.json())
            .then((response) => {
    
    
                if(response.data.error){
                    this_error('Something went wrong, please try again')
                    setTimeout(() => {
                        this_error_2()
                    },2500)
                }
                else{
                    this.logout()
                }
            
            })
         
    
    }

    render (){
        
        
        const { visible , menuIconColor , menuIconColor2 , accountFloat, tabBlur} = this.props

        const { deleteOpen , deleteClose , deleteHandler } = this

        const { deleteSure } = this.state

        const absolute = visible == 'flex' ? styles.containerAbsolute : null

        const displayDelete = deleteSure ? 'flex' : 'none'
        const absolute_2 = deleteSure ? styles.containerAbsolute : null


        return (
            <View style={[styles.container, absolute, {display : visible}]}>
                <View style={[styles.sureContainer, absolute_2, {display : displayDelete , backgroundColor:Platform.select({android : accountFloat})}]}>
                    <BlurView  viewRef={1}  blurType={tabBlur} blurAmount={10} />
                    <View style={style.displayFlex}>
                        <Text style={[styles.sure_text, style.bt, {color:menuIconColor}]}>Are you absolutely sure? </Text>
                    </View>
                    <View style={[styles.sureButtonContainer, style.displayFlex]}>
                        <TouchableOpacity style={[styles.deleteIcon , style.displayFlex]} onPress={deleteHandler}>
                            <MaterialIcons  name='check' size={45} color={menuIconColor} />
                        </TouchableOpacity>
                        <TouchableOpacity  style={[styles.deleteIcon , style.displayFlex]} onPress={deleteClose}>
                            <MaterialIcons name='close' size={45} color={menuIconColor} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.deleteContainer_1]}>
                    <Text style={[styles.deleteContainer_1_text, style.bt, {color:menuIconColor}]}>Are you sure you want to delete your Account?</Text>
                </View>
                <View style={[styles.deleteContainer_2]}>
                    <Text style={[styles.deleteContainer_2_text, style.bt, {color:menuIconColor}]}>This can't be undone {"\n"} {"\n"} Everything will be deleted except your articles which will be displayed as Anonymous</Text>
                </View>
                <View style={[styles.deleteContainer_3]}>
                    <DeleteButton text='YES' styleProps={styles.button} stylePropsText={styles.buttonText} handler={deleteOpen}/>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container : {
        height : '100%',
        width:'100%',
        left:0,
        top:0,
        // backgroundColor:'orange'
    },
    containerAbsolute : {
        position:'absolute',
    },
    sureContainer : {
        top:0,
        left:0,
        bottom:0,
        right:0,
        zIndex:1,
        borderRadius:10,
        overflow:'hidden'

    },
    sure_text:{
        fontSize:21,
        paddingHorizontal:20,
        fontWeight:'bold',
        textAlign:"center",
        lineHeight:40,
        // backgroundColor:'red',
    },
    sureButtonContainer : {
        flexDirection:'row'
    },
    deleteIcon : {
        // backgroundColor:'red',
        height:80,
        width:80,
        marginHorizontal:20
    },

    deleteContainer_1 : {
        flex :2,
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:10
        // backgroundColor:'blue'
    },
    deleteContainer_1_text:{
        fontSize:17,
        fontWeight:'bold',
        textAlign:"center",
        lineHeight:30
    },


    deleteContainer_2 : {
        flex :3,
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:10
        // backgroundColor:'red'
    },
    deleteContainer_2_text:{
        fontSize:14,
        textAlign:"center",
        lineHeight:25
    },


    deleteContainer_3 : {
        flex :2,
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor:'green'
    },
    button:{
        width: '100%',
        marginVertical : null
    },
    buttonText : {
        fontSize:19,
        letterSpacing : 1.8,
    }
})



export default connect(state, dispatch)(Delete);