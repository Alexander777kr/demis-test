import React from 'react';
import { Route } from 'react-router';

import './App.css';

import Footer from './components/Footer/Footer';
import FormPage from './components/Form/Form';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import News from './components/News/News';


function App() {
  return (
    <div >
      <Header />
      <Route exact path = '/' component = {Home} />
      <Route path = '/news' component = {News} />
      <Route path = '/contactform' component = {FormPage} />
      <Footer />
    </div>
  );
}

export default App;
