import React from 'react';
import './Text.scss'

const Text = (props) => {
  return (
    <div className={`text section ${props.snap}`}>
      <div className={ "text__" + props.type }>
        { props.text }
      </div>
    </div>
  )
}

export default Text;
