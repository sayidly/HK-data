import React, { useState, useEffect } from 'react';
import './Paragraph.scss';
import bgImage from '../images/questions-about-democracy.png';
import { gsap, TweenLite } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Paragraph = (props) => {

  const introBlock = React.createRef();

  useEffect(() => {
  })

  return (
    <div className="intro" ref={introBlock}>
      <div className="intro__title">
        {props.content.title}
      </div>
      <div className="intro__content">
        <p>{props.content.content[0]}</p>
        <p>{props.content.content[1]}</p>
        <p>{props.content.content[2]}</p>
      </div>
    </div>
  )
}

export default Paragraph;
