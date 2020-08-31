import React from 'react';
import './App.css';
import PlayingCard from './components/PlayingCard';

function App() {
  const cards = [
    {
      topLeft: '2',
      topRight: '3',
      effect: 'potiahni kartu superovi',
      production: '-',
      image: '💂‍',
      color: 'red',
    },
    {
      topLeft: '1',
      topRight: '3',
      effect: 'Potiahni si kartu',
      production: '-',
      image: '💂‍♀️',
      color: 'blue',
    },
    {
      topLeft: '5',
      topRight: '3',
      effect: 'Potiahni si kartu',
      production: '-',
      image: '💂‍♀️',
      color: 'green',
    },
    {
      topLeft: '7',
      topRight: '3',
      effect: 'Potiahni si kartu',
      production: '-',
      image: '💂‍♀️',
      color: 'orangered',
    },
  ];
  return (
    <div className="app">
      <div className="playing-card-list">
        {cards.map((card) => 
          <PlayingCard
            {...card}
            key={JSON.stringify(card)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
