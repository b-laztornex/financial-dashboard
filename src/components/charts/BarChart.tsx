import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

interface BarChartProps {
  data: {
    day: string;
    deposit: number;
    withdrawal: number;
  }[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const chartRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const svg = d3.select(chartRef.current);
    svg.selectAll("*").remove();

    const width = 400;
    const height = 200;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    svg.attr("viewBox", `0 0 ${width} ${height}`);

    const x0 = d3
      .scaleBand()
      .domain(data.map((d) => d.day))
      .rangeRound([margin.left, width - margin.right])
      .padding(0.2);

    const x1 = d3
      .scaleBand()
      .domain(["deposit", "withdrawal"])
      .rangeRound([0, x0.bandwidth()])
      .padding(0.05);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => Math.max(d.deposit, d.withdrawal)) || 0])
      .nice()
      .range([height - margin.bottom, margin.top]);

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x0));

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    svg
      .append("g")
      .selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .attr("transform", (d) => `translate(${x0(d.day)},0)`)
      .selectAll("rect")
      .data((d) => [
        { key: "deposit", value: d.deposit },
        { key: "withdrawal", value: d.withdrawal },
      ])
      .enter()
      .append("rect")
      .attr("x", (d) => x1(d.key) || 0)
      .attr("y", (d) => y(d.value))
      .attr("width", x1.bandwidth())
      .attr("height", (d) => height - margin.bottom - y(d.value))
      .attr("fill", (d) => (d.key === "deposit" ? "#4F46E5" : "#F43F5E"));
  }, [data]);

  return (
    <div className="w-full overflow-x-auto">
      <svg ref={chartRef} />
    </div>
  );
};

export default BarChart;
