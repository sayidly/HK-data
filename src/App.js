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
  politics,
  attitudes,
  independence1,
  independence2
} from './libs/barChartData.json'

import Footer from './components/Footer';
// import TestHook from './components/TestHook';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Intro4 from './components/Intro4';
import Intro5 from './components/Intro5';
import More from './components/More';

const App = () => {

  return (
    <div className="App">
      {/* <TestHook /> */}
      <Cover />
      <Text class="identity-brief" type="content" text={["就政治光譜而言，自視「本土派」的支持者達19.8%，若按年齢劃分，在年輕人中本土派已成主流，亦有近四分之一的中年市民自視本土派。至於身份認同，認同為「香港人」的市民達到56.7%，在各個年齡層都是最顯著的選項。"]} />
      <BarChart data={identity}/>
      <BarChart data={politics}/>
      <Text class="attitudes-brief" type="content" text={["整體而言有近6成市民支持運動，但兩極化情況明顯——非常支持及非常不支持的市民合共57.2%。若將數字按身份認同及政治立場劃分，可明顯看到支持陣營以香港人、本土派及泛民主派為主；而反對陣營則以混合身份、中國人及建制派為主。"]} />
      <BarChart data={attitudes}/>
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Intro4 />
      <Intro5 />
      <Text class="conclusion" type="content" text={["香港對中國的重要性與攬炒、攬炒與港獨之間均存在正關係。香港對中國有不可取替的重要性，是攬炒論的重要前設；而攬炒——可謂最激進的抗爭手段，與港獨——具顛覆性的政治目標，這二者之間，亦關係緊密。", <br/>, <br/>, "這次民調結果顯示，支持攬炒的市民傾向認同港獨並不只有壞處，而且捍衛探討港獨的自由。誠然，這並不代表市民實際上支持港獨，但這結果或已反映了，香港社會的民主抗爭運動，從手段到目標都有「激進化」的跡象。"]} />
      <More class="more" />
      <Footer />
    </div>
  );
}

export default hot(App);
