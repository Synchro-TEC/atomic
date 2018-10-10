import React, { Component } from 'react';
import AsyncSelect from 'react-select/lib/Async';

const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', disabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.filterColors = this.filterColors.bind(this);
    this.getOptions = this.getOptions.bind(this);
  }

  handleInputChange(newValue) {
    debugger;
    const inputValue = newValue.replace(/\W/g, '');
    this.setState({ inputValue });
    // return inputValue;
  }

  filterColors() {
    return colourOptions.filter(i => i.label.toLowerCase().includes(this.state.inputValue.toLowerCase()));
  }

  getOptions() {
    debugger;
    return new Promise(resolve => {
      setTimeout(() => {
        debugger;
        let colors = this.filterColors(this.state.inputValue);
        debugger;
        resolve(colors);
      }, 1000);
    });
  }

  render() {
    return (
      <AsyncSelect
        isClearable
        defaultOption={[]}
        onInputChange={this.handleInputChange}
        loadOptions={this.getOptions}
      />
    );
  }
}

export default Selector;
