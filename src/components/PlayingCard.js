import React, { Component } from 'react';
import './PlayingCard.css';

export default class PlayingCard extends Component {

  render() {
    const { title, image, level, description } = this.props;
    return (
      <div className="playing-card">
        <dl>
          <dt>Title</dt>
          <dd className="title">{title}</dd>
          <dt>Image</dt>
          <dd className="image">{image}</dd>
          <dt>Level</dt>
          <dd>{level}</dd>
          <dt>Description</dt>
          <dd>{description}</dd>
        </dl>
      </div>
    );
  };
};
