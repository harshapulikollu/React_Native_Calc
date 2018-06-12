import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Style from './Styles';

export default class InputButton extends Component {
  render() {
    return (
            <TouchableHighlight style={[Style.inputButton, this.props.symbol ? Style.inputButtonSymbol : null, this.props.highlight ? Style.inputButtonHighlighted : null]}
                                underlayColor="#8c0032"
                                onPress={this.props.onPress}>
                <Text style={Style.inputButtonText}>{this.props.value}</Text>
            </TouchableHighlight>
        )
  }
}
