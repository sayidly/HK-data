import {hot} from "react-hot-loader";
import React, { useEffect, useState } from "react";
import './Chart.scss'
import './DotChartA.scss'
import DotA from "./charts/DotA";


const DotChartA = () =>{
  const dotData = [
    {"身份": "香港人", "類別": "類別1", "number": 0.3},
    {"身份": "香港人", "類別": "類別2", "number": 0.4},
    {"身份": "香港人", "類別": "類別3", "number": 0.3},
    {"身份": "混合", "類別": "類別1", "number": 0.6},
    {"身份": "混合", "類別": "類別2", "number": 0.1},
    {"身份": "混合", "類別": "類別3", "number": 0.3},
    {"身份": "中國人", "類別": "類別1", "number": 0.2},
    {"身份": "中國人", "類別": "類別2", "number": 0.3},
    {"身份": "中國人", "類別": "類別3", "number": 0.5},
  ]


    return(
      <div className="dot001">
        <div className="chart__container">
            <div className="chart__header">
              <h2 className="chart__header__text__title"> Hello, World!</h2>
            </div>
            <DotA data={dotData}/>
          </div>
      </div>
    );
  
}

export default hot(module)(DotChartA);