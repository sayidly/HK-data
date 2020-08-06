import React, { useEffect } from 'react';
import './Cover.scss'
// import { gsap, TweenLite } from 'gsap';
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import * as d3 from 'd3';
import bgImage from '../images/cover.png';
import logo from '../images/logo.svg'

const Cover = () => {

  return (
    <>
      <div className="cover">
        <img src={bgImage} className="cover__bg" alt="bg"/>
      </div>
      <a className="logo" href="https://theinitium.com/" target="_blank"><img src={logo} alt="Initium Logo"/></a>
    </>
  )
}

export default Cover;
