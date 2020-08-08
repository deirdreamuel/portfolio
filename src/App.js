import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import sort from './components/sort';
import home from './components/home';
import resume from './components/resume'


import './App.css';
import Navigation from './components/Navigation';

function App() {
  return ( 
    <BrowserRouter>
          <Navigation />
            <Switch>
              <Route path="/" component={home} exact/>
              <Route path="/sort" component={sort} exact/>
              <Route path="/resume" component={resume} exact/>
             
              
              <Route component={Error}/>
           </Switch>
    </BrowserRouter>
    /*<div className="App">
      <header className="App-header">
        <MainPage name={name}/>
      </header>
    </div>*/
  );

  
}

export default App;
