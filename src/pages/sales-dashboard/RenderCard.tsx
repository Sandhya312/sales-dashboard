import React from "react";
import {Card} from '../../components/Card'
import { dashboardData } from "../../constants/sample-data/dashboard";
import { iconMapping } from "../../types/sales-dashboard";

interface RenderCardProps {
  selectedPeriod: keyof typeof dashboardData;
}


export const RenderCards: React.FC<RenderCardProps> = ({ selectedPeriod }) => {
  const periodData = dashboardData[selectedPeriod];

  return (
       <div className="grid md:grid-cols-3 my-10 w-full h-auto  gap-y-5 gap-x-10">
      {Object.keys(periodData).map((key) => {
        const metric = periodData[key as keyof typeof periodData];
        console.log('key', key, )
        const IconComponent = iconMapping[key] || null;

        return (
          <Card
            key={key}
            keyName={key}
            value={metric.value}
            trend={metric.trend}
            trendType={metric.trendType}
            IconComponent={IconComponent}
          />
        );
      })}
    </div>
  );
};
