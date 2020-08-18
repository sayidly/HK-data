import React, { useEffect, useState, createRef } from "react";
import * as d3 from "d3";
import './BarChartA.scss';
import Bar01 from "../components/charts/BarA"

const sampleData = [
  { label: '香港人', value: .567 },
  { label: '混合身份', value: .32 },
  { label: '中國人', value: .101 },
  { label: '無答案', value: .012 }
]

const BarChartA = (props) => {

  const [barData, setBarData] = useState([]);

  useEffect(() => {
  });

  return(
    <div className="chart section" id="chartA">
      <h2 className="chart__title">{props.title}</h2>
      <Bar01 data={sampleData} />
    </div>
  );
}

export default BarChartA;
