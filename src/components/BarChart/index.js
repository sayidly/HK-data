import React, { useState } from 'react'
import Graph from './Graph'

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

  return (
    <div className={`bar-chart section ${props.snap}`}>
      <h1 className="title">{props.data.title}</h1>
      {tags}
      {labels}
      <Chart curTag={curTag}/>
    </div>
  )
}

export default BarChart
