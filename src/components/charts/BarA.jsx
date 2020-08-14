import React, { useEffect } from "react";
import * as d3 from "d3";

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
    height: 600,
    barHeight: 500,
    color: ["#FFB600", "#09D168", "#2B50D6", "#000"],
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
    .style('fill', (d, i) => color[i])

  // Add one dot in the legend for each name.
  var size = 20
  selection.selectAll("mydots")
    .data(_data)
    .enter().append("rect")
      .attr("x", (d,i) => { return i*(size+80)})
      .attr("y", - margin.top) // 100 is where the first dot appears. 25 is the distance between dots
      .attr("width", size)
      .attr("height", size)
      .style("fill", (d, i) => color[i])

  // Add one label in the legend for each name.
  selection.selectAll('.text-label')
    .data(_data)
    .enter().append('text')
    .attr('class', 'text-label')
    // .attr('text-anchor', 'middle')
    // .attr('x', d => xScale(d.cumulative) + (xScale(d.value) / 2))
    // .attr('y', (h / 2) + (halfBarHeight * 1.1) + 25)
    .attr("x", (d,i) => { return size*1.5 + i*(size+80)})
    .attr("y", size*.75- margin.top)
    .style('fill', (d, i) => color[i])
    .style('font-size', '14px')
    .text(d => d.label)
}

const Bar01 = (props) => {

  useEffect(() => {
    stackedBar('.graphic', props.data)
  })

  return(
    <div className="graphic"></div>
  )
}

export default Bar01;
