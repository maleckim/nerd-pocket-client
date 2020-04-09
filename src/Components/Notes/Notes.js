import React, { Component } from 'react'
import AddNote from './AddNote'
import tokenService from '../../Services/token-service'
import pocketService from '../../Services/pocket-api-service'
import NoteContent from './NoteContent'
import Form from '../Utils/Form'
import './Notes.css'

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
      this.setState({ subject: subject })
    }

  }

  showContent = (content, id, specSubject, specTopic) => {

    this.setState({
      content: content,
      id: id,
      specSubject: specSubject,
      specTopic: specTopic
    })

  }

  showTopics = () => {
    if (this.state.subject) {
      return (
        <>
          {this.state.notes.map((a, b) => a.subject === this.state.subject ? <button key={b} onClick={() => this.showContent(a.content, a.id, a.subject, a.topic)}>{a.topic}</button> : null)}
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
      Object.keys(uniqueSubjects).map((a, b) =>
        <button key={b} onClick={() => this.populateTopics(a)}>{a}</button>
      )
    )
  }

  handleSubmit = (e, subject, topic, content) => {
    e.preventDefault()

    const id = tokenService.getUserId();

    const data = {
      user_id: id,
      subject: subject,
      topic: topic,
      content: content
    }

    console.log(data)
    pocketService.addNote(id, data)
  }

  renderDisplay = () => {
    if (!this.state.subject) {
      return (
        <div className='folders'>
          {this.createFolders()}
        </div>
      )
    } else if (this.state.subject && !this.state.content) {
      return (
        <div className='folders'>
          <h1>{this.state.subject}</h1>
          {this.showTopics()}
        </div>
      )
    } else {
      return (
        <div className='noteContent'>
          <NoteContent id={this.state.id} topic={this.state.specTopic} subject={this.state.specSubject} content={this.state.content} return={() => this.setState({ content: null })} />
        </div>
      )
    }
  }

  render() {
    return (
      <>
        <AddNote>
          <Form submit={this.handleSubmit} />
        </AddNote>
        {this.renderDisplay()}
      </>

    )
  }
}