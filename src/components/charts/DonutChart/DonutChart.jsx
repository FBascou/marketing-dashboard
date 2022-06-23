import React, { useRef, useEffect } from 'react';
import useResizeOberserver from '../../../hooks/useResizeObserver';
import { select, scaleOrdinal, pie, arc } from 'd3';
// import { arc } from 'd3-shape';
import './DonutChart.css';

const DonutChart = ({ data }) => {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeOberserver(wrapperRef);
  // console.log(data);

  useEffect(() => {
    const svg = select(svgRef.current);
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();
    const radius = Math.min(width, height) / 2;
    const donutWidth = 75;

    const color = scaleOrdinal().range([
      '#5A39AC',
      '#DD98D6',
      '#E7C820',
      '#08B2B2',
    ]);

    svg
      .select('.donut-svg')
      //   .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    const arcShape = arc()
      .innerRadius(radius - donutWidth)
      .outerRadius(radius);

    const pieShape = pie()
      .value(function (d) {
        return d.value;
      })
      .sort(null);

    const path = svg
      .selectAll('path')
      .data(pieShape(data))
      .enter()
      .append('path')
      .attr('d', arcShape)
      .attr('fill', function (d, i) {
        return color(d.data);
      })
      .attr('transform', 'translate(0, 0)');

    const legendRectSize = 13;
    const legendSpacing = 7;
    const legend = svg
      .selectAll('.legend') //the legend and placement
      .data(color.domain())
      .enter()
      .append('g')
      .attr('class', 'circle-legend')
      .attr('transform', function (d, i) {
        const height = legendRectSize + legendSpacing;
        const offset = (height * color.domain().length) / 2;
        const horz = -2 * legendRectSize - 13;
        const vert = i * height - offset;
        return 'translate(' + horz + ',' + vert + ')';
      });
    legend
      .append('circle') //keys
      .style('fill', color)
      .style('stroke', color)
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', '.5rem');
    legend
      .append('text') //labels
      .attr('x', legendRectSize + legendSpacing)
      .attr('y', legendRectSize - legendSpacing)
      .text(function (d) {
        return d;
      });
  }, [data]);

  return (
    <div className="donut-container">
      <div className="donut-wrapper" ref={wrapperRef}>
        <svg className="donut-svg" ref={svgRef}></svg>
      </div>
    </div>
  );
};

export default DonutChart;
