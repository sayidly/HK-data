import {hot} from "react-hot-loader";
import React from "react";
import './Chart.scss'
import './LineChartA.scss'
import LineA from "./charts/LineA";

const lineData1 = [
  {x: 1, y: 3.31},
  {x: 5, y: 2.98}
]

const lineData2 = [
  {x: 1, y: 2.54},
  {x: 3, y: 3.36}
]

const lineData3 = [
  {x: 1, y: 1.87},
  {x: 5, y: 3.65}
]

const lineData4 = [
  {x: 1, y: 1.71},
  {x: 5, y: 4.62}
]

const lineData5 = [
  {"x": 1, "y": 1.78},
  {"x": 5, "y": 3.63}
]

const LineChartA = () =>{

    return(
      <div className="line001 linechart">
        <div className="linechart__container">
            <div className="linechart__header">
              <div className="linechart__header__text__title">
                  <span>●</span>
                  <h2>你認為哪一項是最重要的民主特徵？</h2>
                </div>
            </div>
            <LineA data={lineData1}/>
          </div>
      </div>
    );
  
}

export default hot(module)(LineChartA);