import { hot } from 'react-hot-loader/root';
import React, { useRef, useEffect } from 'react';
import "./App.scss";
import Cover from './components/Cover';
import Text from './components/Text';
import BarChartA from './components/BarChartA';
// import TestHook from './components/TestHook';
import Question from './components/Question';
import BarChart from './components/BarChart'
import {
  identity
} from './libs/barChartData.json'
console.log(identity)

const App = () => {
  return (
    <div className="App">
      {/* <TestHook /> */}
      <Cover />
      <Text type="center" text={["第一次吸入催淚煙，是許多香港市民在2019年共同的經歷。第一次體驗無法呼吸、眼淚披面、癱坐在地，學習被濃煙嗆到時要放慢呼吸，抑或學習在一片混亂中，幫身旁陌生人的眼睛滴上生理鹽水。", <br/>, <br/>, "根據警方回覆端傳媒的最新數據，2019年6月至2020年6月30日，超過16223枚催淚彈砸向香港。不過，截止去年12月，警方已經發射逾1萬6千枚催淚彈應付示威活動。全港多區，包括狹窄的街頭巷尾，幾乎都曾經被催淚煙包圍。在此之前，港人對催淚彈的記憶停留在雨傘運動的87枚催淚彈，不過，反修例運動讓所有人突然遭受更劇烈的體驗。" ]} />
      <BarChartA title="群眾輪廓：身分認同" />
      <Question text={["民主到底是什麼？"], ["港獨現實嗎？"], ["港獨能被公開討論嗎？"]} />
      <BarChart data={identity}/>
    </div>
  );
}

export default hot(App);
