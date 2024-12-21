import {useState} from 'react';
import { RenderCards } from './RenderCard';
import { dashboardData } from '../../constants/sample-data/dashboard';

export const OrderDetails = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<keyof typeof dashboardData>("7Days");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPeriod(event.target.value as keyof typeof dashboardData);
  };

  return (
    <div id="order-details" className="w-full h-auto">
      <div className="flex justify-between items-center h-auto">
        <h2 className="text-4xl font-inter font-medium leading-9.5 tracking[-0.02em] "
    >
          At a glance
        </h2>
        <select
          className="border border-border1 bg-transparent outline-none rounded-md w-17 h-10 p-2 text-gray1"
          value={selectedPeriod}
          onChange={handleChange}
        >
          {Object.keys(dashboardData).map((period) => (
            <option
              key={period} 
              value={period} 
              >
              {period}
            </option>
          ))}
        </select>
      </div>
        <RenderCards selectedPeriod={selectedPeriod} />
    </div>
  )
}