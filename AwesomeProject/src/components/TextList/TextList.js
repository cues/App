import React from 'react';
import { View, ScrollView, FlatList, Dimensions } from 'react-native';
import ListItem from '../ListItem/ListItem';

textList = props => {
    // const textOutput = props.allTexts.map((text, index) => (
    //    <ListItem key={index} textName={text} onItemPressed={() => props.onItemDeleted(index)}/>
    // ));
   
    return(
        <FlatList onScroll={props._onScroll} style={{width:'100%'}}
            data = {props.allTexts}
            renderItem = {(info) => (
                <ListItem 
                    textName={info.item.name} 
                    textImage={info.item.image}
                    onItemPressed={() => props.onItemSelected(info.item.key)}
                />
            )}
        />
    )
}


export default textList;
