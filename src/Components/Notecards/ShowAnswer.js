import React from 'react';
import Popup from 'reactjs-popup';

export default function Answer(props){

  return(
  <Popup
  trigger={<button className="button"> answer </button>}
  modal
  closeOnDocumentClick
>
  <h3>{props.answer}</h3>
</Popup>
  )

}