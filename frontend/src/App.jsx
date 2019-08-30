import React from 'react';
import ReservationList from './components/ReservationList'
import './App.css';

const reservations = [
  {
    imageUrl: 'https://react.semantic-ui.com/images/avatar/large/steve.jpg',
    name: 'Juan Perez',
    direction: 'Ceja - San Miguel'
  },
  {
    imageUrl: 'https://react.semantic-ui.com/images/avatar/large/steve.jpg',
    name: 'Juan Gomez',
    direction: 'Irpavi - Sopocachi'
  },
  {
    imageUrl: 'https://react.semantic-ui.com/images/avatar/large/steve.jpg',
    name: 'La Mamba Negra',
    direction: 'Cota Cota - Irpavi'
  },
  {
    imageUrl: 'https://react.semantic-ui.com/images/avatar/large/steve.jpg',
    name: 'Ruben',
    direction: 'Cota Cota - El alto'
  }
]

function App() {
  return (
    <div className="App">
      <h1>
        Carpool
      </h1>
      <ReservationList reservations={reservations} />
    </div>
  );
}

export default App;
