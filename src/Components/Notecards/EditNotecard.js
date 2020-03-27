import React from 'react';
import Popup from 'reactjs-popup'
import pocketService from '../../Services/pocket-api-service'
import tokenService from '../../Services/token-service'


export default class EditNotecard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      open: false,
      question: this.props.question,
      answer: this.props.answer,
      subject: this.props.subject,
      note_id: this.props.note_id
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

    pocketService.editNoteCard(id, this.state)
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
            <h3>Edit your notecard</h3>
          </div>

          <div className='signIn'>
            <form className='signForm' onSubmit={this.handleSubmit}>
              <label for='cardSubject'>Subject</label><br />
              <input type='text' id='cardSubject' name='cardSubject' value={this.state.subject} onChange={e => this.setState({ subject: e.target.value })} /><br />
              <label for='cardQuestion'>Question</label><br />
              <textarea id='cardQuestion' type='text' name='cardQuestion' value={this.props.question} onChange={e => this.setState({ question: e.target.value })} /><br />
              <label for='cardAnswer'>Answer</label><br />
              <textarea id='cardAnswer' type='text' name='cardAnswer' value={this.props.answer} onChange={e => this.setState({ answer: e.target.value })} /><br />
              <input type='submit' />
            </form>
          </div>
        </Popup>
      </>
    );
  }
}