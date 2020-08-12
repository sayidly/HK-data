import React, { useEffect, useState, createRef } from "react";
import * as d3 from "d3";
import './BarChartA.scss';
import Bar01 from "./charts/BarA"

const sampleData = [
  { label: '香港人', value: .567 },
  { label: '混合身份', value: .32 },
  { label: '中國人', value: .101 },
  { label: '無答案', value: .012 }
]

const sampleData2 = [
{ label: '火星人', value: .40 },
{ label: '金星人', value: .20 },
{ label: '太阳人', value: .10 },
{ label: '地球人', value: .30 }
]

const BarChar01 = (props) => {

  const [barData, setBarData] = useState([]);

  useEffect(() => {
    console.log("test")
  });

  return(
    <div className="chart section" id="chartA">
      <h2 className="chart__title">{props.title}</h2>
      <Bar01 data={sampleData} />
    </div>
  );
}

export default BarChar01;
