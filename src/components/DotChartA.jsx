import {hot} from "react-hot-loader";
import React, { useEffect, useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import './Chart.scss'
import './DotChartA.scss'
import DotA from "./charts/DotA";

const dotData1 = [
  {"身份": "香港人", "民主意涵":"立法機關可對政府進行監察", "number": 0.633},
  {"身份": "香港人", "民主意涵": "政府為市民提供基本必需品", "number": 0.035},
  {"身份": "香港人", "民主意涵": "市民可自由組織政治團體", "number": 0.221},
  {"身份": "香港人", "民主意涵": "政府為市民提供優質公共服務", "number": 0.111},
  {"身份": "混合身份", "民主意涵": "立法機關可對政府進行監察", "number": 0.385},
  {"身份": "混合身份", "民主意涵": "政府為市民提供基本必需品", "number": 0.122},
  {"身份": "混合身份", "民主意涵": "市民可自由組織政治團體", "number": 0.118},
  {"身份": "混合身份", "民主意涵": "政府為市民提供優質公共服務", "number": 0.375},
  {"身份": "中國人", "民主意涵": "立法機關可對政府進行監察", "number": 0.182},
  {"身份": "中國人", "民主意涵": "政府為市民提供基本必需品", "number": 0.286},
  {"身份": "中國人", "民主意涵": "市民可自由組織政治團體", "number": 0.39},
  {"身份": "中國人", "民主意涵": "政府為市民提供優質公共服務", "number": 0.494},
];

const dotData2 = [
  {"身份": "香港人", "民主意涵":"政府確保法律與社會秩序", "number": 0.164},
  {"身份": "香港人", "民主意涵": "傳媒可自由批評政府", "number": 0.366},
  {"身份": "香港人", "民主意涵": "政府確保所有人都有工作機會", "number": 0.054},
  {"身份": "香港人", "民主意涵": "各個政黨於選舉中能夠公平競爭", "number": 0.416},
  {"身份": "混合身份", "民主意涵": "政府確保法律與社會秩序", "number": 0.301},
  {"身份": "混合身份", "民主意涵": "傳媒可自由批評政府", "number": 0.160},
  {"身份": "混合身份", "民主意涵": "政府確保所有人都有工作機會", "number": 0.190},
  {"身份": "混合身份", "民主意涵": "各個政黨於選舉中能夠公平競爭", "number": 0.349},
  {"身份": "中國人", "民主意涵": "政府確保法律與社會秩序", "number": 0.314},
  {"身份": "中國人", "民主意涵": "傳媒可自由批評政府", "number": 0.064},
  {"身份": "中國人", "民主意涵": "政府確保所有人都有工作機會", "number": 0.301},
  {"身份": "中國人", "民主意涵": "各個政黨於選舉中能夠公平競爭", "number": 0.321},
];

const dotData3 = [
  {"身份": "香港人", "民主意涵":"市民可自由參與抗議", "number": 0.259},
  {"身份": "香港人", "民主意涵": "政府廉潔不貪污", "number": 0.085},
  {"身份": "香港人", "民主意涵": "法院確保市民不受政府濫權侵害", "number": 0.640},
  {"身份": "香港人", "民主意涵": "政府提供失業補助", "number": 0.017},
  {"身份": "混合身份", "民主意涵": "市民可自由參與抗議", "number": 0.164},
  {"身份": "混合身份", "民主意涵": "政府廉潔不貪污", "number": 0.309},
  {"身份": "混合身份", "民主意涵": "法院確保市民不受政府濫權侵害", "number": 0.393},
  {"身份": "混合身份", "民主意涵": "政府提供失業補助", "number": 0.134},
  {"身份": "中國人", "民主意涵": "市民可自由參與抗議", "number": 0.073},
  {"身份": "中國人", "民主意涵": "政府廉潔不貪污", "number": 0.427},
  {"身份": "中國人", "民主意涵": "法院確保市民不受政府濫權侵害", "number": 0.200},
  {"身份": "中國人", "民主意涵": "政府提供失業補助", "number": 0.300},
];

const DotChartA = (props) =>{

    const dotDataGroup = [dotData1, dotData2, dotData3]

    const [dotData, setDotData] = useState(dotData1)
    const [curTagIndex, setCurTagIndex] = useState(0);


    function TabButton(props){
      return(
          <button className={`${curTagIndex === props.order ? 'active' : ''}`}
          onClick={() => {
            setDotData(dotDataGroup[props.order])
            setCurTagIndex(props.order)
            }}>{`${props.text}`}
          </button>
      )
    };

    const tabData = [
      {order: 0, text: "# 整體"},
      {order: 1, text: "# 身份認同"},
      {order: 2, text: "# 政治傾向"}
    ]

    const buttonGroup = tabData.map((p, key) =>
      <TabButton className="dot001__header__buttons__button" key={key} order={p.order} text={p.text}/>
    )

    const onStepEnter = ({ data }) => {
      setCurTagIndex(data);
      setDotData(dotDataGroup[data])
    };

    return(
      <div className="dot001">
        <div className={`dotchart section ${props.snap}`}>
          <div className="dotchart__container">
              <div className="dotchart__header">
                <div className="dotchart__header__text__title">
                  <h1>你認為哪一項是最重要的民主特徵？</h1>
                </div>
                <div className="dotchart__header__buttons">
                  {buttonGroup}
                </div>
              </div>
              <DotA data={dotData}/>
            </div>
        </div>
        <div className="description">
          <Scrollama
           onStepEnter={onStepEnter}
           offset={0.6}>
            {tabData.map((d, stepIndex) => (
            <Step data={stepIndex} key={stepIndex}>
              <div className="text-block"
                style={{
                  opacity: curTagIndex === stepIndex ? 1 : 0.2,
                }}
              >
              </div>
            </Step>
          ))}
          </Scrollama>
        </div>
      </div>
    );

}

export default hot(module)(DotChartA);
