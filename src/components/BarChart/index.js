import React, { useState } from 'react'
import Graph from './Graph'

import './index.scss'

function Chart (props) {
  const { curTag } = props
  return (
    <div className="chart">
      {curTag.data.map((item, index) =>
        <div className="chart-item" key={index}>
          <div className="title">{item.title}</div>
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
    <div>
      {props.data.tags.map((tag, index) => 
        <span key={tag.name} onClick={() => setCurTagIndex(index)}>#{tag.name}</span>
      )}
    </div>
  )

  const labels = (
    <div>
      {curTag.labels.map((label, index) =>
        <span key={index}>{label.name}</span>
      )}
    </div>
  )

  return (
    <div className="bar-chart">
      <h1>{props.data.title}</h1>
      {tags}
      {labels}
      <Chart curTag={curTag}/>
    </div>
  )
}

export default BarChart