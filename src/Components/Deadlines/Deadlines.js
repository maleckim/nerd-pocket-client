import React, { Component } from 'react'
import DateChooser from '../Utils/DateChooser'
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import userContext from '../../Context/ApplicationContext'
import tokenService from '../../Services/token-service'
import pocketApi from '../../Services/pocket-api-service'
import './Deadlines.css'



export default class Deadlines extends Component {

  constructor(props){
    super(props)
    this.state = {
      addDeadline:false,
      saved: []
    }
  }

  setDate = (date, task) => (e) => {
    e.preventDefault()
    date = format(date, 'dd MMM yyyy', { locale: enGB })
    const id = tokenService.getUserId();
    
    let data = {
      user_id: id,
      deadline: date,
      task: task
    }

    pocketApi.createDeadline(data);
    window.location.reload();
    
  }

  deleteDeadline = (id) => {
    pocketApi.deleteDeadline(id);
    window.location.reload();
  }

  

  conditionalRender = (deadlines) => {
    
    if(this.state.addDeadline){
      return(
        <div className='newDeadline'>
          <DateChooser setDate={this.setDate} />
        </div>
      )
    }else{
      return(
        <>
        <div className='deadlineButtons'>
          <button onClick={() => {this.setState({addDeadline:true})}}>New Deadline</button>
        </div>
        <div className='currentDeadlines'>
          <h1>current deadlines</h1>
          {/* checking to see if there are any deadlines so the map doesnt crash the application */}
          {deadlines ? deadlines.map(a => 
            <div className='deadline'>
              <p>{a.task} by {a.deadline}</p>
              <button onClick={() => this.deleteDeadline(a.id)}>complete?</button>
            </div>
          ): <p>no deadlines yet</p>}
        </div>
        </>
      )
    }
  }

  render() {
    
    return (
      <userContext.Consumer>{
        value => { 
          return( this.conditionalRender(value.deadlines) ) 
        }
      }
      </userContext.Consumer>
    )
  }
}