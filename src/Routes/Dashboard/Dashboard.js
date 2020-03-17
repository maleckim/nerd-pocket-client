import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import DynamicDash from '../../Components/Dashboard/dynamicDash'
import Notecards from '../../Components/Notecards/Notecards'
import Notes from '../../Components/Notes/Notes'
import Deadlines from '../../Components/Deadlines/Deadlines'
import tokenService from '../../Services/token-service'
import pocketService from '../../Services/pocket-api-service'




export default class Dashboard extends Component {

  componentDidMount(){
    const id = tokenService.getUserId()
    pocketService.getNoteCards(id)
  }

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