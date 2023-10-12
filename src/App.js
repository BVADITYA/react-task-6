import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/portfolio';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
