import React, { useState } from 'react'

function Test (props) {
  const items = props.items.map((item) =>
    <li>{item}</li>
  )
  return (
    <ul>{items}</ul>
  )
}

function BarChart (props) {
  const [curTagIndex, setCurTagIndex] = useState(0)

  const tags = (
    <div>
      {props.data.tags.map((tag, index) => 
        <span key={tag.name} onClick={() => setCurTagIndex(index)}>{tag.name}</span>
      )}
    </div>
  )

  const labels = (
    <div>
      {props.data.tags[curTagIndex].labels.map((label) =>
        <span>{label.name}</span>
      )}
    </div>
  )


  const chart = (
    <div>
      {props.data.tags[curTagIndex].data.map((item) =>
        <div>
          <div className="title">{item.title}</div>
          <Test items={item.values} />
        </div>
      )}
    </div>
  )

  return (
    <div>
      <h1>{props.data.title}</h1>
      {tags}
      {labels}
      {chart}
    </div>
  )
}

export default BarChart