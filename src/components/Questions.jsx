import React, { useState, useEffect } from 'react';
import './Questions.scss';
import { gsap, TweenLite } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Questions = (props) => {
  const questionList = props.questionList;
  const bgImage = props.bgImage;
  const [text, setText] = useState(questionList[0]);
  const [index, setIndex] = useState(0);
  const questionBlock = React.createRef();
  const questionContent = React.createRef();

  useEffect(() => {
    ScrollTrigger.create({
      trigger: questionBlock.current,
      start: "top top",
      end: "+50%",
      scrub: true,
      pin: true,
      invalidateOnRefresh: true,
      onUpdate: self => {
        let index = Math.round(self.progress * (questionList.length-1))
        setText(questionList[index])
        setIndex(index)
        console.log(index, self.progress)
      },
    });
  });

  return (
    <div className="question" ref={questionBlock}>
        <div className="background">
          <img src={bgImage} className="question__bg" alt="bg"/>
        </div>
        <div className="question__title" ref={questionContent}>
          {questionList.map((questionItem, index) =>
            <div key={index} style={{display: text == questionItem ? "block" : "none"}}>
              <div>{questionList[index]}</div>
            </div>
          )}
        </div>
      </div>
  )
}

export default Questions;
