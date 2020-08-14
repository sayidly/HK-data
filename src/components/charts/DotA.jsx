import React, { useEffect } from "react";
import * as d3 from "d3";
import useResizeObserver from "./useResizeObserver";

function DotA({ data }){

    const svgRef = React.createRef();
    const wrapperRef = React.createRef();
    const dimensions = useResizeObserver(wrapperRef);

    // will be called initially, on data change and when dimensions change
    useEffect(() => {
        const margin = {
            top: 30,
            right: 20,
            bottom: 50,
            left: 30
        }

        const radius = 10;

        const svg = d3.select(svgRef.current);

        svg.selectAll("g").remove();
                        
        const g = svg.append("g")
                    .attr("transform", `translate(${margin.left}, ${margin.top})`);

        if (!dimensions) return;
        
        const { width, height } = dimensions;
        
        const boundedWidth = width - margin.left - margin.right,
              boundedHeight = height - margin.top - margin.bottom;

        const toolTip = d3.select(".dot-tooltip");

        const xScale = d3.scalePoint()
            .domain(data.map(d => d["身份"]))
            .range([0, boundedWidth])
            .padding(.1);

        const yScale = d3.scaleLinear()
            .domain([0, 0.7])
            .range([boundedHeight, 0]);

        const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
            .domain(data.map(d => d["類別"]));

        const xAxis = svg.append("g")
            .attr("class", "x-axis")
            .attr("transform", `translate(${margin.left}, ${boundedHeight + margin.top})`)
            .call(d3.axisBottom(xScale));

        const yAxis = svg.append("g")
            .attr("class", "y-axis")
            .attr("transform", `translate(${margin.left}, ${margin.top})`)
            .call(d3.axisLeft(yScale).ticks(7));

        const handleMouseOut = (datum) => {
            toolTip
                .style("opacity", 0);
        }
            
        const handleMouseOver = (datum) => {

            let description = `<span>${datum["類別"]}: ${datum.number}</span></br>`

            const currentX = d3.event.x;
            const currentY = d3.event.y;
                
            toolTip
                .style("opacity", 1)
                .html(description)
                .style("left", `${currentX}px`)
                .style("top", `${currentY}px`);           
            
        }

        const dot = g.selectAll(".dot").data(data);
        dot.enter()
            .append("circle")
            .attr("class", "dot")
            .attr("cx", d => xScale(d["身份"]))
            .attr("cy", d => yScale(d.number))
        .merge(dot)
            .attr("fill", d => colorScale(d["類別"]))
            .attr("r", radius)
            .on("mouseover", d => handleMouseOver(d))
            .on("mouseout", handleMouseOut)

        dot.exit().remove();
                

    }, [data, dimensions])

    return(
        <div className="wrapper dot-wrapper" ref={wrapperRef} >
            <div className="tool-tip dot-tooltip"></div>
            <svg ref={svgRef}></svg>
        </div>
    )

}

export default DotA;
