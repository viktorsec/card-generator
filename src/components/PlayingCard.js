import React, { Component } from 'react';
import Figure from './Figure';
import './PlayingCard.css';


export default class PlayingCard extends Component {

  render() {
    const { topLeft, topRight, image, effect, production, color } = this.props;
    const hash = JSON.stringify(this.props);
    const shouldRenderProduction = production !== '-';

    return (
      <div className="playing-card">
        <div className="stripe" style={{borderColor: color}}/>
        <div className="top-left">{ topLeft }</div>
        <div className="top-right">{ topRight }</div>
        <div className="image">
          <Figure
            image={image}
            hash={hash}
          />
        </div>
        <div className="body">
          <div>{ effect }</div>
          {shouldRenderProduction && 
            <div>Production: { production }</div>
          }
        </div>
      </div>
    );
  };
};
