import React from 'react';
import './App.css';
import PlayingCard from './components/PlayingCard';

function App() {
  const cards = [
    {
      level: 1,
      title: 'Strážná',
      image: '💂‍♀️',
      description: 'Určite hráča a menujte kartu (nie Strážnu). Pokiaľ má hráč túto kartu v tomto kole končí.',
    },
    {
      level: 2,
      title: 'Kňaz',
      image: '🙏',
      description: 'Pozrite si postavu súpera.',
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        {cards.map((card) => 
          <PlayingCard
            {...card}
            key={card.title}
          />
        )}
      </header>
    </div>
  );
}

export default App;
