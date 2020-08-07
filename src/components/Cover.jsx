import React, { useEffect } from 'react';
import './Cover.scss'
import { gsap, TweenLite } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import * as d3 from 'd3';
import bgImage from '../images/cover.png';
import logo from '../images/logo.svg'

const Cover = () => {
  const cover = React.createRef();
  const bg = React.createRef();
  const text = React.createRef();

  useEffect(() => {
    gsap.timeline({scrollTrigger:{
      trigger: cover.current,
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%",
      invalidateOnRefresh: true
    }})
    .from(bg.current, {opacity: 0, ease: "none"})
    .to(bg.current, {opacity: 1, ease: "none"})

    gsap.timeline({scrollTrigger:{
      trigger: text.current,
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%"
    }})
    .from(text.current, {opacity: 0, ease: "none"})
    .to(text.current, {opacity: 1, ease: "none"})

  });

  return (
    <>
      <div className="cover" ref={cover}>
        <img src={bgImage} className="cover__bg" alt="bg"/>
        <div className="cover__text" ref={text}>
          <h1 className="cover__text__subtitle">● 獨家數據</h1>
          <h1 className="cover__text__title">「香港人」、「本土派」怎麼看攬炒、獨立、香港未來</h1>
          <p className="cover__text__content">第一次吸入催淚煙，是許多香港市民在2019年共同的經歷。第一次體驗無法呼吸、眼淚披面、癱坐在地，學習被濃煙嗆到時要放慢呼吸，抑或學習在一片混亂中，幫身旁陌生人的眼睛滴上生理鹽水。</p>
          <p className="cover__text__content">根據警方回覆端傳媒的最新數據，2019年6月至2020年6月30日，超過16223枚催淚彈砸向香港。不過，截止去年12月，警方已經發射逾1萬6千枚催淚彈應付示威活動。全港多區，包括狹窄的街頭巷尾，幾乎都曾經被催淚煙包圍。在此之前，港人對催淚彈的記憶停留在雨傘運動的87枚催淚彈，不過，反修例運動讓所有人突然遭受更劇烈的體驗。</p>
        </div>
      </div>
      <a className="logo" href="https://theinitium.com/" target="_blank"><img src={logo} alt="Initium Logo"/></a>
    </>
  )
}

export default Cover;
