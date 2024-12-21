import { BarChart } from "../../../components/charts/barChart"
import { LineChart } from "../../../components/charts/lineChart"
import { Forcasts } from "../../../components/forcasts/Forcasts"


export const Insights: React.FC = () => {
  return (
    <div className="my-10">
      <h2 className="text-4xl font-inter font-medium leading-9.5 tracking[-0.02em] "
        >
              Insights
            </h2>
      <div className="w-full mt-5 grid  md:grid-cols-12 gap-5">
      <LineChart />
        <BarChart />
        <Forcasts />
      </div>
    </div>
  )
}
