import React, { Component, Fragment } from 'react';
import Contact from './Contact';

export default class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com',
        phone: '(81) 0000-0000'
      },
      {
        id: 2,
        name: 'João da Silva',
        email: 'joao@gmail.com',
        phone: '(81) 0000-0000'
      },
      {
        id: 3,
        name: 'Chris Rock',
        email: 'chris@gmail.com',
        phone: '(81) 0000-0000'
      }
    ]
  }

  deleteContact = (id) => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(item => item.id !== id);

    this.setState({
      contacts: newContacts
    })
  }

  render() {
    const { contacts } = this.state;

    return (
      <Fragment>
        { contacts.map(contact => (
          <Contact
            key={ contact.id }
            contact={ contact }
            onDeleteHandler={ this.deleteContact }
          />
        )) }
      </Fragment>
    )
  }
}
