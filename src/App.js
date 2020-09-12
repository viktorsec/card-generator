import React, { Component, Fragment } from 'react';
import './App.css';
import PlayingCard from './components/PlayingCard';
import InputText from './components/InputText';
import { getCards } from './services/GoogleDocsService';

class App extends Component {

  state = {
    cards: [],
    sheetId: '',
    sheetPageNumber: 1,
  };

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

  fetchCards = async (e) => {
    e.preventDefault();
    const { sheetId, sheetPageNumber } = this.state;
    const cards = await getCards(sheetId, sheetPageNumber);
    this.setState({cards});
  }

  render() {
    const { cards, sheetId, sheetPageNumber } = this.state;
    return (
      <div className="app">
        <form
          className="app-settings"
          onSubmit={this.fetchCards}
        >
          <InputText
            label="Sheet ID"
            value={sheetId}
            onChange={this.updateSheetId}
          />
          <InputText
            label="Sheet page number"
            value={sheetPageNumber}
            onChange={this.updateSheetPageNumber}
          />
          <button
            type="submit"
          >
            Fetch 
            <span role="img" aria-label="bone" aria-hidden="true">🦴</span>
          </button>
        </form>
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
