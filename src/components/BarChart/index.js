import React, { useState } from 'react'
import Graph from './Graph'
import { Scrollama, Step } from "react-scrollama";

import './index.scss'

function Chart (props) {
  const { curTag } = props
  return (
    <div className="chart">
      {curTag.data.map((item, index) =>
        <div className="chart-item" key={index}>
          {curTag.data.length > 1 &&
            <div className="item-title">{item.title}</div>
          }
          <Graph values={item.values} labels={curTag.labels}/>
        </div>
      )}
    </div>
  )
}

function BarChart (props) {
  const [curTagIndex, setCurTagIndex] = useState(0)

  const curTag = props.data.tags[curTagIndex]

  const tags = (
    <div className="tags">
      {props.data.tags.map((tag, index) =>
        <span className={`tag ${curTagIndex === index ? 'active' : ''}`} key={tag.name} onClick={() => setCurTagIndex(index)}>#{tag.name}</span>
      )}
    </div>
  )

  const labels = (
    <div className="lables">
      {curTag.labels.map((label, index) => {
        const itemStyle = {
          display: 'inline-block',
          verticalAlign: 'middle',
          backgroundColor: label.color,
          marginRight: '5px',
          width: '18px',
          height: '18px'
        }
        const style = {
          verticalAlign: 'middle',
          color: label.color
        }
        return (
          <span className="lable" key={index}>
            <span style={itemStyle}></span>
            <span style={style}>{label.name}</span>
          </span>
        )
      }
      )}
    </div>
  )

  const firstLabel = curTag.labels[0]
  const lastLabel = curTag.labels[[curTag.labels.length - 1]]
  const firstLabelStyle = {
    color: firstLabel.color
  }
  const lastLabelStyle = {
    color: lastLabel.color
  }

  const gradientLabels = (
    <div className="gradient-lables">
      <span className="label-text" style={firstLabelStyle}>{firstLabel.name}</span>
      <div className="colors">
        {curTag.labels.map((label, index) => {
          const itemStyle = {
            display: 'inline-block',
            verticalAlign: 'middle',
            backgroundColor: label.color,
            width: '18px',
            height: '18px'
          }
          const style = {
            verticalAlign: 'middle',
            color: label.color
          }
          return (
            <span className="lable" key={index}>
              <span style={itemStyle}></span>
            </span>
          )
        })}
      </div>
      <span className="label-text" style={lastLabelStyle}>{lastLabel.name}</span>
    </div>
  )

  const onStepEnter = ({ data }) => {
    setCurTagIndex(data);
  };

  return (
    <div className={`${props.class}`}>
      <div className="bar-chart section">
        <h1 className="title">{props.data.title}</h1>
        {tags}
        {
          props.labelsMode === 'gradient'
          ? gradientLabels
          : labels
        }
        <Chart curTag={curTag}/>
      </div>
      <div className="description">
          <Scrollama
           onStepEnter={onStepEnter}
           offset={0.8}>
            {props.data.tags.map((d, stepIndex) => (
            <Step data={stepIndex} key={stepIndex}>
              <div className="text-block"
                style={{
                  minHeight: "5rem",
                  border: props.data.tags[curTagIndex].texts === undefined ? "none" : "2px solid black",
                  opacity: curTagIndex === stepIndex ? 1 : 0,
                  backgroundColor: props.data.tags[curTagIndex].texts === undefined ? "transparent" : "#e0e0e0"
                }}
              >
                {props.data.tags[curTagIndex].texts}
              </div>
            </Step>
          ))}
          </Scrollama>
        </div>
    </div>
  )
}

export default BarChart
