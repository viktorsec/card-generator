import React, { Component } from 'react';
import './PlayingCard.css';

export default class PlayingCard extends Component {

  render() {
    const { topLeft, topRight, image, effect, production, color } = this.props;
    return (
      <div className="playing-card">
        <div className="stripe" style={{borderColor: color}}/>
        <div className="top-left">{ topLeft }</div>
        <div className="top-right">{ topRight }</div>
        <div className="image">{ image }</div>
        <div className="body">
          <div>{ effect }</div>
          <div>{ production }</div>
        </div>
      </div>
    );
  };
};
