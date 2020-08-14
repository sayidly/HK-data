import {hot} from "react-hot-loader";
import React from "react";
import './Chart.scss'
import './LineChartA.scss'
import LineA from "./charts/LineA";


const LineChartA = () =>{

  const lineData = [
      {"x": 1, "y": 1},
      {"x": 5, "y": 5}
    ]

    return(
      <div className="line001 linechart">
        <div className="linechart__container">
            <div className="linechart__header">
              <h2 className="linechart__header__text__title"> Hello, World!</h2>
            </div>
            <LineA data={lineData}/>
          </div>
      </div>
    );
  
}

export default hot(module)(LineChartA);