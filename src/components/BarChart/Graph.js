import React, { useState } from 'react'

function Graph (props) {
  const { labels, values } = props

  const items = values.map((value, index) => {
    const style = {
      backgroundColor: labels[index].color,
      width: (value * 100) + '%'
    }
    return (
      <div
        className="graph-item" 
        key={index}
        style={style}
      >
      </div>
    )
  }
  )
  return (
    <div className="graph">{items}</div>
  )
}

export default Graph