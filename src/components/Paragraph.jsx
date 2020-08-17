import React, { useState, useEffect } from 'react';
import './Paragraph.scss';
import bgImage from '../images/questions-about-democracy.png';
import { gsap, TweenLite } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Paragraph = (props) => {

  const content = props.introContent.content;
  console.log(content)

  useEffect(() => {
  })

  return (
    <div className="intro">
      <div className="intro__content">
        {content.map((contentItem, index) =>
          <p key={index}>{content[index]}</p>
        )}
      </div>
    </div>
  )
}

export default Paragraph;
