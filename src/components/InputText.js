import React, { Component } from 'react';
import './InputText.css';

export default class InputText extends Component {

  render() {
    const { label, value, onChange } = this.props;

    return (
      <div className="input-text">
        <div className="label">
          {label}
        </div>
        <input type="text"
          onChange={onChange}
          value={value}
        />
      </div>
    );
  };
};
