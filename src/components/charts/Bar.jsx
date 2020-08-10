import React, { useEffect } from "react";
import * as d3 from "d3";
import useResizeObserver from "use-resize-observer";

function Bar({ data, barIndex }){

  console.log(data);
  console.log(data.length);

  const legendRef = React.createRef();
  const svgRef = React.createRef();
  const gRef = React.createRef();
  const wrapperRef = React.createRef();
  const dimensions = useResizeObserver(wrapperRef);

  // will be called initially, on data change and when dimensions change
  useEffect(() => {
      const margin = {
          top: 30,
          right: 20,
          bottom: 30,
          left: 20
      }

      const svg = d3.select(svgRef.current);
      const g = d3.select(gRef.current)
          .attr("transform", `translate(${margin.left}, ${margin.top})`);

      if (!dimensions) return;

      const { width, height } = dimensions;

      const boundedWidth = width - margin.left - margin.right,
            boundedHeight = height - margin.top - margin.bottom;

      const toolTip = d3.select(`#bar${barIndex}-tooltip`);

      let stackedData, subgroup, group;

      if (data.length){
          console.log("yesss");
          group = data.map(d => d[`${data.columns[0]}`]);
          subgroup = data.columns.slice(1);
          stackedData = d3.stack().keys(subgroup)(data);
      } else return;

      const yScale = d3.scaleBand()
          .domain(group)
          .range([0, boundedHeight])
          // .paddingOuter([0.2])
          .paddingInner([0.05]);

      const xScale = d3.scaleLinear()
          .domain([0, 1])
          .range([0, boundedWidth])

      const colorScale = d3.scaleOrdinal()
          .domain(group)
          .range(["#FFB600", "#09D168", "#2B50D6"])


      const handleMouseOut = (datum) => {
          toolTip
              .style("opacity", 0);
      }
      const handleMouseMove = (datum) => {
          const currentX = d3.event.x;
          const currentY = d3.event.y;

          toolTip
                  .style("opacity", 1)
                  .style("left", `${currentX}px`)
                  .style("top", `${currentY}px`);

      }
      const handleMouseOver = (datum, index) => {

          let description = `<span class=${subgroup[0]}>${subgroup[0]}: ${datum.data[subgroup[0]]}</span></br>`

              for (let i = 1; i < subgroup.length; i++) {
                  const newSpan = `<span class=${subgroup[i]}>${subgroup[i]}: ${datum.data[subgroup[i]]}</span></br>`
                  description = description + newSpan;
              }

              toolTip
                  .style("opacity", 1)
                  .html(description)
                  .selectAll("span")
                      .style("opacity", 0.5);

                  if (datum[0] == 0){
                      toolTip.select(`span.${subgroup[0]}`)
                          .style("opacity", 1);
                  } else if (datum[1] == 1){
                      toolTip.select(`span.${subgroup[2]}`)
                          .style("opacity", 1);
                  } else {
                      toolTip.select(`span.${subgroup[1]}`)
                          .style("opacity", 1);
                  }

      }

      let barGroup = g.selectAll(".barGroup").data(stackedData);

      barGroup
          .exit()
          .remove();

      const barGroupEnter = barGroup.enter()
          .append("g")
          .attr("class", "barGroup")
          .attr("fill", d => colorScale(d.key));

      barGroupEnter
              .selectAll("rect")
              .data(Array(stackedData.length))
              .enter()
              .append("rect");

      barGroup = barGroupEnter.merge(barGroup);

      barGroup.selectAll("rect")
          .data(d => d)
              .attr("y", d => yScale(d.data[`${data.columns[0]}`]))
              .attr("x", d => xScale(d[0]))
              .attr("height", yScale.bandwidth())
              .attr("width", d => xScale(d[1]) - xScale(d[0]))
              .on("mouseover", (d, i) => handleMouseOver(d, i))
              .on("mousemove", handleMouseMove)
              .on("mouseout", handleMouseOut);

      barGroup.selectAll("rect")
          .data(d => d)
          .exit()
          .attr("width", 0);

      const legendWrapper = d3.select(legendRef.current);

      let legend = legendWrapper.selectAll(".legend")
          .data(subgroup)
          .enter();

      const legendEnter = legend.append("div")
              .attr("class", "legend");

      legendEnter.append("div");
      legendEnter.append("p");

      legend = legendEnter.merge(legend);

      legend.select("p")
          .html(d => `${d}`)
          .style("color", colorScale);

      legend.select("div")
          .attr("class", "legend-square")
          .style("background-color", colorScale)

  }, [data, dimensions])

  return(
      <div className="wrapper bar-wrapper" ref={wrapperRef} >
          <div className="tool-tip bar-tooltip" id={`bar${barIndex}-tooltip`}></div>
          <div className="legend-wrapper" ref={legendRef}></div>
          <svg ref={svgRef}>
              <g ref={gRef}></g>
          </svg>
      </div>
  )

}

export default Bar;
