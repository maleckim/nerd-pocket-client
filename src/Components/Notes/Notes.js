import React, { Component } from 'react'
import { Link, Redirect, Route } from 'react-router-dom'
import userContext from '../../Context/ApplicationContext'
import tokenService from '../../Services/token-service'
import pocketService from '../../Services/pocket-api-service'
import NoteContent from './NoteContent'

export default class Notes extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const id = tokenService.getUserId()
    pocketService.getNotes(id).then(notes => this.setState({ notes }))

  }

  populateTopics = (subject) => {

    if (this.state.notes) {
      this.setState({subject:subject})
    }
  
  }

  showContent = (content) => {
    this.setState({content})
  }

  showTopics = () => {
    if(this.state.subject){
      return(
        <>
        <button onClick={() => this.setState({subject:null})}>
            back
        </button>
        {this.state.notes.map(a => a.subject == this.state.subject ? <button onClick={() => this.showContent(a.content)}>{a.topic}</button>: null)}
        </>
      )
    }
  }



  createFolders = () => {
    let uniqueSubjects = {};

    if (this.state.notes) {
      this.state.notes.map(a => {

        if (!uniqueSubjects[`${a.subject}`]) {
          uniqueSubjects[`${a.subject}`] = [a]
        } 

      })
    }

    return (
      Object.keys(uniqueSubjects).map(a =>
        <button onClick={() => this.populateTopics(a)}>{a}</button>
      )
    )
  }

  renderDisplay = () => {
    if(!this.state.subject){
      return(
        this.createFolders()
      )
    }else if(this.state.subject && !this.state.content){
      return(
        this.showTopics()
      )
    }else{
      return(
        <NoteContent content={this.state.content} return={() => this.setState({content:null})} />
      )
    }
  }
 



  render() {  
    return (
      this.renderDisplay()
    )
  }
}