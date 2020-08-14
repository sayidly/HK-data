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
            bottom: 50,
            left: 50
        }   

        const svg = d3.select(svgRef.current);

        svg.selectAll("g").remove();
                        
        const g = svg.append("g")
                    .attr("transform", `translate(${margin.left}, ${margin.top})`);

        if (!dimensions) return;
        
        const { width, height } = dimensions;
        
        const boundedWidth = width - margin.left - margin.right,
              boundedHeight = height - margin.top - margin.bottom;

        const xScale = d3.scaleLinear()
            .domain([1, 5])
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

        const lineGenerator = d3.line()
            .x(d => xScale(+d.x))
            .y(d => yScale(+d.y));

        const line = g.append("path").datum(data)
            .attr("d", lineGenerator)
            .attr("fill", "none");
                

    }, [data, dimensions])

    return(
        <div className="wrapper line-wrapper" ref={wrapperRef} >
            <svg ref={svgRef}></svg>
        </div>
    )

}

export default LineA;