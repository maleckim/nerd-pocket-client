import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './dynamicDash.css'

export default class dynamicDash extends Component {

  render() {
    return (
      <nav className="dash-nav">
        <Link to='/dashboard/notecards'>Note-Cards</Link>
        <Link to='/dashboard/notes'>Notes</Link>
        <Link to='/dashboard/deadlines'>Deadlines</Link>
      </nav>
    )
  }

}