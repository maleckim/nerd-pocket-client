import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from '../../Routes/LoginPage/LoginPage'
import RegistrationPage from '../../Routes/RegistrationPage/RegistrationPage'
import Dashboard from '../../Routes/Dashboard/Dashboard'
// import PrivateRoute from '../Utils/PrivateRoute'
import Header from '../Header/Header'
import LandingPage from '../../Components/LandingPage/LandingPage'
// import ApiService from '../../Services/pocket-api-service';
// import UserContext from '../../Context/ApplicationContext';
import './App.css'




export default class App extends Component {

  constructor(props) {
    super(props)

  }


  render() {
    return (
      <>
        <header className='Main_header'>
          <Header />
        </header>
        <main>
          
            <Switch>
              <Route exact path={'/'} component={LandingPage} />
              <Route exact path={'/login'} component={LoginPage} />
              <Route exact path={'/register'} component={RegistrationPage} />
              <Route path={'/dashboard'} component={Dashboard} />
             
            </Switch>

        </main>
      </>
    )
  }
}


