import React, { Component } from 'react';

import Header from './components/Header';
import Contacts from './components/Contacts';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="app">
          <Header />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    )
  }
}


export default App;
