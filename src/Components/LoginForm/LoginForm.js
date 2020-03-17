import React from 'react';
import { Link } from 'react-router-dom'
import ValidationError from '../../Errors/ValidationError'
import ApiService from '../../Services/pocket-api-service'
import UserContext from '../../Context/ApplicationContext';


export default class LogMeIn extends React.Component {
  constructor(props){
    super(props)
  
    this.state = {
      user: null,
      pass: null,
    }
  }
  

   handleSubmit = e => {
    e.preventDefault()
    const { user, pass } = this.state

    const data = {
      userName: user,
      userPassword: pass
    }

      ApiService.validateLogin(data, this.props.onLoginSuccess, this.props.onLoginFail)
      
      this.state = null
  }
  
  
    render(){
  
    return (
      <>
      <div className='logInHead'>
        <h1>Sign in to Nerd-Pocket!</h1>
      </div>
  
      <div className='signIn'>
        <form className='signForm' onSubmit={this.handleSubmit}>
          <label>User Name</label><br/>
          <input type='text' name='userName' placeholder='username' onChange={ e => this.setState( { user:e.target.value } )}/><br/>
          <label>Password</label><br/>
          <input type='text' name='passWord' placeholder='password' onChange={ e => this.setState( { pass:e.target.value } )}/><br/>
          <input type='submit'/>
        </form>
      </div>
      </>
    
      )
    }
  }



   // SignIn = (e, name, pass) => {
  //   e.preventDefault();
  //   let data = { name: name.toLowerCase(), passw: pass }
  //   this.props.updateUser( name );
  //   this.props.validateUser( data, this.Redirect );  
  // }
  
  // Redirect = (res) => {
  //   if(res){
  //   this.setState({ pass: null })
  //   this.props.history.push('/dashboard')
  //   }else{
  //     this.setState({ failed: true })
  //   }
  // }