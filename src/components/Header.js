import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component {
  renderLinks () {
    if (this.props.authenticated) {
      return (
        <div>
          <Link style={ { marginRight: 15 } } to="/signout">Sign Out</Link>
          <Link style={ { marginRight: 15 } } to="/feature">Feature</Link>
        </div>
      )
    } else {
      return (
        <div>
          <Link style={ { marginRight: 15 } } to="/signup">Sign Up</Link>
          <Link style={ { marginRight: 15 } } to="/signin">Sign In</Link>
        </div>
      )
    }
  }
  render () {
    return (
      <div>
        <Link style={ { marginRight: 15 } } to="/">Redux Auth</Link>
        { this.renderLinks() }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(Header)
