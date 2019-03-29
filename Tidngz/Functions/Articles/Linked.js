import React , {Component}from 'react';
import { Dimensions, View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import style from '../../Styles/Styles'; 
import { createStyles, minWidth } from 'react-native-media-queries';

const width = Dimensions.get('window').width;
class Content extends Component {

    ordinal = number =>  {
        ends = ['th','st','nd','rd','th','th','th','th','th','th'];
        if (((number % 100) >= 11) && ((number%100) <= 13))
            return number + 'th';
        else
            return number + ends[number % 10];
      }
    
   
    render(){

        const {article} = this.props;

       

        let textAb;
        let styleAb;
        if(this.props.type === 'article' && article.linked_count > 0){
            styleAb  = {
                marginBottom    :   119,
                // marginTop       :   25,
            }
            
                textAb = {
                    fontSize        :   14,
                    height          :   16,
                    lineHeight      :   16,
                }
           
        }else{
           
                textAb = {
                    fontSize        :   11,
                    height          :   14,
                    lineHeight      :   14,
                    marginBottom   :   20,
                }
            
        }


        let linked = null;

        if(article.linked_number > 1){
            linked_count = article.linked_count + 1;
    
            linked = (
                <Text style={[styles.articleLinked, style.bt, textAb]}>{this.ordinal(article.linked_number)} of {linked_count} articles</Text>
            )
        }


        return (
   
        
                <TouchableOpacity style ={styleAb}>
                    {linked}
                </TouchableOpacity>
        )

    }
   
}


const stylesheet = {
    articleLinked: {
        color : 'rgba(15, 101, 141, 0.8)',
        textAlign:'center',
        letterSpacing :1,
     }
};

const styles = createStyles (
    stylesheet , 
    // minWidth(480, {
    //     articleLinked: {
    //         fontSize:12,
    //         letterSpacing :.7,
    //     }
    // }),
    // minWidth(768, {
    //     articleLinked: {
    //         fontSize:13,
    //         letterSpacing :.8,
    //     }
    // })
)

export default Content;
