import { hot } from 'react-hot-loader/root';
import React, { useRef, useEffect } from 'react';
import "./App.scss";
import Cover from './components/Cover';
import Text from './components/Text';
import DotChartA from './components/DotChartA';
import LineChartA from './components/LineChartA';
// import TestHook from './components/TestHook';
import BarChart from './components/BarChart'
import {
  identity,
  politics
} from './libs/barChartData.json'
import Footer from './components/Footer';
// import TestHook from './components/TestHook';
import Intro from './components/Intro';
import Paragraph from './components/Paragraph';
console.log(identity)

import { gsap, TweenLite } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  return (
    <div className="App">
      {/* <TestHook /> */}
      <Cover />
      <Text type="center" text={["第一次吸入催淚煙，是許多香港市民在2019年共同的經歷。第一次體驗無法呼吸、眼淚披面、癱坐在地，學習被濃煙嗆到時要放慢呼吸，抑或學習在一片混亂中，幫身旁陌生人的眼睛滴上生理鹽水。", <br/>, <br/>, "根據警方回覆端傳媒的最新數據，2019年6月至2020年6月30日，超過16223枚催淚彈砸向香港。不過，截止去年12月，警方已經發射逾1萬6千枚催淚彈應付示威活動。全港多區，包括狹窄的街頭巷尾，幾乎都曾經被催淚煙包圍。在此之前，港人對催淚彈的記憶停留在雨傘運動的87枚催淚彈，不過，反修例運動讓所有人突然遭受更劇烈的體驗。" ]} />
      <BarChart data={identity}/>
      <BarChart data={politics}/>
      <Intro />
      <Paragraph />
      <DotChartA />
      <LineChartA />
      <Footer />
    </div>
  );
}

export default hot(App);