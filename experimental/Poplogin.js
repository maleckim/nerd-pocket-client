import React from 'react';
import Popup from 'reactjs-popup'
import { Link } from 'react-router-dom'
import ValidationError from '../src/Errors/ValidationError'
import ApiService from '../src/Services/pocket-api-service'
import UserContext from '../src/Context/ApplicationContext';



export default class Poplogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      open: false,
     };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ open: true });
  }
  closeModal() {
    this.setState({ open: false });
  }



  render() {
    return (
      <div>
        <button className="button" onClick={this.openModal}>
          Controlled Popup
        </button>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className='logInHead'>
            <h1>Sign in to Nerd-Pocket!</h1>
          </div>

          <div className='signIn'>
            <form className='signForm' onSubmit={this.handleSubmit}>
              <label>User Name</label><br />
              <input type='text' name='userName' placeholder='username' onChange={e => this.setState({ user: e.target.value })} /><br />
              <label>Password</label><br />
              <input type='text' name='passWord' placeholder='password' onChange={e => this.setState({ pass: e.target.value })} /><br />
              <input type='submit' />
            </form>
          </div>
        </Popup>
      </div>
    );
  }
}