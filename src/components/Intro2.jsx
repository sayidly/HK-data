import React from 'react';
import bgImage from '../images/intro2.png';

import './Intro.scss';

import Paragraph from './Paragraph';
import Questions from './Questions';
import BarChart from './BarChart';

import {
  burn1,
  burn2,
  burn3
} from '../libs/barChartData.json'

const Intro2 = () => {

  const introColors = {
    bgColor: "#282828",
    textColor: "#ef8a2e",
    highlightColor: "#27a4e2"
  }

  const questionList=["若香港被國際制裁，中央損失更多？", "即使打擊香港經濟，也對我沒影響？", "國際關注下，局勢變壞反而是好事？", "攬炒越來越嚴峻，對香港更好？"];
  const introContent = {
    content: [
      ["不到一年間，「攬炒」這個粵語詞彙突然成為香港熱詞，也開始被香港以外的人及國際媒體所熟悉。社會對何謂攬炒尚未有結論，但大抵來說，這是指倘若香港的政經局勢變差時，會影響香港本地權貴的利益，以及中國對香港的部署及利用；相信當情勢去到最壞，香港可以絕處逢生。"],
      ["這種想法影響了街頭抗爭、國際遊說及議會抗爭的手段和目標。那麼，", <strong>有多少人支持攬炒</strong>, "？調查設定了三條關於攬炒的題目——整體而言，市民對攬炒的態度並不一致；若按身份及政治認同細分，香港人及本土派對攬炒的支持最為顯著。"]
  ]}

  return (
    <div className="intro2" id="intro2">
      <Questions questionList={questionList} bgImage={bgImage}/>
      <Paragraph introContent={introContent}/>
      <BarChart labelsMode="gradient" data={burn1} />
      <BarChart labelsMode="gradient" data={burn2}/>
      <BarChart labelsMode="gradient" data={burn3}/>
    </div>
  )
}

export default Intro2;
