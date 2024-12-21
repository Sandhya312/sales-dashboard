import { ConsultationIcon } from "../../icons/Icons";
import MixChart from "./Line";


export const LineChart: React.FC = () => {
  const consultationsChart = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: {
      incoming: [10, 20, 15, 25, 30, 35, 40],
      answered: [8, 18, 12, 20, 28, 30, 38],
      expertsOnline: [25, 40, 22, 40, 35, 48, 27],
    },
  };

  return (<div className="h-auto border border-border1 rounded-2xl p-5 md:col-span-7">
    <div className="flex items-center  w-full">
      <ConsultationIcon />
        <p className="uppercase text-gray1">cosultations</p>
      </div>
  <MixChart 
    labels={consultationsChart.labels}
    datasets={consultationsChart.datasets}
  />  </div>)
}