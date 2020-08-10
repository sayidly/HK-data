import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import './BarChartA.scss';

const sampleData = [
  { label: '香港人', value: 635 },
  { label: '混合身份', value: 635 },
  { label: '中國人', value: 635 },
  { label: '無答案', value: 635 }
]

function groupData (data, total) {
  const percent = d3.scaleLinear()
    .domain([0, total])
    .range([0, 100])

  let cumulative = 0
  const _data = data.map(d => {
    cumulative += d.value
    return {
      value: d.value,
      cumulative: cumulative - d.value,
      label: d.label,
      percent: percent(d.value)
    }
  }).filter(d => d.value > 0)
  return _data
}


function stackedBar (bind, data, config) {
  config = {
    f: d3.format('.1f'),
    margin: {top: 20, right: 0, bottom: 20, left: 0},
    width: 800,
    height: 200,
    barHeight: 100,
    color: '#C41F1F',
    ...config
  }
  const { f, margin, width, height, barHeight, color } = config
  const w = width - margin.left - margin.right
  const h = height - margin.top - margin.bottom
  const halfBarHeight = barHeight / 2

  const total = d3.sum(data, d => d.value)
  const _data = groupData(data, total)

  const xScale = d3.scaleLinear()
    .domain([0, total])
    .range([0, w])

  const selection = d3.select(bind)
    .append('svg')
    .attr('viewBox', '0 0 ' + width + ' ' + height)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  selection.selectAll('rect')
    .data(_data)
    .enter().append('rect')
    .attr('class', 'rect-stacked')
    .attr('x', (d, i) => xScale(d.cumulative)*0.97 + i * 5)
    .attr('y', h / 2 - halfBarHeight)
    .attr('height', barHeight)
    .attr('width', d => xScale(d.value)*0.97)
    .style('fill', (d, i) => color)

  selection.selectAll('.text-label')
    .data(_data)
    .enter().append('text')
    .attr('class', 'text-label')
    .attr('text-anchor', 'middle')
    .attr('x', d => xScale(d.cumulative) + (xScale(d.value) / 2))
    .attr('y', (h / 2) + (halfBarHeight * 1.1) + 25)
    .style('fill', (d, i) => '#fff')
    .style('font-size', '14px')
    .text(d => d.label)
}

const BarChartA = (props) => {
  const piechart = React.createRef();
  const button1 = React.createRef();
  const button2 = React.createRef();
  const linechart = React.createRef();

  useEffect(() => {
    stackedBar('.chart', sampleData)
  })

  return (
    <div className="chart section" id="chartA">
      <h2 className="chart__title">{props.title}</h2>
      {/* <div className="remark">{props.remark}</div> */}
    </div>
  )
}

export default BarChartA;