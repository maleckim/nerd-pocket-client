import React, { Component } from 'react'
import RegistrationForm from '../../Components/RegistrationForm/RegistrationForm'
import ValidationError from '../../Errors/ValidationError'

export default class RegistrationPage extends Component {
  constructor(props){
    super(props)
    this.state={
      error:'',
      badEntry: false
    }
  }

  handleRegistration = user => {
    const { history } = this.props
    history.push('/login')
  }

  handleRegistrationFail = (info) => {
    const { history } = this.props
   
    this.setState({badEntry: true, error:info.error})
    history.push('/register')
  }

  render() {
    return (
      <section className='RegistrationPage'>
        <h2>Register Here!</h2>
        {this.state.badEntry && <ValidationError render={this.state.error} />}
        <RegistrationForm onRegistrationSuccess={this.handleRegistration} onRegistrationFail={this.handleRegistrationFail} />
      </section>
    )
  }
}