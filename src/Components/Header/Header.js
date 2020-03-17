import React, { Component } from 'react'
import { Link, Redirect, Route } from 'react-router-dom'
import TokenService from '../../Services/token-service'
import './header.css'


export default class Header extends Component {

  handleLogout = () => {
    TokenService.clearUserId();
    window.history.pushState('','','/')
    window.location.reload()
  }

  renderLogin() {
    return(
      <div className='Header_Login'>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </div>
    )
  }

  renderLogout(){
    return(
      <div className='Header_Logout'>
        <Link onClick={this.handleLogout}to='/'>Logout</Link>
      </div>
    )
  }

  render(){
    return(
      <>
        <nav className='Header'>
          <h1><Link to={TokenService.hasUserId() ? '/dashboard':'/'}>Nerd-Pocket</Link></h1>
          {TokenService.hasUserId() ? this.renderLogout() : this.renderLogin()}
        </nav>
      </>
    )
  }
}