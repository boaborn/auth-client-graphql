import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <div>
        <Link style={ { marginRight: 15 } } to="/">Redux Auth</Link>
        <Link style={ { marginRight: 15 } } to="/signup">Sign Up</Link>
        <Link style={ { marginRight: 15 } } to="/signin">Sign In</Link>
        <Link style={ { marginRight: 15 } } to="/signout">Sign Out</Link>
        <Link style={ { marginRight: 15 } } to="/feature">Feature</Link>
      </div>
    )
  }
}

export default Header
