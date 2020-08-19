import React from 'react';
import './Text.scss'

const Text = (props) => {
  return (
    <div className={`${props.class}`}>
      <div className="text">
        <div className={ `text__${props.type}` }>
          { props.text }
        </div>
      </div>
    </div>
  )
}

export default Text;
