import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Dimensions, Platform} from 'react-native';
import style from '../../Styles/Styles';
import BlurView from '../../Components/BlurVIew/BlurVIew';
import * as Animatable from 'react-native-animatable';
import {brand, model, models, models2} from '../../Components/DeviceInfo/DeviceInfo';
import Modal from '../../Components/UI/Modal/Modal';  ;

const {height, width} = Dimensions.get('window')
const barBottom = brand === 'Apple' && models.includes(model) ? 73 :  59
const barTop = brand === 'Apple' ? models.includes(model) ? 88 : 68 : 50

import { connect } from 'react-redux';
import { sideBar_2 } from '../../Store/Actions/index'

const state = state => {
    return {
        sideBar          :   state.main.sideBar,
        sideBarItem      :   state.main.sideBarItem,
    }
}

const dispatch = dispatch => {
    return {
        this_sideBar_2    : () => dispatch(sideBar_2()),
    }
  }


class SideBar extends Component {

    closeModal = () => {
        this.props.this_sideBar_2()
        alert(this.props.sideBar)
    }


    render (){
        const {sideBar} = this.props

        sideBarComponent = sideBar ? <Modal closeModal={this.closeModal}></Modal> : null

        return sideBarComponent
    }
}


const styles = StyleSheet.create({
})


export default connect(state, dispatch)(SideBar);