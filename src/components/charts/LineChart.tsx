import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

interface LineChartProps {
  data: {
    month: string;
    balance: number;
  }[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const chartRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const svg = d3.select(chartRef.current);
    svg.selectAll("*").remove();

    const width = 400;
    const height = 200;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    svg.attr("viewBox", `0 0 ${width} ${height}`);

    const x = d3
      .scalePoint<string>()
      .domain(data.map((d) => d.month))
      .range([margin.left, width - margin.right]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.balance) || 0])
      .nice()
      .range([height - margin.bottom, margin.top]);

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    const line = d3
      .line<{ month: string; balance: number }>()
      .x((d) => x(d.month) || 0)
      .y((d) => y(d.balance));

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#3B82F6")
      .attr("stroke-width", 2)
      .attr("d", line);
  }, [data]);

  return (
    <div className="w-full overflow-x-auto">
      <svg ref={chartRef} />
    </div>
  );
};

export default LineChart;
