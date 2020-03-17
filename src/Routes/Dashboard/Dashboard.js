import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import DynamicDash from '../../Components/Dashboard/dynamicDash'
import Notecards from '../../Components/Notecards/Notecards'
import Notes from '../../Components/Notes/Notes'
import Deadlines from '../../Components/Deadlines/Deadlines'




export default class Dashboard extends Component {


  render() {
    return (
      <>
        <DynamicDash />
        <Route exact path="/dashboard/notecards" component={Notecards} />
        <Route exact path="/dashboard/notes" component={Notes} />
        <Route exact path="/dashboard/deadlines" component={Deadlines} />
      </>
    )
  }
}