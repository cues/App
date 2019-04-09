import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Animated} from 'react-native';
import { connect } from 'react-redux';
import float from '../Headers/Float';
import Articles from '../../Functions/Articles/ArticleList';
import {brand, model, models} from '../../Components/DeviceInfo/DeviceInfo';
import Header from '../Headers/FloatHeader_2';
import { _handleScroll } from '../../Components/HeaderScroll/HeaderScroll'
import Theme from '../../Components/Themes/Themes';

const state = state => {
    return {
        backgroundMain   :   state.themes.backgroundMain,
    }
}

const dispatch = dispatch => {
    return {
        
    }
}


FLOAT_HEADER_MAX_HEIGHT = models.includes(model) ? 130 : brand === 'Apple' ? 120 : 50 
FLOAT_HEADER_MIN_HEIGHT = models.includes(model) ? 100 : brand === 'Apple' ? 97 : 50



class Options extends Component {



    static navigationOptions = ({navigation}) =>  {
        return {
            header: null,
            headerTransparent : true,
            }
        } 
    
        state = {
            scrollAnim: new Animated.Value(0),
            offsetAnim: new Animated.Value(0),
        }


        handleMomentumScrollBegin = (event) => {
      
            this._previousScrollvalue = event.nativeEvent.contentOffset.y;
    
        };
            
      
        handleScroll = (event) => {
    
            this._currentScrollValue = event.nativeEvent.contentOffset.y;
    
            _handleScroll(this._previousScrollvalue, this._currentScrollValue, FLOAT_HEADER_MAX_HEIGHT, this.state.offsetAnim)
    
        };
    


    render (){
        const  { backgroundMain, navigation } = this.props


        return (
            <View style={[styles.container, {backgroundColor: backgroundMain}]}>
                <Theme/>
                
                <Articles 
                        type = 'options'
                        scrollAnim = {this.state.scrollAnim}
                        handleScroll = {this.handleScroll}
                        onMomentumScrollBegin = {this.handleMomentumScrollBegin}
                    />

                <Header scrollAnim={this.state.scrollAnim} 
                    offsetAnim={this.state.offsetAnim}
                    />


            </View>
        )
    }
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width:'100%',
    }
})


export default connect(state)(Options);