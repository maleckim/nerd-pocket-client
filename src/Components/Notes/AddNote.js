import React from 'react'
import Popup from 'reactjs-popup'
import pocketService from '../../Services/pocket-api-service'
import tokenService from '../../Services/token-service'


export default class EditNotecard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
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
          {this.props.children}
        </Popup>
      </>
    );
  }
}