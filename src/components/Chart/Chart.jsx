import React from "react";
import "./Chart.css";
import ChartBars from "./ChartBar";

const Charts = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBars
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Charts;
