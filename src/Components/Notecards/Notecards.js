import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import userContext from '../../Context/ApplicationContext'
import './Notecards.css'
import AnswerButton from './ShowAnswer'
import EditNotecard from './EditNotecard'
import AddNotecard from './AddNotecard'
import pocketService from '../../Services/pocket-api-service'


export default class Notecards extends Component {

  deleteNote = (id) => {
    pocketService.deleteNoteCard(id)
  }


  render() {

    return (
      <userContext.Consumer>{
        value => {

          return (

            <div className='notecards'>
              <div className='topButtons'>
                <AddNotecard className='addNote' />
                <Link to='/dashboard/notecards/test'><button>Test</button></Link>
              </div>
              {value.notecards.map((a, b) =>
                <div key={b} className='notecard'>
                  <h3>{a.subject}</h3>
                  <p>{a.question}</p>
                  <AnswerButton className='button' answer={a.answer} />
                  <EditNotecard className='button' subject={a.subject} question={a.question} answer={a.answer} note_id={a.id} />
                  <button onClick={() => this.deleteNote(a.id)}>delete</button>
                </div>
              )}
            </div>
          )
        }
      }
      </userContext.Consumer>
    )
  }
}