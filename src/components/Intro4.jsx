import React, { useState, useEffect } from 'react';
import bgImage from '../images/intro4.png';

import './Intro.scss';

import Paragraph from './Paragraph';
import Questions from './Questions';
import BarChart from './BarChart'

import {
  econ1,
  econ2,
  econ3,
  econ4
} from '../libs/barChartData.json'

const Intro4 = () => {

  const introColors = {
    bgColor: "#112b5e",
    textColor: "#0ed8c9",
    highlightColor: "#ea497b"
  }

  const questionList=["未來五年，家庭經濟狀況會變怎樣？", "向上流動機會如何？", "工作還穩定嗎？未來想移民嗎？"];
  const introContent = {
    content: [
      ["攬炒並不單純是一個政治主張，其影響的是市民的經濟利益。這次民調問及市民對於自身及社會未來的經濟預期，也嘗試理解", <strong>不同社會階層的看法</strong>, "。"],
      ["從數字可見，自視「香港人」及「本土派」的市民對未來五年的", <strong>經濟預期</strong>, "最為悲觀，如果能力許可的話，亦是最想", <strong>移民</strong>, "海外的一群。若以階級看，中下層及基層市民對經濟發展同樣悲觀，但移民意願相對較低。"],
      ["調查亦詢問了市民目前的", <strong>工作穩定性</strong>, "。在有工作的市民當中，中下階層工作最不穏定，但不同身份及政治立場的市民，他們的工作預期沒有明顯差異。這或說明，經濟困境以基層市民首當其衝。"]
  ]}

  return (
    <>
      <Questions class="intro4" questionList={questionList} bgImage={bgImage} />
      <Paragraph class="intro4" introContent={introContent} />
      <BarChart class="intro4" data={econ1} />
      <BarChart class="intro4" data={econ2} />
      <BarChart class="intro4" data={econ3} />
      <BarChart class="intro4" data={econ4} />
    </>
  )
}

export default Intro4;
