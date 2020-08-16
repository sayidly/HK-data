import React, { useState, useEffect } from 'react';
import './Intro.scss';
import bgImage from '../images/questions-about-democracy.png';
import { gsap, TweenLite } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Scrollama, Step } from "react-scrollama";

import Paragraph from './Paragraph'

gsap.registerPlugin(ScrollTrigger);

const Intro1 = (props) => {
  const [text, setText] = useState("民主到底是什麼？");
  const [index, setIndex] = useState(0);
  const questionBlock = React.createRef();
  const questionContent = React.createRef();

  const questionList=["民主到底是什麼？", "港獨現實嗎？", "港獨能被公開討論嗎？"];
  const introContent = {
    title: "民主是什麼？港獨可行嗎？",
    content: [
      "香港能夠出現民主政制，是香港市民的普遍願望，然而對於民主及港獨的具體意涵，不同立場及身份的人則有所分歧。",
      "哪些是香港市民最看重的民主待徵？調查者將民主特徵分為兩大類，一是政府本身的功能和操守（例如廉潔、提供公共服務），二是公民社會及制度分立對政府的制約（例如言論自由、傳媒自由、監察政府的立法及司法機構）。數據顯示，香港人、本土派及泛民主派都更重視公民社會。",
      "港獨的問題也分成兩種：一是關於港獨現實效果的評估，二則關於港獨能否被公開討論及思考；從數據可見，自視為「香港人」和「本土派」的市民對港獨較為開放、包容。"
  ]}

  useEffect(() => {

  });

  return (
    <>
      <div className="question" ref={questionBlock}>
        <div className="background">
          <img src={bgImage} className="question__bg" alt="bg"/>
        </div>
        <div className="question__title" ref={questionContent}>
          {questionList.map((questionItem, index) =>
            <div style={{display: "block"}}>
              <div>{questionList[index]}</div>
            </div>
          )}
        </div>
      </div>
      <Paragraph content={introContent}/>
    </>
  )
}

export default Intro1;
