import {hot} from "react-hot-loader";
import React, { useState } from "react";
import './Chart.scss'
import './LineChartA.scss'
import LineA from "./charts/LineA";
import { Scrollama, Step } from "react-scrollama";

const lineData1 = [
  {"工作的穩定性": 1, "對「攬炒」的態度": 3.31},
  {"工作的穩定性": 5, "對「攬炒」的態度": 2.98}
]

const lineData2 = [
  {"對經濟未來感到悲觀": 1, "對「攬炒」的態度": 2.54},
  {"對經濟未來感到悲觀": 3, "對「攬炒」的態度": 3.36}
]

const lineData3 = [
  {"香港對中國的重要性": 1, "對「攬炒」的態度": 1.87},
  {"香港對中國的重要性": 5, "對「攬炒」的態度": 3.65}
]

const lineData4 = [
  { "對「攬炒」的態度": 1, "港獨應可被社會探討": 1.71},
  { "對「攬炒」的態度": 5, "港獨應可被社會探討": 4.62}
]

const lineData5 = [
  {"對「攬炒」的態度": 1, "港獨並不只有壞處": 1.78},
  {"對「攬炒」的態度": 5, "港獨並不只有壞處": 3.63}
]

const LineChartA = () =>{

  const dataGroup = [lineData1, lineData2, lineData3, lineData4, lineData5]
  const texts = ["兩者關係成反比，亦即工作越穩定的人，相對也更不支持「攬炒」論的一些論述。",
                "兩者關係成正比：對於未來五年的經濟預期更悲觀的人，相對也更支持「攬炒」論述。",
                "兩者關係成正比：對於未來五年的經濟預期更悲觀的人，相對也更支持「攬炒」論述。",
                "兩者關係成正比：對於未來五年的經濟預期更悲觀的人，相對也更支持「攬炒」論述。",
                "兩者關係成正比：對於未來五年的經濟預期更悲觀的人，相對也更支持「攬炒」論述。"
                ]

  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  const [currentData, setCurrentData] = useState(dataGroup[0]);
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
    setCurrentData(dataGroup[data])
  };

    return(
      <div>
        <div className="line001 linechart section">
          <div className="linechart__container">
              <div className="linechart__header">
                <div className="linechart__header__text__title">
                    <h1>你認為哪一項是最重要的民主特徵？</h1>
                  </div>
              </div>
              <LineA data={currentData}/>
            </div>
        </div>
        <div className="description">
          <Scrollama 
           onStepEnter={onStepEnter}
           offset={0.6}>
            {[0, 1, 2, 3, 4].map(stepIndex => (
            <Step data={stepIndex} key={stepIndex}>
              <div className="text-block"
                style={{
                  opacity: currentStepIndex === stepIndex ? 1 : 0.2,
                }}
              >
                {texts[stepIndex]}
              </div>
            </Step>
          ))}
          </Scrollama>
        </div>
      </div>
    );
  
}

export default hot(module)(LineChartA);