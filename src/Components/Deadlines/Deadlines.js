import React, { Component } from 'react'
import Calendar from './Calendar'
import RangeCalendar from './RangeCalendar'
import DateChooser from '../Utils/DateChooser'
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'



export default class Deadlines extends Component {

  constructor(props){
    super(props)
    this.state = {
      deadline: '',
      task: ''
    }
  }

  setDate = (date, task) => (e) => {
    e.preventDefault()
    date = format(date, 'dd MMM yyyy', { locale: enGB }) 
    this.setState({deadline: date, task: task})
  }




  render() {
    console.log(this.state)
    return (
      
      <DateChooser setDate={this.setDate} />
     
    )
  }
}