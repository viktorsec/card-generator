import React, { Component, Fragment } from 'react';
import './App.css';
import PlayingCard from './components/PlayingCard';
import InputText from './components/InputText';
import { getCards } from './services/GoogleDocsService';

class App extends Component {

  constructor() {
    super();
    this.state = {
      cards: [],
      sheetId: '',
      sheetPageNumber: 4,
    };
  }

  componentDidMount() {}

  updateSheetId = (event) => {
    this.setState({
      sheetId: event.target.value,
    });
  }

  updateSheetPageNumber = (event) => {
    this.setState({
      sheetPageNumber: event.target.value,
    });
  }

  fetchCards = async () => {
    const { sheetId, sheetPageNumber } = this.state;
    const cards = await getCards(sheetId, sheetPageNumber);
    this.setState({cards});
  }

  render() {
    const { cards, sheetId, sheetPageNumber } = this.state;
    return (
      <div className="app">
        <div className="app-settings">
          <InputText
            label="Sheet ID"
            value={sheetId}
            inputHandler={this.updateSheetId}
          />
          <InputText
            label="Sheet page number"
            value={sheetPageNumber}
            inputHandler={this.updateSheetPageNumber}
          />
          <button
            onClick={this.fetchCards}
          >
            Fetch
            <span role="img" aria-label="bone">🦴</span>
          </button>
        </div>
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
