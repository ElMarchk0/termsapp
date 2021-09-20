import React, { Component } from 'react';
import {Link, BrowserRouter as Router } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <h1>ICS114 Terminology</h1> 
        </div>
        <div>          
          
          <Link to="/search">Search </Link>
          <Link to="/new_term">Add Term</Link>
        </div> 
      </div>
    )
  }
}

export default Header
