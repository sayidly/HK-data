import React, { useEffect } from 'react';
import Popup from "reactjs-popup";

const Modal = (props) => {
  return (
    <Popup
      trigger={props.trigger}
      modal
      closeOnDocumentClick
    >
      <span> Modal content </span>
    </Popup>
  )
}

export default Modal;
