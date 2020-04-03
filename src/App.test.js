import React from 'react';
import ReactDOM from 'react-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/dynamicDash'
import Notecards from './Components/Notecards/Notecards'
import Notes from './Components/Notes/Notes'
import Deadlines from './Components/Deadlines/Deadlines'
import App from './Components/App/App'
import { BrowserRouter as Router, Route } from 'react-router-dom';



describe('General tests' , () => {

  it('Landing page renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LandingPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Renders app without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><App /></Router>, div);
  });

  it('Renders dashboard without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><Dashboard /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Renders notecards without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><Notecards /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Renders notes without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><Notes /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Renders deadlines without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><Deadlines /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('Renders header componenet without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><Header /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  
  
});


