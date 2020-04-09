import React from 'react'
import ReactDOM from 'react-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/dynamicDash'
import Notecards from './Components/Notecards/Notecards'
import Notes from './Components/Notes/Notes'
import Deadlines from './Components/Deadlines/Deadlines'
import LoginForm from './Components/LoginForm/LoginForm'
import AddNotecard from './Components/Notecards/AddNotecard'
import EditNotecard from './Components/Notecards/EditNotecard'
import ShowAnswer from './Components/Notecards/ShowAnswer'
import App from './Components/App/App'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import dynamicDash from './Components/Dashboard/dynamicDash'
import { Calendar } from 'react-nice-dates'
import NotecardTest from './Components/Notecards/NotecardTest'
import AddNote from './Components/Notes/AddNote'
import DeleteNote from './Components/Notes/DeleteNote'
import EditNote from './Components/Notes/EditNote'
import NoteContent from './Components/Notes/NoteContent'



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

  it('Renders dashboard without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><dynamicDash /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Renders calendar without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><Calendar /></Router>, div);
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

  it('Renders login without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><LoginForm /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Renders addNotecard without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><AddNotecard /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Renders editNotecard without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><EditNotecard/></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Renders notecardTest without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><NotecardTest /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Renders the results of notecard test without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><ShowAnswer /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Renders addNote without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><AddNote /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Renders deleteNote without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><DeleteNote /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Renders editNote without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><EditNote /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Renders notecontent without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><NoteContent/></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});


