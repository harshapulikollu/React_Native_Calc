/*
 React_Native_Calc -- A simple Calculator  in React Native.
 @harsha pulikollu

*/

import React , {Component} from 'react';
import { View, Text } from 'react-native';
import Style from './Styles';
import InputButton from './InputButton';

// const inputButtons = [
//   [1, 2, 3, '/'],
//   [4, 5 ,6, '*'],
//   [7, 8, 9, '-'],
//   [0, '.', '=', '+']
// ];

export default class ReactCalc extends Component {
  constructor(props){
    super(props)
    this.initialState = {
      previousInputValue: 0,
      inputValue: 0,
      selectedSymbol: null,
      isDecimal: false
    };

    this.state = this.initialState;

  }
  render() {
    return (
      <View style = {Style.rootContainer}>
        <View style = {Style.displayContainer}><Text style = {Style.displayText}>{this.state.inputValue}</Text></View>
        <View style = {Style.inputContainer}>
        <View style = {Style.inputRow} key = {"row-" + 0}>
          <InputButton value={'C'} onPress={this._onInputButtonPressed.bind(this, 'c')} />
          <InputButton value={'Del'} onPress={this._onInputButtonPressed.bind(this, 'Del')} />
        </View>
          <View style = {Style.inputRow} key = {"row-" + 1}>
            <InputButton value={1} onPress={this._onInputButtonPressed.bind(this, 1)} />
            <InputButton value={2} onPress={this._onInputButtonPressed.bind(this, 2)} />
            <InputButton value={3} onPress={this._onInputButtonPressed.bind(this, 3)} />
            <InputButton value={'+'} onPress={this._onInputButtonPressed.bind(this, '+')} />
          </View>
          <View style = {Style.inputRow} key = {"row-" + 2}>
            <InputButton value={4} onPress={this._onInputButtonPressed.bind(this, 4)} />
            <InputButton value={5} onPress={this._onInputButtonPressed.bind(this, 5)} />
            <InputButton value={6} onPress={this._onInputButtonPressed.bind(this, 6)} />
            <InputButton value={'-'} onPress={this._onInputButtonPressed.bind(this, '-')} />
          </View>
          <View style = {Style.inputRow} key = {"row-" + 3}>
            <InputButton value={7} onPress={this._onInputButtonPressed.bind(this, 7)} />
            <InputButton value={8} onPress={this._onInputButtonPressed.bind(this, 8)} />
            <InputButton value={9} onPress={this._onInputButtonPressed.bind(this, 9)} />
            <InputButton value={'*'} onPress={this._onInputButtonPressed.bind(this, '*')} />
          </View>
          <View style = {Style.inputRow} key = {"row-" + 4}>
            <InputButton value={0} onPress={this._onInputButtonPressed.bind(this, 0)} />
            <InputButton value={'.'} onPress={this._onInputButtonPressed.bind(this, '.')} />
            <InputButton value={'='} onPress={this._onInputButtonPressed.bind(this, '=')} />
            <InputButton value={'/'} onPress={this._onInputButtonPressed.bind(this, '/')} />
          </View>
        </View>
      </View>
    )
  }

  // _renderInputButtons() {
  //   let views = [];
  //   for(var r = 0; r < inputButtons.length; r++) {
  //     let row = inputButtons[r];
  //
  //     let inputRow = [];
  //     for(var i=0; i<row.length; i++) {
  //       let input = row[i];
  //       inputRow.push(
  //         <InputButton
  //               value={input}
  //               onPress={this._onInputButtonPressed.bind(this, input)}
  //               key={r + "-" + i}/>
  //       );
  //       views.push(<View style = {Style.inputRow} key = {"row-" + r}> {inputRow}</View>)
  //     }
  //   }
  //   return views;
  // }

  _onInputButtonPressed(input) {
        switch (typeof input) {
            case 'number':
                return this._handleNumberInput(input)
            case 'string':
                return this._handleStringInput(input)
        }
    }

    _handleNumberInput(num) {
      let inputValue = this.state.inputValue,
        isDecimal = this.state.isDecimal;

    if(isDecimal) {
          inputValue = inputValue + num;

    } else {
      inputValue = (inputValue * 10) + num;
}

        this.setState({
            inputValue: inputValue
        })
    }

    _handleStringInput(str) {
        switch (str) {
            case '/':
            case '*':
            case '+':
            case '-':
                this.setState({
                    selectedSymbol: str,
                    previousInputValue: this.state.inputValue,
                    inputValue: 0
                });
                break;
                case '.' :
                let decnumber = (this.state.inputValue + '.' );
                  this.setState({
                    inputValue: decnumber,
                    isDecimal: true
                  });
                  break;
                case 'c':
                  this.setState({
                    previousInputValue: this.initialState.previousInputValue,
                    inputValue: this.initialState.inputValue,
                    selectedSymbol: this.initialState.selectedSymbol
                  });
                  break;
                case '=':
                    let symbol = this.state.selectedSymbol,
                        inputValue = this.state.inputValue,
                        previousInputValue = this.state.previousInputValue;

                    if (!symbol) {
                        return;
                    }

                    this.setState({
                        previousInputValue: 0,
                        inputValue: eval(previousInputValue + symbol + inputValue),
                        selectedSymbol: null
                    });
                    break;
        }
    }

}
