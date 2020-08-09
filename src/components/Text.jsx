import React, { useEffect } from 'react';
import './Text.scss'

const Text = (props) => {
  return (
    <div className="text section">
      <div className={ "text__" + props.type }>
        { props.text }
        {/* { props.text[1] } */}
      </div>
    </div>
  )
}

export default Text;
