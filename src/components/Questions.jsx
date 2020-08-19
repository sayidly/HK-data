import React, { useState, useEffect } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import './Questions.scss';

const Questions = (props) => {
  const questionList = props.questionList;
  const bgImage = props.bgImage;
  const sectionClass = props.class;

  const [text, setText] = useState(questionList[0]);

  const onStepEnter = ({ data }) => {
    setText(data);
  };

  const onStepExit = ({ element }) => {
    element.style.backgroundColor = "none";
  };

  return (
    <div className={`question ${sectionClass}` }>
      <div className="background" style={{ position: 'sticky', top: 0}}>
        <img src={bgImage} className="question__bg" alt="bg"/>
      </div>
      <Scrollama offset="0.8" onStepEnter={onStepEnter} onStepExit={onStepExit} >
        {questionList.map((questionItem, stepIndex) => (
          <Step data={questionItem} key={stepIndex}>
            <div className="question__title"
              style={{
                // color: `${introColors.textColor}`,
                marginBottom: '50vh',
                opacity: text === questionItem ? 1 : 0.2,
              }}
            >
              {questionList[stepIndex]}
            </div>
          </Step>
        ))}
      </Scrollama>
    </div>
  )
}

export default Questions;
