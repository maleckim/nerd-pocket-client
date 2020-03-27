import React from 'react';


export default function NoteContent(props){
  return(
  <>
  <button onClick={() => props.return()}>back</button>
  <p>{props.content}</p>
  </>
  )
}