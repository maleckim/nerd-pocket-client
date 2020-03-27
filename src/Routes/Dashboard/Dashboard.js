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
      user_id: null
    }
  }

  componentDidMount(){
    let id = tokenService.getUserId() 
    pocketService.getNoteCards(id).then(notecards => this.setState({notecards}))
    // pocketService.getNotes(id).then(notes => this.setState({notes}))
  }

  render() {
    console.log(this.state)
    return (
      <UserContext.Provider value={{
        notecards: this.state.notecards,
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