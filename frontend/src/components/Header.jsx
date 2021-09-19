import React, { Component } from 'react';
import {Link, BrowserRouter as Router } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <h1>ICS114 Terminology</h1>
        
        <Link to="/">Home </Link>
        <Link to="/search">Search </Link>
        <Link to="/new_term">Add Term</Link>
      </div>
    )
  }
}

export default Header
