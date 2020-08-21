import {hot} from "react-hot-loader";
import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import './Chart.scss'
import './LineChartA.scss'
import LineA from "./charts/LineA";

const LineChartA = (props) =>{

  const lineDataGroup = [...props.data.tags]
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [lineData, setLineData] = useState(lineDataGroup[0].data);
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
    setLineData(lineDataGroup[data].data)
  };
  const titleTexts = [
    {text: <h1 className="linechart__header__title"><strong>工作的穩定性</strong>影響港人對「攬炒」的態度嗎？</h1>},
    {text: <h1 className="linechart__header__title"><strong>對經濟的預期</strong>影響港人對「攬炒」的態度嗎？</h1>},
    {text: <h1 className="linechart__header__title"><strong>「香港對中國的重要性」</strong>影響港人對「攬炒」的態度嗎？</h1>},
    {text: <h1 className="linechart__header__title">港人對「攬炒」的態度和他們<strong>對港獨的想法</strong>有關嗎？</h1>},
    {text: <h1 className="linechart__header__title">港人對「攬炒」的態度和他們<strong>對港獨的想法</strong>有關嗎？</h1>}
  ]

  return(
    <div className="line001 intro5">
      <div className="linechart section">
        <div className="linechart__container">
            <div className="linechart__header">
                {/* <h1 className="linechart__header__title"> */}
                  {/* {props.data.tags[currentStepIndex].title} */}
                {/* </h1> */}
                {titleTexts[currentStepIndex].text}
            </div>
            <LineA data={lineData}/>
          </div>
      </div>
      <div className="description">
        <Scrollama
          onStepEnter={onStepEnter}
          offset={0.6}>
          {lineDataGroup.map((d, stepIndex) => (
          <Step data={stepIndex} key={stepIndex}>
            <div className="text-block"
              style={{
                opacity: currentStepIndex === stepIndex ? 1 : 0.2,
              }}
            >
              {props.data.tags[stepIndex].texts}
            </div>
          </Step>
        ))}
        </Scrollama>
      </div>
    </div>
  );

}

export default hot(module)(LineChartA);
