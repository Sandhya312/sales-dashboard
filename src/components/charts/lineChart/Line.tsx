import React from "react";
import Chart from "react-apexcharts";

interface MixChartProps {
  labels: string[];
  datasets: {
    incoming: number[];
    answered: number[];
    expertsOnline: number[];
  };
}

const MixChart: React.FC<MixChartProps> = ({ labels, datasets }) => {
  const chartData = {
    options: {
      chart: {
        id: "consultations-mix-chart",
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: [5,4,4],
        curve: 'monotoneCubic',
        dashArray: [0, 8,]
      },
      xaxis: {
        categories: labels,
        title: {
          text: "Days of the Week",
        },
      },
      yaxis: [
        {
          title: {
            text: "Incoming & Answered",
          },
        },
        {
          opposite: true,
          title: {
            text: "Experts Online",
          },
        },
      ],
      plotOptions: {
        bar: {
          barSpacing: 5,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "bottom",
        horizontalAlign: "center",
        width: "100%",

      },
      colors: ["#FFF3C6", "#15B79F", "#8A94A6"],
    },
    series: [
      {
        name: "Incoming",
        type: "bar",
        data: datasets.incoming,
      },
      {
        name: "Answered",
        type: "line",
        data: datasets.answered,
      },
      {
        name: "Experts Online",
        type: "line",
        data: datasets.expertsOnline,
      },
    ],
  };

  return (
    <div className="w-full h-96 my-3">
      <Chart
        options={chartData.options as unknown as ApexCharts.ApexOptions}
        series={chartData.series}
        type="line"
        height="100%"
      />
    </div>
  );
};

export default MixChart;
