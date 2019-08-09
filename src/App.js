import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
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
                <Route exact path='/edit/:id' component={ EditContact } />
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
