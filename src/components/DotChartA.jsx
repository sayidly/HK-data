import {hot} from "react-hot-loader";
import React, { useEffect, useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import './Chart.scss'
import './DotChartA.scss'
import DotA from "./charts/DotA";

const DotChartA = (props) =>{

  const dotDataGroup = [...props.data.tags]

  const [dotData, setDotData] = useState(props.data.tags[0])
  const [curTagIndex, setCurTagIndex] = useState(0);

  function TabButton(props){
    // console.log(props)
    return(
        <button className={`${curTagIndex === props.order ? 'active' : ''}`}
        onClick={() => {
          setDotData(dotDataGroup[props.order])
          setCurTagIndex(props.order)
          }}>{`#${props.text}`}
        </button>
    )
  };

  const tabData = dotDataGroup.map(d => d.name)
  const buttonGroup = tabData.map((p, key) =>
    <TabButton className="dot001__header__buttons__button" key={key} order={key} text={p}/>
  )

  const onStepEnter = ({ data}) => {
    setCurTagIndex(data);
    setDotData(dotDataGroup[data])
    // console.log(dotDataGroup[data].data)
  };

  return(
    <div className="dot001 intro1">
      <div className={`dotchart section ${props.snap}`}>
        <div className="dotchart__container">
            <div className="dotchart__header">
                <h1 className="dotchart__header__title">{props.data.title}</h1>
              <div className="dotchart__header__buttons">
                {buttonGroup}
              </div>
            </div>
            <DotA dataset={dotData}/>
          </div>
      </div>
      <div className="description">
        <Scrollama
          onStepEnter={onStepEnter}
          offset={0.8}>
          {tabData.map((d, stepIndex) => (
          <Step data={stepIndex} key={stepIndex}>
            <div className="text-block"
              style={{
                minHeight: "5rem",
                border: curTagIndex === (tabData.length - 1) ? "2px solid black" : "none",
                opacity: curTagIndex === stepIndex ? 1 : 0,
                backgroundColor: curTagIndex === (tabData.length - 1) ? "#ddd5ac" : "transparent"
              }}
            >
              {curTagIndex === (tabData.length - 1) ? props.data.texts : ""}
            </div>
          </Step>
        ))}
        </Scrollama>
      </div>
    </div>
  );
}

export default hot(module)(DotChartA);
