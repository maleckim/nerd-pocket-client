import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import DynamicDash from '../../Components/Dashboard/dynamicDash'
import Notecards from '../../Components/Notecards/Notecards'
import Notes from '../../Components/Notes/Notes'
import Deadlines from '../../Components/Deadlines/Deadlines'
import tokenService from '../../Services/token-service'
import pocketService from '../../Services/pocket-api-service'
import userContext from '../../Context/ApplicationContext'
import UserContext from '../../Context/ApplicationContext'





export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notecards: [],
      user_id: null
    }
  }

  componentDidMount(){
    
    // return this.setState({user_id: tokenService.getUserId()})
    let id = tokenService.getUserId() 
    
    //this one works
    pocketService.getNoteCards(id).then(notecards => this.setState({notecards}))

    // return pocketService.getNoteCards(this.state.user_id).then(notecards => this.setState({notecards}))
    
  }

  render() {
    console.log(this.state)
    return (
      <UserContext.Provider value={{
        notecards: this.state.notecards
      }}>
        <DynamicDash />
        <Route exact path="/dashboard/notecards" component={Notecards} />
        <Route exact path="/dashboard/notes" component={Notes} />
        <Route exact path="/dashboard/deadlines" component={Deadlines} />
      </UserContext.Provider>
    )
  }
}