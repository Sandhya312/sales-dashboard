import { TrendIcon } from "../pages/sales-dashboard/TrendIcon";

interface CardProps {
  keyName: string;
  value: string | number;
  trend: string;
  trendType: string;
  IconComponent: React.FC | null;
}

export const Card: React.FC<CardProps> = ({ keyName, value, trend, trendType, IconComponent }) => {
  const isIncreasing = trendType === "increase";

  return (
    <div className="flex flex-col gap-2 justify-center items-start border h-[15rem] w-full border-border1 rounded-2xl p-5">
      <div className="flex gap-2 items-center text-gray1">
        {IconComponent && <IconComponent />}
        <p className="font-bold uppercase">{keyName}</p>
      </div>

      <h4 className="text-3xl ml-2">{value}</h4>

      <div className="flex gap-2 items-center text-gray1 h-max">
        <TrendIcon isIncreasing={isIncreasing} />
        <p>
          <span className={isIncreasing ? "text-success" : "text-danger"}>{trend}</span> {trendType}
        </p>
      </div>
    </div>
  );
};
