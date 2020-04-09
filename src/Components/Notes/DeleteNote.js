import React from 'react'
import pocketApi from '../../Services/pocket-api-service'
import tokenService from '../../Services/token-service'


export default function DeleteNote(props){

  function deleteNote(){
    const user_id = tokenService.getUserId();
    const note_id = props.note_id;
    pocketApi.deleteNote(user_id, note_id)
  }


  return(
    <button onClick={() => deleteNote()}>delete</button>
  )

}