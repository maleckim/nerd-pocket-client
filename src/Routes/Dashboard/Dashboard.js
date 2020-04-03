import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import DynamicDash from '../../Components/Dashboard/dynamicDash'
import Notecards from '../../Components/Notecards/Notecards'
import Notes from '../../Components/Notes/Notes'
import Deadlines from '../../Components/Deadlines/Deadlines'
import tokenService from '../../Services/token-service'
import pocketService from '../../Services/pocket-api-service'
import UserContext from '../../Context/ApplicationContext'
import NotecardTest from '../../Components/Notecards/NotecardTest'

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notecards: [],
      notes:[],
      deadlines:[],
      user_id: null,
    }
  }

  componentDidMount(){
    let id = tokenService.getUserId() 
    pocketService.getNoteCards(id).then(notecards => this.setState({notecards}))
    pocketService.getDeadlines(id).then(deadlines => this.setState({deadlines}))
  }


  render() {
  
    return (
      <UserContext.Provider value={{
        notecards: this.state.notecards,
        deadlines: this.state.deadlines
        // notes: this.state.notes
      }}>
        <DynamicDash />
        <Route exact path="/dashboard/notecards" component={Notecards} />
        <Route exact path="/dashboard/notecards/test" render={(props) => <NotecardTest {...props} notecards={this.state.notecards}/>} />
        <Route exact path="/dashboard/notes" component={Notes} />
        <Route exact path="/dashboard/deadlines" component={Deadlines} />
      </UserContext.Provider>
    )
  }
}