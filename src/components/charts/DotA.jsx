import React, { useEffect } from "react";
import * as d3 from "d3";
import useResizeObserver from "./useResizeObserver";

function DotA({ data }){

    const svgRef = React.createRef();
    const wrapperRef = React.createRef();
    const dimensions = useResizeObserver(wrapperRef);
    const legendRef = React.createRef();

    // will be called initially, on data change and when dimensions change
    useEffect(() => {
        
        const colorScale = d3.scaleOrdinal()
            .domain(data.map(d => d["民主意涵"]))
            .range(["#ED7054", "#1E663B", "#0071BC", "#333333"]);

        const legendWrapper = d3.select(legendRef.current);
        const legendGroup = [...new Set(data.map(d => d["民主意涵"]))]
        
        legendWrapper.selectAll(".legend").remove();

        const legend = legendWrapper.selectAll(".legend")
            .data(legendGroup)
            .enter()
            .append("div")
                .attr("class", "legend");

        legend.append("div");
        legend.append("p");

        legend.select("p")
            .html(d => `${d}`)
            .style("color", colorScale);

        legend.select("div")
            .attr("class", "legend-circle")
            .style("background-color", colorScale)

        let legendWrapperHeight;

        if (legendWrapper) {
            legendWrapperHeight = d3.select(".legend-wrapper").node().getBoundingClientRect().height;
            
        }

        const margin = {
            top: 30,
            right: 20,
            bottom: 50,
            left: 50
        }

        const radius = 10;

        const svg = d3.select(svgRef.current);

        svg.selectAll("g").remove();
                        
        const g = svg.append("g")
                    .attr("transform", `translate(${margin.left}, ${margin.top})`);

        if (!dimensions) return;
        
        const  width = dimensions.width,
               height = dimensions.height * 0.98 - legendWrapperHeight;

        svg.attr("height", height)
            .attr("width", width);
        
        const boundedWidth = width - margin.left - margin.right,
              boundedHeight = height - margin.top - margin.bottom;

        const toolTip = d3.select(".dot-tooltip");

        const xScale = d3.scalePoint()
            .domain(data.map(d => d["身份"]))
            .range([0, boundedWidth])
            .padding(.5);

        const yScale = d3.scaleLinear()
            .domain([0, 0.7])
            .range([boundedHeight, 0]);

        const formatPercent = d3.format(".0%");

        const xAxis = svg.append("g")
            .attr("class", "axis x-axis")
            .attr("transform", `translate(${margin.left}, ${boundedHeight + margin.top})`)
            .call(d3.axisBottom(xScale).tickSize(0, 0))
            .selectAll("text") 
                .attr("y", "22px")
                .attr("font-size", "16px");

        const yAxis = svg.append("g")
            .attr("class", "axis y-axis")
            .attr("transform", `translate(${margin.left}, ${margin.top})`)
            .call(d3.axisLeft(yScale).ticks(7).tickSize(0, 0).tickFormat(formatPercent))
            .selectAll("text") 
                .attr("x", "-10px")
                .attr("font-size", "16px");

        const yAxisRight = svg.append("g")
            .attr("class", "axis y-axis y-axis-right")
            .attr("transform", `translate(${margin.left + boundedWidth}, ${margin.top})`)
            .call(d3.axisRight(yScale).tickValues([]).tickSize(0, 0));

        const handleMouseOut = (datum) => {
            toolTip
                .style("opacity", 0)
                .html(" ");
        }
            
        const handleMouseOver = (datum) => {

            let description = `<span>${datum["民主意涵"]}: ${datum.number}</span></br>`
            // console.log(d3.select(this).attr("cx"))
            const currentX = d3.event.x;
            const currentY = d3.event.x;
                
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
            .attr("r", 0)
        .merge(dot)
            .attr("fill", d => colorScale(d["民主意涵"]))
            .attr("r", radius);
            
        dot.exit()
        .remove();

        d3.selectAll(".dot")
            .on("mouseover", d => handleMouseOver(d))
            .on("mouseout", handleMouseOut)        
                    
    }, [data, dimensions])

    return(
        <div className="wrapper dot-wrapper" ref={wrapperRef} >
            <div className="tool-tip dot-tooltip"></div>
            <div className="legend-wrapper" ref={legendRef}></div>
            <svg ref={svgRef}></svg>
        </div>
    )

}

export default DotA;
