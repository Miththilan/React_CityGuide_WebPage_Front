import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navar from './components/layouts/Navar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/layouts/Footer';

import {Switch,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import News from './components/pages/News';
import Details from './components/pages/Details';
import NotFoundPage from './components/pages/NotFoundPage';

function App() {
  return (
  <div>
    <Navar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/news" component={News}/>
      <Route path="/details" component={Details}/>
      <Route   component={NotFoundPage}/>
    </Switch>
    <Footer/>    
    </div>
    )
}

export default App;
