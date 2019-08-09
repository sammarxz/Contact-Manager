import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import Test from './components/test/Test';
import NotFound from './components/pages/NotFound';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className='app'>
            <Header />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={ Contacts } />
                <Route exact path='/add' component={ AddContact } />
                <Route exact path='/test' component={ Test } />
                <Route component={ NotFound } />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}


export default App;
