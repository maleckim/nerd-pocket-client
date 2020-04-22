import React, { Component } from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm';
import ValidationError from '../../Errors/ValidationError';
import tokenService from '../../Services/token-service';


export default class LoginPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      error: null
    }
  }

  handleLoginSucces = (message) => {
    const { history } = this.props;
    tokenService.saveUserId(message.success);
    history.push('/dashboard/notecards'); 
    window.location.reload();

  }

  handleLoginFail = (message) => {
    this.setState({
      error: message
    })
    const { history } = this.props
    history.push('/login'); 

  }

  render() {
    return (
      <>
        <LoginForm onLoginSuccess={this.handleLoginSucces} onLoginFail={this.handleLoginFail} />
        {this.state.error && <ValidationError render={this.state.error} />}
      </>
    )
  }
}