import React, { useState, useEffect } from 'react';
import './Intro.scss';
import bgImage from '../images/questions-about-democracy.png';
import { gsap, TweenLite } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Intro1 = (props) => {
  const [text, setText] = useState("民主到底是什麼？");
  const [index, setIndex] = useState(0);
  const questionBlock = React.createRef();
  const questionContent = React.createRef();

  const questionList=["民主到底是什麼？", "港獨現實嗎？", "港獨能被公開討論嗎？"]

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

    // gsap.to(questionContent.current, {y: 500})
  });

  return (
    <>
      <div className="question" ref={questionBlock}>
        <div className="background">
          <img src={bgImage} className="question__bg" alt="bg"/>
        </div>
        <div className="question__title" ref={questionContent}>
          {questionList.map((questionItem, index) =>
            <div style={{display: text == questionItem ? "block" : "none"}}>
              <div>{questionList[index]}</div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Intro1;
