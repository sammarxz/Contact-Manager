import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Item extends Component {
  state = {
    showContactInfo: false,
  }

  onShowClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  }

  onDeleteClick = (id) => {
    this.props.onDeleteHandler(id)
  }

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          { name } 
          <i className="fa fa-sort-down" style={{ cursor: 'pointer' }} onClick={ this.onShowClick }></i>
          <i className="fa fa-times" style={{ cursor: 'pointer', color: 'red', float: 'right' }} onClick={ () => this.onDeleteClick(id) }></i>
        </h4>
        { showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: { email }</li>
            <li className="list-group-item">Phone: { phone }</li>
          </ul>
        ) : null }
      </div>
    )
  }
}

Item.propTypes = {
  contact : PropTypes.object.isRequired,
  onDeleteHandler: PropTypes.func.isRequired
}
