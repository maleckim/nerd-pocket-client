import React from 'react'
import EditNote from './EditNote'
import DeleteNote from './DeleteNote'


export default function NoteContent(props){
  return(
  <>
  <p>{props.content}</p>
  <EditNote noteId={props.id} subject={props.subject} topic={props.topic} content={props.content} />
  <DeleteNote note_id={props.id} />
  </>
  )
}