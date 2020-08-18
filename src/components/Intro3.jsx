import React, { useState, useEffect } from 'react';
import bgImage from '../images/questions-about-democracy.png';

import Paragraph from './Paragraph';
import Questions from './Questions';
import BarChart from './BarChart'


const Intro3 = () => {

  const questionList=["香港的經濟功能是什麼？", "香港會被中國其他城市取代嗎？", "香港對中國有多重要？"];
  const introContent = {
    content: [
      ["攬炒論的一個重要前設，是香港作為世界金融及物流中心，對中國內地的發展有極大戰略價值。在港人心中，香港對中國到底有多重要呢？從數字可見，六成受訪者都認同香港對中國進口物資及發展經濟有重要功能，並且認為香港不容易被其他中國城市取代。"],
      ["值得注意的是，雖然自視「香港人」及「本土派」的市民最為確信", <strong>香港之於中國的重要性</strong>, "，但自視「中國人」及「建制派」的市民亦不至於強烈反對此一命題。兩端最大的分歧在於", <strong>香港之於中國的獨特性</strong>, "——後者比前者更相信香港能被其他中國城市取代。"]
  ]}

  return (
    <>
      <Questions questionList={questionList} bgImage={bgImage} />
      <Paragraph introContent={introContent} />
    </>
  )
}

export default Intro3;
