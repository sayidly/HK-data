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
  independence
} from './libs/barChartData.json'
import Footer from './components/Footer';
// import TestHook from './components/TestHook';
import Intro from './components/Intro';
console.log(identity)

const App = () => {

  return (
    <div className="App">
      {/* <TestHook /> */}
      <Cover />
      <Text type="content" text={["就政治光譜而言，「本土派」支持者達19.8%，若按年齢劃分，在年輕人中本土派已成主流，亦有近四分之一的中年市民支持本土派。至於身份認同，認同為「香港人」的市民達到56.7%，在各個年齡層都是最顯著的選項。"]} />
      <BarChart data={identity}/>
      <Text type="content" text={["整體而言有近6成市民支持運動，但兩極化情況明顯——非常支持及非常不支持的市民合共57.2%。若將數字按身份認同及政治立場劃分，可明顯看到支持陣營以香港人、本土派及泛民主派為主；而反對陣營則以混合身份、中國人及建制派為主。"]} />
      <BarChart data={politics}/>
      <Intro />
      <BarChart data={independence}/>
      <DotChartA />
      <LineChartA />
      <Footer />
    </div>
  );
}

export default hot(App);
