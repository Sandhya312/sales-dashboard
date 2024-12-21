import Bar from "./Bar";


export const BarChart: React.FC = () => {
  const data = {
    vsPastPeriod: {
      labels: ['This week', 'Last week'],
      datasets: {
        consultations: [20, 25],
        ordersClosed: [15, 18],
      },
    },
  };

  const categories = data.vsPastPeriod.labels;
  const datasets = [
    {
      name: 'Consultations',
      data: data.vsPastPeriod.datasets.consultations,
    },
    {
      name: 'Orders Closed',
      data: data.vsPastPeriod.datasets.ordersClosed,
    },
  ];
  return (<div className="h-auto border border-border1 rounded-2xl p-5 md:col-span-3">
    <div className="flex items-center gap-2 w-full">
      <img src="/assets/Network.svg" className="min-h-4" />
        <p className="uppercase text-gray1">VS PAST PERIOD</p>
      </div>
    <Bar dataCategory={categories} datasets={datasets} />
  </div>)
}