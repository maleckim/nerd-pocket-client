import React, { Component } from 'react'
import ValidationError from '../../Errors/ValidationError'
import ApiService from '../../Services/pocket-api-service'

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      badEntry: false,
      error: ''
    }
  }


  validateEntry = (e) => {
    e.preventDefault();
    const { username, password } = this.state

    if (password.length <= 5) {
      this.setState({ error: 'password must be longer than 5 characters', badEntry: true, username: '', password: '' })
    }
    else if (username.length <= 2) {
      this.setState({ error: 'please enter a longer username', badEntry: true, username: '', password: '' })
    } else {

      const data = {
        userName: username,
        userPass: password
      }

      ApiService.registerUser(data, this.props.onRegistrationSuccess, this.props.onRegistrationFail)
      
    }
  }



  render() {
    return (
      <>
        <div className='signIn'>
          <form className='signForm' onSubmit={e => {
            this.validateEntry(e)
          }}>
            <label>Username</label><br />
            <input type='text' name='user' value={this.state.username} onChange={e => this.setState({ username: e.target.value })} /><br />
            <label>Password</label><br />
            <input type='text' name='pass' value={this.state.password} onChange={e => this.setState({ password: e.target.value })} /><br />
            <input type='submit' />
            {this.state.badEntry && <ValidationError render={this.state.error} />}
          </form>
        </div>
      </>
    )
  }


}