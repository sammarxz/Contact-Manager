import React, { Component } from 'react';

export default class Test extends Component {

  state = {
    title: '',
    body: '',
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(data => this.setState({ title: data.title, body: data.body }) )
  }

  render() {
    const { title, body } = this.state;

    return (
      <article>
        <h1>{ title }</h1>
        <p>{ body }</p>
      </article>
    )
  }
}
