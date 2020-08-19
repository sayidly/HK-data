import React, { useRef, createRef, useEffect } from 'react';
import './Cover.scss'
import { gsap, TweenLite } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgImage from '../images/cover.png';
import logo from '../images/logo.svg';
import scrollIcon from '../images/scrolldown.svg';
import infoIcon from '../images/info.svg';
import Modal from './Modal';

gsap.registerPlugin(ScrollTrigger);

const Cover = () => {
  const cover = React.createRef();
  const bg = React.createRef();
  const text = React.createRef();
  const scrollContainer = React.createRef();
  const icon = React.createRef();

  const coverContent = {
    subtitle: ["● 獨家數據"],
    title: ["「香港人」、「本土派」怎麼看攬炒、獨立、香港未來"],
    content: [
      ["經過反修例運動，香港今年的政治氛圍走入低谷——7月人大迅速通過及出台港區國安法，特首在月底以疫情嚴重為由押後立法會選舉。面對這場空前的危機，北京與香港之間缺乏溝通、互不理解，通常被認為是重要病因之一。但到底，除了選票上的民意表達之外，香港的普羅大眾在想什麼？他們在乎的和憂慮的是什麼？這一年多，許多港人的思想和身份認同都有變，但人們往往只見碎片，不見全景。"],
      ["2020年6月，香港中文大學新聞與傳播學院院長李立峯、香港城市大學公共政策學系副教授鄭煒等人，對超過1500名香港市民進行了涵蓋116題的民意調查，", <strong>問題涉及對運動的支持度、對民主內涵、香港政治與經濟前景的看法等</strong>, "。端傳媒獲", <strong>獨家授權發表部分數據</strong>, "，並抽出自視為", <strong>「香港人」</strong>, "和自視為", <strong>「本土派」</strong>, "的兩個市民群體來單獨研究。我們想要理解的是，相對傾向用這些身份來自我表達的人，", <strong>如何理解民主？如何認識香港獨立的可能性？如何看待「攬炒」的策略？又如何評估自己與此城的未來</strong>, "？"]
  ]}

  const content = coverContent.content;

  useEffect(() => {

    const eleHeight = document.getElementById('coverContent').clientHeight;
    const containerHeight = document.getElementById('scrollContainer').clientHeight;

    gsap.timeline({scrollTrigger:{
      trigger: cover.current,
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%",
      invalidateOnRefresh: true
    }})

    gsap.from(bg.current, {opacity: 0, ease: "none", duration: .6})
    gsap.from(text.current, {opacity: 0, ease: "none", duration: .6})

    gsap.timeline({scrollTrigger:{
      trigger: scrollContainer.current,
      scrub: true,
      scrub: .2,
      start: "top center",
      end: "+=100%"
    }})
    .to(scrollContainer.current, {y: containerHeight-eleHeight-40})

  });

  return (
    <>
      <div className="cover" ref={cover}>
      <a className="logo" href="https://theinitium.com/" target="_blank"><img src={logo} alt="Initium Logo"/></a>
        <img src={bgImage} className="cover__bg" alt="bg"/>
        <div className="cover__text" ref={text}>
          <div className="cover__title">
            <h1 className="cover__text__subtitle">{coverContent.subtitle}</h1>
            <h1 className="cover__text__title">{coverContent.title}</h1>
          </div>
          <div id="scrollContainer" className="scroll_container">
            <div id="coverContent" className="cover__content" ref={scrollContainer}>
              {content.map((contentItem, index) =>
                <p className="cover__text__content" key={index}>{content[index]}</p>
              )}
            </div>
          </div>
          <div className="cover__control">
            <div className="cover__control__dropdown_icon bounce" ref={icon}><img src={scrollIcon} alt=""/></div>
            <Modal trigger={<div className="cover__control__info_icon"><img src={infoIcon} alt=""/></div>}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cover;