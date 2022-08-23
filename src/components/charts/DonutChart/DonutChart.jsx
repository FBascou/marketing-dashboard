import React, { useRef, useEffect } from 'react';
import useResizeOberserver from '../../../hooks/useResizeObserver';
import { select, scaleOrdinal, pie, arc } from 'd3';
import './DonutChart.css';

const DonutChart = ({ data }) => {
	const svgRef = useRef();
	const wrapperRef = useRef();
	const dimensions = useResizeOberserver(wrapperRef);

	useEffect(() => {
		const svg = select(svgRef.current);
		const { width, height } = dimensions || wrapperRef.current.getBoundingClientRect();
		const radius = Math.min(width, height) / 1.5;
		const donutWidth = 40;
		const colors = scaleOrdinal().range([
			'#FFB3FF',
			'#FF80FF',
			'#FF00FF',
			'#FF0080',
			'#EA27C2',
			'#EF4782',
			'#B300B3',
			'#8000FF',
			'#800080',
		]);

		svg.select('.donut-svg')
			.append('svg')
			.attr('width', width)
			.attr('height', height)
			.attr('preserveAspectRatio', 'xMinYMin')
			.attr('width', width)
			.attr('height', height)
			.append('g')
			.attr('viewBox', `0 0 ${width} ${width}`)
			.attr(
				'transform',
				`translate(${Math.min(width, height) / 2}, ${Math.min(width, height) / 2})`
			);

		const pieShape = pie()
			.value((d) => d.lastMonth)
			.sort(null);

		const arcShape = arc()
			.innerRadius(radius - donutWidth)
			.outerRadius(radius);

		svg.selectAll('path')
			.data(pieShape(data))
			.enter()
			.append('path')
			.attr('d', arcShape)
			.attr('fill', (d, i) => colors(d.data.name))
			.attr('transform', 'translate(0, 0)');

		const legendRectSize = 12;
		const legendSpacing = 10;
		const legend = svg
			.selectAll('.legend') //the legend and placement
			.data(colors.domain())
			.enter()
			.append('g')
			.attr('class', 'circle-legend')
			.attr('transform', (d, i) => {
				const height = legendRectSize + legendSpacing;
				const offset = (height * colors.domain().length) / 2;
				const horizontal = 12 * legendRectSize - 12;
				const vertical = i * height - offset;
				return 'translate(' + horizontal + ',' + vertical + ')';
			});
		legend
			.append('circle') //keys
			.style('fill', colors)
			.style('stroke', colors)
			.attr('cx', 0)
			.attr('cy', 0)
			.attr('r', '.5rem');
		legend
			.append('text') //labels
			.attr('x', legendRectSize + legendSpacing)
			.attr('y', legendRectSize - legendSpacing)
			.text((d) => d);
	}, [dimensions, data]);

	return (
		<div className='donut-container'>
			<div className='donut-wrapper' ref={wrapperRef}>
				<svg className='donut-svg' ref={svgRef}></svg>
			</div>
		</div>
	);
};

export default DonutChart;
