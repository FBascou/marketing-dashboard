import React, { useRef, useEffect } from 'react';
import useResizeOberserver from '../../../hooks/useResizeObserver';
import { select, line, axisBottom, scaleLinear, axisRight } from 'd3';
import './MultiLineChart.css';

const MultiLineChart = ({ data, colorPrimary, colorSecondary }) => {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeOberserver(wrapperRef);
  const keys = Object.values(data).map((item) => item);
  const months = Object.keys(data).map((item) => item);
  const maxNumber = Math.max(...keys);

  useEffect(() => {
    const svg = select(svgRef.current);
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();
    const tickAmount = 4;
    // const tickValues = [0, 50, 100, 150, 200];

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

    // axes

    const xAxis = axisBottom(xScale)
      .ticks(keys.length)
      .tickFormat((index) => index + 1)
      .tickSize(0, 0, 0)
      .tickSizeOuter(0)
      .tickPadding(8)
      .tickFormat((d, i) => months[i]);
    svg
      .select('.x-axis-line')
      .style('transform', `translateY(${height}px)`)
      .call(xAxis);

    const yAxis = axisRight(yScale)
      .ticks(tickAmount)
      // .tickValues(tickValues)
      .tickFormat((d) => d)
      .tickSize(width, 0, 0)
      .tickSizeOuter(0)
      .tickPadding(-width - 20);
    svg
      .select('.y-axis-line')
      .style('transform', `translate(0, ${width})`)
      .call(yAxis);

    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale);

    svg.attr('width', width).attr('height', height);

    // add linear-gradient

    svg
      .append('linearGradient')
      .attr('id', 'line-gradient')
      .attr('gradientUnits', 'userSpaceOnUse')
      .attr('x1', 0)
      .attr('y1', yScale(0))
      .attr('x2', 0)
      .attr('y2', yScale(maxNumber))
      .selectAll('stop')
      .data([
        { offset: '0%', color: colorSecondary },
        { offset: '100%', color: colorPrimary },
      ])
      .enter()
      .append('stop')
      .attr('offset', (d) => d.offset)
      .attr('stop-color', (d) => d.color);

    // create line chart

    svg
      .selectAll('.line')
      .data([keys])
      .join('path')
      .attr('width', width)
      .attr('height', height)
      .attr('class', 'line')
      .attr('d', myLine)
      .attr('fill', 'none')
      .attr('stroke', 'url(#line-gradient)');

    // add points to line chart
    svg
      .selectAll('.points')
      .data(keys)
      .enter()
      .append('circle')
      .attr('class', 'points')
      .attr('fill', colorPrimary)
      .attr('stroke', 'none')
      .attr('cx', (d, i) => xScale(i))
      .attr('cy', (d, i) => yScale(keys[i]))
      .attr('r', 1.5);
  }, [dimensions, months, keys]);

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

export default MultiLineChart;
