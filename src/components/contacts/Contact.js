import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Consumer } from '../../context';

export default class Item extends Component {
  state = {
    showContactInfo: false,
  }

  onShowClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  }

  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${ id }`);
    dispatch({ type: 'DELETE_CONTACT', payload: id })
  }

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card card-body mb-3">
              <h4>
                { name } 
                <i className="fa fa-sort-down" style={{ cursor: 'pointer' }} onClick={ this.onShowClick }></i>
                <i className="fa fa-times" style={{ cursor: 'pointer', color: 'red', float: 'right' }} 
                  onClick={ () => this.onDeleteClick(id, dispatch) }></i>
              </h4>
              { showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: { email }</li>
                  <li className="list-group-item">Phone: { phone }</li>
                </ul>
              ) : null }
            </div>
          )
        }}
      </Consumer>
    )
  }
}

Item.propTypes = {
  contact : PropTypes.object.isRequired,
}
