import {hot} from "react-hot-loader";
import React from "react";
import './Chart.scss'
import './LineChartA.scss'
import LineA from "./charts/LineA";

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

    return(
      <div className="line001 linechart section">
        <div className="linechart__container center">
            <div className="linechart__header">
              <div className="linechart__header__text__title">
                  <span></span>
                  <h1>你認為哪一項是最重要的民主特徵？</h1>
                </div>
            </div>
            <LineA data={lineData1}/>
          </div>
      </div>
    );
  
}

export default hot(module)(LineChartA);