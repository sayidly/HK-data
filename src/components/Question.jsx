import React from 'react';
import './Question.scss';
import bgImage from '../images/questions-about-democracy.png';

const Question = (props) => {
  return (
    <div className="question">
      <img src={bgImage} className="question__bg" alt="bg"/>
      <div className="question__text">
        <h2>{ props.text }</h2>
      </div>
    </div>
  )
}

export default Question;
