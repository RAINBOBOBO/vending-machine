import React from 'react';
import './App.css';
import VendingMachine from './VendingMachine';
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <VendingMachine />
      </BrowserRouter>
    </div>
  );
}

export default App;
