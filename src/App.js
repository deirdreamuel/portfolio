import React from 'react';
import MainPage from './main_page';
import './App.css';

function App() {
  let name = "DEIRDRE CHONG";

  return (
    <div className="App">
      <header className="App-header">
        <MainPage name={name}/>
      </header>
    </div>
  );

  
}

export default App;
