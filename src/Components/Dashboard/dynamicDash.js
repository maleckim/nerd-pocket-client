import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './dynamicDash.css'

export default class dynamicDash extends Component {

  render() {
    return (
      <nav className="dash-nav">
        <Link to='/dashboard/notecards'><button>notecards</button></Link>
        <Link to='/dashboard/notes'><button>notes</button></Link>
        <Link to='/dashboard/deadlines'><button>deadlines</button></Link>
      </nav>
    )
  }
}