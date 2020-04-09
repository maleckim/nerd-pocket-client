import React from 'react'
import Popup from 'reactjs-popup'
import pocketService from '../../Services/pocket-api-service'
import tokenService from '../../Services/token-service'



export default class EditNotecard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      open: false,
      topic: this.props.topic,
      content: this.props.content,
      subject: this.props.subject,
      note_id: this.props.noteId
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
 
    const id = tokenService.getUserId();

    pocketService.editNote(id, this.state)
    window.location.reload()
    this.closeModal()
  }

  
  render() {
    return (
      <>
        <button className="button" onClick={this.openModal}>
          Edit
        </button>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className='logInHead'>
            <h3>Edit your note</h3>
          </div>

          <div className='signIn'>
            <form className='signForm' onSubmit={this.handleSubmit}>
              <label for='cardSubject'>Subject</label><br />
              <input type='text' id='cardSubject' name='cardSubject' value={this.state.subject} onChange={e => this.setState({ subject: e.target.value })} /><br />
              <label for='cardQuestion'>Topic</label><br />
              <textarea id='cardQuestion' type='text' name='cardQuestion' value={this.state.topic} onChange={e => this.setState({ topic: e.target.value })} /><br />
              <label for='cardAnswer'>Content</label><br />
              <textarea id='cardAnswer' type='text' name='cardAnswer' value={this.state.content} onChange={e => this.setState({ content: e.target.value })} /><br />
              <input type='submit' />
            </form>
          </div>
        </Popup>
      </>
    );
  }
}