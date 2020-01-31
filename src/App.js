import React from 'react';
import Grocery from './Groceries.js';

function App() {
  return (
    <div>
      <Grocery whatItem='Miso' />
      <Grocery whatItem='Shitake Mushrooms' />
      <Grocery whatItem='Ground Pork' />
      <Grocery whatItem='Jasmine Rice' />
    </div>
  );
}

export default App;