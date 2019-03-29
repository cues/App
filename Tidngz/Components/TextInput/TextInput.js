import React, {Component} from 'react';
import {TextInput} from 'react-native';



class TextsInput extends Component {
    constructor(props) {
      super(props);
      this.state = { placeholder: true }
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(ev) {
      this.setState({ placeholder: ev.nativeEvent.text.length == 0 }); 
      this.props.onChange && this.props.onChange(ev); 
    }
    render() {
      const { placeholderStyle, style, onChange, ...rest } = this.props;
  
      return <TextInput 
        {...rest} 
        onChange={this.handleChange}
        style={this.state.placeholder ? [style, placeholderStyle] : style}
        />
    }
  }





export default TextsInput;