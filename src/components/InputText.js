import React, { Component } from 'react';
import './InputText.css';

export default class InputText extends Component {

  render() {
    const { label, value, inputHandler } = this.props;

    return (
      <div className="input-text">
        <div className="label">
          {label}
        </div>
        <input type="text"
          onInput={inputHandler}
          onChange={inputHandler}
          value={value}
        />
      </div>
    );
  };
};
