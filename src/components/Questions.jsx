import React, { useState, useEffect } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import './Questions.scss';

const Questions = (props) => {
  const questionList = props.questionList;
  const bgImage = props.bgImage;

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const onStepEnter = ({ data }) => {
    console.log(data);
    setCurrentStepIndex(data);
  };

  const onStepExit = ({ element }) => {
    element.style.backgroundColor = "none";
  };

  return (
    <div className={`question ${props.class}` }>
      <div className="background" style={{ position: 'sticky', top: 0}}>
        <img src={bgImage} className="question__bg" alt="bg"/>
      </div>
      <Scrollama offset="0.5" onStepEnter={onStepEnter} onStepExit={onStepExit} >
        {questionList.map((questionItem, stepIndex) => (
          <Step data={stepIndex} key={stepIndex}>
            <div className="question__title"
              style={{
                // color: `${introColors.textColor}`,
                marginBottom: '50vh',
                opacity: currentStepIndex === stepIndex ? 1 : 0.2,
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
