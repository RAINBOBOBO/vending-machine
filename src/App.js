import React from 'react';
import './App.css';
import VendingMachine from './VendingMachine';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <VendingMachine />
      </BrowserRouter>
    </div>
  );
}

export default App;
