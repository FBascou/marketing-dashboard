import React, { useRef, useEffect } from 'react';
import useResizeOberserver from '../../../hooks/useResizeObserver';
import { select, line, axisBottom, scaleLinear, axisRight, curveCardinal } from 'd3';
import './LineChart.css';

const LineChart = ({ data, colorPrimary, colorSecondary }) => {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeOberserver(wrapperRef);
  const keys = Object.values(data).map((item) => item);
  const months = Object.keys(data);
  const maxNumber = Math.max(...keys);

  // button to switch between curved and lined graphs

  useEffect(() => {
    const svg = select(svgRef.current);
    const { width, height } = dimensions || wrapperRef.current.getBoundingClientRect();
    const tickAmount = 4;
    //set tick values proportionate to monthly values
    const tickValues = [0, 50, 100, 150, maxNumber];

    if (!dimensions) return;

    // scale
    const xScale = scaleLinear()
      .domain([0, keys.length - 1])
      .range([0, width]);

    const yScale = scaleLinear().domain([0, maxNumber]).range([height, 0]);
    const ticks = yScale.ticks(),
      lastTick = ticks[ticks.length - 1],
      newLastTick = lastTick + (ticks[1] - ticks[0]);

    if (lastTick < yScale.domain()[1]) {
      ticks.push(newLastTick);
    }
    yScale.domain([yScale.domain()[0], newLastTick]);

    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      // add curve
      .curve(curveCardinal);

    svg.attr('width', width).attr('height', height);

    // add linear-gradient
    // svg
    //   .append('linearGradient')
    //   .attr('id', 'line-gradient')
    //   .attr('gradientUnits', 'userSpaceOnUse')
    //   .attr('x1', 0)
    //   .attr('y1', yScale(0))
    //   .attr('x2', 0)
    //   .attr('y2', yScale(maxNumber))
    //   .selectAll('stop')
    //   .data([
    //     { offset: '0%', color: colorSecondary },
    //     { offset: '100%', color: colorPrimary },
    //   ])
    //   .enter()
    //   .append('stop')
    //   .attr('offset', (d) => d.offset)
    //   .attr('stop-color', (d) => d.color);

    // create line chart
    svg
      .selectAll('.line')
      .data([keys])
      .join('path')
      .attr('width', width)
      .attr('height', height)
      .attr('class', 'line')
      .attr('d', myLine)
      .transition()
      .attr('fill', 'none')
      .attr('stroke', colorPrimary);
    // .attr('stroke', 'url(#line-gradient)')

    // add points to line chart
    svg
      .selectAll('.points')
      .data(keys)
      .enter()
      .append('circle')
      .attr('class', 'points')
      .attr('fill', colorPrimary)
      .attr('stroke', 'none')
      .attr('cx', (d, index) => xScale(index))
      .attr('cy', (d, index) => yScale(keys[index]))
      .attr('r', 2) // circle size
      // .on('mouseenter', (event, value) => {
      //   const index = svg.selectAll('.points').nodes().indexOf(event.currentTarget);
      //   console.log(index);
      //   console.log(event.currentTarget);
      //   console.log(value);
      //   svg
      //     .selectAll('.points')
      //     .data([value])
      //     .attr('class', 'points')
      //     .attr('fill', '#27d8ea')
      //     .attr('x', xScale(index))
      //     .attr('y', yScale(value))
      //     // .transition()
      //     .attr('r', 5);
      // })
      .on('mouseenter', (event, value) => {
        const index = svg.selectAll('.points').nodes().indexOf(event.currentTarget);
        // svg
        //   .selectAll('.points')
        //   // .data([value])
        //   .attr('class', 'points')
        //   .attr('fill', '#27d8ea')
        //   .attr('x', xScale(index))
        //   .attr('y', yScale(value))
        //   // .transition()
        //   .attr('r', 5)
        svg
          .selectAll('.tooltip')
          .data([value])
          .join((enter) => enter.append('text'))
          .attr('class', 'tooltip')
          .text(value)
          .attr('x', xScale(index))
          .attr('text-anchor', 'middle')
          // .transition()
          .attr('y', yScale(value) - 12)
          .attr('opacity', 1);
      })
      .on('mouseleave', () => {
        svg.select('.points').attr('r', 2).attr('fill', colorPrimary);
        svg.select('.tooltip').remove();
      })
      .transition();

    // axes
    const xAxis = axisBottom(xScale)
      .ticks(months.length)
      .tickFormat((index) => index + 1)
      .tickSize(0, 0, 0)
      .tickSizeOuter(0)
      .tickPadding(8)
      .tickFormat((d, i) => months[i][0]); //[0] = First letter of the month
    // tickcolor to gray
    svg
      .select('.x-axis-line')
      .style('transform', `translateY(${height + 20}px)`)
      .call(xAxis);

    // add y axis ticks and values
    const yAxis = axisRight(yScale)
      .ticks(tickAmount)
      .tickValues(tickValues)
      .tickFormat((d) => d)
      .tickSize(width, 0, 0)
      .tickSizeOuter(0)
      .tickPadding(-width + 5);
    // svg.select('.y-axis-line').style('transform', `translate(0, ${width})`).call(yAxis)
  }, [months, keys, dimensions]);

  return (
    <div className="line-container">
      <div className="line-wrapper" ref={wrapperRef}>
        <svg className="line-svg" ref={svgRef}>
          <g className="x-axis-line" />
          <g className="y-axis-line" />
        </svg>
      </div>
    </div>
  );
};

export default LineChart;
