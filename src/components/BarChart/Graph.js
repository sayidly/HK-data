import React, { useState } from 'react'
import { format } from 'd3'

const formatPercent = format(".0%");

function Tooltip (props) {
  console.log(props)
  const style = {
    position: 'fixed',
    top: props.x + 10 + 'px',
    left: props.y + 10 + 'px',
    zIndex: 100
  }
  const tips = props.labels.map((label, index) => {
    const style = {
      color: label.color,
      opacity: props.curIndex === index ? 1 : 0.3
    }
    return (
      <div style={style}>
        <span className="name">{label.name}</span>
        <span className="value">{formatPercent(props.values[index])}</span>
      </div>
    )
  })
  return (
    <div className="tooltip" style={style}>
      {tips}
    </div>
  )
}

function Graph (props) {
  const { labels, values } = props
  const [curIndex, setCurIndex] = useState(0)
  const [toolTipTop, setToolTipTop] = useState(0)
  const [toolTipLeft, setToolTipLeft] = useState(0)
  const [isToolTipShow, toggleTooltip] = useState(false)

  const items = values.map((value, index) => {
    const style = {
      backgroundColor: labels[index].color,
      width: (value * 100) + '%'
    }
    function handleMouseMove (e) {
      setToolTipTop(e.clientY)
      setToolTipLeft(e.clientX)
      setCurIndex(index)
    }
    return (
      <div
        className="graph-item"
        key={index}
        style={style}
        onMouseMove={handleMouseMove}
        onMouseOver={() => {toggleTooltip(true)}}
        onMouseOut={() => {toggleTooltip(false)}}
      >
      </div>
    )
  }
  )
  return (
    <div className="graph">
      {items}
      {isToolTipShow &&
        <Tooltip
          x={toolTipTop}
          y={toolTipLeft}
          labels={labels}
          values={values}
          curIndex={curIndex}
        />
      }
    </div>
  )
}

export default Graph
