import React, { Component } from 'react';

import Header from './components/Header';
import Contacts from './components/Contacts';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="container">
          <Contacts />
        </div>
      </div>
    )
  }
}


export default App;
