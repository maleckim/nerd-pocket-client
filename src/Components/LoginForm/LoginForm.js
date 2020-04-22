import React from 'react'
import ApiService from '../../Services/pocket-api-service'
import './LoginForm.css'


export default class LogMeIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      pass: null,
    }
  }


  handleSubmit = e => {
    e.preventDefault();
    const { user, pass } = this.state;

    const data = {
      userName: user,
      userPassword: pass
    }

    ApiService.validateLogin(data, this.props.onLoginSuccess, this.props.onLoginFail);
    this.setState({ user: null, pass: null });
  }


  render() {

    return (
      <section className='loginPage'>
        <div className='logInHead'>
          <h1>Sign in to Nerd-Pocket!</h1>
          <h4>For demo, User: Test Pass: Test</h4>
        </div>

        <div className='signIn'>
          <form className='signForm' onSubmit={this.handleSubmit}>
            <label>User Name</label><br />
            <input type='text' name='userName' placeholder='username' onChange={e => this.setState({ user: e.target.value })} /><br />
            <label>Password</label><br />
            <input type='password' name='passWord' placeholder='password' onChange={e => this.setState({ pass: e.target.value })} required /><br />
            <input type='submit' />
          </form>
        </div>
      </section>
    )
  }
}
