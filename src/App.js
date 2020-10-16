import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import About from './contenedores/About';
import Create from './contenedores/Create';
import Main from './contenedores/Main';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
