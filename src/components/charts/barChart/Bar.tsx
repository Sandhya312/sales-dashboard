import React from 'react';
import Chart from 'react-apexcharts';

interface BarChartProps {
  dataCategory: string[];
  datasets: {
    name: string;
    data: number[];
  }[];
}

const Bar: React.FC<BarChartProps> = ({ dataCategory, datasets }) => {
  const chartData = {
    options: {
      chart: {
        id: 'multi-series-bar',
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: dataCategory,
        title: {
          text: '',
        },
      },
      yaxis: {
        title: {
          text: '',
        },
      },
        plotOptions: {
        bar:{
          barSpacing:5,
        }
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'right',
      },
      colors: ['#CCFBEF', '#134E48'],
    },
    series: datasets,
  };

  return (
  <div className='w-full h-96 my-3'>
    <Chart
      options={chartData.options as unknown as ApexCharts.ApexOptions}
      series={chartData.series}
      type="bar"
      height="100%"
    />
  </div>
  );
};

export default Bar;
