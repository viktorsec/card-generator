import React, { Component } from 'react';

const getRandomImage = (hash) => {
  const emojis = [...'😊🙃🤪🤓🤯😴💩👻👽🤖👾👐🖖✌🤟🤘🤙👋🐭🦕🦖🐉'];
  return emojis[Math.floor(Math.random() * emojis.length)];
}

export default class Figure extends Component {

  render() {
    const { image, hash } = this.props;

    const usedImage = image || getRandomImage(hash);

    return (
      <>
        { usedImage }
      </>
    );
  };
};
