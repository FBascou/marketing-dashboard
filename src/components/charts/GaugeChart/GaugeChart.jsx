import React from 'react';
import { arc } from 'd3';
import { scaleLinear } from 'd3';
// import { format } from 'd3-format';
import './GaugeChart.css';

const GaugeChart = ({
  value,
  min,
  max,
  label,
  units,
  colorPrimary,
  colorSecondary,
}) => {
  const backgroundArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)
    .cornerRadius(1)();

  const percentScale = scaleLinear().domain([min, max]).range([0, 1]);
  const percent = percentScale(value);

  const angleScale = scaleLinear()
    .domain([0, 1])
    .range([-Math.PI / 2, Math.PI / 2])
    .clamp(true);

  const angle = angleScale(percent);

  const filledArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(angle)
    .cornerRadius(1)();

  const colorScale = scaleLinear()
    .domain([0, 1])
    .range([colorSecondary, colorPrimary]);

  const gradientSteps = colorScale.ticks(10).map((value) => colorScale(value));

  return (
    <div className="gauge-container">
      <svg
        className="gauge-svg"
        width="10rem"
        viewBox={[-1, -1, 2, 1].join(' ')}
      >
        <defs>
          <linearGradient
            id="gauge-gradient"
            gradientUnits="userSpaceOnUse"
            x1="-1"
            x2="1"
            y2="0"
          >
            {gradientSteps.map((item, index) => (
              <stop
                key={index}
                stopColor={item}
                offset={`${index / (gradientSteps.length - 1)}`}
              />
            ))}
          </linearGradient>
        </defs>
        <path d={backgroundArc} fill="#dbdbe7" />
        <path d={filledArc} fill="url(#gauge-gradient)" />
      </svg>

      {/* <div className="value-container">{format(',')(value)}</div> */}

      {!!label && <div className="label-container">{label.toFixed(2)}%</div>}

      {/* {!!units && <div className="units-container">{units}</div>} */}
    </div>
  );
};

export default GaugeChart;
