import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <h1>ICS114 Terminology</h1> 
        </div>
        <div>          
          <Link to="/">Home</Link>
          <br/>
          <Link to="/new_term">Add Term</Link>
        </div> 
      </div>
    )
  }
}

export default Header
