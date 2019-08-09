import React, { Component } from 'react';
import { Consumer } from '../../context';
import axios from 'axios';

import TextInputGroup from '../layout/TextInputGroup';

export default class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  }

  onChange = (e) => {
    const { name, value } = e.target; 
    this.setState({ [name]: value });
  }

  onSubmit = (e, dispatch) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    if (name === '') { this.setState({ errors: { name: 'Name is required' } }); return; }
    if (email === '') { this.setState({ errors: { email: 'Email is required' } }); return; }
    if (phone === '') { this.setState({ errors: { phone: 'Phone is required' } }); return; }


    const newContact = { name, email, phone }

    axios.post('https://jsonplaceholder.typicode.com/users', newContact)
      .then(res => dispatch({ type: 'ADD_CONTACT', payload: res.data }) )


    this.setState({ name: '', email: '', phone: '', errors: {} });

    this.props.history.push('/');
  }

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        { value => {
          const { dispatch } = value;

          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={ (e) => this.onSubmit(e, dispatch) }>
                  <TextInputGroup 
                    name="name"
                    label="Name"
                    value={ name }
                    onChange={ this.onChange }
                    error={ errors.name }
                  />
                  <TextInputGroup 
                    name="email"
                    label="Email"
                    value={ email }
                    type="email"
                    onChange={ this.onChange }
                    error={ errors.email }
                  />
                  <TextInputGroup 
                    name="phone"
                    label="Phone"
                    value={ phone }
                    onChange={ this.onChange }
                    error={ errors.phone }
                  />
                  <button className="btn btn-lg btn-success btn-block">Add Contact</button>                  
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )

  }
}
