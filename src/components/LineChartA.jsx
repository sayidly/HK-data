import {hot} from "react-hot-loader";
import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import { select } from "d3";
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

    return(
      <div className="line001 intro5">
        <div className="linechart section">
          <div className="linechart__container">
              <div className="linechart__header">
                  <h1 className="linechart__header__title">
                    {props.data.tags[currentStepIndex].title}
                  </h1>
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