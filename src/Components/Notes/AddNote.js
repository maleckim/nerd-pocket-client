import React from 'react';
import Popup from 'reactjs-popup'
// import './Notecards.css'
import pocketService from '../../Services/pocket-api-service'
import tokenService from '../../Services/token-service'


export default class EditNotecard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      open: false,
      topic: this.props.question,
      content: this.props.answer,
      subject: this.props.subject
     };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ open: true });
  }
  closeModal() {
    this.setState({ open: false });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    //implement a patch here
    const id = tokenService.getUserId();

    const data = {
      user_id: id,
      subject: this.state.subject,
      topic: this.state.topic,
      content: this.state.content
    }

    pocketService.addNote(id, data)
    window.location.reload()
    this.closeModal()
  }

  
  render() {
    return (
      <>
        <button className="button addnote" onClick={this.openModal}>
          Add Note
        </button>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className='noteHead'>
            <h3>Create a new note</h3>
          </div>

          <div className='addNote'>
            <form className='signForm' onSubmit={this.handleSubmit}>
              <label for='noteSubject'>Subject</label><br />
              <input type='text' id='cardSubject' name='cardSubject' value={this.state.subject} onChange={e => this.setState({ subject: e.target.value })} /><br />
              <label for='noteQuestion'>Topic</label><br />
              <textarea id='cardQuestion' type='text' name='cardQuestion' value={this.props.question} onChange={e => this.setState({ topic: e.target.value })} /><br />
              <label for='noteAnswer'>Content</label><br />
              <textarea id='cardAnswer' type='text' name='cardAnswer' value={this.props.answer} onChange={e => this.setState({ content: e.target.value })} /><br />
              <input type='submit' />
            </form>
          </div>
        </Popup>
      </>
    );
  }
}