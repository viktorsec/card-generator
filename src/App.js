import React, { Component, Fragment } from 'react';
import './App.css';
import PlayingCard from './components/PlayingCard';
import { getCards } from './services/GoogleDocsService';

class App extends Component {

  state = {
    cards: [],
  };

  componentDidMount() {
    getCards('1-RKJdy1Pu5Tep2XW9Dvzgz0W5-xML7k4TcSmQ0Z7awk', 4)
      .then((data) => {
        this.setState({cards: data});
      });
  }

  render() {
    const { cards } = this.state;
    return (
      <div className="app">
        <div className="playing-card-list">
          {cards.map((card) => {
            const { count, ...rest } = card;
            const parsedCount = parseInt(count);
            const cardCopies = new Array(parsedCount).fill(0);

            return (
              <Fragment key={JSON.stringify(card)}>
                {cardCopies.map((_, index) =>
                  <PlayingCard
                    {...rest}
                    key={index}
                  />
                )}
              </Fragment>
            )
          }
          )}
        </div>
      </div>
    );
  }
}

export default App;
