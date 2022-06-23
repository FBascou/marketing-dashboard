import { useState, useEffect, useRef } from 'react';
import useResizeOberserver from '../../../hooks/useResizeObserver';
import {
  select,
  scaleBand,
  axisBottom,
  stack,
  max,
  scaleLinear,
  axisLeft,
  stackOrderAscending,
} from 'd3';
import './StackedChart.css';

const StackedChart = ({ data, legendKeys, colors }) => {
  const [keys, setKeys] = useState(legendKeys);
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeOberserver(wrapperRef);

  useEffect(() => {
    const svg = select(svgRef.current);
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    // stacks / layers
    const stackGenerator = stack().keys(keys).order(stackOrderAscending);
    const layers = stackGenerator(data);
    const extent = [
      0,
      max(layers, (layer) => max(layer, (sequence) => sequence[1])),
    ];

    // scales
    const xScale = scaleBand()
      .domain(data.map((d) => d.year))
      .range([0, width])
      .padding(0.5);

    const yScale = scaleLinear().domain(extent).range([height, 0]);
    const ticks = yScale.ticks(),
      lastTick = ticks[ticks.length - 1],
      newLastTick = lastTick + (ticks[1] - ticks[0]);
    if (lastTick < yScale.domain()[1]) {
      ticks.push(newLastTick);
    }
    yScale.domain([yScale.domain()[0], newLastTick]);

    // rendering
    svg
      .selectAll('.layer')
      .data(layers)
      .join('g')
      .attr('class', 'layer')
      .attr('fill', (layer) => colors[layer.key])
      .selectAll('rect')
      .data((layer) => layer)
      .join('rect')
      .attr('x', (sequence) => xScale(sequence.data.year))
      .attr('width', xScale.bandwidth())
      .attr('y', (sequence) => yScale(sequence[1]))
      .attr('height', (sequence) => yScale(sequence[0]) - yScale(sequence[1]));

    // axes

    const tickAmount = 4;
    // const tickValues = [];

    const xAxis = axisBottom(xScale)
      .tickSize(0, 0, 0)
      .tickSizeOuter(0)
      .tickPadding(8);

    svg
      .select('.x-axis')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis);

    const yAxis = axisLeft(yScale)
      .ticks(tickAmount)
      // .tickValues(tickValues)
      .tickFormat(function (d) {
        return d;
      })
      .tickSize(-width, 0, 0)
      .tickSizeOuter(0)
      .tickPadding(8);
    svg.select('.y-axis').call(yAxis);
  }, [colors, data, dimensions, keys]);

  return (
    <div className="stacked-container">
      <div className="stacked-wrapper" ref={wrapperRef}>
        <svg className="stacked-svg" ref={svgRef}>
          <g className="x-axis-stacked" />
          <g className="y-axis-stacked" />
        </svg>
      </div>
      <div className="fields">
        {legendKeys.map((key) => (
          <div key={key} className="field">
            <input
              className="key-select"
              id={key}
              type="checkbox"
              checked={keys.includes(key)}
              onChange={(e) => {
                if (e.target.checked) {
                  setKeys(Array.from(new Set([...keys, key])));
                } else {
                  setKeys(keys.filter((_key) => _key !== key));
                }
              }}
            />
            <label
              htmlFor={key}
              style={{ color: colors[key] }}
              className="key-select"
            >
              {key}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackedChart;
