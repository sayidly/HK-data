import React from 'react';
import bgImage from '../images/intro1.png';

import './Intro.scss';

import Paragraph from './Paragraph';
import Questions from './Questions';
import BarChart from './BarChart';
import DotChartA from './DotChartA';

import {
  independence1,
  independence2,
  independence3,
  independence4
} from '../libs/barChartData.json'

import {
  democraticAttr1,
  democraticAttr2,
  democraticAttr3,
  democraticAttr4,
} from '../libs/dotChartData.json'

const Intro1 = () => {

  const introColors = {
    bgColor: "#ddd5ac",
    textColor: "#1e663b",
    highlightColor: "#ef9b7d"
  }

  const questionList=["民主到底是什麼？", "港獨現實嗎？", "港獨能被公開討論嗎？"];
  const introContent = {
    content: [
      ["香港能夠出現民主政制，是香港市民的普遍願望，然而對於民主及港獨的具體意涵，不同立場及身份的人則有所分歧。"],
      ["哪些是香港市民最看重的民主待徵？調查者將民主特徵分為兩大類，一是", <strong>政府本身的功能和操守（例如廉潔、提供公共服務）</strong>, "二是", <strong>公民社會及制度分立對政府的制約（例如言論自由、傳媒自由、監察政府的立法及司法機構）</strong>, "。數據顯示，香港人、本土派及泛民主派都更重視公民社會。"],
      ["港獨的問題也分成兩種：一是關於港獨現實效果的評估，二則關於港獨能否被公開討論及思考；從數據可見，自視為「香港人」和「本土派」的市民對港獨較為開放、包容。"]
  ]}

  return (
    <div className="intro1" id="intro1">
      <Questions questionList={questionList} bgImage={bgImage} />
      <Paragraph introContent={introContent} />
      <BarChart labelsMode="gradient" data={independence1} />
      <BarChart labelsMode="gradient" data={independence2}/>
      <BarChart labelsMode="gradient" data={independence3}/>
      <BarChart labelsMode="gradient" data={independence4}/>
      <DotChartA data={democraticAttr1}/>
      <DotChartA data={democraticAttr2}/>
      <DotChartA data={democraticAttr3}/>
      <DotChartA data={democraticAttr4}/>
    </div>
  )
}

export default Intro1;
