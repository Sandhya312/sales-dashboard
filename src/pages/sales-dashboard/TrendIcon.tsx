import { IncreaseIcon, DecreaseIcon } from "../../components/icons/Icons";

interface TrendIconProps {
  isIncreasing: boolean;
}
export const TrendIcon = ({ isIncreasing }: TrendIconProps) => {
  return isIncreasing ? <IncreaseIcon /> : <DecreaseIcon />;
};
