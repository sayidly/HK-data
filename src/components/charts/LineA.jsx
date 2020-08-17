import React, { useEffect } from "react";
import * as d3 from "d3";
import useResizeObserver from "./useResizeObserver";

function LineA({ data }){

    const svgRef = React.createRef();
    const wrapperRef = React.createRef();
    const dimensions = useResizeObserver(wrapperRef);

    // will be called initially, on data change and when dimensions change
    useEffect(() => {
        const margin = {
            top: 30,
            right: 20,
            bottom: 80,
            left: 80
        }   

        const svg = d3.select(svgRef.current);

        svg.selectAll("g").remove();
                        
        const g = svg.append("g")
                    .attr("transform", `translate(${margin.left}, ${margin.top})`);

        if (!dimensions) return;
        
        const  width = dimensions.width,
               height = dimensions.height * 0.98;

        svg.attr("height", height)
            .attr("width", width);
        
        const boundedWidth = width - margin.left - margin.right,
              boundedHeight = height - margin.top - margin.bottom;

       const xText = Object.keys(data[0])[0],
            yText = Object.keys(data[0])[1];

        const xScale = d3.scaleLinear()
            .domain([1, d3.max(data, d => d[`${xText}`])])
            .range([0, boundedWidth]);

        const yScale = d3.scaleLinear()
            .domain([1, 5])
            .range([boundedHeight, 0]);

        const xAxis = svg.append("g")
            .attr("class", "x-axis")
            .attr("transform", `translate(${margin.left}, ${boundedHeight + margin.top})`)
            .call(d3.axisBottom(xScale).ticks(5).tickSize(0, 0))
            .selectAll("text") 
                .attr("y", "22px")
                .attr("font-size", "16px");

        const yAxis = svg.append("g")
            .attr("class", "y-axis")
            .attr("transform", `translate(${margin.left}, ${margin.top})`)
            .call(d3.axisLeft(yScale).ticks(5).tickSize(0, 0))
            .selectAll("text") 
                .attr("x", "-10px")
                .attr("font-size", "16px");

        const xLabel = svg.append("g")
            .attr("class", "label x-label")
            .attr("transform", `translate(${margin.left + boundedWidth/2}, ${height})`)
                .append("text")
                    .text(xText)
                    .attr("text-anchor", "middle")
                    .attr("baseline-shift", "100%");
        
        const yLabel = svg.append("g")
        .attr("class", "label y-label")
            .append("text")

        const yTextToList = [...yText];

        yLabel.selectAll("tspan")
            .data(yTextToList)
            .enter()
            .append("tspan")
                .text(d => d)
                .attr("x", 0)
                .attr("dy", "1.2em");
        const tspanHeight = d3.selectAll("tspan").node().getBoundingClientRect().height * yTextToList.length;
        yLabel.attr("transform", `translate(${margin.left/2}, ${margin.top + boundedHeight/2 - tspanHeight / 2})`)

        const lineGenerator = d3.line()
            .x(d => xScale(+d[`${xText}`]))
            .y(d => yScale(+d[`${yText}`]));

        const line = g.append("path").datum(data)
            .attr("d", lineGenerator)
            .attr("fill", "none")
            .attr("stroke-width", 3);
                

    }, [data, dimensions])

    return(
        <div className="wrapper line-wrapper" ref={wrapperRef} >
            <svg ref={svgRef}></svg>
        </div>
    )

}

export default LineA;